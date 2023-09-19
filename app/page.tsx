"use client"
import Card from "./components/Card";
import { HomePageCarousel } from "./components/HomePageCarousel";
import Grid from "./components/Grid";

export default function Home() {


  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <HomePageCarousel />

      <Grid>
        {arr.map((el, i) => <Card key={i} id={i} />)}
      </Grid>

      <Grid>
        {arr.map((el, i) => <Card key={i} id={i} />)}
      </Grid>
    </>
  )
}
