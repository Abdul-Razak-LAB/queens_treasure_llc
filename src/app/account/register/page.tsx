"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
        firstName: form.get("firstName"),
        lastName: form.get("lastName")
      })
    });

    const data = await response.json();
    setMessage(response.ok ? "Account created. You can sign in now." : data.error ?? "Registration failed");
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-black">Create Account</h1>
      <form onSubmit={submit} className="card mt-6 grid gap-3 p-5">
        <input name="firstName" className="rounded-lg border p-2" placeholder="First name" />
        <input name="lastName" className="rounded-lg border p-2" placeholder="Last name" />
        <input name="email" type="email" required className="rounded-lg border p-2" placeholder="Email" />
        <input name="password" type="password" minLength={8} required className="rounded-lg border p-2" placeholder="Password" />
        <button className="btn-primary">Create Account</button>
        {message ? <p className="text-sm text-brandGreen">{message}</p> : null}
      </form>
      <p className="mt-4 text-sm">
        Already registered? <Link href="/account/signin" className="text-brandGreen underline">Sign in</Link>
      </p>
    </div>
  );
}
