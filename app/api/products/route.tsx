import { NextRequest, NextResponse } from "next/server";
import ProductSchema from "./schema";
import prisma from "@/prisma/client"

// GET ALL products
// export async function GET(request: NextRequest) {
//  const products = await prisma.product.findMany()
//  return NextResponse.json(products)
// }

// CREATE product
// export async function POST(request: NextRequest) {
//  const body = await request.json()
//  const validation = ProductSchema.safeParse(body)

//  if (!validation.success)
//   return NextResponse.json(validation.error.errors, { status: 400 })

//  const newProduct = await prisma.product.create({
//   data: {
//    title: body.title,
//    price: body.price,
//    oldPrice: body.oldPrice,
//    brand: body.brand,
//   }
//  })

//  return NextResponse.json(newProduct, { status: 201 })
// }