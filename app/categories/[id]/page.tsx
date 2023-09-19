"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { FilterIcon } from "../../components/Icons";
import Card from "../../components/Card";
import Grid from "@/app/components/Grid";

const Category = () => {
  const [grid, setGrid] = useState(true);
  const { id } = useParams();

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <div className="flex justify-between items-center">
        <h1>Категорія {id}</h1>

        <div className="flex gap-3">
          <button className="p-3 bg-slate-200 rounded-lg flex gap-2">
            <FilterIcon />
          </button>
        </div>
      </div>

      <Grid>
        {arr.map((el, i) => <Card key={i} id={i} />)}
      </Grid>
    </>
  )
}

export default Category