import { NextRequest, NextResponse } from "next/server";
import UserSchema from "../schema";
import prisma from "@/prisma/client";

// GET user
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
 const user = await prisma.user.findUnique({ where: { id: params.id } })

 if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

 return NextResponse.json(user)
}

// UPDATE one user (PUT - change object, PATCH - update part of object)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
 // 1. Validate the request body, If invalid, return 400
 const body = await request.json()
 const validation = UserSchema.safeParse(body)

 if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 })

 // 2. Fetch the user with the given ID, If doesn't exist return 404
 const user = await prisma.user.findUnique({ where: { id: params.id } })

 if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

 // 3. Otherwise update the user, Return the updated user
 const updatedUser = await prisma.user.update({
  where: { id: user.id },
  data: { name: body.name, email: body.email }
 })

 return NextResponse.json(updatedUser)
}

// DELETE one user
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
 // 1. Fetch the user with the given ID, If not found return 404
 const user = await prisma.user.findUnique({ where: { id: params.id } })

 if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

 // 2. Otherwise delete the user, Return 200
 await prisma.user.delete({ where: { id: user.id } })

 return NextResponse.json({ message: `User was deleted` })
}