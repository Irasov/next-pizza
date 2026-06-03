'use client';

import { DialogContent, Dialog, DialogTitle} from '@/shared/components/ui/dialog';
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from 'next/navigation';
import { ProductWithRelation } from '@/@types/prisma';
import { ProductForm } from '../product-form';

interface Props {
  product: ProductWithRelation;
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
  const router = useRouter();

  return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className={cn(className, "p-0 min-w-[80%] min-h-[500px] bg-white overflow-hidden")}>
          <DialogTitle className="sr-only">
            {product.name}
          </DialogTitle>
          <ProductForm product={product} onSubmit={() => router.back()} />
        </DialogContent>
      </Dialog>
  )
}
