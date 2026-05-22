"use client";

import { FormEvent, useState } from "react";

export default function SubscriptionsPage() {
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/subscriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        productSlug: form.get("productSlug"),
        interval: form.get("interval")
      })
    });

    const data = await response.json();
    setMessage(response.ok ? `Subscription created: ${data.subscriptionId}` : data.error);
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-black">Subscriptions</h1>
      <p className="mt-2 text-black/70">Phase 2 recurring orders.</p>
      <form onSubmit={submit} className="card mt-6 grid gap-3 p-5">
        <input name="email" className="rounded-lg border p-2" type="email" placeholder="Email" required />
        <select name="productSlug" className="rounded-lg border p-2">
          <option value="koko">Koko</option>
          <option value="shito">Shito</option>
          <option value="plantain-chips">Plantain Chips</option>
        </select>
        <select name="interval" className="rounded-lg border p-2">
          <option value="monthly">Monthly</option>
          <option value="biweekly">Every 2 Weeks</option>
        </select>
        <button className="btn-primary">Start Subscription</button>
        {message ? <p className="text-sm text-brandGreen">{message}</p> : null}
      </form>
    </div>
  );
}
