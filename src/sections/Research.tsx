import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { research, researchInterests } from "@/data/research";

export function Research() {
  return (
    <section id="research" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 border-t border-border">
      <SectionHeading
        index="05"
        title="Research & publications"
        description="Applied research spanning healthcare AI, computer vision, NLP and forecasting."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {researchInterests.map((interest) => (
          <span key={interest} className="rounded-full border border-signal/40 bg-signal-soft px-3 py-1.5 text-xs text-signal">
            {interest}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {research.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
            className="panel panel-corners rounded-lg p-5"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="font-mono-label text-[11px] text-accent">{item.area}</span>
              <span className="font-mono-label text-[10px] text-text-faint">{item.status}</span>
            </div>
            <h3 className="font-medium leading-snug">{item.title}</h3>
            <p className="mt-2 text-sm text-text-soft leading-relaxed">{item.abstract}</p>
            <p className="mt-3 border-t border-border pt-3 text-xs text-text-faint">{item.methodology}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
