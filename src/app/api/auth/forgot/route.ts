import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOrderEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = String(body.email ?? "").toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    // Placeholder reset flow: sends a notification email to initiate manual reset or future tokenized reset.
    await sendOrderEmail({ to: email, orderId: "PASSWORD-RESET", totalCents: 0 });
  }

  return NextResponse.json({ ok: true });
}
