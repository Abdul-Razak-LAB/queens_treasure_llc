import { NextRequest, NextResponse } from "next/server";
import { sendOrderEmail, sendOrderSms } from "@/lib/resend";

export async function POST(request: NextRequest) {
  const { email, phone, orderId, totalCents } = await request.json();

  const emailResult = await sendOrderEmail({
    to: String(email),
    orderId: String(orderId),
    totalCents: Number(totalCents)
  });

  const smsResult = phone
    ? await sendOrderSms({
        to: String(phone),
        orderId: String(orderId),
        totalCents: Number(totalCents)
      })
    : { skipped: true };

  return NextResponse.json({ emailResult, smsResult });
}
