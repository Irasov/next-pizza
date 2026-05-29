'use client';

import { DialogContent, Dialog, DialogTitle} from '@/shared/components/ui/dialog';
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../';
import { ProductWithRelation } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';

interface Props {
  product: ProductWithRelation;
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore(state => state.addCartItem)

  const onAddProduct = () => {
    addCartItem({
      productItemId: firstItem.id
    })
  }

  const onAddPizza = (productItemId: number, ingridients: number[]) => {
    addCartItem({
      productItemId,
      ingridients
    })
  }

  return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className={cn(className, "p-0 min-w-[80%] min-h-[500px] bg-white overflow-hidden")}>
          <DialogTitle className="sr-only">
            {product.name}
          </DialogTitle>
          {
            isPizzaForm ? (
            <ChoosePizzaForm 
              imageUrl={product.imageUrl}
              name={product.name} 
              ingredients={product.ingridient}
              items={product.items}
              onSubmit={onAddPizza}
            />
            ) : (
              <ChooseProductForm
               imageUrl={product.imageUrl} 
               name={product.name} 
               onSubmit={onAddProduct}
               price = {firstItem.price}
              />
            )
          }
        </DialogContent>
      </Dialog>
  )
}
