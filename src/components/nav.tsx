"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/hobbies", label: "Hobbies" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/70 border-b border-[var(--color-border)]">
      <div className="w-full px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tighter gradient-text">
          IJ
        </Link>
        <div className="flex gap-8 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-300 ${
                pathname === href
                  ? "text-white font-medium"
                  : "text-[var(--color-text-muted)] hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function SectionLabel({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-8">
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
        {children}
      </span>
      <div className="flex-1 h-px bg-[var(--color-border)]" />
      {href && (
        <Link
          href={href}
          className="text-xs font-mono text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
        >
          View all &rarr;
        </Link>
      )}
    </div>
  );
}
