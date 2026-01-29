"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/nav";
import { BentoGrid } from "@/components/ui/bento-grid";
import { ProjectCard, SkillCard, HobbyCard } from "@/components/cards";
import { getProjectsByIds } from "@/data/projects";
import { getSkillsByIds } from "@/data/skills";
import { getHobbiesByIds } from "@/data/hobbies";


/* ─────────────────────────────────────────────
 *  CONFIGURE FEATURED CARDS HERE
 *  Just add/remove IDs to change what shows up.
 * ───────────────────────────────────────────── */
/* Hero tiles: 2 projects + 2 hobbies shown beside the intro */
const HERO_PROJECTS = ["pulse", "uplyftz"];
const HERO_HOBBIES = ["medicine", "startups"];

/* Below-the-fold sections */
const FEATURED_SKILLS = ["languages", "ai-ml", "tools"];
/* ───────────────────────────────────────────── */

export default function Home() {
  const heroProjects = getProjectsByIds(HERO_PROJECTS);
  const heroHobbies = getHobbiesByIds(HERO_HOBBIES);
  const featuredSkills = getSkillsByIds(FEATURED_SKILLS);

  return (
    <div className="min-h-screen relative">
      {/* Hero — intro text left, 2×2 card grid right */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-8 py-24">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-2)]/8 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-3)]/5 blur-[120px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[var(--color-text-muted)] text-lg mb-6">
              Hey, I&apos;m
            </p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              Ishaan <span className="gradient-text">Jain</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl leading-relaxed mb-10">
              I build things that help people — especially where technology meets
              healthcare. Nice to meet you.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:ishaanjain2024@gmail.com"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium overflow-hidden"
              >
                <span className="shimmer-border absolute inset-0 rounded-xl" />
                <span className="absolute inset-[1px] rounded-[11px] bg-[var(--color-bg)]" />
                <span className="relative z-10 gradient-text font-semibold">Say hello</span>
              </a>
              <a
                href="https://github.com/ijain-2028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ishaan-jain-30112335a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--color-border)] hover:border-[var(--color-accent-2)]/40 px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — 2×2 card grid */}
          <div className="grid grid-cols-2 gap-4">
            {heroProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} i={i} />
            ))}
            {heroHobbies.map((h, i) => (
              <HobbyCard key={h.id} hobby={h} i={i + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="px-6 md:px-8 pb-8">
        <SectionLabel href="/skills">What I work with</SectionLabel>
        <BentoGrid>
          {featuredSkills.map((s, i) => (
            <SkillCard key={s.id} skill={s} i={i} />
          ))}
        </BentoGrid>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-8 pb-16">
        <SectionLabel>Get in touch</SectionLabel>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-accent)]/5 blur-[100px]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative z-10">
              Let&apos;s make something{" "}
              <span className="gradient-text">great</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8 relative z-10 max-w-md mx-auto">
              Whether you have an idea, a question, or just want to say hi —
              my inbox is always open.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <a
                href="mailto:ishaanjain2024@gmail.com"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium overflow-hidden"
              >
                <span className="shimmer-border absolute inset-0 rounded-xl" />
                <span className="absolute inset-[1px] rounded-[11px] bg-[var(--color-bg)]" />
                <span className="relative z-10 gradient-text font-semibold">ishaanjain2024@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
