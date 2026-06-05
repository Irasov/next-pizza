import { Container, Title, WhiteBlock } from "@/shared/components/shared";
import { Textarea } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";

export default function CheckoutPage() {
  return (
    <Container className="mt-16">
      <Title text="Оформление заказа"  className="font-extrabold mb-8 text-[36px]"/>
      <div className="flex gap-10">
        {/* Левая часть страницы*/}
        <div className="flex flex-col gap-18 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            123
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
          123456
        </div>
      </div>
    </Container>
  )
}