"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const { progress } = useScrollProgress();
  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
