"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { iProduct } from "../models/models";
import { useCartStore } from "../store/cart";

type Props = { product: iProduct }

export default function Card({ product }: Props) {

  const cartStore = useCartStore();

  return (
    <div className="mt-2 w-full object-contain relative rounded-lg">
      <Link href={`/products/${product.id}`}>
        <div className="h-[250px] relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={600}
            height={700}
            className="object-contain rounded-t-lg w-full h-full bg-white"
            priority
            quality={100}
          />
        </div>
      </Link>

      <div className="mt-2 text-sm lg:text-base">
        <h3 className="px-2">{product.title.substring(0, 25)}</h3>

        <div className="flex px-2 text-lg font-medium">
          {product.oldPrice && (
            <div className="mr-2 opacity-50">
              <span className="line-through">{product.oldPrice}</span>
              <span className="text-sm"> грн</span>
            </div>
          )}
          <div>
            {product.price}
            <span className="text-sm"> грн</span>
          </div>
        </div>

        <button onClick={() => cartStore.addToCart(product)} className="w-full bg-color_1 text-white h-10 px-8 rounded-lg flex justify-center items-center transition-all hover:bg-green-700">
          Купити
        </button>
      </div>
    </div>
  );
}
