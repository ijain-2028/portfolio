export interface Experience {
  id: string;
  title: string;
  role: string;
  label: string;
  labelColor: string;
  description: string;
  details: string[];
  tags: string[];
  tagColor: string;
  icon: "code" | "globe";
  gradient: string;
  link?: string;
}

export const experiences: Experience[] = [
  {
    id: "fidari-platform",
    title: "Fidari",
    role: "Full-Stack Developer",
    label: "Professional",
    labelColor: "var(--color-accent-3)",
    description:
      "Contributing to an AI-driven care coordination platform for community oncology — streamlining how cancer care teams work together.",
    details: [
      "Building features for an AI-powered platform that helps oncology teams coordinate patient care more effectively.",
      "Grew from a marketing role into full-stack product development, earning increased responsibility through demonstrated impact.",
      "Working at the intersection of oncology, mental health, and technology in a fast-moving startup environment.",
    ],
    tags: ["Oncology", "Care Coordination", "AI", "Startup"],
    tagColor: "var(--color-accent-3)",
    icon: "code",
    gradient: "from-[#06b6d4]/20 via-[#3b82f6]/10 to-transparent",
  },
  {
    id: "growthfactor",
    title: "GrowthFactor",
    role: "Software Engineering Intern",
    label: "Internship",
    labelColor: "var(--color-accent)",
    description:
      "Learning to build intelligent backend systems for an AI-powered real estate platform — focused on data quality and LLM integration.",
    details: [
      "Gaining hands-on experience in AI-powered real estate technology.",
      "Building backend systems focused on data validation and structured interactions with Large Language Models.",
    ],
    tags: ["Real Estate", "AI", "Data Systems"],
    tagColor: "var(--color-accent)",
    icon: "globe",
    gradient: "from-[#3b82f6]/20 via-[#06b6d4]/10 to-transparent",
    link: "https://growthfactor.com",
  },
];

export function getExperiencesByIds(ids: string[]): Experience[] {
  return ids.map((id) => experiences.find((e) => e.id === id)!).filter(Boolean);
}
