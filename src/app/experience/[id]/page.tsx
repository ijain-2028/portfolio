import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences } from "@/data/experience";

export function generateStaticParams() {
  return experiences.map((e) => ({ id: e.id }));
}

export default async function ExperienceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = experiences.find((e) => e.id === id);
  if (!experience) return notFound();

  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <Link
        href="/experience"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors mb-8"
      >
        &larr; All Experience
      </Link>

      <div
        className={`w-full h-56 rounded-2xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center mb-8 border border-[var(--color-border)]`}
        style={{ color: experience.labelColor }}
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {experience.icon === "code" && (
            <>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </>
          )}
          {experience.icon === "globe" && (
            <>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </>
          )}
        </svg>
      </div>

      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            {experience.title}
          </h1>
          <span
            className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider"
            style={{
              background: `color-mix(in srgb, ${experience.labelColor} 15%, transparent)`,
              color: experience.labelColor,
            }}
          >
            {experience.label}
          </span>
        </div>

        <p className="text-sm text-[var(--color-text-muted)] mb-6">{experience.role}</p>

        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
          {experience.description}
        </p>

        <div className="space-y-4 mb-8">
          {experience.details.map((d, i) => (
            <div key={i} className="flex gap-3">
              <div
                className="mt-2 w-2 h-2 rounded-full shrink-0"
                style={{ background: experience.labelColor }}
              />
              <p className="text-[var(--color-text-muted)] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {experience.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-lg text-sm"
              style={{
                background: `color-mix(in srgb, ${experience.tagColor} 12%, transparent)`,
                color: experience.tagColor,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-300"
          >
            Visit &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
