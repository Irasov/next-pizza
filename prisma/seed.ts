import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

import { Prisma, PrismaClient } from "../src/generated/prisma/client";
import { hashSync } from "bcrypt";
import { categories, ingridients, products } from "./constants";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number
  pizzaType?: 1 | 2
  size?: 20 | 30 | 40
}) => {
  return {
    productId,
    price: randomNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemCreateManyInput
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "John Doe",
        email: "user1@mail.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Art Dev",
        email: "user2@mail.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@mail.com",
        password: hashSync("11111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingridient.createMany({
    data: ingridients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg",
      categoryId: 1,
      ingridient: {
        connect: ingridients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/0198bf40eb1171aabe90b1b3ce07c0c5.jpg",
      categoryId: 1,
      ingridient: {
        connect: ingridients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Масала",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019bcbc9b40370a4b47c6298dcac292a.jpg",
      categoryId: 1,
      ingridient: {
        connect: ingridients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: 1}),
      generateProductItem({ productId: 2}),
      generateProductItem({ productId: 3}),
      generateProductItem({ productId: 4}),
      generateProductItem({ productId: 5}),
      generateProductItem({ productId: 6}),
      generateProductItem({ productId: 7}),
      generateProductItem({ productId: 8}),
      generateProductItem({ productId: 9}),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '111111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '22222',
      },
    ]
  });

  await prisma.cartItem.create({
    data:{
        productItemId: 1,
        cartId: 1,
        quantity: 2,
        ingridients: {
          connect: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
        }
      }, 
  });
};

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingridient" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`
};

async function main() {
  try {
    await down()
    await up()
  } catch (e) {
    console.error(e)
  }
};

main()
  .then(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    await pool.end()
    process.exit(1)
  });
