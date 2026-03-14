"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
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

// Short punchy descriptions for project cards (SkillCard style)
const projectShortDesc: Record<string, { text: string; highlights: string[] }> = {
  pulse: { text: "AI-powered mental health support", highlights: ["AI-powered", "mental", "health"] },
  uplyftz: { text: "Democratizing STEM education globally", highlights: ["STEM", "education", "globally"] },
};

// Short punchy descriptions for experience cards (SkillCard style)
const experienceShortDesc: Record<string, { text: string; highlights: string[] }> = {
  "fidari-platform": { text: "AI-driven care coordination", highlights: ["AI-driven", "care", "coordination"] },
  growthfactor: { text: "Intelligent AI-powered backend", highlights: ["intelligent", "AI-powered", "backend"] },
};

// Short punchy descriptions for hobby cards (SkillCard style)
const hobbyShortDesc: Record<string, { text: string; highlights: string[] }> = {
  "3d-design": { text: "Creative 3D design & art", highlights: ["3D", "design"] },
  medicine: { text: "AI in clinical care", highlights: ["AI", "clinical", "care"] },
  startups: { text: "Building 501(c)(3) products", highlights: ["501(c)(3)", "building", "products"] },
  teaching: { text: "Hands-on STEM education", highlights: ["STEM", "hands-on", "education"] },
};

// Highlight words for project descriptions (legacy/fallback)
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

const SKILL_CARD_L_SHAPE_VIEWBOX = {
  width: 150,
  height: 100,
  notchX: 100,
  notchY: 50,
} as const;

