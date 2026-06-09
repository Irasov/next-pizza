'use client';

import { Container, Title, CheckoutSidebar } from "@/shared/components/shared";
import { useCart } from "@/shared/hooks";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm } from "@/shared/components/shared/checkout";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/constants/checkout-form-schema";


export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    }
  });
  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type == 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  }

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  }

  return (
    <Container className="mt-16">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Левая часть страницы*/}
            <div className="flex flex-col gap-18 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
              />

              <CheckoutPersonalForm />

              <CheckoutAddressForm />

            </div>
            {/* Правая часть страницы*/}
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}