'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./";
import { FilterCheckbox, CheckboxFiltersGroup } from "./";
import { Input, RangeSlider } from "../ui";
import { useFilterIngredients } from "@/hoocks/useFilterIngredients";

interface Props {
  className?: string
}

export const Filtres: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useFilterIngredients();

  const items = ingredients.map(ingredient => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
      />
    </div>
  )
}
