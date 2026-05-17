'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./";
import { CheckboxFiltersGroup } from "./";
import { Input, RangeSlider } from "../ui";
import { useIngredients, useFilters, useQueryFilters  } from "@/hooks";

interface Props {
  className?: string
}

export const Filtres: React.FC<Props> = ({ className }) => {

  const {ingredients, loading} = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map(ingredient => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  }

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaType"
        className="mb-5"
        onClickCheckBox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
          items={[
            { text: 'Тонкое', value: '1' }, 
            { text: 'Традиционное', value: '2' },
          ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckBox={filters.setSizes}
        selected={filters.sizes}
          items={[
            { text: '20 см', value: '20' }, 
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' }
          ]}
      />  

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number" 
            min={100} 
            max={1000} 
            placeholder="1000" 
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}/>
        </div>
        <RangeSlider 
          min={0} 
          max={1000} 
          step={10} 
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]} 
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингридиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckBox={filters.setSelectedIngredients}
        selected = {filters.selectedIngredients}
      />

    </div>
  )
}
