"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function CreditsBadge() {
  const { data } = useSWR("/api/me", fetcher, { refreshInterval: 15000 });
  const credits = data?.credits ?? 0;

  return (
    <a
      href="/pricing"
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <span>💳</span>
      <span>{Number(credits).toFixed(1)} credits</span>
    </a>
  );
}
