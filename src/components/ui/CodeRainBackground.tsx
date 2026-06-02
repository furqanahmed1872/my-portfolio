"use client";
import { useEffect, useRef } from "react";
const SNIPS = ["const","async","await","return","import","export","function","useState","useEffect","=>",".then(",".catch(","try {","interface","type","extends","class","new ","null","true","false","fetch(","db.query(","router.","schema.","Promise<T>","map(","filter(","reduce(","export default","prisma.","zod.","<T>","void","async fn"];
export function CodeRainBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    for (let i = 0; i < 20; i++) {
      const col = document.createElement("div");
      col.className = "code-rain-col";
      col.style.left = `${i * 5.2}%`;
      col.style.animationDuration = `${12 + Math.random() * 18}s`;
      col.style.animationDelay = `${-Math.random() * 20}s`;
      for (let j = 0; j < 40; j++) {
        const d = document.createElement("div");
        d.textContent = SNIPS[Math.floor(Math.random() * SNIPS.length)];
        col.appendChild(d);
      }
      c.appendChild(col);
    }
    return () => { if (c) c.innerHTML = ""; };
  }, []);
  return <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0" />;
}
