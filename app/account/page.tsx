"use client";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";

const Account = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <>
      <div className="flex justify-between">
        <h1>Акаунт</h1>

        <button
          onClick={user ? handleSignOut : handleSignIn}
          className="border border-gray-300 active:bg-slate-100 py-2 px-3 rounded-lg shadow-sm"
        >
          {user ? "Вийти" : "Вхід"}

        </button>

      </div>

      {user &&
        <div className="flex items-center gap-2">
          <Image src={user.photoURL} alt="User photo" width={30} height={30} className="rounded-full" />
          <p>{user.displayName}</p>
        </div>}
    </>
  )
}

export default Account