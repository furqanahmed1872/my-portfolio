// ============================================================
// SITE DATA — Edit everything here to customise the portfolio
// ============================================================

export const siteConfig = {
  name: "Furqan",
  title: "Furqan — Full-Stack Developer",
  description:
    "Full-Stack Developer from Lahore, Pakistan. 5+ years building scalable web apps with React, Next.js, Node.js & Python.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://furqan.dev",
  email: "furqan@dev.pk",
  location: "Lahore, Pakistan",
  timezone: "UTC+5",
  available: true,
  viewerCount: 247,
};

export const socialLinks = {
  github: "https://github.com/furqan",
  linkedin: "https://linkedin.com/in/furqan",
  twitter: "https://twitter.com/furqan",
  instagram: "https://instagram.com/furqan",
  email: "mailto:furqan@dev.pk",
};

export const stats = [
  { num: "5+", label: "Years Exp." },
  { num: "40+", label: "Projects" },
  { num: "20+", label: "Clients" },
  { num: "3", label: "Countries" },
];

export const heroRoles = [
  "Full-Stack Developer",
  "React & Node.js Engineer",
  "API Architect",
  "SaaS Builder",
  "Problem Solver",
];

// Tech stack icons (uses https://skillicons.dev)
export interface TechIcon {
  name: string;
  icon: string; // skillicons.dev slug
  color: string;
}

export const techStack: TechIcon[] = [
  { name: "HTML5",      icon: "html",       color: "#e34f26" },
  { name: "CSS3",       icon: "css",        color: "#1572b6" },
  { name: "JavaScript", icon: "js",         color: "#f7df1e" },
  { name: "TypeScript", icon: "ts",         color: "#3178c6" },
  { name: "React",      icon: "react",      color: "#61dafb" },
  { name: "Next.js",    icon: "nextjs",     color: "#000000" },
  { name: "Node.js",    icon: "nodejs",     color: "#339933" },
  { name: "Python",     icon: "python",     color: "#3776ab" },
  { name: "Django",     icon: "django",     color: "#092e20" },
  { name: "FastAPI",    icon: "fastapi",    color: "#009688" },
  { name: "PostgreSQL", icon: "postgres",   color: "#336791" },
  { name: "MongoDB",    icon: "mongodb",    color: "#47a248" },
  { name: "Redis",      icon: "redis",      color: "#dc382d" },
  { name: "Docker",     icon: "docker",     color: "#2496ed" },
  { name: "AWS",        icon: "aws",        color: "#ff9900" },
  { name: "Tailwind",   icon: "tailwind",   color: "#06b6d4" },
  { name: "Git",        icon: "git",        color: "#f05032" },
  { name: "GitHub",     icon: "github",     color: "#181717" },
  { name: "VS Code",    icon: "vscode",     color: "#007acc" },
  { name: "Figma",      icon: "figma",      color: "#f24e1e" },
];

export type SkillLevel = "expert" | "strong" | "good";

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  bgColor: string;
  skills: { name: string; level: SkillLevel }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend", label: "Frontend", icon: "FE", color: "#1a4fd6", bgColor: "#e8eefb",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "strong" },
      { name: "Framer Motion", level: "strong" },
      { name: "Redux", level: "strong" },
      { name: "Vue.js", level: "good" },
      { name: "Three.js", level: "good" },
    ],
  },
  {
    id: "backend", label: "Backend", icon: "BE", color: "#5c4ed4", bgColor: "#eeecfb",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "Python", level: "strong" },
      { name: "Django", level: "strong" },
      { name: "FastAPI", level: "strong" },
      { name: "REST APIs", level: "strong" },
      { name: "GraphQL", level: "good" },
      { name: "WebSockets", level: "good" },
    ],
  },
  {
    id: "database", label: "Database & Cloud", icon: "DB", color: "#0d7e62", bgColor: "#e0f3ec",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MongoDB", level: "expert" },
      { name: "Redis", level: "strong" },
      { name: "AWS", level: "strong" },
      { name: "Docker", level: "strong" },
      { name: "Supabase", level: "strong" },
      { name: "Firebase", level: "good" },
      { name: "Kubernetes", level: "good" },
    ],
  },
  {
    id: "ai", label: "AI & Emerging", icon: "AI", color: "#b35d0a", bgColor: "#fdf0e0",
    skills: [
      { name: "OpenAI API", level: "strong" },
      { name: "LangChain", level: "strong" },
      { name: "Vercel AI SDK", level: "strong" },
      { name: "RAG Pipelines", level: "good" },
      { name: "Prompt Eng.", level: "good" },
      { name: "TensorFlow", level: "good" },
    ],
  },
];

