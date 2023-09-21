"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { sort } from 'fast-sort';
import Card from "../../components/Card";
import Grid from "@/app/components/Grid";
import { cat_1 } from "@/app/data/categories/cat_1";
import { cat_2 } from "@/app/data/categories/cat_2";
import { categories } from "@/app/data/variables";
import { SortIcon } from "@/app/components/Icons";
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
  const [showSort, setShowSort] = useState(false);

  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  useEffect(() => {
    if (sortModal || filterModal) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [sortModal, filterModal]);

  const priceIncr = sortedProducts && sort(sortedProducts).asc(el => el.price);
  const priceDecr = sortedProducts && sort(sortedProducts).desc(el => el.price);

  return (
    <>
      <div className="flex gap-3 items-center z-10 h-6">
        <button onClick={() => setShowSort(!showSort)} className="border py-2 px-3 rounded-lg shadow-sm">
          <SortIcon />
        </button>

        {showSort && <>
          <button
            className="bg-slate-100 py-1 px-3 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => { priceIncr && setSortedProducts(priceIncr), setSortModal(false) }}>
            Від дешевих
          </button>

          <button
            className="bg-slate-100 py-1 px-3 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => { priceDecr && setSortedProducts(priceDecr), setSortModal(false) }}>
            Від дорогих
          </button>
        </>}
      </div>

      <Grid gridTitle={currentCategory?.title}>
        {sortedProducts?.map((product) => <Card key={product.id} product={product} />)}
      </Grid >
    </>
  )
};

export default Category