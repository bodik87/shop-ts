import Image from "next/image";
import React from "react";
import good from "../../public/good.webp";
import Link from "next/link";

type Props = {
 id: string | number
}

export default function Card({ id }: Props) {
 return (
  <div className="w-full object-contain relative rounded-lg">
   <Link href={`/products/${id}`}>
    <Image
     src={good}
     alt="Product image"
     width={600}
     height={600}
     // fill
     className="object-cover rounded-t-lg w-full px-10 pt-2 bg-white"
     priority
     quality={100}
    />
   </Link>

   <div className="mt-2 text-sm lg:text-base">
    <h3 className="px-2">Назва моделі завдовжки 25</h3>

    <p className="px-2 text-lg font-medium">
     2500<span className="text-sm"> грн</span>
    </p>
    <button className="w-full bg-color_1 text-white h-10 px-8 rounded-lg flex justify-center items-center transition-all hover:bg-gray-900">
     Купити
    </button>
   </div>
  </div>
 );
}
