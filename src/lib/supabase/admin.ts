// site-only stub: admin client disabled
export function supabaseAdmin() {
  return {
    from() {
      return {
        insert: async () => ({
          data: null,
          error: { message: "admin disabled" },
        }),
        update: async () => ({
          data: null,
          error: { message: "admin disabled" },
        }),
        select: async () => ({
          data: null,
          error: { message: "admin disabled" },
        }),
        delete: async () => ({
          data: null,
          error: { message: "admin disabled" },
        }),
      };
    },
  } as any;
}

export default supabaseAdmin;