function buildRoundedLShapePath({
  left,
  top,
  right,
  bottom,
  notchX,
  notchY,
  radius,
}: {
  left: number;
  top: number;
  right: number;
  bottom: number;
  notchX: number;
  notchY: number;
  radius: number;
}) {
  const safeRadius = Math.min(
    radius,
    (right - notchX) / 2,
    (bottom - notchY) / 2,
    notchY - top,
    notchX - left
  );

  return [
    `M ${notchX},${top + safeRadius}`,
    `A ${safeRadius},${safeRadius} 0 0 1 ${notchX + safeRadius},${top}`,
    `H ${right - safeRadius}`,
    `A ${safeRadius},${safeRadius} 0 0 1 ${right},${top + safeRadius}`,
    `V ${bottom - safeRadius}`,
    `A ${safeRadius},${safeRadius} 0 0 1 ${right - safeRadius},${bottom}`,
    `H ${left + safeRadius}`,
    `A ${safeRadius},${safeRadius} 0 0 1 ${left},${bottom - safeRadius}`,
    `V ${notchY + safeRadius}`,
    `A ${safeRadius},${safeRadius} 0 0 1 ${left + safeRadius},${notchY}`,
    `H ${notchX - safeRadius}`,
    `A ${safeRadius},${safeRadius} 0 0 0 ${notchX},${notchY - safeRadius}`,
    `V ${top + safeRadius}`,
    "Z",
  ].join(" ");
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
export function ProjectCard({ project, i = 0, compact = false }: { project: Project; i?: number; compact?: boolean }) {
  const color = resolveColor(project.labelColor);

  return (
    <BentoGridItem
      i={i}
      className="aspect-square card-hover-group"
      href={`/projects/${project.id}`}
      glowColor={color}
      icon={
        <div
          className={cn(
            "rounded-xl flex items-center justify-center mb-4",
            compact ? "w-10 h-10" : "w-12 h-12"
          )}
          style={{
            background: `linear-gradient(135deg, ${color}26, transparent)`,
            border: `1px solid ${color}33`,
            color: color,
          }}
        >
          {compact ? (
            <div className="scale-75 flex items-center justify-center">
              {icons[project.icon]}
            </div>
          ) : icons[project.icon]}
        </div>
      }
      title={
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className={cn("font-bold", compact ? "text-sm" : "text-lg")}>{project.title}</span>
            {!compact && (
              <span
                className="glass-pill px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
                style={{ color }}
              >
                {project.label}
              </span>
            )}
          </div>
          {compact && (
            <span
              className="w-fit glass-pill px-1.5 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-wider"
              style={{ color }}
            >
              {project.label}
            </span>
          )}
        </div>
      }
      description={
        <div className={cn(compact ? "mt-2" : "")}>
          <p className={cn(
            "font-black text-[#222] leading-[0.85] tracking-tighter",
            compact ? "text-xl @[200px]:text-2xl @[250px]:text-3xl" : "text-2xl @[300px]:text-3xl @[360px]:text-4xl @[450px]:text-5xl @[540px]:text-6xl"
          )}>
            {(() => {
              const desc = projectShortDesc[project.id];
              if (!desc) return renderHighlightedText(project.description, projectHighlights[project.id] || [], color);
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
          {!compact && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.slice(0, 3).map((t) => (
                <span key={t} className="glass-pill px-2 py-0.5 rounded-md text-[11px] text-[var(--color-text-muted)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/bento:scale-[1.05] group-hover/bento:-translate-y-0.5">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      }
    />
  );
}

/* ── Skill Card ── */
export function SkillCard({ skill, i = 0, compact = false }: { skill: Skill; i?: number; compact?: boolean }) {
  const color = resolveColor(skill.categoryColor);
  const gridGapPx = 8;
  const oneThird = "33.33%";
  const twoThirds = "66.66%";
  const rowOffsetPx = Number((gridGapPx / 3).toFixed(2));
  const rowTrimPx = Number((((gridGapPx * 2) / 3)).toFixed(2));
  const twoColumnTrimPx = gridGapPx / 2;
  const rowHeight = `calc(${oneThird} - ${rowTrimPx}px)`;
  const secondRowTop = `calc(${oneThird} + ${rowOffsetPx}px)`;
  const secondRowWidth = `calc(${twoThirds} - ${twoColumnTrimPx}px)`;
  const lShapeTop = secondRowTop;
  const lShapeHeight = `calc(${twoThirds} - ${rowOffsetPx}px)`;
  const descriptionTop = `calc(${twoThirds} + ${rowOffsetPx}px)`;
  const shapeCornerRadius = 5;
  const fillPath = buildRoundedLShapePath({
    left: 0,
    top: 0,
    right: SKILL_CARD_L_SHAPE_VIEWBOX.width,
    bottom: SKILL_CARD_L_SHAPE_VIEWBOX.height,
    notchX: SKILL_CARD_L_SHAPE_VIEWBOX.notchX,
    notchY: SKILL_CARD_L_SHAPE_VIEWBOX.notchY,
    radius: shapeCornerRadius,
  });
  const strokeInset = 0.5;
  const strokePath = buildRoundedLShapePath({
    left: strokeInset,
    top: strokeInset,
    right: SKILL_CARD_L_SHAPE_VIEWBOX.width - strokeInset,
    bottom: SKILL_CARD_L_SHAPE_VIEWBOX.height - strokeInset,
    notchX: SKILL_CARD_L_SHAPE_VIEWBOX.notchX - strokeInset,
    notchY: SKILL_CARD_L_SHAPE_VIEWBOX.notchY - strokeInset,
    radius: shapeCornerRadius,
  });

  return (
    <BentoGridItem
      i={i}
      className="aspect-square lang-logo-group !p-0"
      href={`/skills/${skill.id}`}
      glowColor={color}
      header={
        <div className="flex-1 relative p-5 pb-0">
          <h3
            className={cn("font-mono uppercase tracking-widest mb-3", compact ? "text-[10px]" : "text-xs")}
            style={{ color }}
          >
            {skill.category}
          </h3>

          {/*
            Manual layout: the container is divided into a 3×3 conceptual grid.
            Logos are placed in r1c1-3 and r2c1-2 using flex rows.
            The L-shape SVG shares the same grid constants so the notch tracks the logo gap exactly.
          */}
          <div className="relative @container" style={{ aspectRatio: "1" }}>
            {/* Row 1: 3 logos */}
            <div className="absolute top-0 left-0 right-0 flex gap-2" style={{ height: rowHeight }}>
              {skill.items.slice(0, 3).map((s) => (
                <LogoTile key={s} name={s} compact={compact} />
              ))}
            </div>

            {/* Row 2: 2 logos */}
            <div className="absolute left-0 flex gap-2" style={{ top: secondRowTop, height: rowHeight, width: secondRowWidth }}>
              {skill.items.slice(3, 5).map((s) => (
                <LogoTile key={s} name={s} compact={compact} />
              ))}
            </div>

            {/* L-shape: single SVG for fill and border to support rounded concave corners */}
            <svg
              className="absolute pointer-events-none"
              viewBox={`0 0 ${SKILL_CARD_L_SHAPE_VIEWBOX.width} ${SKILL_CARD_L_SHAPE_VIEWBOX.height}`}
              preserveAspectRatio="none"
              style={{
                top: lShapeTop,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: lShapeHeight,
                overflow: "visible",
              }}
            >
              <path
                d={fillPath}
                fill="rgba(255,255,255,0.025)"
              />
              <path
                d={strokePath}
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Description text over L-shape — anchored to row 3 to prevent overlap with row 2 logo tiles */}
            <div
              className="absolute flex items-end pointer-events-none"
              style={{
                top: descriptionTop,
                left: 0,
                right: 0,
                bottom: 0,
                padding: compact ? "0.75rem" : "1rem",
              }}
            >
              <p className={cn(
                "font-black text-[#222] leading-[0.85] tracking-tighter",
                compact ? "text-xl @[200px]:text-2xl @[250px]:text-3xl" : "text-2xl @[300px]:text-3xl @[360px]:text-4xl @[450px]:text-5xl @[540px]:text-6xl"
              )}>
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

function LogoTile({ name, compact = false }: { name: string; compact?: boolean }) {
  const logo = langLogos[name];
  return (
    <div
      className="lang-logo flex-1 flex flex-col items-center justify-center gap-1.5 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className={compact ? "w-4 h-4" : "w-7 h-7"}>
        {logo ? logo.icon : (
          <div className="w-full h-full rounded-lg flex items-center justify-center text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-muted)" }}>
            {name.charAt(0)}
          </div>
        )}
      </div>
      <span className={cn(
        "text-[var(--color-text-muted)] text-center leading-tight px-1 font-medium",
        compact ? "text-[7px]" : "text-[9px]"
      )}>
        {name}
      </span>
    </div>
  );
}

/* ── Hobby Card ── */
export function HobbyCard({ hobby, i = 0, compact = false }: { hobby: Hobby; i?: number; compact?: boolean }) {
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
          className={cn(
            `rounded-xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center mb-4`,
            compact ? "w-10 h-10" : "w-12 h-12"
          )}
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className={compact ? "text-lg" : "text-xl"}>{hobby.emoji}</span>
        </div>
      }
      title={
        <span className={cn("font-bold", compact ? "text-sm" : "text-lg")}>
          {hobby.title}
        </span>
      }
      description={
        <div className={cn(compact ? "mt-2" : "")}>
          <p className={cn(
            "font-black text-[#222] leading-[0.85] tracking-tighter",
            compact ? "text-xl @[200px]:text-2xl @[250px]:text-3xl" : "text-2xl @[300px]:text-3xl @[360px]:text-4xl @[450px]:text-5xl @[540px]:text-6xl"
          )}>
            {(() => {
              const desc = hobbyShortDesc[hobby.id];
              if (!desc) return renderHighlightedText(hobby.description, hobbyHighlights[hobby.id] || [], hobbyGlow);
              return desc.text.split(" ").map((word, wi) => (
                <span
                  key={wi}
                  className={desc.highlights.includes(word) ? "skill-highlight" : ""}
                  style={desc.highlights.includes(word) ? { "--highlight-color": hobbyGlow } as React.CSSProperties : undefined}
                >
                  {word}{" "}
                </span>
              ));
            })()}
          </p>
        </div>
      }
    />
  );
}

/* ── Experience Card ── */
export function ExperienceCard({ experience, i = 0, compact = false }: { experience: Experience; i?: number; compact?: boolean }) {
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
            className={cn(
              "rounded-xl flex items-center justify-center mb-4",
              compact ? "w-10 h-10" : "w-12 h-12"
            )}
            style={{
              background: `linear-gradient(135deg, ${color}26, transparent)`,
              border: `1px solid ${color}33`,
              color: color,
            }}
          >
            {compact ? (
              <div className="scale-75 flex items-center justify-center">
                {icons[experience.icon]}
              </div>
            ) : icons[experience.icon]}
          </div>
          {experience.id === "growthfactor" && (
            <div className="flex-1 flex items-center justify-center py-2">
              <img
                src="/GrowthFactorLogo.svg"
                alt="GrowthFactor"
                style={{
                  width: compact ? "60%" : "80%",
                  maxWidth: compact ? "120px" : "180px",
                  height: "auto",
                  opacity: 0.9
                }}
              />
            </div>
          )}
        </>
      }
      title={
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className={cn("font-bold", compact ? "text-sm" : "text-lg")}>{experience.title}</span>
            {!compact && (
              <span
                className="glass-pill px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider"
                style={{ color }}
              >
                {experience.label}
              </span>
            )}
          </div>
          {compact && (
            <span
              className="w-fit glass-pill px-1.5 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-wider"
              style={{ color }}
            >
              {experience.label}
            </span>
          )}
          <span className={cn("text-[var(--color-text-muted)] font-normal", compact ? "text-[10px]" : "text-xs")}>{experience.role}</span>
        </div>
      }
      description={
        <div className={cn(compact ? "mt-2" : "")}>
          <p className={cn(
            "font-black text-[#222] leading-[0.85] tracking-tighter",
            compact ? "text-xl @[200px]:text-2xl @[250px]:text-3xl" : "text-2xl @[300px]:text-3xl @[360px]:text-4xl @[450px]:text-5xl @[540px]:text-6xl"
          )}>
            {(() => {
              const desc = experienceShortDesc[experience.id];
              if (!desc) return renderHighlightedText(experience.description, experienceHighlights[experience.id] || [], color);
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
          {!compact && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {experience.tags.slice(0, 3).map((t) => (
                <span key={t} className="glass-pill px-2 py-0.5 rounded-md text-[11px] text-[var(--color-text-muted)]">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      }
    />
  );
}
