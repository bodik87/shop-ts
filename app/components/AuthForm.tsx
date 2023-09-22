"use client"
import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import Input from './Input/Input'
import Button from './Button'
import axios from 'axios'

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
 const [variant, setVariant] = useState<Variant>("LOGIN")
 const [isLoading, setIsLoading] = useState(false)

 const toggleVariant = useCallback(() => {
  if (variant === "LOGIN") {
   setVariant("REGISTER")
  } else {
   setVariant("LOGIN")
  }
 }, [variant])

 const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
  defaultValues: {
   name: "",
   email: "",
   password: ""
  }
 })

 const onSubmit: SubmitHandler<FieldValues> = (data) => {
  setIsLoading(true)

  if (variant === "REGISTER") {
   axios.post("/api/users", data)
    .catch(() => console.log("Проблема"))
    .finally(() => setIsLoading(false))
  }

  if (variant === "LOGIN") { }
 }

 const socialAction = (action: string) => {
  setIsLoading(true)
 }

 return (
  <>
   <h2 className='mb-5'>
    {variant === "LOGIN" ? "Вхід" : "Реєстрація"}
   </h2>

   <form
    onSubmit={handleSubmit(onSubmit)}
    className='space-y-5'>
    {variant === "REGISTER" && (
     <Input
      id="name"
      label={`Ім'я`}
      register={register}
      errors={errors}
      disabled={isLoading}
     />
    )}

    <Input
     id="email"
     label='Email'
     type='email'
     register={register}
     errors={errors}
     disabled={isLoading}
    />
    <Input
     id="password"
     label='Пароль'
     type='password'
     register={register}
     errors={errors}
     disabled={isLoading}
    />

    <div>
     <Button
      disabled={isLoading}
      fullWidth
      type='submit'
     >
      {variant === "LOGIN" ? "Вхід" : "Зареєструватись"}
     </Button>
    </div>
   </form>

   <div className='mt-5'>
    <Button
     disabled={isLoading}
     fullWidth
     secondary
     type='submit'
     onClick={() => socialAction("google")}
    >
     Вхід через Google
    </Button>
   </div>

   <button onClick={toggleVariant} className='mt-5'>
    {variant === "LOGIN" ? "Зареєструватись" : "Увійти"}
   </button>
  </>
 )
}

export default AuthForm