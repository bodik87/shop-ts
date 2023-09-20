"use client"
import React from "react";
import Email from "../Email";
import { iProduct } from "../models/models";
import { useCartStore } from "../store/cart";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const cartStore = useCartStore();
  const totalPrice = (cart: iProduct[]) => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const total = totalPrice(cartStore.cart);

  return (
    <div className="max-w-lg">
      <h1 className="mb-5">Корзина</h1>

      {cartStore.cart.map((el) => (

        <div key={el.id} className="mt-5 flex justify-between items-center">
          <div className="flex gap-6">
            <Link href={`/products/${el.id}`} className="mt-2">
              <Image width={60} height={150} src={el.images[0]} alt={el.title} />
            </Link>

            <div>
              <h3 className="text-xl">{el.title}</h3>
              <div className="opacity-80">Ціна за рдиницю: {el.price} грн</div>

              <div className="mt-3 flex items-center gap-3 text-lg">
                <button className="bg-slate-200 rounded-lg w-10 h-10">-</button>
                <span className="border rounded-lg w-12 h-12 flex items-center justify-center">{el.quantity}</span>
                <button className="bg-slate-200 rounded-lg w-10 h-10">+</button>
              </div>
            </div>
          </div>

          <h3>{el.quantity * el.price} грн</h3>
        </div>
      ))}

      <Email total={total} />
    </div>
  );
};

export default Cart;