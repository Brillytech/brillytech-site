import { NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure this route is always treated as dynamic (prevents static data collection issues)
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;

  // ✅ IMPORTANT: do NOT set apiVersion here (avoids TS mismatch + future errors)
  return new Stripe(key);
}

export async function POST(req: Request) {
  try {
    const stripe = getStripe();

    // ✅ If Stripe env isn't set yet, don't crash build/deploy
    if (!stripe) {
      return NextResponse.json(
        { ok: false, message: "Stripe is not configured yet." },
        { status: 503 },
      );
    }

    const body = await req.json().catch(() => ({}) as any);

    // ---- Your existing logic goes here ----
    // Example (leave/adjust to your current implementation):
    const { priceId, successUrl, cancelUrl } = body || {};

    if (!priceId || !successUrl || !cancelUrl) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    // Never crash build/runtime
    return NextResponse.json(
      { ok: false, message: "Checkout failed." },
      { status: 500 },
    );
  }
}
