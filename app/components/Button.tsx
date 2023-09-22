"use client"
import React from 'react'

interface ButtonProps {
 type?: "button" | "submit" | "reset" | undefined;
 fullWidth?: boolean;
 children?: React.ReactNode;
 onClick?: () => void;
 secondary?: boolean;
 danger?: boolean;
 disabled?: boolean;
}

const Button = ({ type, fullWidth, children, onClick, secondary, danger, disabled }: ButtonProps) => {
 return (
  <button
   onClick={onClick}
   type={type}
   disabled={disabled}
   className={`${fullWidth && "w-full"} ${disabled && "opacity-50 cursor-default"} ${secondary ? "text-black border-2" : "text-white"} ${danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600"} ${!secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"} flex justify-center items-center rounded-lg px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
  >
   {children}
  </button>
 )
}

export default Button