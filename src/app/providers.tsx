"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Lenis from "lenis";

export default function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
    >
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
