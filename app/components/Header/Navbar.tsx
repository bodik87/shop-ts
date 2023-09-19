"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  AccountIcon,
  CatalogIcon,
  CloseIcon,
  FavoritesIcon,
  MenuIcon,
  SearchIcon,
} from "../Icons";
import { categories } from "../../data/categories";


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
      <AnimatePresence initial={false}>
        {burger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
      </AnimatePresence>

      <nav className="bg-slate-200">
        <div className="max-w-7xl w-full pr-4 sm:pr-6 mx-auto flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <button
              onClick={() => setCatalog(!catalog)}
              className="bg-red-500 text-white py-2 pl-5 pr-7 mr-5 rounded-tr-lg xl:rounded-t-lg flex gap-3 items-center transition-all hover:bg-red-600 z-30"
            >
              <CatalogIcon />
              <span className="font-medium text-lg">Каталог</span>
            </button>

            <div className="hidden sm:flex gap-6 text-sm lg:text-base">
              <Link href="/payment-and-delivery">
                Доставка и оплата
              </Link>
              <Link href="/about">
                Про нас
              </Link>
              <Link href="/contacts">
                Контакти
              </Link>
            </div>

            {catalog && (
              <div
                onClick={() => setCatalog(false)}
                className="fixed inset-0 w-full bg-black/30 z-20"
              >
                <div className="max-w-7xl mx-auto">
                  <div className="mt-[76px] max-w-xs w-full max-h-[500px] bg-red-500 rounded-lg rounded-tl-none overflow-hidden text-white shadow-2xl z-30">
                    <div className="flex flex-col max-h-[500px] overflow-y-auto scroll_categories">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/categories/${category.id}`}
                          className="py-6 px-6 text-left transition-all hover:bg-red-600"
                          onClick={() => setCatalog(false)}
                        >
                          {category.id}. {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          <div className="flex gap-1 lg:gap-2">
            <button className="block sm:hidden p-2">
              <SearchIcon />
            </button>
            <Link href={`/favorites`} className="p-2 flex gap-2 items-center">
              <FavoritesIcon active={pathname === "/favorites"} />
              <span className="hidden lg:block">Обране</span>
            </Link>
            <Link href={`/account`} className="p-2 flex gap-2 items-center">
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