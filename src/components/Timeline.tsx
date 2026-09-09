import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface TimelineItem {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  body: ReactNode;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" />
      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="absolute -left-8 sm:-left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <p className="font-mono-label text-xs text-accent">{item.eyebrow}</p>
            <h3 className="mt-1 text-base font-semibold tracking-tight">{item.title}</h3>
            <p className="text-sm text-text-faint">{item.subtitle}</p>
            <div className="mt-2 text-sm text-text-soft leading-relaxed">{item.body}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
