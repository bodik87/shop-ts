"use client";
import React from 'react'
import { useUIStore } from '../store/ui';

const Main = ({ children }: { children: React.ReactNode }) => {
 const uiStore = useUIStore();

 return (
  <main className={`${uiStore.modal && "scale-95"} max-w-7xl w-full mx-auto mt-[150px] px-3 sm:px-6 py-5 transition-all`}>
   {children}
  </main>
 )
}

export default Main