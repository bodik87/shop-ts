import React from 'react'

type Props = {
  children: React.ReactNode,
  gridTitle: string
  // grid: boolean
  // setGrid: (value: boolean) => void
}

const Grid = ({ children, gridTitle }: Props) => {
  return (
    <section className="mt-10">
      <h2>{gridTitle}</h2>
      <div className={`mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5`}>
        {children}
      </div>
    </section>
  )
}

export default Grid