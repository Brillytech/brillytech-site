import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

export async function GET() {
  const sb = supabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ user: null, credits: 0 });

  const { data } = await sb
    .from("profiles")
    .select("credits")
    .eq("user_id", user.id)
    .single();
  return NextResponse.json({
    user: { id: user.id },
    credits: data?.credits ?? 0,
  });
}
