"use client";

import { SectionLabel } from "@/components/nav";
import { BentoGrid } from "@/components/ui/bento-grid";
import { SkillCard } from "@/components/cards";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
        Skills
      </h1>
      <p className="text-[var(--color-text-muted)] mb-4">
        Languages, frameworks, and domains I work with.
      </p>
      <SectionLabel>All Skills</SectionLabel>
      <BentoGrid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => (
          <SkillCard key={s.id} skill={s} i={i} compact />
        ))}
      </BentoGrid>
    </div>
  );
}
