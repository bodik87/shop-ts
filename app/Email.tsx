"use client";
import React, { useState } from "react";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Email = () => {
  const [data, setData] = useState({ name: "Bodik" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const sendEmail = async () => {
    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setData({});
      // toast.success("Заказ отправлен");
      router.push("/ordered");
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => sendEmail()}>
        Создать заказ с отправкой на почту
      </button>

      {loading && <div>Загрузка...</div>}
    </>
  );
};

export default Email;
