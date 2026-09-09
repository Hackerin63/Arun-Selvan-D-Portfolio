import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { education } from "@/data/education";

export function Academics() {
  const items = education.map((edu) => ({
    id: edu.id,
    eyebrow: edu.duration,
    title: edu.degree,
    subtitle: edu.institution,
    body: (
      <div className="space-y-2">
        <p>{edu.focus}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {edu.coursework.map((c) => (
            <span key={c} className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-xs">
              {c}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="academics" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 border-t border-border">
      <SectionHeading index="04" title="Academics" description="Formal education and coursework." />
      <Timeline items={items} />
    </section>
  );
}
