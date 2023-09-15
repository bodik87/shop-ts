import Link from "next/link";
import React from 'react'

const Promo = () => {
  return (
    <Link href="/promo" className="h-8 flex items-center bg-yellow-400">
      <div className="max-w-7xl w-full mx-auto flex justify-center items-center">
        <p>Акція</p>
      </div>
    </Link>
  )
}

export default Promo