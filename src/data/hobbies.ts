export interface Hobby {
  id: string;
  title: string;
  emoji: string;
  description: string;
  details: string[];
  gradient: string;
}

export const hobbies: Hobby[] = [
  {
    id: "3d-design",
    title: "3D Design",
    emoji: "🎨",
    description: "Creating 3D models and teaching design fundamentals through Uplyftz STEM programs.",
    details: [
      "Hands-on experience with 3D design software for modeling and prototyping.",
      "Teaching 3D design fundamentals to students through Uplyftz STEM education programs.",
      "Exploring the intersection of design and technology for practical applications.",
    ],
    gradient: "from-[#8b5cf6]/20 to-transparent",
  },
  {
    id: "medicine",
    title: "Medicine & Research",
    emoji: "🧬",
    description: "Exploring the intersection of AI and clinical care. Hands-on experience in rheumatology and nephrology settings.",
    details: [
      "Hands-on clinical experience as a Medical Assistant — patient triage, vitals, and intake.",
      "Research focused on AI-driven psychosocial interventions for chronic disease management (CKD/ESKD & Oncology).",
      "Seeking to attend the UCSD AI in Nephrology conference to present work on AI-driven interventions.",
      "Passionate about making healthcare more accessible through technology.",
    ],
    gradient: "from-[#3b82f6]/20 to-transparent",
  },
  {
    id: "startups",
    title: "Startups & Entrepreneurship",
    emoji: "🚀",
    description: "Founded a 501(c)(3) nonprofit. Passionate about building products that solve real problems.",
    details: [
      "Founded Uplyftz, a registered 501(c)(3) nonprofit organization.",
      "Experience transitioning between roles in startup environments — from marketing to full-stack development at Fidari.",
      "Driven by building products that have tangible impact on people's lives, especially in healthcare.",
    ],
    gradient: "from-[#06b6d4]/20 to-transparent",
  },
  {
    id: "teaching",
    title: "Teaching",
    emoji: "📚",
    description: "Designing hands-on STEM education programs covering coding, 3D design, and financial literacy.",
    details: [
      "Designing and implementing hands-on STEM programs for schools through Uplyftz.",
      "Curriculum covers 3D Design, Coding, and Financial Literacy to equip students with future-ready skills.",
      "Believe in making technology education accessible to all communities.",
    ],
    gradient: "from-[#f59e0b]/20 to-transparent",
  },
];

export function getHobbiesByIds(ids: string[]): Hobby[] {
  return ids.map((id) => hobbies.find((h) => h.id === id)!).filter(Boolean);
}
