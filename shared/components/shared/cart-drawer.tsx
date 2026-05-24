'use client';

import React from "react"
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { CartDrawerItem } from "./";
import { getCartItemDetails } from "@/shared/lib";
import { useCartStore } from "@/shared/store";
import { PizzaType, PizzaSize } from "@/shared/constants/pizza";

interface Props {
  className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => {

const totalAmount = useCartStore(state => state.totalAmount);
const fetchCartItems = useCartStore(state => state.fetchCartItems);
const items = useCartStore(state => state.items);
  
  React.useEffect(()=> {
    fetchCartItems();
  },[])

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-5 overflow-auto flex-1">
          {
            items.map((item)=> (
              <div className="mb-2" key={item.id}>
                <CartDrawerItem 
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={
                    item.pizzaSize && item.pizzaType 
                    ? getCartItemDetails(
                      item.ingredients, 
                      item.pizzaType as PizzaType, 
                      item.pizzaSize as PizzaSize,
                    )
                    : ''
                  }
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              </div>
            ))
          }
        </div>
        <SheetFooter className="bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{totalAmount}</span>
            </div>
            <Link href="/cart">
              <Button 
                type="submit"
                className="w-full h-12 text-base">
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
