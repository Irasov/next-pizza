import { Container, Title, Categories, SortPopup } from "@/components/shared";

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
        <Categories />
        <SortPopup />
      </Container>
    </>
  )
}
