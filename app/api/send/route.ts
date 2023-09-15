import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bsshul@gmail.com",
      subject: "Hello World",
      text: body.name,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
