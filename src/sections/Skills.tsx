import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 border-t border-border">
      <SectionHeading
        index="02"
        title="Skills & tools"
        description="The languages, frameworks and platforms I reach for most, grouped by where they sit in a project."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.id} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