export type ProjectCategory = "all" | "web" | "ai" | "saas" | "ecom";

export interface Project {
  id: string;
  cat: Exclude<ProjectCategory, "all">;
  name: string;
  desc: string;
  stack: string[];
  // gradient used as thumbnail bg
  gradient: string;
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "nexusai",
    cat: "saas",
    name: "NexusAI Dashboard",
    desc: "Enterprise SaaS analytics platform with AI-driven insights and real-time pipelines for 50k+ users.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Redis"],
    gradient: "linear-gradient(135deg,#1a4fd6 0%,#5c4ed4 100%)",
    accentColor: "#1a4fd6",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "documind",
    cat: "ai",
    name: "DocuMind — AI Engine",
    desc: "RAG-powered document intelligence. Upload any PDF, get instant answers and structured extraction.",
    stack: ["React", "FastAPI", "LangChain", "Pinecone", "OpenAI"],
    gradient: "linear-gradient(135deg,#5c4ed4 0%,#c14028 100%)",
    accentColor: "#5c4ed4",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "karavan",
    cat: "ecom",
    name: "Karavan Commerce",
    desc: "High-performance e-commerce for Pakistani fashion brands with local payment integrations.",
    stack: ["Next.js", "Django", "PostgreSQL", "JazzCash", "Stripe"],
    gradient: "linear-gradient(135deg,#0d7e62 0%,#1a4fd6 100%)",
    accentColor: "#0d7e62",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "realpulse",
    cat: "web",
    name: "RealPulse — PropTech",
    desc: "Real estate platform with map-based search, virtual tours and AI property recommendations.",
    stack: ["React", "Node.js", "MongoDB", "Mapbox", "AWS"],
    gradient: "linear-gradient(135deg,#b35d0a 0%,#0d7e62 100%)",
    accentColor: "#b35d0a",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "taskflow",
    cat: "saas",
    name: "TaskFlow — Project OS",
    desc: "Team collaboration with Kanban boards, time tracking, client portals and automated reporting.",
    stack: ["Next.js", "Supabase", "TypeScript", "Framer Motion"],
    gradient: "linear-gradient(135deg,#c14028 0%,#b35d0a 100%)",
    accentColor: "#c14028",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "pulsehealth",
    cat: "web",
    name: "PulseHealth Telemedicine",
    desc: "HIPAA-compliant telemedicine with video consultations, e-prescriptions and EMR integration.",
    stack: ["React", "Node.js", "WebRTC", "PostgreSQL", "Docker"],
    gradient: "linear-gradient(135deg,#0d7e62 0%,#5c4ed4 100%)",
    accentColor: "#0d7e62",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  accentColor: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    period: "2022 — Present",
    role: "Senior Full-Stack Developer",
    company: "TechForge Solutions",
    location: "Lahore (Remote)",
    accentColor: "#1a4fd6",
    achievements: [
      "Led architecture of a multi-tenant SaaS platform serving <strong>50,000+ users</strong>, reducing load time by 60%.",
      "Built AI document processing pipeline with OpenAI + LangChain, cutting manual effort by <strong>80%</strong>.",
      "Mentored 4 junior developers and established engineering standards across the org.",
      "Migrated legacy PHP monolith to microservices — deploy frequency: <strong>weekly → daily</strong>.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Full-Stack Developer",
    company: "Nexus Digital Agency",
    location: "Lahore",
    accentColor: "#5c4ed4",
    achievements: [
      "Delivered <strong>15+ client projects</strong> across fintech, e-commerce, and edtech verticals.",
      "Built a real-time auction platform handling <strong>10,000 concurrent users</strong> via WebSockets.",
      "Integrated Stripe, JazzCash, and Easypaisa payment gateways across 8 products.",
    ],
  },
  {
    period: "2019 — 2020",
    role: "Junior Web Developer",
    company: "CodeCraft Studios",
    location: "Lahore",
    accentColor: "#0d7e62",
    achievements: [
      "Built and maintained <strong>20+ websites</strong> for local and international clients.",
      "Introduced automated testing, achieving <strong>75% code coverage</strong> on core modules.",
    ],
  },
];

