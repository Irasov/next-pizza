import { cn } from "@/lib/utils";
import React from "react";
import { ProductImage, Title } from "./";
import { Button } from "../ui";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;

}

export const ChoosePizzaForm: React.FC<Props> = ({ className, name, items, imageUrl, ingredients, onClickAdd }) => {
  const textDetails  = '30 см, традиционное тесто';
  const totalPrice = 350;
  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} size={30} className=""/>
      <div className="w-122.5 bg-[#F7F6F6] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-13.75 px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}