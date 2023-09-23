import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// GET ALL
export async function GET(request: NextRequest) {
  const orders = await prisma.orders.findMany();
  return NextResponse.json(orders);
}

// CREATE
export async function POST(request: NextRequest) {
  const body = await request.json();

  const order = await prisma.orders.create({
    data: {},
  });

  return NextResponse.json(order, { status: 201 });
}
