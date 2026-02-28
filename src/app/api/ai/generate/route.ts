import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // ✅ Prevent build-time crash if env var is missing
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not set" },
      { status: 503 },
    );
  }

  // If you still want to keep your logic later, put it below.
  // For now, return a placeholder so deploy can succeed.
  return NextResponse.json(
    { ok: true, message: "AI route is enabled (key present)." },
    { status: 200 },
  );
}
