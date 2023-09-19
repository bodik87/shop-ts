import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FilterIcon } from "@/app/components/Icons";
import { iProduct } from '../models/models';
import { parametrs } from '../data/parametrs';

type Props = {
  data: iProduct[],
  filterModal: boolean,
  setFilterModal: (value: boolean) => void,
  setSortedProducts: (value: iProduct[]) => void,
}

const Filter = ({ data, filterModal, setFilterModal, setSortedProducts }: Props) => {

  const filters = data.reduce((accumulator: any, item) => {
    const parametrs = item.parametrs;
    if (parametrs) {
      Object.entries(parametrs).forEach(([key, value]) => {
        accumulator[key] = Array.from(new Set([...(accumulator[key] || []), value]));
      });
    }
    return accumulator;
  }, {});

  const availableFilters = Object.keys(parametrs)
    .filter(parametr =>
      Object.keys(filters).includes(parametr))

  return (
    <>
      <AnimatePresence initial={false}>
        {filterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setFilterModal(false)}
            className="fixed inset-0 bg-black/30 z-30">

            <div className="max-w-7xl mx-auto flex h-full justify-end items-end pb-5 pr-2">
              <motion.div
                initial={{ scale: .95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={e => e.stopPropagation()}
                className="max-w-[250px] w-full overflow-y-auto scroll_categories bg-white rounded-lg">

                <h2 className='p-4 text-center bg-slate-100'>Фільтр</h2>
                <div className='p-4'>

                  {availableFilters.map((filter): any =>
                  (<div key={filter}>
                    <div className='flex gap-2 items-baseline'>
                      <p className='font-medium text-lg'>{parametrs[filter]}</p>
                      <span className='opacity-50'>{filters.brand.length}</span>
                    </div>

                    <div className='mt-2 mb-3 flex flex-col gap-2'>
                      {filters[filter].map((item: string) =>
                      (<div key={item} className='flex gap-2 items-center leading-none'>
                        <input type="checkbox" id={item} />
                        <label htmlFor={item}>{item}</label>
                      </div>
                      ))}
                    </div>
                  </div>)
                  )}

                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setFilterModal(true)} className="w-fit h-12 px-4 bg-white/50 border-2 border-gray-300/50 hover:bg-slate-200 transition-all rounded-lg flex items-center gap-2">
        <FilterIcon />
        <div className="flex flex-col items-start leading-none">
          <span>Фільтр</span>

        </div>
      </button>
    </>
  )
}

export default Filter