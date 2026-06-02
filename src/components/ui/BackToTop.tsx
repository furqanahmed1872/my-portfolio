"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
export function BackToTop() {
  const { showBackTop } = useScrollProgress();
  return (
    <AnimatePresence>
      {showBackTop && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-11 h-11 rounded-lg flex items-center justify-center z-50 text-base transition-all shadow-md hover:-translate-y-1"
          style={{ background: "var(--white)", border: "1px solid var(--border2)", color: "var(--ink3)" }}
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
