"use client";

import { FormEvent, useState } from "react";

export default function ForgotPage() {
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/auth/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email") })
    });

    if (response.ok) {
      setMessage("If the email exists, reset instructions were sent.");
    } else {
      setMessage("Unable to process request.");
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-black">Forgot Password</h1>
      <form onSubmit={submit} className="card mt-6 grid gap-3 p-5">
        <input name="email" type="email" required className="rounded-lg border p-2" placeholder="Email" />
        <button className="btn-primary">Send Reset Instructions</button>
        {message ? <p className="text-sm text-brandGreen">{message}</p> : null}
      </form>
    </div>
  );
}
