"use client";

import { SectionLabel } from "@/components/nav";
import { BentoGrid } from "@/components/ui/bento-grid";
import { ExperienceCard } from "@/components/cards";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
        Experience
      </h1>
      <p className="text-[var(--color-text-muted)] mb-4">
        Where I&apos;ve worked and what I&apos;ve contributed to.
      </p>
      <SectionLabel>All Experience</SectionLabel>
      <BentoGrid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {experiences.map((e, i) => (
          <ExperienceCard key={e.id} experience={e} i={i} compact />
        ))}
      </BentoGrid>
    </div>
  );
}
