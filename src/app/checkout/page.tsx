"use client";

import { FormEvent, useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        phone: form.get("phone"),
        shippingAddress: {
          line1: form.get("line1"),
          city: form.get("city"),
          state: form.get("state"),
          postalCode: form.get("postalCode"),
          country: "US"
        }
      })
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      setMessage(`Order ${data.orderId} created. Confirmation email/SMS queued.`);
      event.currentTarget.reset();
      return;
    }

    setMessage(data.error ?? "Checkout failed");
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-black">Checkout</h1>
      <form onSubmit={onSubmit} className="card mt-6 grid gap-3 p-5">
        <input name="email" type="email" required placeholder="Email" className="rounded-lg border p-2" />
        <input name="phone" placeholder="Phone for SMS (optional)" className="rounded-lg border p-2" />
        <input name="line1" required placeholder="Address" className="rounded-lg border p-2" />
        <input name="city" required placeholder="City" className="rounded-lg border p-2" />
        <input name="state" required placeholder="State" className="rounded-lg border p-2" />
        <input name="postalCode" required placeholder="ZIP code" className="rounded-lg border p-2" />
        <button className="btn-primary" disabled={loading}>{loading ? "Processing..." : "Place Order"}</button>
        {message ? <p className="text-sm text-brandGreen">{message}</p> : null}
      </form>
      <p className="mt-4 text-xs text-black/60">Cards, Apple Pay, and Google Pay are supported when Stripe keys are configured.</p>
    </div>
  );
}
