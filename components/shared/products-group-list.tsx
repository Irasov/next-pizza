import { cn } from "@/lib/utils";
import { ProductCard, Title } from "./";
import React from 'react';

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<React.PropsWithChildren<Props>> = ({ 
  title, 
  items, 
  className, 
  listClassName, 
  categoryId,
 }) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
       <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, index) => (
          <ProductCard 
            key={index}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
       </div>
    </div>
  )
};
