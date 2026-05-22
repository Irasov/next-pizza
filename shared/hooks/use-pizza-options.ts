import React from "react";
import { Variant } from "../components/shared/group-variants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { GetAvailablePizzaSizes } from "../lib";
import { ProductItem } from "@/src/generated/prisma/client";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredients: Set<number>;
  avaibleSizes: Variant[];
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id:number) => void
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]));
  const avaibleSizes  = GetAvailablePizzaSizes(type, items);
  React.useEffect(()=> {
    const isAvaibleSize = avaibleSizes?.find((item) => Number(item.value) == size && !item.disabled);
    const availableSize = avaibleSizes?.find((item) => !item.disabled);

    if (!isAvaibleSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  },[type]);
  
  return {
    size,
    type,
    selectedIngredients,
    avaibleSizes,
    setSize,
    setType,
    addIngredient,
  }
}