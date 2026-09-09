import { motion } from "framer-motion";
import type { SkillGroup } from "@/data/skills";

export function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="panel rounded-lg p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-medium tracking-tight">{group.label}</h3>
        <span className="font-mono-label text-[10px] text-text-faint">{group.note}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-text-soft"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
