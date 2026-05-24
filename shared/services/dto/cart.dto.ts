import { Cart, CartItem, Ingridient, Product, ProductItem } from "@/src/generated/prisma/client";

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  ingridients: Ingridient[];
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}