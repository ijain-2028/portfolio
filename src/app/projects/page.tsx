"use client";

import { SectionLabel } from "@/components/nav";
import { BentoGrid } from "@/components/ui/bento-grid";
import { ProjectCard } from "@/components/cards";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
        Projects
      </h1>
      <p className="text-[var(--color-text-muted)] mb-4">
        Things I&apos;ve built and am building.
      </p>
      <SectionLabel>All Projects</SectionLabel>
      <BentoGrid className="lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} i={i} />
        ))}
      </BentoGrid>
    </div>
  );
}
