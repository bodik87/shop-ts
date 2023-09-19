import Image from "next/image";
import React from "react";
import good from "../../public/good.jpg";
import Link from "next/link";

type Props = {
 id: string | number
}

export default function Card({ id }: Props) {
 return (
  <div className="w-full object-contain relative bg-slate-100 rounded-lg">
   <Link href={`/products/${id}`}>
    <Image
     src={good}
     alt="Product image"
     width={600}
     height={600}
     // fill
     className="object-cover rounded-t-lg w-full"
     priority
     quality={100}
    />
   </Link>
   <div className="mt-2 text-sm lg:text-base">
    <h3 className="px-3">Назва моделі завдовжки 25</h3>

    <div className="mt-1 font-medium flex flex-col gap-2">
     <p className="px-3 text-lg">
      2500<span className="text-sm"> грн</span>
     </p>
     <button className="w-full bg-black text-white h-10 px-8 rounded-b-xl flex justify-center items-center transition-all hover:bg-gray-900">
      Купити
     </button>
    </div>
   </div>
  </div>
 );
}
