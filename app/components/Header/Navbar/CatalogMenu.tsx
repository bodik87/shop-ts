import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { categories } from '@/app/data/variables';
import { useUIStore } from '@/app/store/ui';

type Props = {
 catalog: boolean
 setCatalog: (value: boolean) => void
}

const CatalogMenu = ({ catalog, setCatalog }: Props) => {
 const uiStore = useUIStore();
 return (
  <>
   {catalog && (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ type: "spring", stiffness: 260, damping: 20 }}
     onClick={() => {
      uiStore.closed(),
       setCatalog(false)
     }}
     className="fixed inset-0 w-full bg-black/30 z-20"
    >
     <div className="max-w-7xl mx-auto">
      <div className="mt-[86px] ml-1 md:ml-5 max-w-[260px] w-full max-h-[500px] bg-white rounded-lg overflow-hidden shadow-2xl z-30 p-1.5">
       <div className="flex flex-col max-h-[500px] overflow-y-auto scroll_categories">
        {categories.map((category) => (
         <Link
          key={category.id}

          href={`/categories/${category.id}`}
          className="py-4 px-4 text-left transition-all hover:bg-slate-200 rounded-md"
          onClick={() => {
           uiStore.closed(),
            setCatalog(false)
          }}
         >
          {category.title}
         </Link>
        ))}
       </div>
      </div>
     </div>
    </motion.div>
   )}
  </>
 )
}

export default CatalogMenu