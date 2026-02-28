"use client";

import { useEffect, useState } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Layers, BadgeCheck, Sparkles } from "lucide-react";

/* ---- knobs ---- */
const ROTATE_MS = 4200; // auto-rotate speed
const HERO_HEIGHT = "clamp(240px, 36vw, 360px)"; // frame size (smaller)

/* ---- shared surface ---- */
const card: React.CSSProperties = {
  border: "1px solid var(--border)",
  background: "var(--card)",
  boxShadow: "var(--shadow)",
  borderRadius: 20,
};
const innerStroke: React.CSSProperties = {
  pointerEvents: "none",
  position: "absolute",
  inset: 0,
  borderRadius: 20,
  boxShadow:
    "inset 0 1px 0 color-mix(in srgb, var(--text) 8%, transparent), inset 0 -1px 0 color-mix(in srgb, var(--text) 6%, transparent)",
};
const grain: React.CSSProperties = {
  pointerEvents: "none",
  position: "absolute",
  inset: 0,
  borderRadius: 20,
  opacity: 0.05,
  mixBlendMode: "multiply",
  backgroundImage:
    "radial-gradient(1px 1px at 25% 35%, #000 50%, transparent 51%), radial-gradient(1px 1px at 70% 65%, #000 50%, transparent 51%)",
  backgroundSize: "4px 4px, 3px 3px",
};

/* ---- slides ---- */
function SlideWordmark() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center text-center px-8"
      initial={{ scale: 1.02 }}
      animate={{ scale: 1 }}
      transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
    >
      <div>
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
          style={{
            border: "1px solid var(--border)",
            background: "color-mix(in srgb, var(--text) 6%, transparent)",
            color: "var(--muted)",
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          Brillytech
        </div>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Building Faster Futures
        </h2>
        <p className="mt-2 opacity-80">Code · Data · Design</p>
      </div>
    </motion.div>
  );
}

function SlideValues() {
  const items = [
    {
      icon: <Gauge />,
      title: "Fast, not frantic",
      desc: "We move quickly with weekly demos, without sacrificing quality.",
    },
    {
      icon: <Layers />,
      title: "Built to last",
      desc: "Clear architecture, proper docs, and reliable monitoring included.",
    },
    {
      icon: <BadgeCheck />,
      title: "Results that matter",
      desc: "We focus on features and outcomes your users can actually feel.",
    },
  ];

  return (
    <motion.div
      className="w-full h-full grid gap-4 p-5 md:p-8 md:grid-cols-3 text-sm"
      initial={{ scale: 1.02 }}
      animate={{ scale: 1 }}
      transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
    >
      {items.map((it) => (
        <div
          key={it.title}
          className="rounded-2xl p-3 md:p-4"
          style={{
            border: "1px solid var(--border)",
            background: "var(--card)",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-full grid place-items-center"
              style={{
                background:
                  "color-mix(in srgb, var(--accent) 16%, transparent)",
              }}
            >
              {it.icon}
            </div>
            <div className="font-semibold">{it.title}</div>
          </div>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            {it.desc}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

function SlideSince() {
  const stats = [
    { k: "35+", v: "Projects shipped" },
    { k: "78%", v: "Repeat clients" },
    { k: "3–6 wks", v: "Avg. delivery" },
  ];
  return (
    <motion.div
      className="w-full h-full flex items-center px-6 md:px-10"
      initial={{ scale: 1.02 }}
      animate={{ scale: 1 }}
      transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
    >
      <div className="w-full">
        <div
          className="text-xs uppercase tracking-wider opacity-70"
          style={{ color: "var(--muted)" }}
        >
          Since
        </div>
        <div className="text-5xl md:text-6xl font-extrabold leading-none">
          2020
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
          {stats.map((s) => (
            <div
              key={s.v}
              className="rounded-xl p-3 text-center"
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
              }}
            >
              <div className="text-lg font-semibold">{s.k}</div>
              <div style={{ color: "var(--muted)" }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const SLIDES = [
  <SlideWordmark key="w" />,
  <SlideValues key="v" />,
  <SlideSince key="s" />,
];

/* ---- hero ---- */
export default function AboutHeroStudio() {
  const [idx, setIdx] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % SLIDES.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full mb-10 md:mb-14">
      <div className="max-w-6xl mx-auto px-4 pt-14 md:pt-20 pb-12 md:pb-16">
        {/* badge */}
        <motion.p
          className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full"
          style={{
            background: "color-mix(in srgb, var(--text) 6%, transparent)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          About Brillytech
        </motion.p>

        {/* layout */}
        <div className="mt-6 grid gap-8 md:grid-cols-2 items-center">
          {/* MEDIA (fixed height, absolute slides) */}
          <div
            className="relative order-1 md:order-2 overflow-hidden h-[420px] md:h-[clamp(240px,36vw,360px)]"
            style={card}
          >
            <div style={innerStroke} />
            <div style={grain} />

            {/* subtle animated glow */}
            <motion.div
              className="pointer-events-none absolute -inset-2 rounded-[24px]"
              style={{
                background:
                  "linear-gradient(120deg, color-mix(in srgb, var(--accent) 9%, transparent), transparent 40%, color-mix(in srgb, var(--accent) 9%, transparent))",
                filter: "blur(14px)",
                opacity: 0.18,
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {SLIDES[idx]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COPY */}
          <div className="space-y-4 order-2 md:order-1">
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Reliable software.
              <br className="hidden md:block" /> Shipped calmly.
            </motion.h1>
            <motion.p
              className="max-w-[52ch]"
              style={{ color: "var(--muted)" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              From idea to deployment, we help teams launch quickly, stay
              focused, and ship products that actually make a difference.
            </motion.p>

            {/* dots */}
            <div className="flex gap-2 pt-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="h-2.5 rounded-full transition"
                  style={{
                    width: i === idx ? 22 : 14,
                    background:
                      i === idx
                        ? "var(--accent)"
                        : "color-mix(in srgb, var(--text) 14%, transparent)",
                    border: "1px solid var(--border)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
