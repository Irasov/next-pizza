'use client';

import { cn } from "@/shared/lib/utils";
import React from "react";
import { useCartStore } from "@/shared/store";
import { toast } from "react-hot-toast";
import { ProductWithRelation } from "@/@types/prisma";
import { ChoosePizzaForm } from "@/shared/components/shared/choose-pizza-form";
import { ChooseProductForm } from "@/shared/components/shared/choose-product-form";

interface Props {
  product: ProductWithRelation;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({product, onSubmit: _onSubmit}) => {
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore(state => state.addCartItem);
  const loading = useCartStore(state => state.loading);

  const onSubmit = async (productItemId?: number, ingridients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingridients,
      });

      toast.success(product.name  + " добавлена в корзину");
      _onSubmit?.();
    }catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(error);
    }
  }


  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingridient}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  );

}
