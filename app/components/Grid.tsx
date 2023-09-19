import React from 'react'

type Props = {
 children: React.ReactNode,
 grid: boolean
}

const Grid = ({ children, grid }: Props) => {
 return (
  <section className="mt-10">
   <h2>Популярні товари</h2>

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