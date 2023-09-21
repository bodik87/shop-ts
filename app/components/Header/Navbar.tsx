"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  AccountIcon,
  CatalogIcon,
  ChevronArrow,
  CloseIcon,
  FavoritesIcon,
  MenuIcon,
  SearchIcon,
} from "../Icons";
import { categories } from "../../data/variables";


const Navbar = () => {
  const [catalog, setCatalog] = useState(false);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    if (burger || catalog) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [burger, catalog]);

  const pathname = usePathname();

  return (
    <>
      {burger && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="sm:hidden fixed inset-0 bg-slate-100 z-40">
          <div className="h-full p-6 flex flex-col items-center text-lg">
            <button className="my-5 ml-auto" onClick={() => setBurger(false)}>
              <CloseIcon />
            </button>

            <Link
              href="/payment-and-delivery"
              className="py-3"
              onClick={() => setBurger(false)}
            >
              Доставка и оплата
            </Link>
            <Link
              href="/about"
              className="py-3"
              onClick={() => setBurger(false)}
            >
              Про нас
            </Link>
            <Link
              href="/contacts"
              className="py-3"
              onClick={() => setBurger(false)}
            >
              Контакти
            </Link>

            <div className="mt-auto flex flex-col gap-3">
              <a href="tel:+380660984114">{`+38(066) 098-41-14`}</a>
              <a href="tel:+380672785349">{`+38(067) 278-53-49`}</a>
            </div>
          </div>
        </motion.div>
      )}

      <nav className="bg-slate-200">
        <div className="max-w-7xl w-full pr-4 md:pl-4 sm:pr-6 mx-auto flex justify-between items-center">
          <div className="flex gap-5 items-center py-1 pl-1">
            <button
              onClick={() => setCatalog(!catalog)}
              className="bg-slate-100 border border-gray-300 py-2 px-4 rounded-lg flex gap-3 items-center transition-all z-30 shadow-sm hover:bg-slate-50"
            >
              <CatalogIcon />
              <span className="font-medium text-lg">Каталог</span>
              <ChevronArrow />
            </button>

            <div className="hidden sm:flex gap-1 text-sm lg:text-base">
              <Link href="/payment-and-delivery" className="rounded-lg transition-all hover:bg-slate-100 py-2 px-4">
                Доставка и оплата
              </Link>
              <Link href="/about" className="rounded-lg transition-all hover:bg-slate-100 py-2 px-4">
                Про нас
              </Link>
              <Link href="/contacts" className="rounded-lg transition-all hover:bg-slate-100 py-2 px-4">
                Контакти
              </Link>
            </div>

            {catalog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => setCatalog(false)}
                className="fixed inset-0 w-full bg-black/30 z-20"
              >
                <div className="max-w-7xl mx-auto">
                  <div className="mt-[86px] ml-1 md:ml-5 max-w-[260px] w-full max-h-[500px] bg-white rounded-lg overflow-hidden shadow-2xl z-30 p-1.5">
                    <div className="flex flex-col max-h-[500px] overflow-y-auto scroll_categories">
                      {categories.map((category) => (
                        <Link
                          key={category.id}

                          href={`/categories/${category.id}`}
                          className="py-4 px-4 text-left transition-all hover:bg-slate-200 rounded-md"
                          onClick={() => setCatalog(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>


          <div className="flex gap-1 lg:gap-2">
            <button className="block sm:hidden p-2" >
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
              className="block sm:hidden p-2 ml-2"
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