'use client';

import { DialogContent, Dialog, DialogTitle} from '@/components/ui/dialog';
import { Product } from "@/src/generated/prisma/client";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm } from '../choose-pizza-form';

interface Props {
  product: Product;
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
  const router = useRouter();
  return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className={cn(className, "p-0 min-w-[80%]  bg-white overflow-hidden")}>
          <DialogTitle className="sr-only">
            {product.name}
          </DialogTitle>
          <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>
        </DialogContent>
      </Dialog>
  )
}
