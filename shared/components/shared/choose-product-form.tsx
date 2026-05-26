import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./";
import { Button } from "../ui";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  items?: any[];
  onSubmit?: VoidFunction;

}

/**
 * 
 * Форма выбора продукта
 */

export const ChooseProductForm: React.FC<Props> = ({ className, name, items, imageUrl, onSubmit }) => {
  const textDetails  = '30 см, традиционное тесто';
  const totalPrice = 350;
  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full ">
        <img 
          src={imageUrl} 
          alt={name} 
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[300px] h-[300px]"
        />
      </div>
      <div className="w-[490px] bg-[#F7F6F6] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <Button onClick={onSubmit} className="h-13.75 px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}