"use client";

import Link from "next/link";
import { BentoGridItem } from "./ui/bento-grid";
import { langLogos } from "./lang-logos";
import type { Project } from "@/data/projects";
import type { Skill } from "@/data/skills";
import type { Hobby } from "@/data/hobbies";
import type { Experience } from "@/data/experience";

// Words wrapped in *word* get highlighted on hover
const skillShortDesc: Record<string, { text: string; highlights: string[] }> = {
  languages: { text: "Full-stack product builder", highlights: ["Full-stack", "builder"] },
  "ai-ml": { text: "Building with leading AI", highlights: ["leading", "AI"] },
  tools: { text: "Ship, measure, iterate", highlights: ["Ship,", "measure,", "iterate"] },
  domains: { text: "Healthcare & community impact", highlights: ["Healthcare", "impact"] },
};

// Highlight words for project descriptions
const projectHighlights: Record<string, string[]> = {
  pulse: ["AI-powered", "mental", "health"],
  uplyftz: ["STEM", "education", "digital"],
};

// Highlight words for experience descriptions
const experienceHighlights: Record<string, string[]> = {
  "fidari-platform": ["AI-driven", "care", "coordination"],
  growthfactor: ["intelligent", "AI-powered", "backend"],
};

// Highlight words for hobby descriptions
const hobbyHighlights: Record<string, string[]> = {
  "3d-design": ["3D", "design"],
  medicine: ["AI", "clinical", "care"],
  startups: ["501(c)(3)", "building", "products"],
  teaching: ["STEM", "hands-on", "education"],
};

/* ── Resolve CSS var references to actual hex values ── */
const CSS_VAR_MAP: Record<string, string> = {
  "var(--color-accent)": "#3b82f6",
  "var(--color-accent-2)": "#8b5cf6",
  "var(--color-accent-3)": "#06b6d4",
};

function resolveColor(color: string): string {
  return CSS_VAR_MAP[color] || color;
}

/* ── Highlight helper ── */
function renderHighlightedText(text: string, highlights: string[], color: string) {
  if (!highlights.length) return text;
  const escaped = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (highlights.some(h => h.toLowerCase() === part.toLowerCase())) {
      return (
        <span
          key={i}
          className="card-highlight"
          style={{ "--highlight-color": color } as React.CSSProperties}
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

/* ── Icons ── */
const icons: Record<string, React.ReactNode> = {
  pulse: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  layers: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  code: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  globe: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

/* ── Project Card ── */
export function ProjectCard({ project, i = 0 }: { project: Project; i?: number }) {
  const color = resolveColor(project.labelColor);

  return (
    <BentoGridItem
      i={i}
      className="aspect-square card-hover-group"
      href={`/projects/${project.id}`}
      glowColor={color}
      icon={
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: `linear-gradient(135deg, ${color}26, transparent)`,
            border: `1px solid ${color}33`,
            color: color,
          }}
        >
          {icons[project.icon]}
        </div>
      }
      title={
        <div className="flex items-center gap-2">
          <span className="text-lg">{project.title}</span>
          <span
            className="glass-pill px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
            style={{ color }}
          >
            {project.label}
          </span>
        </div>
      }
      description={
        <div>
          <p className="line-clamp-3 mb-3">
            {renderHighlightedText(project.description, projectHighlights[project.id] || [], color)}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="glass-pill px-2 py-0.5 rounded-md text-[11px] text-[var(--color-text-muted)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/bento:scale-[1.05] group-hover/bento:-translate-y-0.5">
                {t}
              </span>
            ))}
          </div>
        </div>
      }
    />
  );
}

