import { cn } from "@/shared/lib/utils"
import React from "react"

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({imageUrl, size, className}) => {
  return (
    <div className={cn('min-h-46 flex items-center justify-center flex-1 relative w-full overflow-hidden ', className)}>
      <img 
        src={imageUrl}
        alt="logo" 
        className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
          'w-75 h-75': size==20,
          'w-100 h-100': size==30,
          'w-125 h-125': size==40,
        },
        {
          'max-xl:w-25 max-xl:h-25': size==20,
          'max-xl:w-35 max-xl:h-35': size==30,
          'max-xl:w-45 max-xl:h-45': size==40,
        }
    )}
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed rounded-full border-gray-200 w-112.5 h-w-112.5" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted rounded-full border-gray-100 w-92.5 h-92.5" />
    </div>
  )
}
