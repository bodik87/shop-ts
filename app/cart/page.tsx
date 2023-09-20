"use client"
import React from "react";
import Email from "../Email";
import { iProduct } from "../models/models";

const Cart = () => {
  const cart: iProduct[] = localStorage.getItem("cart") && JSON.parse(localStorage.cart);
  const totalPrice = cart && cart.reduce((acc, product) => acc + product.price, 0);

  console.log(totalPrice);


  return (
    <div>
      <h1>Корзина</h1>

      {cart?.map(product =>
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.quantity}</p>
        </div>
      )}

      {cart ? <Email /> : <p className="mt-3">Товари відсутні</p>}
    </div>
  );
};

export default Cart;