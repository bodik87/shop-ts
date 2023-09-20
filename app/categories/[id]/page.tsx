"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card from "../../components/Card";
import Grid from "@/app/components/Grid";
import Sort from "@/app/components/Sort";
import { cat_1 } from "@/app/data/categories/cat_1";
import { cat_2 } from "@/app/data/categories/cat_2";
import { categories } from "@/app/data/categories/categories";
// import Filter from "@/app/components/Filter";


const Category = () => {
  const { id } = useParams();

  const getCurrentCategory = () => {
    switch (id) {
      case categories[0].id:
        return cat_1
      case categories[1].id:
        return cat_2
    }
  }

  const currentCategory = getCurrentCategory()
  const [sortedProducts, setSortedProducts] = useState(currentCategory?.products);

  const [sortModal, setSortModal] = useState(false);
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

          {/* <Filter
            data={data}
            filterModal={filterModal}
            setFilterModal={setFilterModal}
            setSortedProducts={setSortedProducts} /> */}
        </div>
      </div>

      <Grid gridTitle={currentCategory?.title}>
        {sortedProducts?.map((product) => <Card key={product.id} product={product} />)}
      </Grid >
    </>
  )
};

export default Category