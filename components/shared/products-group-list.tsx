"use client"

import { cn } from "@/lib/utils"
import { ProductCard, Title } from "./"
import React from "react"
import { useIntersection } from "react-use"
import { useCategoryStore } from "../../store/category"

interface Props {
  title: string
  items: any[]
  className?: string
  listClassName?: string
  categoryId: number
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
}
