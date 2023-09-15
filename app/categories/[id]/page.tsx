"use client";
import React, { useState } from "react";
import { ColumnIcon, FilterIcon, GridIcon } from "../../components/Icons";
import Card from "../../components/Card";
import { useParams } from "next/navigation";

const Category = () => {
 const [grid, setGrid] = useState(true);
 const { id } = useParams();
 return (
  <>
   <div className="flex justify-between items-center">
    <h1>Категорія {id}</h1>

    <div className="flex gap-3">
     <button className="p-3 bg-slate-200 rounded-xl flex gap-2">
      <FilterIcon />
     </button>

     <button
      onClick={() => setGrid(!grid)}
      className="sm:hidden bg-slate-200 p-3 rounded-xl active:bg-slate-300 transition-all"
     >
      {grid ? <GridIcon /> : <ColumnIcon />}
     </button>
    </div>
   </div>

   <section
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
   </section>
  </>
 )
}

export default Category