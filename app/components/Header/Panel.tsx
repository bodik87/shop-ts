"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { CartIcon, CatalogIcon, ChevronIcon, SearchIcon } from "../Icons";
import { useCartStore } from "@/app/store/cart";
import { iProduct } from "@/app/models/models";
import SearchMenu from "./Navbar/SearchMenu";
import CatalogMenu from "./Navbar/CatalogMenu";

const Panel = () => {
  const [catalog, setCatalog] = useState(false);
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

  useEffect(() => {
    if (catalog || search) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [catalog, search]);

  return (
    <>
      <CatalogMenu catalog={catalog} setCatalog={setCatalog} />
      <SearchMenu search={search} setSearch={setSearch} />

      <div className="bg-slate-100 shadow-[0_3px_12px_rgb(0,0,0,0.15)]">
        <div className="max-w-7xl w-full h-14 px-2 sm:px-6 mx-auto flex justify-between items-center gap-4">
          <div className="flex gap-2 sm:gap-4">
            <button className="panelBtn" onClick={() => { setCatalog(!catalog) }}
            >
              <CatalogIcon />
              <span className="font-medium text-lg">Каталог</span>
              <ChevronIcon />
            </button>

            <button className={`panelBtn ${search && "opacity-0"}`} onClick={() => setSearch(true)}>
              <SearchIcon />
              <span className="hidden lg:block font-medium">Пошук</span>
            </button>
          </div>

          <div className="relative">
            <Link
              href={`/cart`}
              className="panelBtn"
            >
              <CartIcon />
              <span className="font-medium">Кошик</span>
            </Link>

            {totals > 0 && <div className="bg-red-500 px-2 rounded-l-xl rounded-tr-xl flex justify-center items-center absolute right-0 -top-3 text-white text-[12px] shadow-md">
              {totals}<span className="text-[10px] ml-1">грн</span>
            </div>}

          </div>
        </div>
      </div>
    </>
  )
}

export default Panel