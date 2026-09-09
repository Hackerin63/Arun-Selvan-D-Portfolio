import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 border-t border-border">
      <SectionHeading index="07" title="Achievements & certifications" description="Certifications, coursework and recognitions." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            className="panel rounded-lg p-5"
          >
            <Award size={16} className="text-accent" />
            <p className="mt-3 font-mono-label text-[10px] text-text-faint">{a.category}</p>
            <h3 className="mt-1 text-sm font-medium leading-snug">{a.title}</h3>
            <p className="mt-1 text-xs text-text-soft">{a.issuer} · {a.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
