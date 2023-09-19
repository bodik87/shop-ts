"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card from "../../components/Card";
import Grid from "@/app/components/Grid";
import { categories, products } from "@/app/data/categories";
import { iProduct } from "@/app/models/models";
import Sort from "@/app/components/Sort";
import Filter from "@/app/components/Filter";


const Category = () => {
  const { id } = useParams();
  const data: iProduct[] = products.filter(product => product.categoryId === id)
  const categoriyTitle = categories.filter(category => category.id === id)[0].title

  const [sortModal, setSortModal] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(data);

  const [filterModal, setFilterModal] = useState(false);



  useEffect(() => {
    if (sortModal || filterModal) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [sortModal, filterModal]);



  return (
    <>
      <div className="flex justify-between items-center z-10">
        <div className="flex gap-3">
          <Sort
            data={sortedProducts}
            sortModal={sortModal}
            setSortModal={setSortModal}
            setSortedProducts={setSortedProducts} />

          <Filter
            data={data}
            filterModal={filterModal}
            setFilterModal={setFilterModal}
            setSortedProducts={setSortedProducts} />
        </div>
      </div>

      <Grid gridTitle={categoriyTitle}>
        {sortedProducts.map((product) => <Card key={product.id} product={product} />)}
      </Grid >
    </>
  )
}

export default Category