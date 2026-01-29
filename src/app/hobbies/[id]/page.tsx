import { notFound } from "next/navigation";
import Link from "next/link";
import { hobbies } from "@/data/hobbies";

export function generateStaticParams() {
  return hobbies.map((h) => ({ id: h.id }));
}

export default async function HobbyDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hobby = hobbies.find((h) => h.id === id);
  if (!hobby) return notFound();

  return (
    <div className="min-h-screen relative pt-24 px-6 md:px-8 pb-16">
      <Link
        href="/hobbies"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors mb-8"
      >
        &larr; All Hobbies
      </Link>

      <div className={`w-full h-40 rounded-2xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center mb-8 border border-[var(--color-border)]`}>
        <span className="text-6xl">{hobby.emoji}</span>
      </div>

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          {hobby.title}
        </h1>

        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
          {hobby.description}
        </p>

        <div className="space-y-4">
          {hobby.details.map((d, i) => (
            <div key={i} className="flex gap-3">
              <div className="mt-2 w-2 h-2 rounded-full shrink-0 bg-[var(--color-accent)]" />
              <p className="text-[var(--color-text-muted)] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
