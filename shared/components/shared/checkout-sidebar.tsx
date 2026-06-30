import React from 'react';

import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { Package, Percent, Truck, ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import { Skeleton } from '../ui';

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
  totalAmount:number;
  loading: boolean;
  className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({totalAmount , loading, className}) => {

  const vatPrice = (totalAmount * VAT) / 100;

  return (
    <WhiteBlock className="py-6 px-12 sticky top-4 max-599:px-2 max-599:py-2 max-599:static">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        { loading ? (
          <Skeleton className="h-11 w-48" />
        ) : (
          <span className="h-11 text-[34px] font-extralight">{totalAmount + vatPrice + DELIVERY_PRICE} ₽</span>
        )}   
      </div>
      <CheckoutItemDetails title={
        <div className="flex items-center">
          <Package  size={18} className="mr-2 text-gray-400"/>
          Стоимость корзины:
        </div>
        } 
        value={loading ? <Skeleton className='h-6 w-16 rounded-[6px]'/> : `${totalAmount} ₽`} 
      />
      <CheckoutItemDetails title={
        <div className="flex items-center">
          <Percent  size={18} className="mr-2 text-gray-400"/>
          Налоги:
        </div>
        } 
        value={loading ? <Skeleton className='h-6 w-16 rounded-[6px]'/> : `${vatPrice} ₽`} 
      />
      <CheckoutItemDetails title={
        <div className="flex items-center">
          <Truck  size={18} className="mr-2 text-gray-400"/>
          Доставка:
        </div>
        } 
        value={loading ? <Skeleton className='h-6 w-16 rounded-[6px]'/> : `${DELIVERY_PRICE} ₽`}
      />

      <Button loading={loading} type="submit" className="w-full h-14 rounded-2xl nt-6 text-base font-bole">
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  )
}