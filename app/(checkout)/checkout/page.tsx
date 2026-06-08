'use client';

import { Container, Title, WhiteBlock, CheckoutItem, CheckoutSidebar } from "@/shared/components/shared";
import { Textarea } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import { useCart } from "@/shared/hooks";
import { getCartItemDetails } from "@/shared/lib";
import { PizzaType, PizzaSize } from "@/shared/constants/pizza";

export default function CheckoutPage() {
   const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type == 'plus' ? quantity + 1: quantity - 1;
    updateItemQuantity(id, newQuantity);
  }

  return (
    <Container className="mt-16">
      <Title text="Оформление заказа"  className="font-extrabold mb-8 text-[36px]"/>
      <div className="flex gap-10">
        {/* Левая часть страницы*/}
        <div className="flex flex-col gap-18 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {
                items.map((item) => (
                  <CheckoutItem 
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={ 
                    getCartItemDetails(
                      item.ingredients, 
                      item.pizzaType as PizzaType, 
                      item.pizzaSize as PizzaSize,
                    )}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    disabled={item.disabled}
                    onClickCountButton = {(type) => onClickCountButton(item.id, item.quantity, type)}
                    onClickRemove={() => removeCartItem(item.id)}
                  />
                ))
              }
            </div>
          </WhiteBlock>
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" placeholder="Имя" className="text-base"/>
              <Input name="lastName" placeholder="Фамилия" className="text-base"/>
              <Input name="email" placeholder="Email" className="text-base"/>
              <Input name="phone" placeholder="Телефон" className="text-base"/>
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input name="street" placeholder="Улица" className="text-base"/>
              <Textarea 
                className="text-base"
                placeholder="Комментарий к заказу"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>
        {/* Правая часть страницы*/}
        <div className="w-[450px]">
            <CheckoutSidebar totalAmount={totalAmount}/>
        </div>
      </div>
    </Container>
  )
}