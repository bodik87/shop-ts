"use client";
import Link from "next/link";
import React from 'react'
import { CartIcon, SearchIcon } from "./components/Icons";


const Header = () => {
  return (
    <header className="bg-slate-100 shadow-[0_3px_12px_rgb(0,0,0,0.15)]">
      <div className="max-w-7xl w-full py-4 px-4 sm:px-6 mx-auto flex justify-between items-center gap-4">
        <Link href="/">
          LOGO
        </Link>

        <div className="hidden sm:block max-w-xs w-full relative rounded-xl overflow-hidden border border-gray-300">
          <input
            type="text"
            placeholder="Пошук"
            className="h-12 max-w-xs w-full pl-4 pr-20 bg-gray-50 rounded-xl outline-none block focus:bg-white"
          />
          <button className="bg-slate-200 w-14 h-12 flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 transition-all hover:bg-slate-300">
            <SearchIcon />
          </button>
        </div>

        <div className="hidden md:flex flex-col gap-1 text-sm lg:text-base whitespace-nowrap">
          <a href="tel:+380660984114">{`+38(066) 098-41-14`}</a>
          <a href="tel:+380672785349">{`+38(067) 278-53-49`}</a>
        </div>

        <div className="relative">
          <Link
            href={`/cart`}
            className="bg-yellow-300 h-12 px-8 lg:px-5 rounded-xl flex justify-center items-center transition-all hover:bg-yellow-400"
          >
            <CartIcon />
            <div className="hidden lg:block font-medium">
              <p>Корзина</p>
            </div>
          </Link>

          <div className="bg-red-500 px-2 py-[1px] sm:py-1 rounded-l-xl rounded-tr-xl flex justify-center items-center absolute right-0 -top-3 sm:-top-5 text-white text-sm shadow-md">
            5923 <span className="text-xs ml-1">грн</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header