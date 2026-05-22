"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-black">Contact</h1>
      <p className="mt-2 text-black/70">Questions about orders, shipping, or wholesale? Send us a message.</p>

      <div className="card mt-5 space-y-2 p-5 text-sm text-black/80">
        <p className="font-semibold text-brandGreen">Queen&apos;s Treasure LLC</p>
        <p>Tacoma, Washington, USA</p>
        <p>
          Email: <a href="mailto:queenstreasurellc3@gmail.com" className="font-medium text-brandGreen hover:underline">queenstreasurellc3@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+18606290367" className="font-medium text-brandGreen hover:underline">(860) 629-0367</a>
        </p>
      </div>

      <form onSubmit={onSubmit} className="card mt-6 space-y-4 p-5">
        <input className="w-full rounded-lg border p-2" placeholder="Name" required />
        <input className="w-full rounded-lg border p-2" type="email" placeholder="Email" required />
        <textarea className="w-full rounded-lg border p-2" placeholder="Message" rows={4} required />
        <button className="btn-primary" type="submit">Send Message</button>
        {sent ? <p className="text-sm text-green-700">Message received. We will reply shortly.</p> : null}
      </form>
    </div>
  );
}
