"use client"
import React from "react";
import Email from "../Email";
import { iProduct } from "../models/models";
import { useCartStore } from "../store/cart";

const Cart = () => {
  const value =
    typeof window !== "undefined" ? window.localStorage.getItem("cart") : false;

  const cart: iProduct[] = JSON.parse(localStorage.cart) || null;
  const { count } = useCartStore()

  return (
    <div>
      <h1>Корзина</h1>

      {cart &&
        <>
          {cart.map(product => <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.quantity}шт</p>
          </div>)}
          <div>
            Всього на суму: {count}грн
          </div>
        </>
      }

      {cart ? <Email /> : <p className="mt-3">Товари відсутні</p>}
    </div>
  );
};

export default Cart;