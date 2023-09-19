"use client";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";

const Account = () => {
 const { user, googleSignIn, logOut } = UserAuth();
 const [loading, setLoading] = useState(true);

 console.log(user);


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
     className="bg-slate-300 h-12 px-5 rounded-xl flex justify-center items-center transition-all hover:bg-slate-400"
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