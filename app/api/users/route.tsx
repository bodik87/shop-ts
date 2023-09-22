import { NextRequest, NextResponse } from "next/server";
import UserSchema from "./schema";
import prisma from "@/prisma/client"
import bcrypt from "bcrypt";

// GET ALL users
export async function GET(request: NextRequest) {
 const users = await prisma.user.findMany()
 return NextResponse.json(users)
}

// CREATE user
export async function POST(request: NextRequest) {
 const body = await request.json();
 const validation = UserSchema.safeParse(body);

 if (!validation.success)
  return NextResponse.json(validation.error.errors, { status: 400 });

 const user = await prisma.user.findUnique({
  where: { email: body.email },
 });

 if (user)
  return NextResponse.json({ error: "User already exist" }, { status: 400 });

 const hashedPassword = await bcrypt.hash(body.password, 10);

 const newUser = await prisma.user.create({
  data: {
   name: body.name,
   email: body.email,
   hashedPassword,
  },
 });

 return NextResponse.json({ name: newUser.name, email: newUser.email });
}