import { NextRequest, NextResponse } from "next/server";
import ProductSchema from "../schema";
import prisma from "@/prisma/client";

// GET one product
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
 const product = await prisma.product.findUnique({
  where: { id: params.id }
 })
 if (!product)
  return NextResponse.json({ error: "Product not found" }, { status: 404 })

 return NextResponse.json(product)
}

// UPDATE one product (PUT - change object, PATCH - update part of object)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
 // 1. Validate the request body, If invalid, return 400
 const body = await request.json()
 const validation = ProductSchema.safeParse(body)

 if (!validation.success)
  // return NextResponse.json({ error: "Name is required!" }, { status: 404 })
  return NextResponse.json(validation.error.errors, { status: 404 })

 // 2. Fetch the product with the given ID, If doesn't exist return 404
 const product = await prisma.product.findUnique({
  where: { id: params.id }
 })
 if (!product)
  return NextResponse.json({ error: "Product not found" }, { status: 404 })

 // 3. Otherwise update the product, Return the updated product
 const updatedProduct = await prisma.product.update({
  where: { id: product.id },
  data: {
   title: body.title,
   price: body.price,
   oldPrice: body.oldPrice,
   brand: body.brand,
  }
 })

 return NextResponse.json(updatedProduct)
}

// DELETE one product
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
 // 1. Fetch the product with the given ID, If not found return 404
 const product = await prisma.product.findUnique({
  where: { id: params.id }
 })

 if (!product)
  return NextResponse.json({ error: "Product not found" }, { status: 404 })

 // 2. Otherwise delete the product, Return 200
 await prisma.product.delete({
  where: { id: product.id }
 })

 return NextResponse.json({ message: `Product was deleted` }, { status: 200 })
}