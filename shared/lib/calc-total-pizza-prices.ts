import { Ingridient, ProductItem } from "@/src/generated/prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Функця подсчета стоимости пиццы
 * 
 * @param size - размер пиццы
 * @param type  - тип теста
 * @param items - список вариантов
 * @param ingredients - список ингридиентов
 * @param selectedIngredients - выбранные ингредиенты
 * 
 * @returns number общая стоимость
 */

export const CalcTotalPizzaPrice = (
  size: PizzaSize,
  type: PizzaType,
  items: ProductItem[],
  ingredients: Ingridient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice = items.find((item) => item.pizzaType == type && item.size == size)?.price || 0;
  const totalIngredientPrice: number = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0); 

  return  pizzaPrice + totalIngredientPrice;
}