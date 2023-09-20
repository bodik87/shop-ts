"use client"
import React from "react";
import Email from "../Email";
import { iProduct } from "../models/models";
import { useCartStore } from "../store/cart";

const Cart = () => {
  const cartStore = useCartStore();
  const totalPrice = (cart: iProduct[]) => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const total = totalPrice(cartStore.cart);

  return (
    <div>
      <h1>Корзина</h1>

      {cartStore.cart.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
          <div>{el.quantity}</div>
        </div>
      ))}

      <div>На суму {total}</div>

      <Email />
    </div>
  );
};

export default Cart;