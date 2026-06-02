"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const check = () => {
      document.querySelectorAll(".rv").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88)
          el.classList.add("vis");
      });
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
}
