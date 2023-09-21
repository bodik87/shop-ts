"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CatalogMenu from "./CatalogMenu";
import SearchMenu from "./SearchMenu";
import {
  AccountIcon,
  CatalogIcon,
  ChevronIcon,
  FavoritesIcon,
  InformationIcon,
  SearchIcon,
} from "../../Icons";


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
      <SearchMenu search={search} setSearch={setSearch} />
      <CatalogMenu catalog={catalog} setCatalog={setCatalog} />

      <nav className="bg-slate-200">
        <div className="max-w-7xl w-full pl-1 sm:pl-4 pr-4 mx-auto flex justify-between items-center">
          <div className="flex gap-5 items-center py-1">
            <button
              onClick={() => { setCatalog(!catalog) }}
              className="bg-slate-100 border border-gray-300 py-2 px-3 rounded-lg flex gap-3 items-center transition-all shadow-sm hover:bg-slate-50"
            >
              <CatalogIcon />
              <span className="font-medium text-lg">Каталог</span>
              <ChevronIcon />
            </button>
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
            <Link href={`/information`} className="p-2 flex gap-2 items-center rounded-lg transition-all hover:bg-slate-100">
              <InformationIcon />
              <span className="hidden lg:block">Інформація</span>
            </Link>
            <Link href={`/account`} className="p-2 flex gap-2 items-center rounded-lg transition-all hover:bg-slate-100">
              <AccountIcon />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar