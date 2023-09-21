import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AccountIcon,
  FavoritesIcon,
  InformationIcon,
  PhoneIcon,
} from "../../Icons";


const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-slate-200 py-1">
      <div className="max-w-7xl w-full px-2 sm:px-6 mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold py-2 px-3">
          МАГАЗИН
        </Link>

        <div className="flex gap-1 lg:gap-2 items-center">
          <a className="p-2 flex gap-2 items-center rounded-lg transition-all hover:bg-slate-100" href="tel:+380660984114">
            <PhoneIcon />
            <span className="hidden lg:block">Зателефонуати</span>
          </a>

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
  )
}

export default Navbar