"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AccountIcon,
  CatalogIcon,
  ChevronArrow,
  FavoritesIcon,
  MenuIcon,
  SearchIcon,
} from "../../Icons";
import BurgerMenu from "./BurgerMenu";
import CatalogMenu from "./CatalogMenu";
import SearchMenu from "./SearchMenu";


const Navbar = () => {
  const [catalog, setCatalog] = useState(false);
  const [burger, setBurger] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (burger || catalog || search) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [burger, catalog, search]);

  const pathname = usePathname();

  return (
    <>
      <BurgerMenu burger={burger} setBurger={setBurger} />
      <SearchMenu search={search} setSearch={setSearch} />

      <nav className="bg-slate-200">
        <div className="max-w-7xl w-full pr-4 sm:pl-4 sm:pr-6 mx-auto flex justify-between items-center">
          <div className="flex gap-5 items-center py-1 pl-1">
            <button
              onClick={() => setCatalog(!catalog)}
              className="bg-slate-100 border border-gray-300 py-2 px-3 rounded-lg flex gap-3 items-center transition-all shadow-sm hover:bg-slate-50"
            >
              <CatalogIcon />
              <span className="font-medium text-lg">Каталог</span>
              <ChevronArrow />
            </button>

            <div className="hidden md:flex gap-1">
              <Link href="/payment-and-delivery" className="rounded-lg transition-all hover:bg-slate-100 py-2 px-3">
                Доставка и оплата
              </Link>
              <Link href="/about" className="rounded-lg transition-all hover:bg-slate-100 py-2 px-3">
                Про нас
              </Link>
              <Link href="/contacts" className="rounded-lg transition-all hover:bg-slate-100 py-2 px-3">
                Контакти
              </Link>
            </div>

            <CatalogMenu catalog={catalog} setCatalog={setCatalog} />
          </div>

          <div className="flex gap-1 lg:gap-2">
            <button className="block md:hidden p-2 rounded-lg transition-all hover:bg-slate-100"
              onClick={() => setSearch(true)}
            >
              <SearchIcon />
            </button>

            <Link href={`/favorites`} className="p-2 flex gap-2 items-center rounded-lg transition-all hover:bg-slate-100">
              <FavoritesIcon active={pathname === "/favorites"} />
              <span className="hidden lg:block">Обране</span>
            </Link>
            <Link href={`/account`} className="p-2 flex gap-2 items-center rounded-lg transition-all hover:bg-slate-100">
              <AccountIcon />
            </Link>

            <button
              className="block md:hidden p-2 ml-2 rounded-lg transition-all hover:bg-slate-100"
              onClick={() => setBurger(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar