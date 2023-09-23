"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "./store/cart";
// import axios from 'axios'
import { iProduct } from "./models/models";
import { useSession } from "next-auth/react";

type Props = {
  total: number
}

interface iOrder {
  user_email: string;
  total: number;
  products: iProduct[]
}

const Order = ({ total }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession()
  console.log(session.data?.user?.email);

  const cartStore = useCartStore();

  // const sendEmail = async () => {
  //   setLoading(true);
  //   const response = await fetch("/api/send", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });

  const createOrder = async (data: iOrder) => {
    // axios.post("/api/orders", data)
    //   .catch(() => console.log("Проблема при замовленні"))
    //   .finally(() => {
    //     router.push("/ordered"),
    //       setLoading(false)
    //   })
    cartStore.clearCart()
  };

  return (
    <div className="mt-10 flex flex-col justify-center items-end">

      <h2>Разом: {total} грн</h2>

      <button
        onClick={() => createOrder({
          user_email: session.data?.user?.email || "Анонімний покупець",
          total: total,
          products: cartStore.cart
        })}
        className="mt-5 px-6 py-4 text-center bg-color_1 text-white text-lg font-medium w-fit rounded-xl">
        Створити замовлення
      </button>

      {/* {loading && <div>Загрузка...</div>} */}
    </div>
  );
};

export default Order;
