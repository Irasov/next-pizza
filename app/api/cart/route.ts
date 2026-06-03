import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../prisma/prisma-client"; 
import crypto from 'crypto'; 
import { findOrCreateCart } from "@/shared/lib/find-or-create-cart";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";

export async function GET(req: NextRequest) {
  try {
    const userId = 1;
    const token = req.cookies.get('cartToken')?.value;
    if(!token) {
      return NextResponse.json({totalAmount: 0, items: []})
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token,
          },
        ],
      },
      include: {
        items: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingridients: true,
          },
        },
      },
    })
    return NextResponse.json(userCart);
  } catch(error) {
    console.error('[CART_GET] Server error', error);
    return NextResponse.json({ message: 'Ну удалось получить корзину' }, { status: 500 });
  }

}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;
    if(!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);
    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingridients: { every: {id: {in: data.ingridients}} },
      },
    });

    // Если товар был найден, делаем +1
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      //Если товар не найден 
      await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        quantity: 1,
        ingridients: { connect: data.ingridients?.map((id) => ({id})) },
      },
    });
    }



    const updatedUserCart = await updateCartTotalAmount(token);
    const resp = NextResponse.json(updatedUserCart);  
    resp.cookies.set('cartToken', token);
    return resp;

  } catch(error) {
    console.error('[CART_POST] Server error', error);
    return NextResponse.json({ message: 'Ну удалось создать корзину' }, { status: 500 });
  }
}