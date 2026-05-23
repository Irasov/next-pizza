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

interface Props {
  className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-5 overflow-auto flex-1">
          <div className="mb-2">
            <CartDrawerItem 
              id={1}
              imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg"
              details={getCartItemDetails([{name: "сыр"}, {name: "ципленок"}], 1, 30)}
              name={'Сырная'}
              price={419}
              quantity={1}
            />
          </div>
          <div className="mb-2">
            <CartDrawerItem 
              id={1}
              imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg"
              details={getCartItemDetails([{name: "сыр"}, {name: "ципленок"}], 1, 30)}
              name={'Сырная'}
              price={419}
              quantity={1}
            />
          </div>
        </div>
        <SheetFooter className="bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">500 ₽</span>
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
