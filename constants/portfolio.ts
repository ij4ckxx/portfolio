import type { Mission, Project } from "@/types/portfolio";

export const profile = {
  name: "JEGAN NATHAN",
  role: "SOFTWARE ENGINEER | FULL STACK DEVELOPER",
  tagline:
    "Building enterprise commerce systems, scalable architectures, and AI-powered experiences.",
  email: "mpjegannathanmech@gmail.com",
  phone: "+91 93612 32740",
  github: "https://github.com/mpjegannathanmech",
  githubUser: "mpjegannathanmech",
  linkedin: "https://linkedin.com/in/jegannathan-mp",
  resume: "/jegan-resume.pdf",
  company: "Arizon Digital",
  location: "India",
};

export const trustSignals = [
  "Best Performer Award 2025",
  "45+ websites supported",
  "US client experience",
  "Enterprise Commerce Engineer",
  "Full Stack Developer",
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Prisma",
  "Tailwind",
  "GSAP",
  "Framer Motion",
  "BigCommerce",
  "Makeswift",
  "Redux",
  "Zustand",
  "Neon DB",
];

export const missions: Mission[] = [
  {
    id: "M-01",
    title: "Catalyst storefront systems",
    detail: "Built large-scale BigCommerce Catalyst storefronts with reusable architecture.",
  },
  {
    id: "M-02",
    title: "45+ website architecture",
    detail: "Established reusable patterns supporting repeated enterprise storefront delivery.",
  },
  {
    id: "M-03",
    title: "CMS command modules",
    detail: "Developed CMS-driven Makeswift components and dynamic content systems.",
  },
  {
    id: "M-04",
    title: "Authentication protocols",
    detail: "Integrated Google and Facebook SSO with polished authentication experiences.",
  },
  {
    id: "M-05",
    title: "Document workflows",
    detail: "Implemented progress tracking, PDF workflows, and downloadable ICS calendar flows.",
  },
  {
    id: "M-06",
    title: "Client delivery loop",
    detail: "Collaborated with clients, QA, backend teams, and design teams to ship cleanly.",
  },
];

export const projects: Project[] = [
  {
    name: "NEXTRON AI ASSISTANT",
    system: "AI DESKTOP SUBSYSTEM",
    summary:
      "A desktop AI assistant with authenticated sessions, persistent conversations, Gemini integration, and local LLM experiments.",
    highlights: [
      "AI Desktop Assistant",
      "JWT Auth",
      "Gemini AI",
      "Persistent Memory",
      "App Store",
      "LM Studio Experiments",
    ],
    stack: [
      "Next.js",
      "Electron",
      "Nextron",
      "TypeScript",
      "Express.js",
      "Prisma",
      "Neon",
      "JWT",
      "Gemini API",
      "Zustand",
    ],
  },
  {
    name: "GES PLATFORM",
    system: "ENTERPRISE CMS SUBSYSTEM",
    summary:
      "A CMS-driven platform with authentication, progress dashboards, PDF generation, ICS integrations, and dynamic layouts.",
    highlights: [
      "Authentication",
      "Progress Tracking",
      "PDF Generation",
      "ICS Integrations",
      "CMS Experiences",
    ],
    stack: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Makeswift"],
  },
  {
    name: "NORDIXONE",
    system: "CORPORATE SIGNAL SUBSYSTEM",
    summary:
      "A polished corporate website implementation focused on Figma precision, performance, responsive UI, and accessibility.",
    highlights: ["Corporate Experience", "Figma Precision", "Performance", "Accessibility"],
    stack: ["Next.js", "Tailwind CSS"],
  },
];
