import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors mb-8"
      >
        &larr; All Projects
      </Link>

      {/* Header gradient */}
      <div
        className={`w-full h-56 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-8 border border-[var(--color-border)]`}
        style={{ color: project.labelColor }}
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {project.icon === "pulse" && <path d="M22 12h-4l-3 9L9 3l-3 9H2" />}
          {project.icon === "layers" && (
            <>
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </>
          )}
          {project.icon === "code" && (
            <>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </>
          )}
          {project.icon === "globe" && (
            <>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </>
          )}
        </svg>
      </div>

      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            {project.title}
          </h1>
          <span
            className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider"
            style={{
              background: `color-mix(in srgb, ${project.labelColor} 15%, transparent)`,
              color: project.labelColor,
            }}
          >
            {project.label}
          </span>
        </div>

        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="space-y-4 mb-8">
          {project.details.map((d, i) => (
            <div key={i} className="flex gap-3">
              <div
                className="mt-2 w-2 h-2 rounded-full shrink-0"
                style={{ background: project.labelColor }}
              />
              <p className="text-[var(--color-text-muted)] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-lg text-sm"
              style={{
                background: `color-mix(in srgb, ${project.tagColor} 12%, transparent)`,
                color: project.tagColor,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-300"
          >
            Visit project &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
