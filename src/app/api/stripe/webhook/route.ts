import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig)
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const raw = await req.text();

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-06-20",
    });
    const event = stripe.webhooks.constructEvent(
      raw,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.user_id;
      const credits = Number(session.metadata?.credits || 0);

      if (userId && credits > 0) {
        const admin = supabaseAdmin();
        // topup_credits RPC recommended (with idempotency)
        await admin.rpc("topup_credits", {
          p_user_id: userId,
          p_amount: credits,
          p_reason: "purchase",
          p_request_id: session.id,
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
