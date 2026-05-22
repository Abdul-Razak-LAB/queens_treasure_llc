"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") ?? "/account"
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Invalid credentials");
      return;
    }

    router.push(result.url ?? "/account");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-black">Sign In</h1>
      <form onSubmit={onSubmit} className="card mt-6 grid gap-3 p-5">
        <input name="email" required type="email" className="rounded-lg border p-2" placeholder="Email" />
        <input name="password" required type="password" className="rounded-lg border p-2" placeholder="Password" />
        <button className="btn-primary" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</button>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
      <div className="mt-4 flex items-center justify-between text-sm">
        <Link href="/account/register" className="text-brandGreen underline">
          Create account
        </Link>
        <Link href="/account/forgot" className="text-brandGreen underline">
          Forgot password
        </Link>
      </div>
    </div>
  );
}
