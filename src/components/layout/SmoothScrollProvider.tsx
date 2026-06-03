"use client";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useReveal } from "@/hooks/useReveal";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  useReveal();

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" aria-hidden="true" />
      {children}
    </>
  );
}
