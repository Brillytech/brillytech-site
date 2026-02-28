"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";
import Link from "next/link";

export default function AuthPage() {
  const supabase = createClient();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMsg(
          "Account created! Check your email to confirm (if enabled). Now sign in."
        );
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        window.location.href = "/"; // go home (CreditsBadge etc. will show)
      }
    } catch (err: any) {
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold mb-6">
        {mode === "signup" ? "Create your account" : "Sign in"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="px-4 py-2 rounded bg-emerald-500 text-white w-full"
        >
          {loading ? "Please wait…" : mode === "signup" ? "Sign up" : "Sign in"}
        </button>
      </form>

      <p className="mt-4 text-sm">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <button className="underline" onClick={() => setMode("signin")}>
              Sign in
            </button>
          </>
        ) : (
          <>
            New here?{" "}
            <button className="underline" onClick={() => setMode("signup")}>
              Create account
            </button>
          </>
        )}
      </p>

      {msg && <p className="mt-4 text-amber-600">{msg}</p>}
      <p className="mt-2 text-xs text-gray-500">
        By continuing, you accept the Terms and Privacy Policy.
      </p>

      <p className="mt-6 text-sm">
        <Link href="/">← Back home</Link>
      </p>
    </div>
  );
}
