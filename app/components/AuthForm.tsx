"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import Input from './Input/Input'
import Button from './Button'
import axios from 'axios'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
  const session = useSession()
  const router = useRouter()
  const [variant, setVariant] = useState<Variant>("LOGIN")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/account")

    }
  }, [session?.status, router])


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
        .then(() => signIn("credentials", data))
        .catch(() => console.log("Проблема"))
        .finally(() => setIsLoading(false))
    }

    if (variant === "LOGIN") {
      signIn("credentials", { ...data, redirect: false })
        .then((callback) => {
          if (callback?.error) {
            console.log("Invalid credentials during login");
          }

          if (callback?.ok && !callback?.error) {
            console.log("Logged in!");
            router.push("/account")
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          console.log("Invalid credentials during login");
        }

        if (callback?.ok && !callback?.error) {
          console.log("Logged in!");
        }
      })
      .finally(() => setIsLoading(false))
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