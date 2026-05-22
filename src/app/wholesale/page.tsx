"use client";

import { FormEvent, useState } from "react";

export default function WholesalePage() {
  const [result, setResult] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/wholesale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyName: form.get("companyName"),
        contactName: form.get("contactName"),
        email: form.get("email"),
        phone: form.get("phone"),
        message: form.get("message")
      })
    });

    const data = await response.json();
    setResult(response.ok ? `Inquiry sent: ${data.inquiryId}` : data.error);
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-black">Wholesale Inquiry</h1>
      <p className="mt-2 text-black/70">Phase 2 B2B onboarding for retailers and distributors.</p>
      <form onSubmit={submit} className="card mt-6 grid gap-3 p-5">
        <input name="companyName" required className="rounded-lg border p-2" placeholder="Company Name" />
        <input name="contactName" required className="rounded-lg border p-2" placeholder="Contact Name" />
        <input name="email" type="email" required className="rounded-lg border p-2" placeholder="Email" />
        <input name="phone" className="rounded-lg border p-2" placeholder="Phone" />
        <textarea name="message" rows={4} className="rounded-lg border p-2" placeholder="Tell us volumes and region" required />
        <button className="btn-primary">Submit Inquiry</button>
        {result ? <p className="text-sm text-brandGreen">{result}</p> : null}
      </form>
    </div>
  );
}
