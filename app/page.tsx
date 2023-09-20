"use client"
import Card from "./components/Card";
import { HomePageCarousel } from "./components/HomePageCarousel";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <>
      <HomePageCarousel />

      <Grid gridTitle="Популярні товари">
        {/* {products.map((product) => <Card key={product.id} product={product} />)} */}
      </Grid>

      <Grid gridTitle="Раніше переглянуті">
        {/* {products.map((product) => <Card key={product.id} product={product} />)} */}
      </Grid>
    </>
  )
}
