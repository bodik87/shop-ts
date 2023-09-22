"use client"
import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'

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

  if (variant === "REGISTER") { }
  if (variant === "LOGIN") { }
 }

 const socialAction = (action: string) => {
  setIsLoading(true)
 }

 return (
  <div>
   <h2>Sign in</h2>
  </div>
 )
}

export default AuthForm