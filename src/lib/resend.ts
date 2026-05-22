import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderEmail(params: {
  to: string;
  orderId: string;
  totalCents: number;
}) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return { skipped: true };
  }

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: params.to,
    subject: `Queens Treasure order confirmation #${params.orderId}`,
    html: `<h1>Thank you for your order</h1><p>Your order <strong>#${params.orderId}</strong> is confirmed.</p><p>Total: $${(params.totalCents / 100).toFixed(2)}</p>`
  });
}

export async function sendOrderSms(params: {
  to: string;
  orderId: string;
  totalCents: number;
}) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_SMS_FROM || !params.to) {
    return { skipped: true };
  }

  // Uses Resend SMS endpoint conventions. Adjust payload fields if provider API changes.
  return resend.batch.send([
    {
      from: process.env.RESEND_SMS_FROM,
      to: params.to,
      subject: "",
      text: `Queens Treasure: Your order #${params.orderId} is confirmed. Total $${(params.totalCents / 100).toFixed(2)}.`
    }
  ]);
}
