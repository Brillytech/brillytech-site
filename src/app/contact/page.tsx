"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import {
  Mail,
  Phone,
  MessageSquareText,
  Instagram,
  Twitter,
  Globe,
  Send,
  Newspaper,
  FileText,
} from "lucide-react";

/* FORMSPREE ENDPOINTS */
const QUOTE_FORM_URL = "https://formspree.io/f/xkogokqw";
const NEWS_FORM_URL = "https://formspree.io/f/mwvpdkld";

export default function Contact() {
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [newsLoading, setNewsLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    url: string,
    setLoading: (v: boolean) => void,
    message: string
  ) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(url, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      e.currentTarget.reset();
      setToastMessage(message);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 4000);
    } finally {
      setLoading(false);
    }
  }

  const channels = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:info@brillytech.com.ng",
      text: "info@brillytech.com.ng",
    },
    {
      icon: <MessageSquareText className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/2348126587077",
      text: "+234 812 658 7077",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      href: "tel:+2347042861087",
      text: "+234 704 286 1087",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "X (Twitter)",
      href: "https://x.com/Brillytech_Nets",
      text: "Brillytech_Nets",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/brillytech_networks",
      text: "brillytech_networks",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* GRADIENT BACKDROP — UNTOUCHED */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 0% 0%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-[320px] rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: "color-mix(in srgb, var(--accent) 28%, transparent)",
        }}
      />

      <div className="py-16 px-4 md:px-8 space-y-12">
        {/* CONTACT ROWS */}
        <div
          className="max-w-3xl mx-auto rounded-2xl"
          style={{
            border: "1px solid var(--border)",
            background: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <ul className="divide-y">
            {channels.map((c) => (
              <li key={c.label} className="py-4 px-5 flex items-center gap-4">
                <span
                  className="grid place-items-center h-10 w-10 rounded-full"
                  style={{
                    border: "1px solid var(--border)",
                    background:
                      "color-mix(in srgb, var(--text) 8%, transparent)",
                  }}
                >
                  <span className="text-[var(--accent)]">{c.icon}</span>
                </span>
                <div className="flex-1">
                  <div className="text-sm opacity-70">{c.label}</div>
                  <a
                    href={c.href}
                    className="font-semibold hover:underline"
                    style={{ color: "var(--text)" }}
                  >
                    {c.text}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* FORMS */}
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] max-w-6xl mx-auto">
          {/* QUOTE FORM */}
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                QUOTE_FORM_URL,
                setQuoteLoading,
                "✅ Quote request sent. We’ll reply shortly."
              )
            }
            className="rounded-2xl p-6 space-y-4"
            style={{
              border: "1px solid var(--border)",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--accent) 12%, var(--card)) 0%, var(--card) 65%)",
            }}
          >
            <h2
              className="text-xl font-bold flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              <FileText className="h-5 w-5" /> Get a Quote
            </h2>

            <Field label="Full Name">
              <Input name="name" required />
            </Field>

            <Field label="Email">
              <Input type="email" name="email" required />
            </Field>

            <Field label="Project Type">
              <Select name="project_type">
                <option>Website / Web App</option>
                <option>Mobile App</option>
                <option>Branding / Design</option>
                <option>Data / Analytics</option>
                <option>Other</option>
              </Select>
            </Field>

            <Field label="Budget">
              <Select name="budget">
                <option>Below ₦500k</option>
                <option>₦500k – ₦1.5m</option>
                <option>₦1.5m – ₦3m</option>
                <option>₦3m+</option>
              </Select>
            </Field>

            <Field label="Timeline">
              <Select name="timeline">
                <option>ASAP</option>
                <option>2–6 weeks</option>
                <option>6–12 weeks</option>
                <option>Flexible</option>
              </Select>
            </Field>

            <Field label="Project Brief">
              <Textarea name="message" rows={5} required />
            </Field>

            <button
              type="submit"
              disabled={quoteLoading}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium"
              style={{
                background: "var(--cta-btn-bg)",
                color: "var(--cta-btn-text)",
                border: "1px solid var(--border)",
              }}
            >
              <Send className="h-4 w-4" />
              {quoteLoading ? "Sending…" : "Request Quote"}
            </button>
          </form>

          {/* NEWSLETTER */}
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                NEWS_FORM_URL,
                setNewsLoading,
                "🎉 You’ve subscribed successfully."
              )
            }
            className="rounded-2xl p-6 space-y-4"
            style={{
              border: "1px solid var(--border)",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--text) 8%, var(--card)) 0%, var(--card) 70%)",
            }}
          >
            <h2
              className="text-xl font-bold flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              <Newspaper className="h-5 w-5" /> Subscribe
            </h2>

            <Field label="Email">
              <Input type="email" name="email" required />
            </Field>

            <button
              type="submit"
              disabled={newsLoading}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium"
              style={{
                background:
                  "color-mix(in srgb, var(--accent) 16%, transparent)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
            >
              <Globe className="h-4 w-4" />
              {newsLoading ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ TOAST VIA PORTAL — FIXED */}
      {showToast &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
                maxWidth: "420px",
              }}
            >
              <p className="font-semibold" style={{ color: "var(--text)" }}>
                {toastMessage}
              </p>
              <button
                onClick={() => setShowToast(false)}
                className="text-sm px-3 py-1.5 rounded-lg"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

/* HELPERS */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
        {label}
      </span>
      {children}
    </label>
  );
}

function baseFieldStyle() {
  return {
    border: "1px solid var(--border)",
    background: "color-mix(in srgb, var(--bg) 85%, transparent)",
    color: "var(--text)",
  } as React.CSSProperties;
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg px-3 py-2"
      style={baseFieldStyle()}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-lg px-3 py-2"
      style={baseFieldStyle()}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg px-3 py-2"
      style={baseFieldStyle()}
    />
  );
}
