"use client";
import React from "react";
import { useParams } from "next/navigation";
import { FilterIcon } from "../../components/Icons";
import Card from "../../components/Card";
import Grid from "@/app/components/Grid";
import { products } from "@/app/data/categories";

const Category = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button className="p-3 bg-slate-200 rounded-lg flex gap-2">
            <span>Фільтрувати</span>
            <FilterIcon />
          </button>
        </div>
      </div>

      <Grid gridTitle={`Категорія ${id}`}>
        {products.map((product) => <Card key={product.id} product={product} />)}
      </Grid >
    </>
  )
}

export default Category