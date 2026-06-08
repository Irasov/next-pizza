import { Container, Title, WhiteBlock, CheckoutItemDetails, CheckoutItem } from "@/shared/components/shared";
import { Textarea } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button } from "@/shared/components/ui";

export default function CheckoutPage() {
  return (
    <Container className="mt-16">
      <Title text="Оформление заказа"  className="font-extrabold mb-8 text-[36px]"/>
      <div className="flex gap-10">
        {/* Левая часть страницы*/}
        <div className="flex flex-col gap-18 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              <CheckoutItem 
                id={1}
                imageUrl="https://media.dodostatic.net/image/r:292x292/019bcbc9b40370a4b47c6298dcac292a.jpg"
                details="Описание пиццы ее ингредиенты"
                name="Пицца"
                price={213}
                quantity={3}
              />
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
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extralight">3586 ₽</span>
            </div>
            <CheckoutItemDetails title={
              <div className="flex items-center">
                <Package  size={18} className="mr-2 text-gray-400"/>
                Стоимость товаров:
              </div>
              } 
              value="3000" 
            />
            <CheckoutItemDetails title={
              <div className="flex items-center">
                <Percent  size={18} className="mr-2 text-gray-400"/>
                Налоги:
              </div>
              } 
              value="286" 
            />
            <CheckoutItemDetails title={
              <div className="flex items-center">
                <Truck  size={18} className="mr-2 text-gray-400"/>
                Доставка:
              </div>
              } 
              value="300" 
            />

            <Button type="submit" className="w-full h-14 rounded-2xl nt-6 text-base font-bole">
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  )
}