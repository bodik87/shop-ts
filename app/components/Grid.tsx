import React from 'react'

type Props = {
  children: React.ReactNode,
  gridTitle: string | undefined
  // grid: boolean
  // setGrid: (value: boolean) => void
}

const Grid = ({ children, gridTitle }: Props) => {
  return (
    <>
      <h2 className='mt-5'>{gridTitle}</h2>
      <article className={`mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5`}>
        {children}
      </article>
    </>
  )
}

export default Grid