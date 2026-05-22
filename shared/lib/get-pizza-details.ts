import { Ingridient, ProductItem } from "@/src/generated/prisma/client";
import { PizzaSize, PizzaType, mapPizzaType } from "../constants/pizza";
import { CalcTotalPizzaPrice } from "./calc-total-pizza-prices";

export const GetPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingridient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = CalcTotalPizzaPrice(
    size,
    type,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails  = `${size} см, ${mapPizzaType[type]} тесто`;

  return {totalPrice, textDetails}
}