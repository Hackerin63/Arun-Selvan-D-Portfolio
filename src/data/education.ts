export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  coursework: string[];
  focus: string;
}

export const education: EducationEntry[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "PSNA College of Engineering and Technology, Dindigul, Tamil Nadu, India",
    duration: "2024 - 2026",
    coursework: [
      "Advanced Software Engineering",
      "Machine Learning",
      "Cloud Computing",
      "Database Systems",
      "Full-Stack Web Development",
    ],
    focus: "Full-stack software development and applied machine learning.",
  },
  {
    id: "bsc-cs",
    degree: "Bachelor of Science in Computer Science",
    institution: "The Gandhigram Rural Institute (Deemed to be University), Gandhigram, Tamil Nadu, India",
    duration: "2021 - 2024",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Web Development",
    ],
    focus: "Foundations of computer science and programming.",
  },
];
