import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ index, label, title }: { index: string; label: string; title: ReactNode }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-4">
        <span className="text-primary">{index}</span> — {label}
      </p>
      <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">{title}</h2>
    </Reveal>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-secondary/60 px-3 py-1 font-mono text-[0.7rem] text-secondary-foreground">
      {children}
    </span>
  );
}
