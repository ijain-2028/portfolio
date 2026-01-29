import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishaan Jain | Developer & Researcher",
  description:
    "Full-stack developer and AI researcher focused on health-tech. Founder of Uplyftz, building at the intersection of AI and medicine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
        <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Ishaan Jain
        </footer>
      </body>
    </html>
  );
}
