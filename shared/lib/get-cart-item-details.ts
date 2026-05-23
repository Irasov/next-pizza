import { Ingridient } from '@/src/generated/prisma/client';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';

export const getCartItemDetails = (
  ingredients: Ingridient[],
  pizzaType?: PizzaType,
  pizzaSize?: PizzaSize,
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};

