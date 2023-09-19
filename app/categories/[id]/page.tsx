"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../../components/Card";
import Grid from "@/app/components/Grid";
import { categories, products } from "@/app/data/categories";
import { iProduct } from "@/app/models/models";
import { FilterIcon, SortIcon } from "@/app/components/Icons";
import { sort } from 'fast-sort';


const Category = () => {
  const { id } = useParams();
  const [sortModal, setSortModal] = useState(false);
  const [sortFilter, setSortFilter] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);

  const priceIncr = sort(sortedProducts).asc(el => el.price);
  const priceDecr = sort(sortedProducts).desc(el => el.price);
  // const sortedByRating = sort(sortedProducts).asc(el => el.parametrs.rating);

  useEffect(() => {
    if (sortModal || sortFilter) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [sortModal, sortFilter]);

  const data: iProduct[] = sortedProducts.filter(product => product.categoryId === id)
  const categoriyTitle = categories.filter(category => category.id === id)[0].title

  return (
    <>
      <AnimatePresence initial={false}>
        {sortModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setSortModal(false)}
            className="fixed inset-0 bg-black/30 z-30">

            <div className="max-w-7xl mx-auto h-full flex justify-center items-center">
              <motion.div
                initial={{ scale: .95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={e => e.stopPropagation()}
                className="max-w-xs w-full overflow-y-auto scroll_categories bg-white rounded-lg">

                <h2 className='p-4'>Сортування</h2>

                <div className="mt-4 flex flex-col">
                  <button onClick={() => { setSortedProducts(priceIncr), setSortModal(false) }}>
                    від дешевих до дорогих
                  </button>
                  <button onClick={() => { setSortedProducts(priceDecr), setSortModal(false) }}>від дорогих до дешевих
                  </button>
                  <button onClick={() => { setSortedProducts(priceIncr), setSortModal(false) }}>за рейтингом
                  </button>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button onClick={() => setSortModal(true)} className="px-3 py-2 bg-slate-100 hover:bg-slate-200 transition-all rounded-lg flex items-center gap-2">
            <SortIcon />
            <div className="flex flex-col items-start leading-none">
              <span>Сортування</span>
              <span className="text-xs opacity-50">Параметр не обрано</span>
            </div>
          </button>

          <button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 transition-all rounded-lg flex items-center gap-2">
            <FilterIcon />
            <div className="flex flex-col items-start leading-none">
              <span>Фільтр</span>
              <span className="text-xs opacity-50">Фільтр</span>
            </div>
          </button>
        </div>
      </div>

      <Grid gridTitle={categoriyTitle}>
        {data.map((product) => <Card key={product.id} product={product} />)}
      </Grid >
    </>
  )
}

export default Category