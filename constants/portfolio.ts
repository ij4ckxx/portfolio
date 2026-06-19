import type { Credential, Mission, Project, SkillCategory } from "@/types/portfolio";

export const profile = {
  name: "JEGAN NATHAN M P",
  role: "SOFTWARE DEVELOPER | FULL STACK DEVELOPER",
  tagline:
    "Building enterprise commerce systems, scalable architectures, and AI-powered experiences.",
  summary:
    "I build enterprise commerce systems, CMS-driven storefronts, scalable frontend architectures, and AI-powered applications using Next.js, TypeScript, React, GraphQL, BigCommerce Catalyst, and modern full-stack technologies.",
  email: "mpjegannathanmech@gmail.com",
  phone: "+91 93612 32740",
  portfolio: "https://ijackx-portfolio.vercel.app",
  github: "https://github.com/jegannathan-mp",
  githubUser: "jegannathan-mp",
  githubAlt: "https://github.com/ij4ckxx",
  linkedin: "https://www.linkedin.com/in/mpjegannathanmech",
  resume: "/Jegan_Nathan_M_P_Resume.pdf",
  company: "Arizon Digital - USA",
  location: "Chennai, India",
};

export const trustSignals = [
  "Best Performer Award Sep 2025",
  "45+ websites supported",
  "US client experience",
  "Enterprise commerce systems",
  "Full Stack Developer",
];

export const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "React Query",
  "Tailwind CSS",
  "BigCommerce Catalyst",
  "Makeswift",
  "Prisma ORM",
  "GSAP",
  "Zustand",
  "Gemini API",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Radix UI", "shadcn/ui", "Framer Motion", "GSAP Basics"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Next.js API Routes"],
  },
  {
    title: "State Management",
    items: ["React Query", "Redux", "Zustand"],
  },
  {
    title: "APIs and Databases",
    items: ["REST APIs", "GraphQL", "SQL", "MySQL", "PostgreSQL", "Neon DB", "Prisma ORM"],
  },
  {
    title: "Platforms and Tools",
    items: ["BigCommerce Catalyst", "Makeswift", "Git", "GitHub", "Azure Repos", "Vercel", "Netlify", "Render"],
  },
  {
    title: "AI Integration",
    items: ["Gemini API", "Google AI SDK", "LLM Integration", "Prompt Engineering", "LM Studio"],
  },
];

export const missions: Mission[] = [
  {
    id: "M-01",
    title: "Enterprise Catalyst interfaces",
    detail: "Built production-ready Next.js and TypeScript interfaces from Figma designs for enterprise commerce applications.",
  },
  {
    id: "M-02",
    title: "Security hardening",
    detail: "Resolved customer ID exposure issues, applied CSP fixes, and configured secure cookie behavior.",
  },
  {
    id: "M-03",
    title: "Performance optimization",
    detail: "Reduced duplicate API calls using Promise.all, memoization, reusable utilities, and cleaner data-fetching patterns.",
  },
  {
    id: "M-04",
    title: "Code quality refactors",
    detail: "Resolved 50+ high-priority SonarQube issues around complexity, repeated logic, and reusable function design.",
  },
  {
    id: "M-05",
    title: "Client delivery loop",
    detail: "Collaborated with clients, QA engineers, and backend developers to validate functionality and support releases.",
  },
  {
    id: "M-06",
    title: "Production support",
    detail: "Supported critical project releases and production activities for enterprise commerce systems.",
  },
];

export const projects: Project[] = [
  {
    name: "GES EXHIBITOR PORTAL",
    system: "PROFESSIONAL PROJECT",
    summary:
      "Enterprise event and exhibitor platform with a BigCommerce-integrated Show App, CMS-driven microsites, booth flows, PDFs, calendars, and commerce workflows.",
    highlights: [
      "Auth and accounts",
      "Booth management",
      "Dynamic microsites",
      "PDF exports",
      "ICS calendars",
      "Show App admin",
    ],
    stack: ["Next.js", "TypeScript", "GraphQL", "REST APIs", "BigCommerce Catalyst", "Makeswift", "Radix UI", "jsPDF"],
  },
  {
    name: "BELAMI COMMERCE",
    system: "PROFESSIONAL PROJECT",
    summary:
      "Large-scale commerce platform containing 45 websites with reusable storefront architecture, Makeswift CMS components, authentication flows, and B2B customization.",
    highlights: ["45 websites", "5 sites delivered", "SSO login", "B2B registration", "Email templates", "API optimization"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "BigCommerce Catalyst", "Makeswift", "Handlebars"],
  },
  {
    name: "LOCAL AGENT",
    system: "PERSONAL AI PROJECT",
    summary:
      "AI-powered Nextron desktop application with ChatGPT/Gemini-style UI, recent chats, project conversations, persistence, AI responses, and app automation concepts.",
    highlights: ["AI desktop app", "Gemini API", "Google AI SDK", "Project chats", "Neon DB", "Winget app agent"],
    stack: ["Nextron", "Next.js", "Electron", "TypeScript", "Express.js", "PostgreSQL", "Prisma ORM", "Zustand"],
    links: [
      { label: "Frontend", href: "https://github.com/ij4ckxx/ai-app/" },
      { label: "Backend", href: "https://github.com/ij4ckxx/local-agent-be" },
    ],
  },
  {
    name: "NORDIXONE",
    system: "PERSONAL TEAM PROJECT",
    summary:
      "Responsive corporate website delivered in a 3-member team within 3 days using Next.js, Tailwind CSS, and Framer Motion.",
    highlights: ["3-day delivery", "Responsive UI", "Team build", "Smooth animations"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: [
      { label: "Live", href: "https://nordixone.vercel.app/" },
      { label: "GitHub", href: "https://github.com/ij4ckxx/nordixone" },
    ],
  },
];

export const aboutHighlights = [
  "Nearly 2 years building enterprise commerce systems, CMS-driven storefronts, and AI-powered applications.",
  "Hands-on with Figma-to-production UI, reusable UI systems, performance optimization, and security fixes.",
  "Current work spans large-scale eCommerce apps, custom storefront features, PDF workflows, authentication, and frontend architecture.",
];

export const credentials: Credential[] = [
  {
    title: "Best Performer Award",
    issuer: "Arizon Digital",
    detail: "September 2025",
  },
  {
    title: "React Basics",
    issuer: "Coursera",
    detail: "Credential",
    href: "https://www.coursera.org/account/accomplishments/verify/F5QBGTRUKZDT",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Coursera",
    detail: "Credential",
    href: "https://www.coursera.org/account/accomplishments/verify/AVDVF9RT22KV",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Coursera",
    detail: "Credential",
    href: "https://www.coursera.org/account/accomplishments/verify/C49B2WKNQ5U8",
  },
  {
    title: "MERN Stack Development",
    issuer: "KGiSL Institute of Technology",
    detail: "Mar 2024 - Jul 2024",
  },
  {
    title: "B.E. Mechanical Engineering",
    issuer: "SACS MAVMM Engineering College, Anna University",
    detail: "2019 - 2023",
  },
];
