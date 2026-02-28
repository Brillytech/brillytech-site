// Site-only launch stub. Replace with real Supabase when products go live.
export function createClient() {
  return {
    auth: {
      async getUser() {
        return { data: { user: null } };
      },
      onAuthStateChange() {
        return { data: { subscription: { unsubscribe() {} } } } as any;
      },
      async signOut() {
        return { error: null };
      },
    },
  } as any;
}
