import React from 'react'
import { motion } from "framer-motion";
import { CloseIcon } from '../../Icons';
import Link from 'next/link';

type Props = {
 burger: boolean
 setBurger: (value: boolean) => void
}

const BurgerMenu = ({ burger, setBurger }: Props) => {
 return (
  <>
   {burger && (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ type: "spring", stiffness: 260, damping: 20 }}
     className="sm:hidden fixed inset-0 bg-slate-100 z-40">
     <div className="h-full p-6 flex flex-col items-center text-lg">
      <button className="my-6 ml-auto" onClick={() => setBurger(false)}>
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
  </>
 )
}

export default BurgerMenu