"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ background: "var(--bg)" }}
    >
      <div className="px-5 sm:px-8 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          style={{ color: "var(--text)" }}
        >
          <img src="/logo.png" alt="Brillytech" className="h-8 w-8" />
          <span className="font-semibold text-lg">Brillytech</span>
        </a>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex items-center gap-6 text-sm"
          style={{ color: "var(--text)" }}
        >
          <a href="/" className="hover:opacity-80">
            Home
          </a>
          <a href="/about" className="hover:opacity-80">
            About
          </a>
          <a href="/services" className="hover:opacity-80">
            Services
          </a>
          <a href="/products" className="hover:opacity-80">
            Products
          </a>
          <a
            href="/contact"
            className="px-3 py-1 rounded-md text-white"
            style={{ background: "var(--accent)" }}
          >
            Contact
          </a>

          {/* favicon-only theme toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          style={{ borderColor: "var(--border)", color: "var(--text)" }}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg)" }}
        >
          <div
            className="px-5 sm:px-8 md:px-12 py-3 flex flex-col gap-3"
            style={{ color: "var(--text)" }}
          >
            <a onClick={() => setOpen(false)} href="/">
              Home
            </a>
            <a onClick={() => setOpen(false)} href="/about">
              About
            </a>
            <a onClick={() => setOpen(false)} href="/services">
              Services
            </a>
            <a onClick={() => setOpen(false)} href="/products">
              Products
            </a>
            <a
              onClick={() => setOpen(false)}
              href="/contact"
              className="w-fit px-3 py-2 rounded-md text-white"
              style={{ background: "var(--accent)" }}
            >
              Contact
            </a>

            <div className="flex items-center gap-3 mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
