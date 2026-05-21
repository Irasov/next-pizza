import { cn } from "@/shared/lib/utils";
import React from "react";
import { PizzaImage, Title, GroupVariants } from "./";
import { Button } from "../ui";
import { pizzaSizes, PizzaSize, PizzaType, pizzaTypes  } from "@/shared/constants/pizza";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({ className, name, items, imageUrl, ingredients, onClickAdd }) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

 
  const textDetails  = '30 см, традиционное тесто';
  const totalPrice = 350;

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size}/>
      <div className="w-[490px] bg-[#F7F6F6] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants 
            items={pizzaSizes} 
            value={String(size)} 
            onClick={value => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants 
            items={pizzaTypes} 
            value={String(type)} 
            onClick={value => setType(Number(value) as PizzaType)}
          />
          </div>
        <Button className="h-13.75 px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}