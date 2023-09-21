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
            <div
              onClick={(e) => e.stopPropagation()}
              className="p-2 mt-[80px] max-w-xs mx-3 w-full bg-white rounded-xl shadow-2xl z-30">
              <div className="max-w-xs w-full relative rounded-lg overflow-hidden border border-gray-300 shadow-md z-10">
                <input
                  type="text"
                  placeholder="Введіть назву товару"
                  autoFocus={true}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 max-w-xs w-full pl-4 pr-20 bg-gray-50 rounded-lg outline-none block focus:bg-white"
                />
                <button
                  disabled={!searchQuery}
                  onClick={() => { searchQuery && setSearchQuery("") }}
                  className={`${searchQuery ? " border-slate-300 hover:bg-slate-100" : "border-transparent"} border-l w-12 h-12 flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 transition-all `}>
                  {searchQuery ? <DeleteIcon /> : <SearchIcon />}
                </button>
              </div>

              {searchQuery &&
                <div className="max-w-xs w-full relative rounded-lg overflow-y-auto max-h-[300px] scroll_filters">
                  {filteredProducts.map(product => (

                    <Link
                      key={product.id}
                      href={{
                        pathname: `/products/${product.id}`,
                        query: { product: JSON.stringify(product) }
                      }}
                      className="first:mt-3 px-3 py-2 rounded-lg flex gap-5 odd:bg-gray-50" onClick={() => setSearch(false)}>
                      <Image
                        width={30}
                        height={70}
                        src={product.images[0]}
                        alt={product.title}
                        style={{ width: 'auto', height: 'auto' }} />
                      <div>
                        <h3>{product.title}</h3>
                        <p>{product.price} грн</p>
                      </div>
                    </Link>
                  ))}
                </div>
              }
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default SearchMenu