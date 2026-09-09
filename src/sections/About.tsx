import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles, Compass } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { philosophy, focusAreas, site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <SectionHeading index="01" title="About" description="A little about how I work and what I focus on." />

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-3 space-y-6">
          {philosophy.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 border-b border-border pb-6 last:border-none"
            >
              <span className="font-mono-label text-xs text-accent pt-1">0{i + 1}</span>
              <div>
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-soft">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-2"
        >
          <div className="panel panel-corners rounded-lg p-6">
            <InfoRow icon={GraduationCap} label="Education" value="MCA · BSc Computer Science" />
            <InfoRow icon={Code2} label="Primary role" value={site.title} />
            <InfoRow icon={Sparkles} label="Technical focus" value="Full-stack systems & applied AI/ML" />
            <InfoRow icon={Compass} label="Current interests" value="Explainable AI, computer vision, developer tooling" isLast />
          </div>

          <div className="mt-6">
            <p className="font-mono-label text-xs text-text-faint mb-3">Working across</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-text-soft">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  isLast,
}: {
  icon: typeof GraduationCap;
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 py-3 ${isLast ? "" : "border-b border-border"}`}>
      <Icon size={16} className="mt-0.5 flex-shrink-0 text-accent" />
      <div>
        <p className="font-mono-label text-[10px] text-text-faint">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}
