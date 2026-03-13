"use client";

import { SectionLabel } from "@/components/nav";
import { BentoGrid } from "@/components/ui/bento-grid";
import { HobbyCard } from "@/components/cards";
import { hobbies } from "@/data/hobbies";

export default function HobbiesPage() {
  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
        Beyond Work
      </h1>
      <p className="text-[var(--color-text-muted)] mb-4">
        What I&apos;m passionate about outside of building.
      </p>
      <SectionLabel>All Interests</SectionLabel>
      <BentoGrid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {hobbies.map((h, i) => (
          <HobbyCard key={h.id} hobby={h} i={i} compact />
        ))}
      </BentoGrid>
    </div>
  );
}
