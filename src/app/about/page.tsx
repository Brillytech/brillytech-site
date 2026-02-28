// src/app/about/page.tsx
import type { Metadata } from "next";
import Section from "../../components/Section";
import AboutHeroStudio from "../../components/AboutHeroStudio"; // <-- studio hero

import {
  Sparkles,
  BookOpen,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Brillytech Networks",
  description:
    "Brillytech Networks — simple, innovative, and reliable digital products for real people and real teams.",
};

export default function About() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* HERO — same diagonal gradient as Home */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 55%)",
        }}
      >
        {/* optional faint glows for extra depth */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <AboutHeroStudio />
      </section>

      {/* WHO WE ARE */}
      <Section bg={`color-mix(in srgb, var(--text) 3%, transparent)`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Who We Are</h2>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            border: `1px solid var(--border)`,
            background: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="h-10 w-10 rounded-full grid place-items-center"
              style={{
                background:
                  "color-mix(in srgb, var(--accent) 12%, transparent)",
              }}
            >
              <Sparkles className="h-5 w-5" />
            </div>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Brillytech Networks is a lean product studio: we design, build,
              and ship digital tools that help people work faster and smarter.
              Our team blends full-stack engineering with clean UX so each
              release is stable, accessible, and easy to maintain. We don’t
              chase trends—we deliver outcomes you can put in front of users and
              stakeholders with confidence.
            </p>
          </div>
        </div>
      </Section>

      {/* OUR STORY */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            border: `1px solid var(--border)`,
            background: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="h-10 w-10 rounded-full grid place-items-center"
              style={{
                background:
                  "color-mix(in srgb, var(--accent) 12%, transparent)",
              }}
            >
              <BookOpen className="h-5 w-5" />
            </div>
            <div
              className="space-y-3 text-[15px]"
              style={{ color: "var(--muted)" }}
            >
              <p>
                Brillytech started in 2020 during lockdown—born from a simple
                idea:
                <em>ship calm software that actually gets used</em>. What began
                as evening experiments became a studio serving students, small
                businesses, and growing teams across Nigeria and beyond.
              </p>
              <p>
                Led by <strong>Anibaba Oluwadarasimi Brilliance</strong> (CTO),
                we matured from front-end gigs into full product
                cycles—strategy, design systems, APIs, data pipelines, and
                platform ops. Every project sharpened our craft: shorter cycles,
                stronger testing, clearer docs.
              </p>
              <p>
                Along the way we built internal tools that later became
                products—like our Brand Kit Generator and Smart
                Invoicing—because clients kept asking for the same reliable,
                lightweight solutions.
              </p>
              <p>
                Today we focus on predictable delivery: scoped work, weekly
                demos, and measurable wins. Calm teams ship more—so we keep it
                calm.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* VISION & MISSION */}
      <Section bg={`color-mix(in srgb, var(--text) 3%, transparent)`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Vision & Mission
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <div
            className="rounded-2xl p-6 md:p-7"
            style={{
              border: `1px solid var(--border)`,
              background: "var(--card)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="h-10 w-10 rounded-full grid place-items-center"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
              >
                <Target className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Our Mission</div>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                  Build calm, reliable software that removes friction from
                  everyday work— for students, creators, Educators, and growing
                  businesses across Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div
            className="rounded-2xl p-6 md:p-7"
            style={{
              border: `1px solid var(--border)`,
              background: "var(--card)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="h-10 w-10 rounded-full grid place-items-center"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
              >
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Our Vision</div>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                  To become Africa’s most trusted hub for smart digital
                  products, empowering people to work faster, earn more, and
                  live better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">What We Do</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Product Design & Development",
              desc: "From concept to deployment, we design, build, and refine software that solves real problems with clean UX and stable code.",
            },
            {
              title: "Tools for Students & Creators",
              desc: "Lightweight apps and utilities that help people stay productive, organized, and ahead in their craft.",
            },
            {
              title: "Business Solutions",
              desc: "Simple, practical tools for small businesses—billing, branding, and workflows that remove friction without heavy overhead.",
            },
            {
              title: "R&D Experiments",
              desc: "We test and prototype new ideas like SmartRehab, exploring how technology can reshape health, learning, and everyday life.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6"
              style={{
                border: `1px solid var(--border)`,
                background: "var(--card)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5"
                  style={{ color: "var(--accent)" }}
                />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* OUR PROMISE */}
      <Section bg={`color-mix(in srgb, var(--text) 3%, transparent)`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Promise</h2>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            border: `1px solid var(--border)`,
            background: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div
            className="space-y-4 text-[15px]"
            style={{ color: "var(--muted)" }}
          >
            <p>
              We keep projects small, transparent, and shippable. You get
              maintainable code, clean UI, and honest timelines—no noise.
            </p>
            <ul className="space-y-3">
              {[
                {
                  icon: (
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                  ),
                  text: (
                    <>
                      <strong>Quality by default:</strong> type-safe code,
                      accessibility checks, and basic tests.
                    </>
                  ),
                },
                {
                  icon: <Sparkles className="h-4 w-4 text-[var(--accent)]" />,
                  text: (
                    <>
                      <strong>Weekly demos:</strong> see work early, change
                      course quickly.
                    </>
                  ),
                },
                {
                  icon: <BookOpen className="h-4 w-4 text-[var(--accent)]" />,
                  text: (
                    <>
                      <strong>Docs & handover:</strong> short guides so your
                      team can run without us.
                    </>
                  ),
                },
                {
                  icon: <Target className="h-4 w-4 text-[var(--accent)]" />,
                  text: (
                    <>
                      <strong>Performance first:</strong> fast loads, sensible
                      caching, and simple infra.
                    </>
                  ),
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        bg={`var(--cta-bg)`}
        className="md:flex md:items-center md:justify-between text-center md:text-left"
      >
        <div>
          <h3 className="text-2xl font-bold">Join us on this journey</h3>
          <p className="mt-1" style={{ color: "var(--muted)" }}>
            Explore our products today — let’s build the future together.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3 justify-center">
          <a
            href="/products"
            className="btn"
            style={{
              background: "var(--cta-btn-bg)",
              color: "var(--cta-btn-text)",
            }}
          >
            Explore Products <ArrowRight className="inline h-4 w-4 ml-1" />
          </a>
        </div>
      </Section>
    </div>
  );
}
