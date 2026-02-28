// src/app/products/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Section from "../../components/Section";
import {
  Receipt,
  WalletMinimal,
  Palette,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Brillytech Networks",
  description:
    "Simple, reliable tools from Brillytech. Start with Smart Invoicing — your pocket accountant.",
};

/* ---------------- Types ---------------- */
type Product = {
  title: string;
  slug: string;
  desc: string;
  points: string[];
  status: "available" | "coming-soon";
  ctaText: string;
  ctaHref: string;
  img?: string; // optional media
  icon?: React.ReactNode; // lucide fallback
};

/* ---------------- Constants ---------------- */
const INVOICE_URL = "https://invoice.brillytech.com"; // external app
const COMING_SOON_IMG = "/coming-soon.jpg"; // matches your file in /public

/* ---------------- Tiny UI atoms ---------------- */
const Dot = ({ className = "" }) => (
  <span
    className={`inline-block h-1.5 w-1.5 rounded-full align-middle ${className}`}
    style={{ background: "var(--accent)" }}
  />
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs"
    style={{
      border: "1px solid var(--border)",
      background: "color-mix(in srgb, var(--text) 6%, transparent)",
      color: "var(--muted)",
    }}
  >
    {children}
  </span>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M13 5h6v6m0-6L10 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------------- Billboard (no cards, full-bleed) ---------------- */
function Billboard({
  title,
  desc,
  points,
  ctaText,
  ctaHref,
  img,
  icon,
}: Omit<Product, "status" | "slug">) {
  const isExternal = /^https?:/i.test(ctaHref);

  return (
    <Section
      bg={`radial-gradient(60% 80% at 0% 0%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 60%)`}
    >
      <div className="relative overflow-hidden rounded-[28px] p-6 md:p-10">
        {/* floating accent blob */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-[320px] rounded-full opacity-25 blur-3xl"
          style={{
            background: "color-mix(in srgb, var(--accent) 28%, transparent)",
          }}
        />

        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* copy */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Dot />
              <Badge>Live</Badge>
              <Badge>Separate site</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              {title}
            </h1>
            <p className="mt-3 max-w-[60ch]" style={{ color: "var(--muted)" }}>
              {desc}
            </p>

            <ul
              className="mt-5 space-y-2 text-sm"
              style={{ color: "var(--muted)" }}
            >
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Dot className="mt-1" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={ctaHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent) 16%, transparent)",
                  border: "1px solid var(--border)",
                }}
              >
                {ctaText}
                {isExternal ? <ExternalIcon /> : <span aria-hidden>→</span>}
              </a>
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                Open in a new tab
              </span>
            </div>
          </div>

          {/* media */}
          <div>
            <div className="relative aspect-[16/10] max-h-[340px] rounded-3xl overflow-hidden">
              {img ? (
                <Image
                  src={img}
                  alt="Smart Invoicing dashboard preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 md:p-8"
                  priority
                />
              ) : (
                <div className="h-full w-full grid place-items-center">
                  <div
                    className="rounded-2xl grid place-items-center"
                    style={{
                      height: 110,
                      width: 110,
                      border: "1px solid var(--border)",
                      background:
                        "color-mix(in srgb, var(--text) 6%, transparent)",
                    }}
                  >
                    {icon ?? <Receipt className="h-8 w-8" />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Minimal List Rows (no cards, just lines) ---------------- */
function ProductLine({
  title,
  desc,
  points,
  ctaText,
  ctaHref,
  img,
  icon,
  status,
}: Product) {
  const isSoon = status === "coming-soon";
  const isExternal = /^https?:/i.test(ctaHref);
  const mediaSrc = isSoon ? COMING_SOON_IMG : img;

  return (
    <li
      className="group grid items-center gap-4 md:grid-cols-[200px,1fr,auto] py-4"
      style={{
        borderBottom:
          "1px dashed color-mix(in srgb, var(--text) 14%, transparent)",
      }}
    >
      {/* media (bigger size now 200x120) */}
      <div className="relative w-[200px] h-[120px] rounded-xl overflow-hidden">
        {mediaSrc ? (
          <Image
            src={mediaSrc}
            alt={`${title} preview`}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className="h-full w-full grid place-items-center rounded-xl"
            style={{
              border: "1px dashed var(--border)",
              background: "color-mix(in srgb, var(--text) 5%, transparent)",
            }}
          >
            {icon ?? <Palette className="h-5 w-5" />}
          </div>
        )}
        {isSoon && (
          <span
            className="absolute bottom-1 left-1 right-1 text-[10px] text-center rounded px-1 py-0.5"
            style={{
              background:
                "color-mix(in srgb, var(--bg) 60%, var(--accent) 10%)",
              border: "1px solid var(--border)",
            }}
          >
            Coming soon
          </span>
        )}
      </div>

      {/* copy */}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          <Badge>{isSoon ? "Coming soon" : "Live"}</Badge>
        </div>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
          {desc}
        </p>
        {!!points?.length && (
          <p
            className="mt-2 text-xs sm:text-sm"
            style={{ color: "var(--muted)" }}
          >
            {points.map((p, i) => (
              <React.Fragment key={i}>
                <span>{p}</span>
                {i < points.length - 1 && (
                  <span className="mx-2" aria-hidden>
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>

      {/* action */}
      <div className="justify-self-end">
        <a
          href={ctaHref}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition"
          style={{
            background: isSoon
              ? "color-mix(in srgb, var(--text) 6%, transparent)"
              : "color-mix(in srgb, var(--accent) 12%, transparent)",
            border: "1px solid var(--border)",
          }}
        >
          {ctaText}
          {isExternal ? <ExternalIcon /> : <span aria-hidden>→</span>}
        </a>
      </div>
    </li>
  );
}

/* ---------------- Page ---------------- */
export default function ProductsPage() {
  // LIVE hero product (external app)
  const smartInvoicing: Omit<Product, "status" | "slug"> = {
    title: "Smart Invoicing",
    desc: "Your pocket accountant. Send invoices, track expenses, and monitor cashflow — without spreadsheet wahala.",
    points: [
      "Branded invoices & receipts",
      "Expense logging with categories",
      "Cashflow dashboard (income vs spend)",
      "Automated reminders & payment status",
    ],
    ctaText: "Open Smart Invoicing",
    ctaHref: INVOICE_URL, // open external app
    img: "/data.png", // changed from missing /invoicing-dashboard.png
    icon: <WalletMinimal className="h-8 w-8" />,
  };

  // COMING SOON items (still visible)
  const rows: Product[] = [
    {
      title: "Brillytech Studio",
      slug: "studio",
      desc: "Your brand’s central hub — identity, assets, and templates in one calm platform.",
      points: [
        "Brand kit (logo, palette, typography)",
        "Templates for posts & presentations",
        "Share guidelines with teammates",
      ],
      status: "coming-soon",
      ctaText: "Join waitlist",
      ctaHref: "/contact?interest=studio",
      img: "/brand.png",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      title: "Brillytech LMS",
      slug: "lms",
      desc: "Create courses, quizzes, and certifications. Track learner progress with clean dashboards.",
      points: [
        "Course builder & modules",
        "Quizzes, assignments, certificates",
        "Student dashboards & payments",
      ],
      status: "coming-soon",
      ctaText: "Join waitlist",
      ctaHref: "/contact?interest=lms",
      img: "/data.png",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "LaunchPad Ads",
      slug: "launchpad-ads",
      desc: "Plan and track social campaigns in one place. Creative that converts, results you can see.",
      points: [
        "Creative templates",
        "Audience presets",
        "Performance dashboard",
      ],
      status: "coming-soon",
      ctaText: "Join waitlist",
      ctaHref: "/contact?interest=launchpad-ads",
      img: "/brand.png",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* PAGE INTRO */}
      <Section
        bg={`linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 55%)`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Dot />
          <span
            className="text-xs sm:text-sm px-2 py-0.5 rounded-full"
            style={{
              border: "1px solid var(--border)",
              background: "color-mix(in srgb, var(--text) 6%, transparent)",
              color: "var(--muted)",
            }}
          >
            Brillytech Networks • Code • Data • Design
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">Products</h1>
        <p className="max-w-[60ch] mt-2" style={{ color: "var(--muted)" }}>
          Simple, reliable tools that help you work smarter. Start with Smart
          Invoicing — now live on its own site. Other products are coming soon.
        </p>
      </Section>

      {/* HERO (Billboard for Smart Invoicing) */}
      <Billboard
        title={smartInvoicing.title}
        desc={smartInvoicing.desc}
        points={smartInvoicing.points}
        ctaText={smartInvoicing.ctaText}
        ctaHref={smartInvoicing.ctaHref}
        img={smartInvoicing.img}
        icon={smartInvoicing.icon}
      />

      {/* COMING SOON HEADER */}
      <Section>
        <h2 className="text-xl font-bold mb-1 inline-flex items-center gap-2">
          <Sparkles className="h-5 w-5" /> Coming soon
        </h2>
        <p className="mb-2 text-sm" style={{ color: "var(--muted)" }}>
          These are in the works. Join the waitlist to get early access and help
          us shape what we build.
        </p>
        <div
          className="h-px"
          style={{
            background: "color-mix(in srgb, var(--text) 16%, transparent)",
          }}
        />
      </Section>

      {/* COMING SOON LIST (minimal lines, no cards) */}
      <Section>
        <ul className="-mt-4">
          {rows.map((p) => (
            <ProductLine key={p.slug} {...p} />
          ))}
        </ul>
      </Section>

      {/* FINAL CTA */}
      <Section className="md:flex md:items-center md:justify-between text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold">
            Want early access to new tools?
          </h3>
          <p className="mt-1" style={{ color: "var(--muted)" }}>
            Tell us what you’re building; we’ll share betas when they’re ready.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="/contact?topic=products"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition"
            style={{
              background: "var(--cta-btn-bg)",
              color: "var(--cta-btn-text)",
              border: "1px solid var(--border)",
            }}
          >
            Join waitlist <span aria-hidden>→</span>
          </a>
        </div>
      </Section>
    </div>
  );
}
