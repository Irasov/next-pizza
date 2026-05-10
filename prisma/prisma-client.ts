import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;

//

// import { PrismaClient } from "@prisma/client/extension";


// const prismaClientSingelton = () => {
//   return new PrismaClient({
//     datasourceUrl: process.env.DATABASE_URL,
//   });
// }

// declare global {
//   var prismaGlobal: undefined | ReturnType<typeof prismaClientSingelton>;
// }

// export const prisma = globalThis.prismaGlobal ?? prismaClientSingelton();


// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

//

// import { PrismaClient } from '@prisma/client' // ✅ правильный импорт

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined
// }

// export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma