"use client"

import { cn } from "@/shared/lib/utils";
import { ProductCard, Title } from "./";
import React from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "../../store/category";
import { ProductWithRelation } from "../../../@types/prisma";

interface Props {
  title: string;
  items: ProductWithRelation[];
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
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef<HTMLDivElement>(null)
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    }
  )

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-12.5 max-xl:grid-cols-2 max-935:grid-cols-1", listClassName)}>
        {items.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
            ingredients={product.ingridient}
          />
        ))}
      </div>
    </div>
  )
}
