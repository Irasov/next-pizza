import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./";
import { Button } from "../ui";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  loading?: boolean;
  items?: any[];
  price: number;
  onSubmit?: VoidFunction;

}

/**
 * 
 * Форма выбора продукта
 */

export const ChooseProductForm: React.FC<Props> = ({ className, name, loading, items, price, imageUrl, onSubmit }) => {

  return (
    <div className={cn("flex flex-1 max-xl:flex-col", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full ">
        <img 
          src={imageUrl} 
          alt={name} 
          className="relative left-2 top-2 transition-all z-10 duration-300 w-75 h-75 max-599:w-55 max-599:h-55"
        />
      </div>
      <div className="min-w-122.5 bg-[#F7F6F6] p-7 flex flex-col justify-center items-center max-599:min-w-35 max-599:p-2">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <Button loading={loading} onClick={() => onSubmit?.()} className="h-13.75 px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  )
}