export interface SkillGroup {
  id: string;
  label: string;
  note: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Programming Languages",
    note: "core",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS","PHP", "C", "C++"],
  },
  {
    id: "frontend",
    label: "Frontend",
    note: "interface",
    skills: ["React", "Vite", "Tailwind CSS", "Responsive UI", "Modern JavaScript"],
  },
  {
    id: "backend",
    label: "Backend",
    note: "services",
    skills: ["Spring Boot", "REST APIs", "Node.js", "Flask"],
  },
  {
    id: "ai-ml",
    label: "AI / Machine Learning",
    note: "models",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Computer Vision",
      "NLP",
      "Explainable AI",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    note: "storage",
    skills: ["MySQL", "PostgreSQL", "H2", "Cloudflare D1"],
  },
  {
    id: "cloud-devops",
    label: "Cloud / DevOps",
    note: "infra",
    skills: ["Git", "GitHub", "Cloudflare", "Cloudflare Workers", "Cloudflare Pages", "Docker", "REST APIs"],
  },
  {
    id: "tools",
    label: "Tools",
    note: "workflow",
    skills: ["VS Code", "IntelliJ IDEA", "Postman", "Git"],
  },
];
