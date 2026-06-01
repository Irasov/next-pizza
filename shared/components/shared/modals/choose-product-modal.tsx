'use client';

import { DialogContent, Dialog, DialogTitle} from '@/shared/components/ui/dialog';
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../';
import { ProductWithRelation } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';
import { toast } from 'react-hot-toast';

interface Props {
  product: ProductWithRelation;
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore(state => state.addCartItem);
  const loading = useCartStore(state => state.loading);

  // const onAddProduct = () => {
  //   addCartItem({
  //     productItemId: firstItem.id
  //   })
  // }

  // const onAddPizza =  async (productItemId: number, ingridients: number[]) => {
  //     addCartItem({
  //       productItemId,
  //       ingridients
  //     });
  //   } 
  // }

  const onSubmit = async (productItemId?: number, ingridients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingridients,
      });

      toast.success(product.name  + " добавлена в корзину");
      router.back();
    }catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(error);
    }
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
              onSubmit={onSubmit}
              loading={loading}
            />
            ) : (
              <ChooseProductForm
               imageUrl={product.imageUrl} 
               name={product.name} 
               onSubmit={onSubmit}
               price = {firstItem.price}
               loading={loading}
              />
            )
          }
        </DialogContent>
      </Dialog>
  )
}
