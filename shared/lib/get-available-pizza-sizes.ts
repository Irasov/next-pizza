import { ProductItem } from "@/src/generated/prisma/client";
import { PizzaType, pizzaSizes } from "../constants/pizza";
import { Variant } from "../components/shared/group-variants";

export const GetAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filtedPizzasByType = items.filter((item) => item.pizzaType == type);
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filtedPizzasByType.some((pizza) => Number(pizza.size) == Number(item.value))
  }))
}