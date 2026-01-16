"use client";

import { useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";

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

      await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      try {
        window.close();
      } catch {
        window.location.href = "/";
      }
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
