"use client";

import { langLogos } from "@/components/lang-logos";

export function SkillDetailContent({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lang-logo-group">
      {items.map((s) => {
        const logo = langLogos[s];
        return (
          <div
            key={s}
            className="lang-logo flex flex-col items-center gap-3 p-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="w-12 h-12">
              {logo ? logo.icon : (
                <div
                  className="w-full h-full rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {s.charAt(0)}
                </div>
              )}
            </div>
            <span className="text-sm text-[var(--color-text-muted)] font-medium">{s}</span>
          </div>
        );
      })}
    </div>
  );
}
