export type SkillCategory = {
  name: string;
  description: string;
  items: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    description: 'Interfaces modernas, rápidas y accesibles',
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'TailwindCSS', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Framer Motion', level: 78 },
    ],
  },
  {
    name: 'Backend',
    description: 'APIs robustas, escalables y seguras',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Prisma', level: 82 },
      { name: 'JWT / Auth', level: 78 },
    ],
  },
  {
    name: 'Herramientas',
    description: 'Stack diario para producir más y mejor',
    items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'Vite', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Vercel / Railway', level: 80 },
    ],
  },
];

export const techStack = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS',
  'Prisma', 'Docker', 'Next.js', 'Express', 'Framer Motion',
  'Git', 'Vite', 'Figma', 'Cloudinary', 'Vercel',
];
