import React from 'react';

import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { Package, Percent, Truck, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
  totalAmount:number;
  className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({totalAmount ,className}) => {

  const vatPrice = (totalAmount * VAT) / 100;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className="text-[34px] font-extralight">{totalAmount + vatPrice + DELIVERY_PRICE} ₽</span>
      </div>
      <CheckoutItemDetails title={
        <div className="flex items-center">
          <Package  size={18} className="mr-2 text-gray-400"/>
          Стоимость корзины:
        </div>
        } 
        value={String(totalAmount)} 
      />
      <CheckoutItemDetails title={
        <div className="flex items-center">
          <Percent  size={18} className="mr-2 text-gray-400"/>
          Налоги:
        </div>
        } 
        value={String(vatPrice)} 
      />
      <CheckoutItemDetails title={
        <div className="flex items-center">
          <Truck  size={18} className="mr-2 text-gray-400"/>
          Доставка:
        </div>
        } 
        value={String(DELIVERY_PRICE)}
      />

      <Button type="submit" className="w-full h-14 rounded-2xl nt-6 text-base font-bole">
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  )
}