/* ── Skill Card ── */
export function SkillCard({ skill, i = 0 }: { skill: Skill; i?: number }) {
  const color = resolveColor(skill.categoryColor);

  return (
    <BentoGridItem
      i={i}
      className="aspect-square lang-logo-group !p-0"
      href={`/skills/${skill.id}`}
      glowColor={color}
      header={
        <div className="flex-1 relative p-5 pb-0">
          <h3
            className="text-xs font-mono uppercase tracking-widest mb-3"
            style={{ color }}
          >
            {skill.category}
          </h3>

          {/*
            Manual layout: the container is divided into a 3×3 conceptual grid.
            Logos are placed in r1c1-3 and r2c1-2 using flex rows.
            The L-shape is an absolutely-positioned single div using clip-path.
          */}
          <div className="relative" style={{ aspectRatio: "1" }}>
            {/* Row 1: 3 logos */}
            <div className="absolute top-0 left-0 right-0 flex gap-2" style={{ height: "calc(33.33% - 5.33px)" }}>
              {skill.items.slice(0, 3).map((s) => (
                <LogoTile key={s} name={s} />
              ))}
            </div>

            {/* Row 2: 2 logos */}
            <div className="absolute left-0 flex gap-2" style={{ top: "calc(33.33% + 2.67px)", height: "calc(33.33% - 5.33px)", width: "calc(66.66% - 4px)" }}>
              {skill.items.slice(3, 5).map((s) => (
                <LogoTile key={s} name={s} />
              ))}
            </div>

            {/* L-shape: single clipped div */}
            <div
              className="absolute"
              style={{
                top: "calc(33.33% + 2.67px)",
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255,255,255,0.025)",
                clipPath: "polygon(66.66% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 66.66% 50%)",
                borderRadius: "0.75rem",
              }}
            />
            {/* Border outline for the L-shape using an inset shadow */}
            <div
              className="absolute"
              style={{
                top: "calc(33.33% + 2.67px)",
                left: 0,
                right: 0,
                bottom: 0,
                clipPath: "polygon(66.66% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 66.66% 50%)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
                borderRadius: "0.75rem",
              }}
            />

            {/* Description text over L-shape */}
            <div
              className="absolute flex items-end pointer-events-none"
              style={{
                top: "calc(33.33% + 2.67px)",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "1rem",
              }}
            >
              <p className="text-6xl font-black text-[#222] leading-[0.85] tracking-tighter">
                {(() => {
                  const desc = skillShortDesc[skill.id];
                  if (!desc) return skill.category;
                  return desc.text.split(" ").map((word, wi) => (
                    <span
                      key={wi}
                      className={desc.highlights.includes(word) ? "skill-highlight" : ""}
                      style={desc.highlights.includes(word) ? { "--highlight-color": color } as React.CSSProperties : undefined}
                    >
                      {word}{" "}
                    </span>
                  ));
                })()}
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}

function LogoTile({ name }: { name: string }) {
  const logo = langLogos[name];
  return (
    <div
      className="lang-logo flex-1 flex flex-col items-center justify-center gap-1.5 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="w-7 h-7">
        {logo ? logo.icon : (
          <div className="w-full h-full rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-muted)" }}>
            {name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-[9px] text-[var(--color-text-muted)] text-center leading-tight px-1">{name}</span>
    </div>
  );
}

/* ── Hobby Card ── */
export function HobbyCard({ hobby, i = 0 }: { hobby: Hobby; i?: number }) {
  // Derive a glow color from the gradient class (extract the hex)
  const gradientMatch = hobby.gradient.match(/#[0-9a-fA-F]{6}/);
  const hobbyGlow = gradientMatch ? gradientMatch[0] : "#3b82f6";

  return (
    <BentoGridItem
      i={i}
      className="aspect-square card-hover-group"
      href={`/hobbies/${hobby.id}`}
      glowColor={hobbyGlow}
      icon={
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center mb-4`}
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-xl">{hobby.emoji}</span>
        </div>
      }
      title={hobby.title}
      description={
        <p className="line-clamp-3">
          {renderHighlightedText(hobby.description, hobbyHighlights[hobby.id] || [], hobbyGlow)}
        </p>
      }
    />
  );
}

/* ── Experience Card ── */
export function ExperienceCard({ experience, i = 0 }: { experience: Experience; i?: number }) {
  const color = resolveColor(experience.labelColor);

  return (
    <BentoGridItem
      i={i}
      className="aspect-square card-hover-group"
      href={`/experience/${experience.id}`}
      glowColor={color}
      icon={
        <>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{
              background: `linear-gradient(135deg, ${color}26, transparent)`,
              border: `1px solid ${color}33`,
              color: color,
            }}
          >
            {icons[experience.icon]}
          </div>
          {experience.id === "growthfactor" && (
            <div className="flex-1 flex items-center justify-center py-2">
              <img src="/growthfactorlogo.svg" alt="GrowthFactor" style={{ width: "80%", maxWidth: "180px", height: "auto", opacity: 0.9 }} />
            </div>
          )}
        </>
      }
      title={
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">{experience.title}</span>
            <span
              className="glass-pill px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
              style={{ color }}
            >
              {experience.label}
            </span>
          </div>
          <span className="text-xs text-[var(--color-text-muted)] font-normal">{experience.role}</span>
        </div>
      }
      description={
        <div>
          <p className="line-clamp-3 mb-3">
            {renderHighlightedText(experience.description, experienceHighlights[experience.id] || [], color)}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {experience.tags.slice(0, 3).map((t) => (
              <span key={t} className="glass-pill px-2 py-0.5 rounded-md text-[11px] text-[var(--color-text-muted)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      }
    />
  );
}
