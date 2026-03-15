"use client";

import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { ProjectCard, HobbyCard } from "@/components/cards";
import type { Project } from "@/data/projects";
import type { Hobby } from "@/data/hobbies";

const TOTAL_DURATION_MS = 7200;
const FADE_OUT_MS = 600;

const heroDesc =
  "I build things that help people — especially where technology meets healthcare. Nice to meet you.";

const NAME_FONT = "text-6xl md:text-8xl font-bold tracking-tighter";

export type HeroLogoIntroProps = {
  heroProjects: Project[];
  heroHobbies: Hobby[];
  onComplete: () => void;
  heroNameRowRef?: React.RefObject<HTMLHeadingElement | null>;
  heroIshaanRef?: React.RefObject<HTMLSpanElement | null>;
  heroJainRef?: React.RefObject<HTMLSpanElement | null>;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const FALLBACK_SPACER_PX = 180;
const FALLBACK_OFFSET_PX = 0;

export function HeroLogoIntro({
  heroProjects,
  heroHobbies,
  onComplete,
  heroNameRowRef,
  heroIshaanRef,
  heroJainRef,
}: HeroLogoIntroProps) {
  const progress = useMotionValue(0);
  const startTime = useRef<number | null>(null);
  const raf = useRef<number>(0);
  const introIRef = useRef<HTMLSpanElement>(null);
  const ishaanMeasureRef = useRef<HTMLSpanElement>(null);
  const [positionRects, setPositionRects] = useState<{
    offsetI: number;
    spacerTarget: number;
  } | null>(null);

  const measureFromHero = useCallback(() => {
    const row = heroNameRowRef?.current;
    const ishaan = heroIshaanRef?.current;
    const jain = heroJainRef?.current;
    const introI = introIRef.current;
    if (!row || !ishaan || !jain) return false;
    const rowRect = row.getBoundingClientRect();
    const ishaanRect = ishaan.getBoundingClientRect();
    const jainRect = jain.getBoundingClientRect();
    const gap = jainRect.left - ishaanRect.left;
    const widthOfI = introI?.offsetWidth ?? 0;
    setPositionRects({
      offsetI: ishaanRect.left - rowRect.left,
      spacerTarget: Math.max(0, gap - widthOfI),
    });
    return true;
  }, [heroNameRowRef, heroIshaanRef, heroJainRef]);

  const measureFallback = useCallback(() => {
    const el = ishaanMeasureRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    setPositionRects({
      offsetI: FALLBACK_OFFSET_PX,
      spacerTarget: Math.max(0, w - (introIRef.current?.offsetWidth ?? 0)),
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    const id1 = requestAnimationFrame(() => {
      if (cancelled) return;
      const ok = measureFromHero();
      if (!ok) {
        requestAnimationFrame(() => {
          if (!cancelled) measureFallback();
        });
      }
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id1);
    };
  }, [measureFromHero, measureFallback]);

  useEffect(() => {
    const row = heroNameRowRef?.current;
    if (!row) return;
    const ro = new ResizeObserver(() => measureFromHero());
    ro.observe(row);
    return () => ro.disconnect();
  }, [measureFromHero, heroNameRowRef]);

  useEffect(() => {
    startTime.current = null;
    const animate = (time: number) => {
      if (startTime.current === null) startTime.current = time;
      const elapsed = time - startTime.current;
      const raw = elapsed / TOTAL_DURATION_MS;
      const p = easeOutCubic(Math.min(1, raw));
      progress.set(p);
      if (p < 1) {
        raf.current = requestAnimationFrame(animate);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [progress]);

  useEffect(() => {
    const t = setTimeout(onComplete, TOTAL_DURATION_MS + FADE_OUT_MS);
    return () => clearTimeout(t);
  }, [onComplete]);

  const ijOpacity = useTransform(progress, [0, 0.26, 0.36], [1, 1, 0]);
  const ijScale = useTransform(progress, [0, 0.38, 0.45], [1, 1, 0.4]);
  const nameOpacity = useTransform(progress, [0.26, 0.36], [0, 1]);
  const nameScale = useTransform(progress, [0.26, 0.36], [0.85, 1]);
  const descOpacity = useTransform(progress, [0.3, 0.4], [0, 1]);
  const nameBlockXVw = useTransform(progress, (p) => {
    if (p <= 0.36) return "25vw";
    if (p >= 0.55) return "0vw";
    const t = (p - 0.36) / (0.55 - 0.36);
    return `${25 - 25 * t}vw`;
  });
  const spacerTarget = positionRects?.spacerTarget ?? FALLBACK_SPACER_PX;
  const offsetI = positionRects?.offsetI ?? FALLBACK_OFFSET_PX;
  const spacerWidthPx = useTransform(progress, (p) => {
    if (p <= 0.28) return 0;
    if (p >= 0.36) return spacerTarget;
    const t = (p - 0.28) / (0.36 - 0.28);
    return lerp(0, spacerTarget, easeOutCubic(t));
  });
  const cardsFlyProgress = useTransform(progress, [0.38, 0.58], [0, 1]);
  const cardsScaleProgress = useTransform(progress, [0.45, 0.85], [0, 1]);
  const overlayOpacity = useTransform(
    progress,
    [(TOTAL_DURATION_MS - FADE_OUT_MS) / TOTAL_DURATION_MS, 1],
    [1, 0]
  );

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center overflow-hidden bg-[#030305]"
      style={{ opacity: overlayOpacity }}
    >
      <span
        ref={ishaanMeasureRef}
        className={`${NAME_FONT} invisible absolute left-0 top-0 whitespace-nowrap pointer-events-none`}
        aria-hidden
      >
        Ishaan{" "}
      </span>
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-2)]/8 blur-[150px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 md:px-8 py-24 min-h-screen">
        <motion.div
          className="flex flex-col justify-center lg:justify-center"
          style={{ x: nameBlockXVw }}
        >
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-lg mb-6 opacity-0 pointer-events-none select-none" aria-hidden>
              Hey, I&apos;m
            </p>
            <motion.div
              className="flex flex-row items-baseline justify-center lg:justify-start w-full"
              style={{
                opacity: ijOpacity,
                scale: ijScale,
                pointerEvents: "none",
                paddingLeft: offsetI,
              }}
            >
              <span ref={introIRef} className={`${NAME_FONT} text-white`}>I</span>
              <motion.span
                className="inline-block flex-shrink-0 overflow-hidden"
                style={{ width: spacerWidthPx, minWidth: 0 }}
              />
              <span className={`${NAME_FONT} gradient-text`}>J</span>
            </motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col items-center lg:items-start justify-center lg:justify-center top-0"
              style={{
                opacity: nameOpacity,
                scale: nameScale,
                pointerEvents: "none",
              }}
            >
              <p className="text-[var(--color-text-muted)] text-lg mb-6">Hey, I&apos;m</p>
              <h1 className={`${NAME_FONT} mb-6`}>
                Ishaan <span className="gradient-text">Jain</span>
              </h1>
              <motion.p
                className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl leading-relaxed"
                style={{ opacity: descOpacity }}
              >
                {heroDesc}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        <HeroCardsColumn
          heroProjects={heroProjects}
          heroHobbies={heroHobbies}
          flyProgress={cardsFlyProgress}
          scaleProgress={cardsScaleProgress}
        />
      </div>
    </motion.div>
  );
}

function HeroCardsColumn({
  heroProjects,
  heroHobbies,
  flyProgress,
  scaleProgress,
}: {
  heroProjects: Project[];
  heroHobbies: Hobby[];
  flyProgress: MotionValue<number>;
  scaleProgress: MotionValue<number>;
}) {
  const flyLeft = useTransform(flyProgress, (v) => lerp(-120, 0, v));
  const flyRight = useTransform(flyProgress, (v) => lerp(120, 0, v));
  const scale = useTransform(scaleProgress, (v) => lerp(0.12, 1, easeOutCubic(v)));

  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
      <motion.div style={{ x: flyLeft, scale }} className="w-full aspect-square max-w-[320px]">
        <ProjectCard project={heroProjects[0]} i={0} />
      </motion.div>
      <motion.div style={{ x: flyRight, scale }} className="w-full aspect-square max-w-[320px]">
        <ProjectCard project={heroProjects[1]} i={1} />
      </motion.div>
      <motion.div style={{ x: flyLeft, scale }} className="w-full aspect-square max-w-[320px]">
        <HobbyCard hobby={heroHobbies[0]} i={2} />
      </motion.div>
      <motion.div style={{ x: flyRight, scale }} className="w-full aspect-square max-w-[320px]">
        <HobbyCard hobby={heroHobbies[1]} i={3} />
      </motion.div>
    </div>
  );
}
