export type ProjectCategory = "full-stack" | "ai-ml" | "deep-learning" | "academic";

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  features: string[];
  challenges: string;
  results: string;
  categories: ProjectCategory[];
  github?: string;
  demo?: string;
  status: "Deployed" | "In progress" | "Completed" | "Academic project";
}

export const projects: Project[] = [
  {
    id: "Royal-Spice-Online-Food-Ordering-System",
    title: "Royal Spice Online Food Ordering System",
    summary: "A full-stack web application for online food ordering and management.",
    problem:
      "Manual food ordering and management processes are inefficient and prone to errors.",
    solution:
      "Developed a full-stack web application with a modern architecture to streamline food ordering and management processes via WhatsApp integration.",
    architecture:
      "A Node.js backend with a RESTful API, integrated with a React frontend for a responsive user interface.",
    technologies: ["Node.js", "Express", "React", "PostgreSQL"],
    features: [
      "Food menu management",
      "Order management",
      "User authentication",
      "WhatsApp integration",
      "Real-time updates",
      "Admin dashboard",
    ],
    challenges:
      "Integrating WhatsApp API for order notifications and ensuring real-time updates across the system. ",
    results: "The system improved order processing efficiency and reduced errors in food ordering.",
    categories: ["full-stack"],
    github: "https://github.com/Hackerin63/royalspicehub",
    demo: "https://royalspicehub.netlify.app/",
    status: "Completed",
  },
  {
    id: "LUXE-Store-E-Commerce-Platform",
    title: "LUXE - Premium Luxury Design and Collections E-Commerce Platform",
    summary: "A full-stack e-commerce platform for premium luxury design and collections.",
    problem:
      "The luxury design and collections market lacks a dedicated online platform that offers a seamless shopping experience for premium products.",
    solution:
      "Built a full-stack e-commerce platform with a modern architecture to provide a seamless shopping experience for premium luxury items.",
    architecture:
      "A Node.js backend with a RESTful API, integrated with a React frontend for a responsive user interface with in app ordering capabilities with authentication.",
    technologies: ["Node.js", "Express", "React", "PostgreSQL"],
    features: [
      "Product management",
      "Shopping cart functionality",
      "User authentication",
      "Payment processing",
      "Admin dashboard",
    ],
    challenges:
      "Designing a user-friendly interface that showcases premium products effectively and ensuring a smooth checkout process. — [add specifics]",
    results: "The platform successfully launched, providing a seamless shopping experience for luxury design and collections.",
    categories: ["full-stack"],
    github: "https://github.com/Hackerin63/luxe-store",
    demo: "https://luxe-store.pages.dev/",
    status: "Completed",
  },
  {
    id: "Cartato-Online-Shopping-Cart-System",
    title: "Cartato - Online Shopping Cart System",
    summary: "A full-stack e-commerce platform for managing online shopping carts.",
    problem:
      "Existing shopping cart solutions lack the flexibility and customization options needed for modern e-commerce needs.",
    solution:
      "Built a full-stack platform with a modern architecture to provide a seamless shopping experience for managing online shopping carts.",
    architecture:
      "A Node.js backend with a RESTful API, integrated with a React frontend for a responsive user interface.",
    technologies: ["Node.js", "Express", "React", "PostgreSQL"],
    features: [
      "Shopping cart management",
      "Product browsing",
      "User authentication",
      "Payment processing",
      "Admin dashboard",
    ],
    challenges: "Ensuring a smooth and responsive user experience while managing complex shopping cart functionalities.",
    results: "The platform successfully launched, providing a seamless shopping experience for managing online shopping carts.",
    categories: ["full-stack"],
    github: "https://github.com/Hackerin63/cartato",
    demo: "https://cartato.pages.dev/",
    status: "Completed",
  },
  {
    id: "coconut-leaf-disease-detection system",
    title: "Coconut Leaf Disease Detection System",
    summary: "An image classification system for identifying diseases in coconut leaves.",
    problem:
      "Manual identification of coconut leaf diseases is time-consuming and prone to errors.",
    solution:
      " Developed a deep learning-based image classification system to automatically identify diseases in coconut leaves with 11 classes, providing accurate and timely information for farmers along with a treatment recommendation and grad-CAM visualization in web applications.",
    architecture: "React frontend consuming a Spring Boot REST API, with persistence for modules and user progress.",
    technologies: ["Java", "Spring Boot", "REST API", "Deep Learning", "TensorFlow", "Keras"],
    features: ["Image classification", "Disease detection", "Grad-CAM visualization", "Web application integration"],
    challenges: "Balancing model size for fast inference against classification accuracy. — [add specifics]",
    results: "The model reached 96% accuracy on the test set, enabling efficient and accurate disease detection for coconut leaves.",
    categories: ["full-stack", "ai-ml", "deep-learning"],
    github: "https://github.com/Hackerin63/CLDPS",
    status: "Completed",
  },
  {
    id: "pos-Billing-System",
    title: "POS Billing System",
    summary: "A full-stack point-of-sale billing system for retail businesses as a desktop application.",
    problem:
      "Existing POS systems are often outdated, lack modern features, and don't provide a good user experience.",
    solution:
      "Developed a full-stack desktop application with a modern architecture to streamline billing processes for retail businesses.",
    architecture:
      "A React frontend integrated with a Node.js backend, providing a responsive user interface and efficient data management with a product billing and stock management system.",
    technologies: ["JavaScript", "Node.js", "React", "Electron", "TypeScript", "Vite", "REST API"],
    features: [
      "Product management",
      "Billing",
      "Stock management"
    ],
    challenges:
      "Ensuring real-time updates and synchronization between the frontend and backend, while maintaining a responsive user interface.",
    results: "The system improved billing efficiency and provided a modern user experience for retail businesses.",
    categories: ["full-stack"],
    status: "Completed",
  },
];

export const projectFilters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "full-stack" },
  { label: "AI/ML", value: "ai-ml" },
  { label: "Deep Learning", value: "deep-learning" },
  { label: "Academic", value: "academic" },
];
