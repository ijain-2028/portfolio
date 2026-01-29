export interface Project {
  id: string;
  title: string;
  label: string;
  labelColor: string;
  description: string;
  details: string[];
  tags: string[];
  tagColor: string;
  icon: "pulse" | "layers" | "code" | "globe";
  gradient: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "pulse",
    title: "Pulse",
    label: "In Development",
    labelColor: "var(--color-accent)",
    description:
      "An AI-powered mental health platform designed to support chronic disease patients through personalized, accessible psychosocial care.",
    details: [
      "Designing a conversational AI experience that meets dialysis and CKD patients where they are — addressing isolation, anxiety, and treatment fatigue.",
      "The platform adapts its approach based on validated clinical assessments (PHQ-8 and GAD-7), delivering the right support at the right time.",
      "Aiming to improve medication adherence and quality of life through automated, always-available mental health support.",
      "Built as a modular system, starting with Nephrology and expanding into Oncology care.",
    ],
    tags: ["Health-Tech", "AI", "Mental Health", "Nephrology"],
    tagColor: "var(--color-accent)",
    icon: "pulse",
    gradient: "from-[#3b82f6]/20 via-[#8b5cf6]/10 to-transparent",
  },
  {
    id: "uplyftz",
    title: "Uplyftz",
    label: "501(c)(3) Nonprofit",
    labelColor: "var(--color-accent-2)",
    description:
      "A nonprofit uplifting communities through hands-on STEM education and affordable digital services for local businesses.",
    details: [
      "Founded and lead a registered 501(c)(3) nonprofit organization from the ground up.",
      "Designed hands-on education programs for schools — teaching students 3D Design, Coding, and Financial Literacy.",
      "Launched a Web Services initiative providing affordable web design, SEO, and digital presence management to small businesses and organizations.",
      "All revenue is reinvested into expanding community programs and reaching underserved areas.",
    ],
    tags: ["Nonprofit", "Education", "Community", "Leadership"],
    tagColor: "var(--color-accent-2)",
    icon: "layers",
    gradient: "from-[#8b5cf6]/20 via-[#06b6d4]/10 to-transparent",
    link: "https://uplyftz.org",
  },
];

export function getProjectsByIds(ids: string[]): Project[] {
  return ids.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);
}
