"use client"
import React, { useState } from 'react'
import { ColumnIcon, GridIcon } from './Icons'

type Props = {
  children: React.ReactNode,
  // grid: boolean
  // setGrid: (value: boolean) => void
}

const Grid = ({ children }: Props) => {
  const [grid, setGrid] = useState(true);
  return (
    <section className="mt-10">
      <div className='flex justify-between items-center gap-3'>
        <h2>Популярні товари</h2>

        <button
          onClick={() => setGrid(!grid)}
          className="ml-auto flex gap-2 sm:hidden bg-gray-50 px-3 py-2 rounded-lg active:bg-gray-100 transition-all"
        >
          {grid ? <ColumnIcon /> : <GridIcon />}
        </button>
      </div>

      <div
        className={`mt-5 grid ${grid ? "grid-cols-2" : "grid-cols-1"
          } sm:grid-cols-2 md:grid-cols-3 gap-3`}
      >
        {children}
      </div>
    </section>
  )
}

export default Grid