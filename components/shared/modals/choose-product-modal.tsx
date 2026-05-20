'use client';

import { DialogContent, Dialog, DialogTitle} from '@/components/ui/dialog';
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../';
import { ProductWithRelation } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';

interface Props {
  product: ProductWithRelation;
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className={cn(className, "p-0 min-w-[80%]  bg-white overflow-hidden")}>
          <DialogTitle className="sr-only">
            {product.name}
          </DialogTitle>
          {
            isPizzaForm ? (
            <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>
            ) : (
              <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
            )
          }
        </DialogContent>
      </Dialog>
  )
}
