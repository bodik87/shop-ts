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
        className="mt-4 sm:hidden bg-slate-200 p-3 rounded-xl active:bg-slate-300 transition-all"
      >
        {grid ? <GridIcon /> : <ColumnIcon />}
      </button>

      <section className="mt-5">
        <h2>Популярні товари</h2>

        <div
          className={`mt-5 grid ${grid ? "grid-cols-2" : "grid-cols-1"
            } sm:grid-cols-2 md:grid-cols-3 gap-5`}
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
            } sm:grid-cols-2 md:grid-cols-3 gap-5`}
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
