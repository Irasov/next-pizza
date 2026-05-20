import {Ingridient, Product, ProductItem} from '../src/generated/prisma/client';

export type IProduct= Product & {items: ProductItem[]; ingredients: Ingridient[]};