"use client";
import React from "react";
import { FilterCheckbox, FilterChecboxProps } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  className?: string;
  onClickCheckBox?: (id: string) => void;
  selected?: Set<string>;
  defaultValue?: string[];
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  loading,
  onClickCheckBox,
  selected,
  name,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value)
  }

  if (loading) {
    return <div className={className}>
      <p className="mb-3 font-bold">{title}</p>
      {
        ...Array(limit).fill(0).map((_,i)=>(
          <Skeleton className=" h-6 mb-4 rounded-[8px]" key={i}/>
        ))
      }
      <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
    </div>
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit)

  return (
    <div className={className}>
      <p className="mb-3 font-bold">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
          />
        </div>
      )}

      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {list.map((item) => (
          <FilterCheckbox
            onCheckedChange={() => onClickCheckBox?.(item.value)}
            name={name}
            checked={selected?.has(item.value)}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-t-neutral-100" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-primary"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  )
}
