// Site-only launch stub. Replace with real Supabase when products go live.
import "server-only";

export function supabaseServer() {
  return {
    auth: {
      async getUser() {
        return { data: { user: null } };
      },
    },
  } as any;
}

export default supabaseServer;
