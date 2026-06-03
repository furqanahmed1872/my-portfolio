"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function BackToTop() {
  const { showBackTop } = useScrollProgress();

  return (
    <AnimatePresence>
      {showBackTop && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-top fixed bottom-8 right-8 w-11 h-11 rounded-lg flex items-center justify-center z-50 text-base"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(0,212,255,0.2)",
            color: "var(--ink3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
