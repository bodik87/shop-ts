import React, { useState } from 'react'
import { motion } from "framer-motion";
import { DeleteIcon, SearchIcon } from '../../Icons';
import { cat_1 } from '@/app/data/categories/cat_1';
import { cat_2 } from '@/app/data/categories/cat_2';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
 search: boolean
 setSearch: (value: boolean) => void
}

const allProducts = [...cat_1.products, ...cat_2.products,]

const SearchMenu = ({ search, setSearch }: Props) => {
 const [searchQuery, setSearchQuery] = useState("");

 const filteredProducts =
  searchQuery === ""
   ? allProducts
   : allProducts.filter((product) =>
    product.title
     .toLowerCase()
     .replace(/\s+/g, "")
     .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
   );

 console.log(filteredProducts);


 return (
  <>
   {search && (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ type: "spring", stiffness: 260, damping: 20 }}
     onClick={() => setSearch(false)}
     className="fixed inset-0 w-full bg-black/50 z-20"
    >
     <div className="max-w-7xl mx-auto flex justify-center">
      <div onClick={(e) => e.stopPropagation()} className="mt-[86px] max-w-xs mx-3 w-full max-h-[500px] bg-white rounded-xl overflow-y-auto shadow-2xl z-30 p-3">

       <div className="max-w-xs w-full relative rounded-lg overflow-hidden border border-gray-300">
        <input
         type="text"
         placeholder="Пошук"
         autoFocus={true}
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         className="h-10 max-w-xs w-full pl-4 pr-20 bg-gray-50 rounded-lg outline-none block focus:bg-white"
        />
        <button disabled={!searchQuery} onClick={() => { searchQuery && setSearchQuery("") }} className="bg-slate-200 w-14 h-12 flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 transition-all hover:bg-slate-300 disabled:hover:bg-slate-200">
         {searchQuery ? <DeleteIcon /> : <SearchIcon />}
        </button>
       </div>

       {searchQuery && filteredProducts.map(product => (

        <Link key={product.id} href={`/products/${product.id}`} className="pt-3 flex gap-5" onClick={() => setSearch(false)}>
         <Image width={30} height={70} src={product.images[0]} alt={product.title} />

         <div>
          <h3>{product.title}</h3>
          <p>{product.price} грн</p>
         </div>
        </Link>
       ))}

      </div>
     </div>
    </motion.div>
   )}
  </>
 )
}

export default SearchMenu