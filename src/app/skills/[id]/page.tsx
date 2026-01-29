import { notFound } from "next/navigation";
import Link from "next/link";
import { skills } from "@/data/skills";
import { SkillDetailContent } from "./detail-content";

export function generateStaticParams() {
  return skills.map((s) => ({ id: s.id }));
}

export default async function SkillDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = skills.find((s) => s.id === id);
  if (!skill) return notFound();

  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <Link
        href="/skills"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors mb-8"
      >
        &larr; All Skills
      </Link>

      <div className="max-w-3xl">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          style={{ color: skill.categoryColor }}
        >
          {skill.category}
        </h1>

        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
          {skill.description}
        </p>

        <SkillDetailContent items={skill.items} />
      </div>
    </div>
  );
}
