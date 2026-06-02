import {
  Container,
  Title,
  TopBar,
  Filtres,
  ProductsGroupList,
} from "@/shared/components/shared";
import {prisma} from '../../prisma/prisma-client';
import { Suspense } from "react"; 
import { findPizzas } from "@/shared/lib/find-pizzas";
import { GetSearchParams } from "@/shared/lib/find-pizzas";


export default async function Page({ searchParams }: { searchParams: Promise<GetSearchParams> }) {
  const params = await searchParams;
  const categories = await findPizzas(params);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category)=> category.products.length > 0)}/>
      <Container className="pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="mt-10 w-[250px]">
            <Suspense>
              <Filtres />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => 
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products} 
                    />
                  )
                )  
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