export const educations = [
  { icon: "🎓", degree: "BS Computer Science", school: "UET Lahore", year: "2015–2019 · GPA 3.7/4.0", color: "#1a4fd6" },
  { icon: "☁️", degree: "AWS Developer Associate", school: "Amazon Web Services", year: "2023 · Valid through 2026", color: "#b35d0a" },
  { icon: "🤖", degree: "Deep Learning Specialization", school: "deeplearning.ai · Coursera", year: "2023 · 5-course series", color: "#5c4ed4" },
  { icon: "⚛️", degree: "Meta Front-End Certificate", school: "Meta · Coursera", year: "2022 · Professional Certificate", color: "#0d7e62" },
];

export const testimonials = [
  {
    quote: "Furqan shipped our entire MVP in 6 weeks — flawlessly. Rare developer who brings both technical depth and product thinking. Will hire again without hesitation.",
    name: "Sarah Ahmed", role: "CEO, LaunchPad Ventures · UK",
    initials: "SA", avatarBg: "#e8eefb", avatarColor: "#1a4fd6",
  },
  {
    quote: "Platform performance went from 3s to under 800ms after Furqan's optimisations. His backend and database expertise is genuinely world-class.",
    name: "Marcus Kim", role: "CTO, DataPulse Analytics · USA",
    initials: "MK", avatarBg: "#eeecfb", avatarColor: "#5c4ed4",
  },
  {
    quote: "Furqan doesn't wait for instructions — he proactively identifies problems and solves them. Exactly the engineer you want on critical projects.",
    name: "Fatima Rajput", role: "Product Lead, FinEdge · Dubai",
    initials: "FR", avatarBg: "#fdf0e0", avatarColor: "#b35d0a",
  },
];

export const missionCards = [
  {
    icon: "🎯",
    label: "My Goal",
    text: "Become a globally recognised product engineer — building software that reaches millions and solves real, hard problems at scale.",
    bg: "#e8eefb", border: "#c3d2f5", labelColor: "#1a4fd6", textColor: "#1d2d5a",
  },
  {
    icon: "🧭",
    label: "My Mission",
    text: "Bridge the gap between emerging markets and world-class tech. Elite engineering has no geography — Lahore ships just as well as London.",
    bg: "#eeecfb", border: "#c5bef4", labelColor: "#5c4ed4", textColor: "#2e2766",
  },
  {
    icon: "⚡",
    label: "How I Work",
    text: "Ownership mindset. I treat every project like my own startup — obsessing over performance, security, and UX from first commit to deploy.",
    bg: "#e0f3ec", border: "#9fd9c8", labelColor: "#0d7e62", textColor: "#0a4a38",
  },
  {
    icon: "🌍",
    label: "Bigger Picture",
    text: "Empowering Pakistani entrepreneurs with the same digital tools as Silicon Valley. Technology is the great equaliser.",
    bg: "#fdf0e0", border: "#f5c98a", labelColor: "#b35d0a", textColor: "#5a2d04",
  },
];
