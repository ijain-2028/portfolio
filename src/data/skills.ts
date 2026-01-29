export interface Skill {
  id: string;
  category: string;
  categoryColor: string;
  items: string[];
  description: string;
}

export const skills: Skill[] = [
  {
    id: "languages",
    category: "Development",
    categoryColor: "var(--color-accent)",
    items: ["TypeScript", "Python", "SQL", "C/C++", "Java"],
    description:
      "Full-stack development across web platforms, backend systems, and data-driven applications. Comfortable building end-to-end products from scratch.",
  },
  {
    id: "ai-ml",
    category: "AI & Data",
    categoryColor: "var(--color-accent-2)",
    items: ["OpenAI", "Anthropic", "Gemini", "Cursor", "Claude Code"],
    description:
      "Hands-on experience building with leading AI platforms — from GPT and Claude to Gemini. Using modern AI-native tools like Cursor and Claude Code to accelerate development.",
  },
  {
    id: "tools",
    category: "Product & Operations",
    categoryColor: "var(--color-accent-3)",
    items: ["Git", "GitHub", "eClinicalWorks", "Google Ads", "SEO"],
    description:
      "Beyond code — experience with version control, EHR platforms, digital advertising, and search engine optimization for real-world business impact.",
  },
  {
    id: "domains",
    category: "Domain Expertise",
    categoryColor: "var(--color-accent)",
    items: ["Health-Tech", "Nephrology", "Oncology", "Nonprofit Management", "Real Estate Tech"],
    description:
      "Deep understanding of healthcare workflows from clinical internships, professional health-tech roles, and founding a community nonprofit.",
  },
];

export function getSkillsByIds(ids: string[]): Skill[] {
  return ids.map((id) => skills.find((s) => s.id === id)!).filter(Boolean);
}
