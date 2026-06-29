import { cn } from "@/shared/lib/utils";
import React from "react";
import Link from "next/link";
import { Title } from "./";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Ingridient } from "../../../src/generated/prisma/client";

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingridient[]
  className?: string
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={cn("min-w-[252px]",className)}>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <img className="h-[215px] w-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mt-3 mb-1 font-bold" />
        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(", ")}
        </p>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

        <Button variant="secondary" className="text-base font-bold">
          <Plus size={20} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  )
}
