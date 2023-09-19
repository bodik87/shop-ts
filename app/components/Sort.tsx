import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { sort } from 'fast-sort';
import { SortIcon } from "@/app/components/Icons";
import { iProduct } from '../models/models';

type Props = {
  data: iProduct[],
  sortModal: boolean,
  setSortModal: (value: boolean) => void,
  setSortedProducts: (value: iProduct[]) => void,
}

const Sort = ({ data,
  sortModal, setSortModal, setSortedProducts }: Props) => {
  const priceIncr = sort(data).asc(el => el.price);
  const priceDecr = sort(data).desc(el => el.price);
  // const sortedByRating = sort(sortedProducts).asc(el => el.parametrs.rating);

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

            <div className="max-w-7xl mx-auto flex h-full justify-end items-end pb-5 pr-2">
              <motion.div
                initial={{ scale: .95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={e => e.stopPropagation()}
                className="overflow-y-auto scroll_categories bg-white rounded-lg">

                <h2 className='p-4 text-center bg-slate-100'>Сортування</h2>

                <div className="flex flex-col">
                  <button className="px-8 py-3 hover:bg-gray-100 transition-all" onClick={() => { setSortedProducts(priceIncr), setSortModal(false) }}>
                    від дешевих до дорогих
                  </button>
                  <button className="px-8 py-3 hover:bg-gray-100 transition-all" onClick={() => { setSortedProducts(priceDecr), setSortModal(false) }}>від дорогих до дешевих
                  </button>
                  <button className="px-8 py-3 hover:bg-gray-100 transition-all" onClick={() => { setSortedProducts(priceIncr), setSortModal(false) }}>за рейтингом
                  </button>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setSortModal(true)} className="w-fit h-12 px-4 bg-white/50 border-2 border-gray-300/50 hover:bg-slate-200 transition-all rounded-lg flex items-center gap-2">
        <SortIcon />
        <div className="flex flex-col items-start leading-none">
          <span>Сортування</span>
          <span className="text-xs opacity-50">Параметр не обрано</span>
        </div>
      </button>

    </>
  )
}

export default Sort