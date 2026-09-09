export const site = {
  name: "Arun Selvan D",
  title: "Software Engineer",
  roles: ["Software Engineer", "Full-Stack Developer", "AI/ML Developer"],
  tagline: "Building intelligent, scalable & modern digital experiences.",
  intro:
    "I work across full-stack web development and applied AI/ML — shipping Java/Spring Boot and React applications on one side, and training deep learning and classical ML models on the other. I care about systems that hold up in production, not just in a notebook.",
  location: "Dindigul, Tamil Nadu, India",
  email: "arunselvand07@gmail.com",
  phone: "+91 9150256090",
  resumePath: "src\\assets\\Arun Selvan D - Full Stack Developer.pdf",
  whatsappNumber: "919150256090", 
  social: {
    github: "https://github.com/Hackerin63",
    linkedin: "https://www.linkedin.com/in/arunselvand2003",
    email: "mailto:arunselvand07@gmail.com",
  },
  formEndpoint: "", // e.g. a Formspree/Getform endpoint — [configure to enable sending]
};

export function whatsappLink(message = "Hi Arun, I found your portfolio and I'd like to talk about a project."): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const philosophy = [
  {
    title: "Ship end to end",
    body: "I prefer taking an idea from a blank repo to a deployed, working system rather than stopping at a prototype.",
  },
  {
    title: "Explainable over opaque",
    body: "In ML work, I favor models and pipelines I can explain the reasoning of — especially for health and finance-adjacent systems.",
  },
  {
    title: "Practical architecture",
    body: "Clean structure matters, but only in service of something that's simple to run, deploy and hand off.",
  },
];

export const focusAreas = [
  "Full-stack web development",
  "Java & Spring Boot",
  "React & TypeScript",
  "Machine Learning & Deep Learning",
  "Computer Vision & NLP",
  "Cloud deployment",
];
