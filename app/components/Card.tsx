import Image from "next/image";
import React from "react";
import good from "../../public/good.jpg";

export default function Card() {
 return (
  <div className="w-full object-contain relative mb-5 bg-slate-100 rounded-xl">
   <Image
    src={good}
    alt="My image"
    width={426}
    height={600}
    // fill
    className="object-cover rounded-t-xl w-full"
    priority
    quality={100}
   />
   <div className="mt-2">
    <h3 className="px-4">Назва моделі завдовжки 25</h3>

    <div className="mt-1 font-medium flex flex-col gap-2">
     <p className="text-lg px-4">
      2500<span className="text-sm"> грн</span>
     </p>
     <button className="w-full bg-yellow-300 h-12 px-8 rounded-b-xl flex justify-center items-center transition-all hover:bg-yellow-400">
      Купити
     </button>
    </div>
   </div>
  </div>
 );
}
