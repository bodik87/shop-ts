import React, { useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FilterIcon, SortIcon } from './Icons';
import { products } from '../data/categories';
import Link from 'next/link';
import { sortingBy } from '../data/parametrs';
import { sort } from 'fast-sort';
import { useSearchParams } from 'next/navigation';
import { iProduct } from '../models/models';

type Props = {
 data: iProduct[],
 sortData: React.Dispatch<React.SetStateAction<iProduct[]>>,
 id: string | string[],
 sortModal: boolean,
 setSortModal: (value: boolean) => void
}

const Sort = ({ data, sortData, id, sortModal, setSortModal }: Props) => {

 const sortedIncr = sort(data).asc(el => el.price);
 const sortedDecr = sort(data).desc(el => el.price);
 // const sortedByRating = sort(data).asc(roduct => roduct.parametrs.rating);
 const searchParams = useSearchParams()


 const sortProducts = () => {
  switch (searchParams.get("sortOrder")) {
   case sortingBy[0]:
    return sortData(sortedIncr)
   case sortingBy[1]:
    return sortData(sortedDecr)
   // case sortingBy[2]:
   //  return sort(products).asc(product => product.price)
  }
 }

 useEffect(() => {
  sortProducts()
 }, [])


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
      className="fixed inset-0 w-full bg-black/30 z-30">

      <motion.div
       initial={{ scale: .95, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       exit={{ scale: .95, opacity: 0 }}
       transition={{ type: "spring", stiffness: 260, damping: 20 }}
       className="max-w-7xl mx-auto h-full flex justify-center items-center">
       <div
        onClick={e => e.stopPropagation()}
        className="max-w-xs w-full overflow-y-auto scroll_categories bg-white rounded-lg">
        <h2 className='p-4'>Сортування</h2>

        <ul className="mt-4 flex flex-col">
         <Link href={`/categories/${id}/?sortOrder=${sortingBy[0]}`} onClick={() => setSortModal(false)}>від дешевих до дорогих</Link>
         <Link href={`/categories/${id}/?sortOrder=${sortingBy[1]}`} onClick={() => setSortModal(false)}>від дорогих до дешевих</Link>
         <Link href={`/categories/${id}/?sortOrder=${sortingBy[2]}`} onClick={() => setSortModal(false)}>за рейтингом</Link>
        </ul>
       </div>

      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>

   <div className="flex justify-between items-center">
    <div className="flex gap-3">
     <button onClick={() => setSortModal(true)} className="px-3 py-2 bg-slate-100 hover:bg-slate-200 transition-all rounded-lg flex items-center gap-2">
      <SortIcon />
      <div className="flex flex-col items-start leading-none">
       <span>Сортування</span>
       <span className="text-xs opacity-50">Сортування</span>
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
  </>
 )
}

export default Sort