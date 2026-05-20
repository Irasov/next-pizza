import { ChooseProductModal } from "@/shared/components/shared";
import prisma from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductModulePage({params}: Props) {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingridient: true,
      items: true,
    },
  })

  if(!product) {
    return notFound();
  }

  return <ChooseProductModal product={product}/>
}