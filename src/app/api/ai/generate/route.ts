import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { prompt, size = "512x512" } = await req.json();
    if (!prompt) {
      return NextResponse.json(
        { code: "BAD_REQUEST", message: "Prompt is required" },
        { status: 400 }
      );
    }
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { code: "SERVER_CONFIG", message: "API key missing" },
        { status: 500 }
      );
    }

    const img = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      size,
    });

    const b64 = img.data?.[0]?.b64_json;
    if (!b64) {
      return NextResponse.json(
        { code: "NO_IMAGE", message: "Model returned no image" },
        { status: 502 }
      );
    }

    return NextResponse.json({ image_b64: b64 });
  } catch (err: any) {
    const msg = String(err?.message || "");
    // Map common OpenAI messages to cleaner codes
    if (msg.toLowerCase().includes("hard limit")) {
      return NextResponse.json(
        {
          code: "OPENAI_LIMIT",
          message: "Billing hard limit has been reached",
        },
        { status: 402 }
      );
    }
    if (msg.toLowerCase().includes("invalid api key")) {
      return NextResponse.json(
        { code: "OPENAI_AUTH", message: "Invalid API key" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { code: "OPENAI_ERROR", message: msg || "Generation failed" },
      { status: 500 }
    );
  }
}
