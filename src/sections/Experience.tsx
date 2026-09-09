import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/data/experience";

export function Experience() {
  const items = experience.map((e) => ({
    id: e.id,
    eyebrow: `${e.type} · ${e.duration}`,
    title: e.title,
    subtitle: e.organization,
    body: <p>{e.description}</p>,
  }));

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 border-t border-border">
      <SectionHeading
        index="06"
        title="Experience & journey"
        description="Education, internships, projects and research, roughly in order."
      />
      <Timeline items={items} />
    </section>
  );
}
