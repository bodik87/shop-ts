"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { CartIcon, SearchIcon } from "../Icons";
import { useCartStore } from "@/app/store/cart";
import { iProduct } from "@/app/models/models";
import SearchMenu from "./Navbar/SearchMenu";

const Panel = () => {
  const [search, setSearch] = useState(false);
  const [totals, setTotals] = useState(0)
  const cartStore = useCartStore();
  const totalPrice = (cart: iProduct[]) => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const total = totalPrice(cartStore.cart);

  useEffect(() => {
    setTotals(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartStore]);

  return (
    <>
      <SearchMenu search={search} setSearch={setSearch} />

      <header className="bg-slate-100 shadow-[0_3px_12px_rgb(0,0,0,0.15)]">
        <div className="max-w-7xl w-full h-14 px-4 sm:px-6 mx-auto flex justify-between items-center gap-4">
          <Link href="/" className="font-bold">
            МАГАЗИН
          </Link>

          <div onClick={() => setSearch(true)} className={`hidden md:block max-w-xs w-full relative rounded-lg overflow-hidden border border-gray-300 transition-all ${search && "opacity-0"}`}>
            <input
              type="text"
              placeholder="Пошук"
              className="h-10 max-w-xs w-full pl-4 pr-20 bg-gray-50 rounded-lg outline-none block"
            />
            <button className="bg-slate-200 w-14 h-12 flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 transition-all hover:bg-slate-300">
              <SearchIcon />
            </button>
          </div>

          <div className="flex gap-10">
            <div className="hidden md:flex flex-col gap-1.5 text-sm whitespace-nowrap">
              <a href="tel:+380660984114">{`+38(066) 098-41-14`}</a>
              <a href="tel:+380672785349">{`+38(067) 278-53-49`}</a>
            </div>

            <div className="relative">
              <Link
                href={`/cart`}
                className="bg-slate-50 border border-gray-300 h-11 px-5 rounded-lg flex justify-center items-center gap-2 transition-all shadow-sm hover:bg-white active:bg-slate-100"
              >
                <CartIcon />
                <p className="hidden lg:block font-medium">Корзина</p>
              </Link>

              {totals > 0 && <div className="bg-red-500 px-2 rounded-l-xl rounded-tr-xl flex justify-center items-center absolute right-0 -top-3 text-white text-[12px] shadow-md">
                {totals}<span className="text-[10px] ml-1">грн</span>
              </div>}

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Panel