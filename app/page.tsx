import { HomePageCarousel } from "./components/HomePageCarousel";

export default function Home() {
  return (
    <>
      <HomePageCarousel />

      <section className="mt-5">
        <h2>Популярні товари</h2>
      </section>

      <section className="mt-5">
        <h2>Переглянуті раніше</h2>
      </section>
    </>
  )
}
