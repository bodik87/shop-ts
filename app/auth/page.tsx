"use client"
import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import Input from '../components/Input'

type Variant = "LOGIN" | "REGISTER"

const Auth = () => {
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

  if (variant === "REGISTER") { }
  if (variant === "LOGIN") { }
 }

 const socialAction = (action: string) => {
  setIsLoading(true)
 }

 return (
  <section className="max-w-7xl mx-auto flex flex-col items-center">
   <h2>Вхід</h2>

   <form onSubmit={handleSubmit(onSubmit)}>
    {variant === "REGISTER" && (
     <Input
      id="name"
      label={`Ім'я`}
      register={register}
      errors={errors}
     />
    )}

    <Input
     id="email"
     label='Email'
     type='email'
     register={register}
     errors={errors}
    />
    <Input
     id="password"
     label='Пароль'
     type='password'
     register={register}
     errors={errors}
    />

    <div>
     <button>Test</button>
    </div>

   </form>
  </section>
 )
}

export default Auth