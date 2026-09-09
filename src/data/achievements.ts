export interface Achievement {
  id: string;
  category: "Certification" | "Hackathon" | "Academic" | "Technical" | "Course" | "Award";
  title: string;
  issuer: string;
  date: string;
}

export const achievements: Achievement[] = [
  { id: "codsoft", category: "Certification", title: "Full-Stack Development", issuer: "Codsoft", date: "May 2024" },
  { id: "tcs-forage", category: "Certification", title: "Job Simulation Program", issuer: "TCS (Forage)", date: "June 2025" },
  { id: "accenture-forage", category: "Certification", title: "Job Simulation Program", issuer: "Accenture (Forage)", date: "July 2025" },
  { id: "spoken-tutorial", category: "Certification", title: "C, Java, Advanced Java, Advanced C++", issuer: "Spoken Tutorial", date: "2023 - 2026" },
  { id: "placeholder-hackathon", category: "Hackathon", title: "Smart India Hackathon - 2025", issuer: "Ministry of Education's Innovation Cell & AICTE", date: "December 2025" },
  { id: "placeholder-hackathon-2", category: "Hackathon", title: "YarTech: Hackathon Participation ", issuer: "YarTech", date: "2025" },
];
