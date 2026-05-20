import {Ingridient, Product, ProductItem} from '../src/generated/prisma/client';

export type ProductWithRelation = Product & {items: ProductItem[]; ingridient: Ingridient[]};