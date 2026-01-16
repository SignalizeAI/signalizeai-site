"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function AuthCallbackPage() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function handleAuth() {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );

      const hash = window.location.hash.substring(1);
      const hashParams = new URLSearchParams(hash);
      const access_token = hashParams.get("access_token");
      const refresh_token = hashParams.get("refresh_token");

      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      const errorStr = searchParams.get("error") || hashParams.get("error");
      const errorDesc =
        searchParams.get("error_description") ||
        hashParams.get("error_description");

      if (errorStr) {
        console.error("Auth error:", errorStr, errorDesc);
        setStatus("error");
        return;
      }

      let error = null;

      if (access_token && refresh_token) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });
        error = sessionError;
      } else if (code) {
        const { error: exchangeError } =
          await supabase.auth.exchangeCodeForSession(code);
        error = exchangeError;
      } else {
        // Fallback: Check if session already exists
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!session) {
          console.error("Missing auth tokens or code");
          setStatus("error");
          return;
        }
      }

      const {
        data: { session },
        error: sessionFetchError,
      } = await supabase.auth.getSession();

      if (sessionFetchError || !session) {
        console.error("Failed to fetch session after auth", sessionFetchError);
        setStatus("error");
        return;
      }

      // ✅ Send session to extension
      window.postMessage(
        {
          type: "SIGNALIZE_AUTH_SUCCESS",
          session: {
            access_token: session.access_token,
            refresh_token: session.refresh_token,
          },
        },
        "*"
      );

      setStatus("success");
      setTimeout(() => window.close(), 600);
    }

    handleAuth();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#121212] font-sans text-white">
      <div className="relative z-10 flex w-full max-w-md flex-col items-center space-y-6 p-8 text-center">
        <div className="relative flex items-center justify-center">
          {status === "loading" && (
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#1A237E] border-t-[#00E5FF]" />
          )}

          {status === "success" && (
            <div className="animate-in zoom-in flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#00E5FF] bg-[#1A237E]/30 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#00E5FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}

          {status === "error" && (
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-500 bg-red-900/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">
            {status === "loading" && "Authenticating..."}
            {status === "success" && (
              <span className="text-[#00E5FF]">Signed In Successfully</span>
            )}
            {status === "error" && "Authentication Failed"}
          </h2>

          <p className="text-sm text-gray-400">
            {status === "loading" &&
              "Please wait while we secure your session."}
            {status === "success" &&
              "You can now close this window and return to the extension."}
            {status === "error" &&
              "We couldn't verify your credentials. Please try again."}
          </p>
        </div>

        {status === "success" && (
          <button
            onClick={() => window.close()}
            className="mt-4 rounded-lg border border-[#00E5FF]/20 bg-[#1A237E] px-6 py-2 font-medium text-[#00E5FF] shadow-[0_0_15px_-3px_rgba(26,35,126,0.5)] transition-all hover:bg-[#1A237E]/80"
          >
            Close Window
          </button>
        )}
      </div>
    </div>
  );
}
