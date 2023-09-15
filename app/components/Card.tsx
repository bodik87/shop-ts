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
   <div className="mx-4 mt-4">
    <h3>Назва моделі завдовжки кількість символів</h3>

    <div className="mt-2 font-medium flex justify-between items-center">
     <p>
      <span className="text-lg">2500</span> грн
     </p>
     <button className="-mr-4 bg-yellow-300 h-12 px-8 lg:px-5 rounded-tl-xl rounded-br-xl flex justify-center items-center transition-all hover:bg-yellow-400">
      Купити
     </button>
    </div>
   </div>
  </div>
 );
}
