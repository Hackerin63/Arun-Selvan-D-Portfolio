import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
}: {
  index: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-8 sm:mb-10 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"}`}
    >
      <div className={`flex items-baseline gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono-label text-xs text-accent">{index}</span>
        <div className="h-px flex-1 max-w-10 bg-border-strong" />
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">{title}</h2>
      {description && <p className="mt-3 text-text-soft leading-relaxed">{description}</p>}
    </motion.div>
  );
}
