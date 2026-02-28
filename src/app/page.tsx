"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import AnimatedHeadline from "../components/AnimatedHeadline";
import Modal from "../components/Modal";

// lucide-react
import {
  Code2,
  Database,
  Palette,
  Zap,
  Layers,
  FileText,
  CreditCard,
  Paintbrush,
  Rocket,
  MessageSquareMore,
  ShieldCheck,
  Boxes,
  Hourglass,
  BarChart3,
  ReceiptText,
} from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: 0.45, ease: "easeOut" },
  };

  const features = [
    { label: "Fullstack", Icon: Code2 },
    { label: "Data", Icon: Database },
    { label: "Brand/UX", Icon: Palette },
    { label: "Fast Delivery", Icon: Zap },
  ] as const;

  // 🔁 Updated tiles (Invoicing -> ClearBooks)
  const miniTiles = [
    { label: "Scalable", href: "#", Icon: ShieldCheck },
    { label: "ClearBooks", href: "/products/clearbooks", Icon: CreditCard },
    { label: "Brand Kit", href: "/products/brand-kit", Icon: Boxes },
  ] as const;

  // 🔁 Products — ClearBooks + Brand Kit (Coming soon)
  const productCards = [
    {
      href: "/products/clearbooks",
      title: "ClearBooks",
      desc: "Your personal accountant for businesses: daily analytics, plus invoices & receipts.",
      Icon: BarChart3, // analytics vibe
      badge: "Live",
      rightIcon: ReceiptText, // subtle hint to billing
    },
    {
      href: "/products/brand-kit",
      title: "Brand Kit Generator",
      desc: "Generate palettes, font pairs, and clean logo mockups from a name. One-click exports.",
      Icon: Paintbrush,
      badge: "Coming soon",
      rightIcon: Hourglass,
      comingSoon: true,
    },
  ] as const;

  const services = [
    {
      title: "Fullstack Development",
      desc: "Websites, Web Apps, and Mobile—built to scale.",
      Icon: Layers,
    },
    {
      title: "Data Solutions",
      desc: "Dashboards & insights that drive business decisions.",
      Icon: Database,
    },
    {
      title: "Brand & Tech Identity",
      desc: "Branding, UI/UX, and digital presence that stands out.",
      Icon: Palette,
    },
  ] as const;

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* HERO */}
      <Section
        bg={`linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 55%)`}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <p
            aria-label="Brillytech Networks tagline"
            className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full"
            style={{
              background: "color-mix(in srgb, var(--text) 6%, transparent)",
              border: `1px solid var(--border)`,
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Brillytech Networks • Code · Data · Design
          </p>

          <div className="mt-4">
            <AnimatedHeadline />
          </div>

          <p
            className="mt-4 text-base sm:text-lg max-w-[70ch]"
            style={{ color: "var(--muted)" }}
          >
            Fullstack Development • Data Solutions • Brand & Tech Identity. We
            ship fast, beautiful, and scalable products.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/products"
              className="btn btn-primary text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="Explore Products"
            >
              Explore Products
            </a>
            <a
              href="/services"
              className="btn btn-ghost text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="View Services"
            >
              Our Services
            </a>
          </div>

          {/* Pill features */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {features.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{
                  border: `1px solid var(--border)`,
                  background: "var(--card)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <Icon
                  size={16}
                  style={{ color: "var(--accent)" }}
                  aria-hidden
                />
                <span style={{ color: "var(--muted)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right/visual */}
        <motion.div
          className="rounded-2xl p-6 md:p-8"
          style={{
            border: `1px solid var(--border)`,
            background: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
          {...fadeUp}
        >
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Brillytech logo"
              className="h-12 w-12 rounded-md"
            />
            <div>
              <p className="font-semibold">Brillytech Networks</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Launch better, iterate faster.
              </p>
            </div>
          </div>

          {/* Mini tiles */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {miniTiles.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="rounded-xl p-4 text-center transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] hover:-translate-y-0.5"
                style={{
                  border: `1px solid var(--border)`,
                  background: "var(--bg)",
                }}
                aria-label={label}
              >
                <div
                  className="mx-auto h-10 w-10 rounded grid place-items-center"
                  style={{
                    color: "var(--accent)",
                    border: `1px dashed var(--border)`,
                  }}
                >
                  <Icon size={18} aria-hidden />
                </div>
                <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                  {label}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* PRODUCTS */}
      <Section bg={`color-mix(in srgb, var(--text) 3%, transparent)`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Products</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {productCards.map(
            ({
              href,
              title,
              desc,
              Icon,
              badge,
              rightIcon: RightIcon,
              comingSoon,
              bullets,
              kicker,
            }) => (
              <motion.a
                key={href}
                href={comingSoon ? "#" : href}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  comingSoon ? "pointer-events-none opacity-75" : ""
                }`}
                style={{
                  border: `1px solid var(--border)`,
                  background: "var(--card)",
                  boxShadow: "var(--shadow)",
                }}
                aria-label={title}
                aria-disabled={comingSoon ? true : undefined}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="h-10 w-10 rounded-xl grid place-items-center shrink-0"
                    style={{
                      color: "var(--accent)",
                      background:
                        "color-mix(in srgb, var(--accent) 12%, transparent)",
                      border: `1px solid var(--border)`,
                    }}
                  >
                    <Icon size={18} aria-hidden />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">
                        {title}
                        {kicker ? (
                          <span className="sr-only"> — {kicker}</span>
                        ) : null}
                      </h3>
                      <span
                        className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full"
                        style={{
                          color: "var(--accent)",
                          background:
                            "color-mix(in srgb, var(--accent) 12%, transparent)",
                          border: `1px solid var(--border)`,
                        }}
                      >
                        {badge}
                      </span>
                    </div>

                    <p className="mt-2" style={{ color: "var(--muted)" }}>
                      {desc}
                    </p>

                    {bullets?.length ? (
                      <ul
                        className="mt-3 space-y-1 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        {bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span
                              className="mt-[6px] h-1.5 w-1.5 rounded-full"
                              style={{ background: "var(--accent)" }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <span
                      className="inline-flex items-center gap-1 mt-4 group-hover:translate-x-0.5 transition-transform"
                      style={{ color: "var(--accent)" }}
                    >
                      {comingSoon ? "Notify me" : "Try demo"}
                      {comingSoon ? (
                        <Hourglass size={14} aria-hidden />
                      ) : (
                        <Rocket size={14} aria-hidden />
                      )}
                    </span>

                    {!comingSoon && RightIcon ? (
                      <div
                        className="mt-3 flex items-center gap-2 text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        <RightIcon size={14} aria-hidden />
                        <span>Analytics • Invoices • Receipts</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.a>
            )
          )}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        bg={`linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--accent) 6%, transparent) 100%)`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">What we do</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, Icon }) => (
            <motion.div
              key={title}
              className="rounded-2xl p-6 hover:-translate-y-1 transition will-change-transform"
              style={{
                border: `1px solid var(--border)`,
                background: "var(--card)",
                boxShadow: "var(--shadow)",
              }}
              {...fadeUp}
            >
              <div className="flex items-start gap-3">
                <div
                  className="h-10 w-10 rounded-xl grid place-items-center shrink-0"
                  style={{
                    color: "var(--accent)",
                    background:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                    border: `1px solid var(--border)`,
                  }}
                >
                  <Icon size={18} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2" style={{ color: "var(--muted)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        bg={`var(--cta-bg)`}
        className="md:flex md:items-center md:justify-between text-center md:text-left"
      >
        <div>
          <h3 className="text-2xl font-bold">Ready to build?</h3>
          <p className="mt-1 opacity-80">
            Tell us your idea. We’ll ship the first version fast.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3 justify-center">
          <a
            href="/contact"
            className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{
              background: "var(--cta-btn-bg)",
              color: "var(--cta-btn-text)",
            }}
          >
            Talk to us
          </a>
          <button
            className="btn btn-ghost focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <MessageSquareMore className="mr-2" size={16} aria-hidden />
            Quick chat
          </button>
        </div>
      </Section>

      {/* Popup */}
      <Modal open={open} onClose={() => setOpen(false)} title="Quick chat">
        Drop your brief, timeline, and budget range. We’ll suggest the fastest
        path to launch.
      </Modal>
    </div>
  );
}
