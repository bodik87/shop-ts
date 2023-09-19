"use client"
import { useState } from "react";
import Card from "./components/Card";
import { HomePageCarousel } from "./components/HomePageCarousel";
import { ColumnIcon, GridIcon } from "./components/Icons";

export default function Home() {
  const [grid, setGrid] = useState(true);
  return (
    <>
      <HomePageCarousel />

      <button
        onClick={() => setGrid(!grid)}
        className="ml-auto flex gap-2 mt-4 sm:hidden bg-slate-200 px-3 py-2 rounded-lg active:bg-slate-300 transition-all"
      >
        {grid ? <ColumnIcon /> : <GridIcon />}
      </button>

      <section className="mt-5">
        <h2>Популярні товари</h2>

        <div
          className={`mt-5 grid ${grid ? "grid-cols-2" : "grid-cols-1"
            } sm:grid-cols-2 md:grid-cols-3 gap-3`}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="mt-5">
        <h2>Переглянуті раніше</h2>

        <div
          className={`mt-5 grid ${grid ? "grid-cols-2" : "grid-cols-1"
            } sm:grid-cols-2 md:grid-cols-3 gap-3`}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}
