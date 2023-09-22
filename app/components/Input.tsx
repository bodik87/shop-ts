"use client"
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
 label: string,
 id: string,
 type?: string,
 required?: boolean,
 register: UseFormRegister<FieldValues>
 errors: FieldErrors
 disabled?: boolean
}

const Input = ({ label, id, type, required, register, errors, disabled }: InputProps) => {
 return (
  <div>
   <label htmlFor={id} className='text-sm font-medium leading-6'>
    {label}
   </label>

   <div className='mt-2'>
    <input
     id={id}
     type={type}
     autoComplete={id}
     disabled={disabled}
     {...register(id, { required })}
     className={`${errors[id] && "focus:ring-rose-500"} ${disabled && "opacity-50 cursor-default"} p-2 rounded-lg placeholder:text-gray-500 border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600`}
    />
   </div>
  </div>
 )
}

export default Input