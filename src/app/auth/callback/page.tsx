"use client";

export const dynamic = "force-dynamic";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export default function AuthCallbackPage() {
  useEffect(() => {
    async function handleAuth() {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (!access_token || !refresh_token) {
        console.error("Missing auth tokens");
        return;
      }

      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );

      await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      // Notify extension
      const w = window as any;
      if (w.chrome?.runtime?.sendMessage) {
        w.chrome.runtime.sendMessage("nhgeihbbpdnhcfccedpnkionaofdpaib", {
          type: "AUTH_SUCCESS",
        });
      }

      setTimeout(() => window.close(), 600);
    }

    handleAuth();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Signing you in…</h2>
      <p>You can close this tab.</p>
    </div>
  );
}
