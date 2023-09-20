"use client";
import React, { useState } from "react";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCartStore } from "./store/cart";

const Email = ({ total }: { total: number }) => {
  const [data, setData] = useState({ name: "Bodik" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const cartStore = useCartStore();

  const sendEmail = async () => {
    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      // setData({});
      // toast.success("Заказ отправлен");
      router.push("/ordered");
      setLoading(false);
    }
    cartStore.clearCart()
  };

  return (
    <div className="mt-10 flex flex-col justify-center items-end">

      <h2>Разом: {total} грн</h2>

      <button onClick={() => sendEmail()} className="mt-5 p-6 text-center bg-color_1 text-white w-fit rounded-xl">
        <p>Створити замовлення</p>
      </button>

      {loading && <div>Загрузка...</div>}
    </div>
  );
};

export default Email;
