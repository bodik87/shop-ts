"use client"
import React from "react";
import Email from "../Email";
import { iProduct } from "../models/models";
import { useCartStore } from "../store/cart";
import Image from "next/image";
import Link from "next/link";
import { DeleteIcon } from "../components/Icons";
import { HomePageCarousel } from "../components/HomePageCarousel";

const Cart = () => {
  const cartStore = useCartStore();
  const totalPrice = (cart: iProduct[]) => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const total = totalPrice(cartStore.cart);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <div className="lg:w-1/2 lg:border border-slate-300 lg:p-5 rounded-xl">
          <h1 className="mb-5">Кошик</h1>

          {cartStore.cart.length > 0 ? cartStore.cart.map((el) => (
            <>
              <div key={el.id} className="mt-5 flex justify-between">
                <div className="flex gap-6">
                  <Link href={`/products/${el.id}`} className="mt-2">
                    <Image width={60} height={100} src={el.images[0]} alt={el.title} />
                  </Link>

                  <div>
                    <h3 className="text-xl">{el.title}</h3>
                    <p className="opacity-80">Ціна за одиницю: {el.price} грн</p>

                    <div className="mt-3 flex items-center gap-3 text-lg">
                      <button
                        onClick={() => cartStore.decrQuantity(el)}
                        disabled={el.quantity === 1}
                        className="bg-slate-200 rounded-lg w-10 h-10 disabled:opacity-50">-</button>
                      <span className="border rounded-lg w-12 h-12 flex items-center justify-center">{el.quantity}</span>
                      <button
                        onClick={() => cartStore.incrQuantity(el)} className="bg-slate-200 rounded-lg w-10 h-10">+</button>
                    </div>
                  </div>
                </div>

                <div className="mt-1 pb-1 flex flex-col items-end justify-between">
                  <button onClick={() => cartStore.deleteProduct(el)}>
                    <DeleteIcon />
                  </button>
                  <h3>{el.quantity * el.price} грн</h3>
                </div>

              </div>

              <Email total={total} />
            </>
          ))
            : <h2 className="mt-8">Товари відсутні</h2>}
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2">
          {cartStore.cart.length > 0 && <h3 className="mb-2">Можливо щось забули? Додайте!</h3>}
          <HomePageCarousel />
        </div>
      </div>
    </div>
  );
};

export default Cart;