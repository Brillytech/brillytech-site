import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseServer } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

// Map your Stripe Price IDs to credit amounts
const CREDIT_MAP: Record<string, number> = {
  // REPLACE these keys with real Stripe Price IDs
  price_STARTER_20: 20,
  price_PRO_100: 100,
  price_STUDIO_300: 300,
};

export async function POST(req: Request) {
  const { priceId } = await req.json();

  if (!priceId || !CREDIT_MAP[priceId]) {
    return NextResponse.json({ error: "Invalid priceId" }, { status: 400 });
  }

  const sb = supabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user)
    return NextResponse.json({ error: "Login required" }, { status: 401 });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/billing/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/billing/cancel`,
    metadata: {
      user_id: user.id,
      credits: String(CREDIT_MAP[priceId]),
    },
  });

  return NextResponse.json({ url: session.url });
}
