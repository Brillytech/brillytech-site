"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <motion.div
            className="relative w-[92vw] max-w-md rounded-2xl p-6"
            style={{
              background: "var(--bg)",
              color: "var(--text)",
              border: `1px solid var(--border)`,
              boxShadow: "var(--shadow)",
            }}
            initial={{ scale: 0.98, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 12, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-lg font-semibold">{title}</div>
            <div className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
              {children}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button className="btn btn-ghost" onClick={onClose}>
                Close
              </button>
              <a href="/contact" className="btn btn-primary">
                Go to Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
