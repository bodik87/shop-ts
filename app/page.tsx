"use client"
import { useState } from "react";
import Card from "./components/Card";
import { HomePageCarousel } from "./components/HomePageCarousel";
import { ColumnIcon, GridIcon } from "./components/Icons";
import Grid from "./components/Grid";

export default function Home() {
  const [grid, setGrid] = useState(true);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <HomePageCarousel />

      <button
        onClick={() => setGrid(!grid)}
        className="ml-auto flex gap-2 mt-4 sm:hidden bg-slate-200 px-3 py-2 rounded-lg active:bg-slate-300 transition-all"
      >
        {grid ? <ColumnIcon /> : <GridIcon />}
      </button>

      <Grid grid={grid}>
        {arr.map((el, i) => <Card key={i} id={i} />)}
      </Grid>

      <Grid grid={grid}>
        {arr.map((el, i) => <Card key={i} id={i} />)}
      </Grid>
    </>
  )
}
