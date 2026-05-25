import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client"; 
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";

type Props = {
  params: Promise<{
    id: string;
  }>;
};


export async function PATCH(req: NextRequest, {params}: Props) {
  try {
    const { id } = await params;
    const data = (await req.json() as { quantity: number });
    const token = req.cookies.get('cartToken')?.value;

    if(!token) {
      return NextResponse.json({error: 'Cart token not found'});
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if(!cartItem) {
      return NextResponse.json({error: "Cart item not found"});
    }

    await prisma.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: data.quantity,
      }
    });


    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);

  } catch (error) {
    console.error('[CART_PATH] Server error', error);
    return NextResponse.json({message: 'Не удалось обновить корзину'}, {status: 500});
  }
  
}