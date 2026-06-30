import { cn } from "@/shared/lib/utils"
import { CircleCheck } from "lucide-react";
import React from "react"

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({className, active, price, name, imageUrl, onClick}) => {
  return (
    <div 
      className={cn("flex items-center flex-col p-1 rounded-md w-32 cursor-pointer relative text-center shadow-md bg-white",
      {'border boreder-primary': active},
      className)}
      onClick={onClick}
    >
      {active && <CircleCheck className="absolute top-2 right-2 text-primary"/>}   
      <img src={imageUrl} alt={name} width={110} height={110} className="max-599:w-11 max-599:h-11"/>
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price}</span>
    </div>
  )
}
