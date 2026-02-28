import type { Metadata } from "next";
import Section from "../../components/Section";
import ServiceRow, { type Service } from "./ServiceRow";

export const metadata: Metadata = {
  title: "Services — Brillytech Networks",
  description:
    "Fullstack development, data solutions, social media ads, and brand/tech identity — delivered calmly and predictably.",
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Fullstack Development",
      desc: "Websites, web apps, and mobile apps built with modern stacks. Clean architecture, fast performance, and code your team can own.",
      bullets: [
        "Next.js + TypeScript + API design",
        "Mobile apps with React Native/Expo",
        "Performance budgets & accessibility",
      ],
      img: "/fullstack.png",
    },
    {
      title: "Data Solutions",
      desc: "Dashboards and internal tools that turn raw data into decisions. From ETL pipelines to clear, actionable views.",
      bullets: [
        "Analytics dashboards & reporting",
        "Simple pipelines for data collection",
        "Role-based access & audit trails",
      ],
      img: "/data.png",
    },
    {
      title: "Brand & Tech Identity",
      desc: "Design systems, UX, and brand assets that keep your product cohesive across screens and channels.",
      bullets: [
        "Design systems & UI kits",
        "Brand kit (logo, palette, type)",
        "UX reviews & usability fixes",
      ],
      img: "/brand.png",
    },
    {
      title: "Social Media Advertising",
      desc: "We create impactful social campaigns that reach the right audience and boost your business growth.",
      bullets: [
        "Targeted ads on Facebook, Instagram, and TikTok",
        "Creative visuals and ad copy that convert",
        "Performance tracking & campaign optimization",
      ],
      img: "/social-tree-bro.png",
    },
  ];

  const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const anchors = services.map((s) => ({ id: slug(s.title), label: s.title }));

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Intro band */}
      <Section
        bg={`linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 55%)`}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Our Services</h1>
        <p className="max-w-[60ch]" style={{ color: "var(--muted)" }}>
          We scope clearly, build in short cycles, and ship calmly. Pick a
          starting point below — we’ll tailor a plan to your team.
        </p>
      </Section>

      {/* Quick-jump pills */}
      <Section>
        <div className="flex flex-wrap gap-2">
          {anchors.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="px-3 py-1.5 rounded-full text-sm transition border"
              style={{
                border: "1px solid var(--border)",
                background: "color-mix(in srgb, var(--text) 6%, transparent)",
                color: "var(--muted)",
              }}
            >
              {a.label}
            </a>
          ))}
        </div>
      </Section>

      {/* Stacked service sections */}
      {services.map((s, i) => (
        <ServiceRow key={s.title} {...s} index={i} />
      ))}

      {/* CTA */}
      <Section
        bg={`var(--cta-bg)`}
        className="md:flex md:items-center md:justify-between text-center md:text-left"
      >
        <div>
          <h3 className="text-2xl font-bold">Let’s build your next release</h3>
          <p className="mt-1" style={{ color: "var(--muted)" }}>
            Tell us what you’re trying to ship — we’ll propose a calm, practical
            path to get there.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="/contact"
            className="btn"
            style={{
              background: "var(--cta-btn-bg)",
              color: "var(--cta-btn-text)",
            }}
          >
            Start a Project
          </a>
        </div>
      </Section>
    </div>
  );
}
