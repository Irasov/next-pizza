'use server';

import { prisma } from '@/prisma/prisma-client'
import { CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { OrederStatus } from '@/src/generated/prisma/client';

export async function createOrder(data: CheckoutFormValues) {
  console.log(data);

  const token = '123';
  await prisma.order.create({
    data: {
      token,
      totalAmount: 1500,
      staus: OrederStatus.PENDING,
      items: [],
      fullName: data.firstName + ' ' + data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      comment: data.comment,
    }
  });

  return 'https://nextjs.org/docs/app/getting-started/mutating-data';
}