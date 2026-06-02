"use client";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useReveal } from "@/hooks/useReveal";
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  useReveal();
  return <>{children}</>;
}
