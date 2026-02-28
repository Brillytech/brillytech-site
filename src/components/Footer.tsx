"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mwvpkdlb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer
      className="w-full border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="px-5 sm:px-8 md:px-12 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Brillytech" className="h-8 w-8" />
              <span className="font-semibold">Brillytech Networks</span>
            </a>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
              We build websites, apps, data dashboards, and brand experiences
              that ship fast and scale.
            </p>
            {/* Social icons */}
            <div className="mt-4 flex gap-3">
              <a
                aria-label="Twitter"
                href="https://x.com/Brillytech_Nets"
                className="rounded-md p-2 border"
                style={{ borderColor: "var(--border)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.49-4.18 11.82-11.82 11.82-2.35 0-4.53-.69-6.37-1.88.33.04.65.05.99.05 1.95 0 3.75-.66 5.18-1.78a4.17 4.17 0 0 1-3.9-2.9c.26.04.52.07.8.07.38 0 .75-.05 1.1-.15a4.17 4.17 0 0 1-3.34-4.09v-.05c.56.31 1.2.5 1.88.53a4.17 4.17 0 0 1-1.86-3.47c0-.77.2-1.49.56-2.12a11.83 11.83 0 0 0 8.58 4.35 4.7 4.7 0 0 1-.1-.95 4.17 4.17 0 0 1 7.21-2.85 8.21 8.21 0 0 0 2.64-1 4.2 4.2 0 0 1-1.83 2.3 8.38 8.38 0 0 0 2.4-.66 8.96 8.96 0 0 1-2.08 2.15z" />
                </svg>
              </a>

              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/oluwadarasimi-anibaba-53235b27a/"
                className="rounded-md p-2 border"
                style={{ borderColor: "var(--border)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0H12v2.05h.06c.63-1.2 2.18-2.46 4.49-2.46 4.8 0 5.69 3.16 5.69 7.27V23H17v-6.73c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.74-2.58 3.54V23H7.5V8z" />
                </svg>
              </a>

              <a
                aria-label="GitHub"
                href="https://github.com/Brillytech"
                className="rounded-md p-2 border"
                style={{ borderColor: "var(--border)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.22.08 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1.01.11-.78.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.02-.33 3.34 1.23a11.6 11.6 0 0 1 6.08 0c2.32-1.56 3.34-1.23 3.34-1.23.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold">Services</div>
            <ul
              className="mt-3 space-y-2 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>
                <a href="/services">Fullstack Development</a>
              </li>
              <li>
                <a href="/services">Data Solutions</a>
              </li>
              <li>
                <a href="/services">Brand & Tech Identity</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="font-semibold">Products</div>
            <ul
              className="mt-3 space-y-2 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>
                <a href="/products/invoicing">Smart Invoicing (Lite)</a>
              </li>
              <li>
                <a href="/products/brand-kit">Brand Kit Generator (Lite)</a>
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <div className="font-semibold">Contact</div>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
              info@brillytech.com.ng • Lagos, NG
            </p>

            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-md px-3 py-2 text-sm border"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                }}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="px-3 py-2 rounded-md text-sm text-white"
                style={{ background: "var(--accent)" }}
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-2 text-xs text-green-400">
                Thanks for subscribing 🎉
              </p>
            )}

            {status === "error" && (
              <p className="mt-2 text-xs text-red-400">
                Something went wrong. Try again.
              </p>
            )}

            <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
              🔒 No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-xs flex flex-wrap items-center justify-between gap-3 border-t"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          <span>
            © {new Date().getFullYear()} Brillytech Networks. All rights
            reserved.
          </span>
          <div className="space-x-4">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
