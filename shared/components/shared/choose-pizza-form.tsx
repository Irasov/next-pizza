import { cn } from "@/shared/lib/utils";
import React from "react";
import { PizzaImage, Title, GroupVariants, IngredientItem } from "./";
import { Button } from "../ui";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { Ingridient, ProductItem } from "@/src/generated/prisma/client";
import { GetPizzaDetails } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingridient[];
  items: ProductItem[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
}

/**
 * 
 * Форма выбора пиццы
 */

export const ChoosePizzaForm: React.FC<Props> = ({ className, name, items, imageUrl, ingredients, onSubmit }) => {

  const { size, type, selectedIngredients, avaibleSizes, currentItemId, setSize, setType, addIngredient} = usePizzaOptions(items);

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  }

  const {totalPrice, textDetails} = GetPizzaDetails(type, size, items, ingredients, selectedIngredients)

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size}/>
      <div className="w-[490px] bg-[#F7F6F6] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants 
            items={avaibleSizes} 
            value={String(size)} 
            onClick={value => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants 
            items={pizzaTypes} 
            value={String(type)} 
            onClick={value => setType(Number(value) as PizzaType)}
          />
          <div className="bg-gray-50 p-5 rounded-md h-[220px] overflow-auto srollbar mt-2">
            <div className="grid grid-cols-3 gap-3">
              {ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  name={ingredient.name}
                  price={ingredient.price}
                  imageUrl={ingredient.imageUrl}
                  onClick={() => addIngredient(ingredient.id)}
                  active={selectedIngredients.has(ingredient.id)} 
                />
              ))}
            </div>
          </div>
        </div>
        <Button className="h-13.75 px-10 text-base rounded-[18px] w-full mt-10" onClick={handleClickAdd}>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}