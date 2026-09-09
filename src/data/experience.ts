export interface ExperienceEntry {
  id: string;
  type: "Education" | "Internship" | "Project" | "Research" | "Certification";
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: "mca-education",
    type: "Education",
    title: "Master of Computer Applications",
    organization: "PSNA College of Engineering and Technology, Dindigul, Tamil Nadu, India",
    duration: "2024 - 2026",
    description: "Post-Graduate study focused on software engineering, machine learning and cloud systems.",
  },
    {
    id: "bsc-education",
    type: "Education",
    title: "Bachelor of Science in Computer Science",
    organization: "The Gandhigram Rural Institute (Deemed to be University), Gandhigram, Tamil Nadu, India",
    duration: "2021 - 2024",
    description: "Undergraduate study focused on computer science fundamentals and programming.",
  },
  {
    id: "Web-Development-internship",
    type: "Internship",
    title: "Web Development Internship",
    organization: "CODSOFT",
    duration: "June 2024 - August 2024",
    description: "Hands-on experience with web application development practices.",
  },
   {
    id: "Agro-Hub",
    type: "Project",
    title: "Agro Hub - Smart Agriculture Information System",
    organization: "Academic project",
    duration: "January 2024 - April 2024",
    description: "Developed a full-stack web application to provide farmers with real-time information on crop health, and crop suggestions along with planting guidance and tools usage.",
  },
  {
    id: "coconut-leaf-disease-detection",
    type: "Project",
    title: "Coconut Leaf Disease Detection System",
    organization: "Academic project",
    duration: "January 2026 - June 2026",
    description: "Developed a deep learning-based image classification system to automatically identify diseases in coconut leaves with 11 classes, providing accurate and timely information for farmers along with a treatment recommendation and grad-CAM visualization in web applications.",
  },
  {
    id: "ai-ml-research",
    type: "Research",
    title: "Applied AI/ML Research Projects",
    organization: "Independent / academic",
    duration: "January 2026 - June 2026",
    description: "Built and researched deep learning and ML systems spanning healthcare, agriculture.",
  },
];
