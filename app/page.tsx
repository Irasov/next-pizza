import {
  Container,
  Title,
  TopBar,
  Filtres,
  ProductsGroupList,
} from "@/components/shared"

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="mt-10 w-[250px]">
            <Filtres />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 4,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 6,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 7,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 8,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                  {
                    id: 9,
                    name: "Пепперони",
                    imageUrl: "https://i.postimg.cc/p5JgFRPm/pizza-1.png",
                    price: 1000,
                    items: [{ price: 1000 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
