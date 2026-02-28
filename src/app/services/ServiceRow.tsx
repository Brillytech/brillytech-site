"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import Section from "../../components/Section";

export type Service = {
  title: string;
  desc: string;
  bullets: string[];
  img?: string;
};

export default function ServiceRow({
  title,
  desc,
  bullets,
  img,
  index,
}: Service & { index: number }) {
  const imgFirst = index % 2 === 0;
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <Section
      id={id}
      bg={
        index % 2 === 0
          ? `linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 55%)`
          : undefined
      }
    >
      <MotionConfig reducedMotion="user">
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
        >
          {/* card/band */}
          <div
            className="group relative grid items-center gap-8 md:gap-12 md:grid-cols-2 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              border: "1px solid var(--border)",
              background: "var(--card)",
              boxShadow: "var(--shadow)",
              padding: "26px",
            }}
          >
            {/* inner glossy stroke */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                boxShadow:
                  "inset 0 1px 0 color-mix(in srgb, var(--text) 8%, transparent), inset 0 -1px 0 color-mix(in srgb, var(--text) 6%, transparent)",
              }}
            />

            {/* IMAGE */}
            <div className={imgFirst ? "order-1" : "order-2 md:order-1"}>
              {img ? (
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`${title} — Brillytech Services`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 md:p-6 transition-transform duration-300 md:group-hover:scale-[1.02] md:group-hover:-translate-y-0.5"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ) : null}
            </div>

            {/* COPY */}
            <div className={imgFirst ? "order-2" : "order-1 md:order-2"}>
              <motion.h3
                className="text-xl md:text-2xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                {title}
              </motion.h3>

              <motion.p
                className="mt-2 text-sm md:text-[15px]"
                style={{ color: "var(--muted)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                {desc}
              </motion.p>

              <motion.ul
                className="mt-4 space-y-2 text-sm"
                style={{ color: "var(--muted)" }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
                  },
                }}
              >
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* micro CTA */}
              <div className="mt-5">
                <a
                  href={`/contact?service=${encodeURIComponent(title)}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition border"
                  style={{
                    border: "1px solid var(--border)",
                    background:
                      "color-mix(in srgb, var(--accent) 10%, transparent)",
                  }}
                >
                  Get a quote <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </MotionConfig>
    </Section>
  );
}
