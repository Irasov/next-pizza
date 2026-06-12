'use server';

import React from 'react';
import { PayOrderTemplate } from '@/shared/components/shared/email-templates/pay-order';
import { prisma } from '@/prisma/prisma-client'
import { CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { sendEmail } from '@/shared/lib';
import { OrederStatus } from '@/src/generated/prisma/client';
import { cookies } from 'next/headers';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = await cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if(!cartToken) {
      throw new Error('Cart token not dound');
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingridients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    /* Если корзина не найдена возращаем ошибку */
    if (!userCart) {
      throw new Error('Cart not found');
    }

    /* Если корзина пустая возращаем ошибку */
    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }

    /* Создаем заказ */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        staus: OrederStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    /* Очищаем корзину */
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    //TODO: Сделать создание ссылки оплаты


    await sendEmail(
      data.email,
      `Next Pizza / Оплатите заказ №${order.id}`,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: "https://yandex.kz/"
      })
    )

    return  "https://yandex.kz/"
  }catch(err) {
    console.error('[CreateOreder] Server error', err);
  }
}