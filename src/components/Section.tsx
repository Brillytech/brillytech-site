"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string; // inner content classes
  bg?: string; // full-bleed background (solid or gradient)
  id?: string;
};

export default function Section({ children, className = "", bg, id }: Props) {
  return (
    <section
      id={id}
      className="w-full"
      style={bg ? { background: bg } : undefined}
    >
      <motion.div
        className={`px-5 sm:px-8 md:px-12 py-14 md:py-20 ${className}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
