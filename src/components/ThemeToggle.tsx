"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const t = (localStorage.getItem("theme") as "light" | "dark") || "dark";
    document.documentElement.dataset.theme = t;
    setTheme(t);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="h-9 w-9 rounded-full grid place-items-center border"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
        color: "var(--text)", // ensures icon is visible
      }}
    >
      {theme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  );
}
