"use client";
import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let lenis: unknown;
    (async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      function raf(time: number) { (lenis as { raf: (t: number) => void }).raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    })();
    return () => { if (lenis) (lenis as { destroy: () => void }).destroy(); };
  }, []);
}
