"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useCallback } from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  href,
  i = 0,
  glowColor,
  eager = false,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  i?: number;
  glowColor?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  }, []);

  const inner = (
    <>
      {header}
      <div className="relative z-10 flex flex-col h-full">
        {icon}
        <div className="mt-auto">
          {title && (
            <div className="font-bold text-white mb-1 text-base">
              {title}
            </div>
          )}
          {description && (
            <div className="text-sm text-[var(--color-text-muted)]">
              {description}
            </div>
          )}
        </div>
      </div>
    </>
  );

  const Tag = href ? "a" : "div";
  const linkProps = href ? { href } : {};

  return (
    <motion.div
      ref={ref}
      custom={i}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      {...(eager
        ? { animate: { opacity: 1, y: 0, scale: 1 } }
        : { whileInView: { opacity: 1, y: 0, scale: 1 }, viewport: { once: true, margin: "-40px" } })}
      transition={{ delay: eager ? i * 0.06 : i * 0.08, duration: 0.45, ease: "easeOut" }}
      onMouseMove={handleMouse}
      style={glowColor ? { "--glow-color": glowColor } as React.CSSProperties : undefined}
      className={cn(
        "group/bento row-span-1 rounded-2xl card p-5 flex flex-col",
        className
      )}
    >
      <Tag {...linkProps} className="flex flex-col h-full">
        {inner}
      </Tag>
    </motion.div>
  );
}
