"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Digital", "Reliable", "Faster", "Beautiful"];

export default function AnimatedHeadline() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <h1
      className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
      style={{ fontFamily: "Poppins, Inter, sans-serif" }}
    >
      Building{" "}
      <span style={{ color: "var(--accent)" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>{" "}
      Futures
    </h1>
  );
}
