// // ============================================================
// // SITE DATA — Edit everything here to customise the portfolio
// // ============================================================

// export const siteConfig = {
//   name: "Furqan",
//   title: "Furqan — Full-Stack Developer",
//   description:
//     "Full-Stack Developer from Lahore, Pakistan. 5+ years building scalable web apps with React, Next.js, Node.js & Python.",
//   url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://furqan.dev",
//   email: "furqan@dev.pk",
//   location: "Lahore, Pakistan",
//   timezone: "UTC+5",
//   available: true,
//   viewerCount: 247,
// };

// export const socialLinks = {
//   github:    "https://github.com/furqan",
//   linkedin:  "https://linkedin.com/in/furqan",
//   twitter:   "https://twitter.com/furqan",
//   instagram: "https://instagram.com/furqan",
//   email:     "mailto:furqan@dev.pk",
// };

// export const stats = [
//   { num: "5+",  label: "Years Exp." },
//   { num: "40+", label: "Projects" },
//   { num: "20+", label: "Clients" },
//   { num: "3",   label: "Countries" },
// ];

// export const heroRoles = [
//   "Full-Stack Developer",
//   "React & Node.js Engineer",
//   "API Architect",
//   "SaaS Builder",
//   "Problem Solver",
// ];

// // Tech stack icons (uses https://skillicons.dev)
// export interface TechIcon {
//   name: string;
//   icon: string;
//   color: string;
// }

// export const techStack: TechIcon[] = [
//   { name: "HTML5",      icon: "html",     color: "#e34f26" },
//   { name: "CSS3",       icon: "css",      color: "#1572b6" },
//   { name: "JavaScript", icon: "js",       color: "#f7df1e" },
//   { name: "TypeScript", icon: "ts",       color: "#3178c6" },
//   { name: "React",      icon: "react",    color: "#61dafb" },
//   { name: "Next.js",    icon: "nextjs",   color: "#ffffff" },
//   { name: "Node.js",    icon: "nodejs",   color: "#339933" },
//   { name: "Python",     icon: "python",   color: "#3776ab" },
//   { name: "Django",     icon: "django",   color: "#092e20" },
//   { name: "FastAPI",    icon: "fastapi",  color: "#009688" },
//   { name: "PostgreSQL", icon: "postgres", color: "#336791" },
//   { name: "MongoDB",    icon: "mongodb",  color: "#47a248" },
//   { name: "Redis",      icon: "redis",    color: "#dc382d" },
//   { name: "Docker",     icon: "docker",   color: "#2496ed" },
//   { name: "AWS",        icon: "aws",      color: "#ff9900" },
//   { name: "Tailwind",   icon: "tailwind", color: "#06b6d4" },
//   { name: "Git",        icon: "git",      color: "#f05032" },
//   { name: "GitHub",     icon: "github",   color: "#ffffff" },
//   { name: "VS Code",    icon: "vscode",   color: "#007acc" },
//   { name: "Figma",      icon: "figma",    color: "#f24e1e" },
// ];

// export type SkillLevel = "expert" | "strong" | "good";

// export interface SkillCategory {
//   id: string;
//   label: string;
//   icon: string;
//   color: string;
//   bgColor: string;
//   skills: { name: string; level: SkillLevel }[];
// }

// export const skillCategories: SkillCategory[] = [
//   {
//     id: "frontend", label: "Frontend", icon: "FE",
//     color: "#00d4ff", bgColor: "rgba(0,212,255,0.1)",
//     skills: [
//       { name: "React.js",      level: "expert" },
//       { name: "Next.js",       level: "expert" },
//       { name: "TypeScript",    level: "expert" },
//       { name: "Tailwind CSS",  level: "strong" },
//       { name: "Framer Motion", level: "strong" },
//       { name: "Redux",         level: "strong" },
//       { name: "Vue.js",        level: "good" },
//       { name: "Three.js",      level: "good" },
//     ],
//   },
//   {
//     id: "backend", label: "Backend", icon: "BE",
//     color: "#4488ff", bgColor: "rgba(68,136,255,0.1)",
//     skills: [
//       { name: "Node.js",    level: "expert" },
//       { name: "Express.js", level: "expert" },
//       { name: "Python",     level: "strong" },
//       { name: "Django",     level: "strong" },
//       { name: "FastAPI",    level: "strong" },
//       { name: "REST APIs",  level: "strong" },
//       { name: "GraphQL",    level: "good" },
//       { name: "WebSockets", level: "good" },
//     ],
//   },
//   {
//     id: "database", label: "Database & Cloud", icon: "DB",
//     color: "#a855f7", bgColor: "rgba(168,85,247,0.1)",
//     skills: [
//       { name: "PostgreSQL", level: "expert" },
//       { name: "MongoDB",    level: "expert" },
//       { name: "Redis",      level: "strong" },
//       { name: "AWS",        level: "strong" },
//       { name: "Docker",     level: "strong" },
//       { name: "Supabase",   level: "strong" },
//       { name: "Firebase",   level: "good" },
//       { name: "Kubernetes", level: "good" },
//     ],
//   },
//   {
//     id: "ai", label: "AI & Emerging", icon: "AI",
//     color: "#f72585", bgColor: "rgba(247,37,133,0.1)",
//     skills: [
//       { name: "OpenAI API",    level: "strong" },
//       { name: "LangChain",     level: "strong" },
//       { name: "Vercel AI SDK", level: "strong" },
//       { name: "RAG Pipelines", level: "good" },
//       { name: "Prompt Eng.",   level: "good" },
//       { name: "TensorFlow",    level: "good" },
//     ],
//   },
// ];

// export type ProjectCategory = "all" | "web" | "ai" | "saas" | "ecom";

// export interface Project {
//   id: string;
//   cat: Exclude<ProjectCategory, "all">;
//   name: string;
//   desc: string;
//   stack: string[];
//   gradient: string;
//   accentColor: string;
//   liveUrl?: string;
//   githubUrl?: string;
// }

// export const projects: Project[] = [
//   {
//     id: "nexusai",
//     cat: "saas",
//     name: "NexusAI Dashboard",
//     desc: "Enterprise SaaS analytics platform with AI-driven insights and real-time pipelines for 50k+ users.",
//     stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Redis"],
//     gradient: "linear-gradient(135deg, #0d1117 0%, #1a2235 40%, #001a4d 100%)",
//     accentColor: "#00d4ff",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: "documind",
//     cat: "ai",
//     name: "DocuMind — AI Engine",
//     desc: "RAG-powered document intelligence. Upload any PDF, get instant answers and structured extraction.",
//     stack: ["React", "FastAPI", "LangChain", "Pinecone", "OpenAI"],
//     gradient: "linear-gradient(135deg, #0d1117 0%, #1a1035 40%, #2a0050 100%)",
//     accentColor: "#a855f7",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: "karavan",
//     cat: "ecom",
//     name: "Karavan Commerce",
//     desc: "High-performance e-commerce for Pakistani fashion brands with local payment integrations.",
//     stack: ["Next.js", "Django", "PostgreSQL", "JazzCash", "Stripe"],
//     gradient: "linear-gradient(135deg, #0d1117 0%, #0d2530 40%, #003322 100%)",
//     accentColor: "#00ff88",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: "realpulse",
//     cat: "web",
//     name: "RealPulse — PropTech",
//     desc: "Real estate platform with map-based search, virtual tours and AI property recommendations.",
//     stack: ["React", "Node.js", "MongoDB", "Mapbox", "AWS"],
//     gradient: "linear-gradient(135deg, #0d1117 0%, #1a0d00 40%, #2a1500 100%)",
//     accentColor: "#ff9900",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: "taskflow",
//     cat: "saas",
//     name: "TaskFlow — Project OS",
//     desc: "Team collaboration with Kanban boards, time tracking, client portals and automated reporting.",
//     stack: ["Next.js", "Supabase", "TypeScript", "Framer Motion"],
//     gradient: "linear-gradient(135deg, #0d1117 0%, #1a0d12 40%, #2a0020 100%)",
//     accentColor: "#f72585",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: "pulsehealth",
//     cat: "web",
//     name: "PulseHealth Telemedicine",
//     desc: "HIPAA-compliant telemedicine with video consultations, e-prescriptions and EMR integration.",
//     stack: ["React", "Node.js", "WebRTC", "PostgreSQL", "Docker"],
//     gradient: "linear-gradient(135deg, #0d1117 0%, #001020 40%, #002040 100%)",
//     accentColor: "#4488ff",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
// ];

// export interface Experience {
//   period: string;
//   role: string;
//   company: string;
//   location: string;
//   accentColor: string;
//   achievements: string[];
// }

// export const experiences: Experience[] = [
//   {
//     period: "2022 — Present",
//     role: "Senior Full-Stack Developer",
//     company: "TechForge Solutions",
//     location: "Lahore (Remote)",
//     accentColor: "#00d4ff",
//     achievements: [
//       "Led architecture of a multi-tenant SaaS platform serving <strong>50,000+ users</strong>, reducing load time by 60%.",
//       "Built AI document processing pipeline with OpenAI + LangChain, cutting manual effort by <strong>80%</strong>.",
//       "Mentored 4 junior developers and established engineering standards across the org.",
//       "Migrated legacy PHP monolith to microservices — deploy frequency: <strong>weekly → daily</strong>.",
//     ],
//   },
//   {
//     period: "2020 — 2022",
//     role: "Full-Stack Developer",
//     company: "Nexus Digital Agency",
//     location: "Lahore",
//     accentColor: "#4488ff",
//     achievements: [
//       "Delivered <strong>15+ client projects</strong> across fintech, e-commerce, and edtech verticals.",
//       "Built a real-time auction platform handling <strong>10,000 concurrent users</strong> via WebSockets.",
//       "Integrated Stripe, JazzCash, and Easypaisa payment gateways across 8 products.",
//     ],
//   },
//   {
//     period: "2019 — 2020",
//     role: "Junior Web Developer",
//     company: "CodeCraft Studios",
//     location: "Lahore",
//     accentColor: "#a855f7",
//     achievements: [
//       "Built and maintained <strong>20+ websites</strong> for local and international clients.",
//       "Introduced automated testing, achieving <strong>75% code coverage</strong> on core modules.",
//     ],
//   },
// ];

// export const educations = [
//   { icon: "🎓", degree: "BS Computer Science",       school: "UET Lahore",             year: "2015–2019 · GPA 3.7/4.0",       color: "#00d4ff" },
//   { icon: "☁️", degree: "AWS Developer Associate",   school: "Amazon Web Services",    year: "2023 · Valid through 2026",     color: "#ff9900" },
//   { icon: "🤖", degree: "Deep Learning Specialization", school: "deeplearning.ai · Coursera", year: "2023 · 5-course series",  color: "#a855f7" },
//   { icon: "⚛️", degree: "Meta Front-End Certificate", school: "Meta · Coursera",       year: "2022 · Professional Certificate", color: "#4488ff" },
// ];

// export const testimonials = [
//   {
//     quote: "Furqan shipped our entire MVP in 6 weeks — flawlessly. Rare developer who brings both technical depth and product thinking. Will hire again without hesitation.",
//     name: "Sarah Ahmed",
//     role: "CEO, LaunchPad Ventures · UK",
//     initials: "SA",
//     avatarBg: "rgba(0,212,255,0.1)",
//     avatarColor: "#00d4ff",
//   },
//   {
//     quote: "Platform performance went from 3s to under 800ms after Furqan's optimisations. His backend and database expertise is genuinely world-class.",
//     name: "Marcus Kim",
//     role: "CTO, DataPulse Analytics · USA",
//     initials: "MK",
//     avatarBg: "rgba(168,85,247,0.1)",
//     avatarColor: "#a855f7",
//   },
//   {
//     quote: "Furqan doesn't wait for instructions — he proactively identifies problems and solves them. Exactly the engineer you want on critical projects.",
//     name: "Fatima Rajput",
//     role: "Product Lead, FinEdge · Dubai",
//     initials: "FR",
//     avatarBg: "rgba(247,37,133,0.1)",
//     avatarColor: "#f72585",
//   },
// ];

// export const missionCards = [
//   {
//     icon: "🎯",
//     label: "My Goal",
//     text: "Become a globally recognised product engineer — building software that reaches millions and solves real, hard problems at scale.",
//     bg: "#e8eefb",
//     border: "#c3d2f5",
//     labelColor: "#00d4ff",
//     textColor: "#c8d0e8",
//   },
//   {
//     icon: "🧭",
//     label: "My Mission",
//     text: "Bridge the gap between emerging markets and world-class tech. Elite engineering has no geography — Lahore ships just as well as London.",
//     bg: "#eeecfb",
//     border: "#c5bef4",
//     labelColor: "#4488ff",
//     textColor: "#c8d0e8",
//   },
//   {
//     icon: "⚡",
//     label: "How I Work",
//     text: "Ownership mindset. I treat every project like my own startup — obsessing over performance, security, and UX from first commit to deploy.",
//     bg: "#e0f3ec",
//     border: "#9fd9c8",
//     labelColor: "#a855f7",
//     textColor: "#c8d0e8",
//   },
//   {
//     icon: "🌍",
//     label: "Bigger Picture",
//     text: "Empowering Pakistani entrepreneurs with the same digital tools as Silicon Valley. Technology is the great equaliser.",
//     bg: "#fdf0e0",
//     border: "#f5c98a",
//     labelColor: "#f72585",
//     textColor: "#c8d0e8",
//   },
// ];

// ============================================================
// SITE DATA — Edit everything here to customise the portfolio
// ============================================================

export const siteConfig = {
  name: "Furqan Ahmed",
  title: "Furqan Ahmed — Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer from Lahore, Pakistan. 5+ years building production-grade web apps, SaaS platforms & AI systems with React, Next.js, Node.js & Python.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://furqanahmed.dev",
  email: "furqanahmed1872@gmail.com",
  location: "Lahore, Pakistan",
  timezone: "UTC+5",
  available: true,
  viewerCount: 247,
};

export const socialLinks = {
  github:    "https://github.com/FurqanAhmed-web",
  linkedin:  "https://linkedin.com/in/furqanahmed1156",
  twitter:   "https://twitter.com/furqan",
  instagram: "https://instagram.com/furqan",
  email:     "mailto:furqanahmed1872@gmail.com",
};

export const stats = [
  { num: "5+",  label: "Years Exp." },
  { num: "10+", label: "Prod. Apps" },
  { num: "3",   label: "AI Systems" },
  { num: "40%", label: "API Latency Cut" },
];

export const heroRoles = [
  "Senior Full-Stack Developer",
  "React & Next.js Engineer",
  "Node.js & Python Expert",
  "AI Systems Builder",
  "SaaS Architect",
];

// Tech stack icons (uses https://skillicons.dev)
export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export const techStack: TechIcon[] = [
  { name: "React",        icon: "react",      color: "#61dafb" },
  { name: "Next.js",      icon: "nextjs",     color: "#ffffff" },
  { name: "TypeScript",   icon: "ts",         color: "#3178c6" },
  { name: "JavaScript",   icon: "js",         color: "#f7df1e" },
  { name: "Svelte",       icon: "svelte",     color: "#ff3e00" },
  { name: "Tailwind CSS", icon: "tailwind",   color: "#06b6d4" },
  { name: "Node.js",      icon: "nodejs",     color: "#339933" },
  { name: "Python",       icon: "python",     color: "#3776ab" },
  { name: "Express.js",   icon: "express",    color: "#ffffff" },
  { name: "PostgreSQL",   icon: "postgres",   color: "#336791" },
  { name: "Supabase",     icon: "supabase",   color: "#3ecf8e" },
  { name: "MongoDB",      icon: "mongodb",    color: "#47a248" },
  { name: "Redis",        icon: "redis",      color: "#dc382d" },
  { name: "Docker",       icon: "docker",     color: "#2496ed" },
  { name: "AWS",          icon: "aws",        color: "#ff9900" },
  { name: "GitHub Actions", icon: "githubactions", color: "#2088ff" },
  { name: "Git",          icon: "git",        color: "#f05032" },
  { name: "GitHub",       icon: "github",     color: "#ffffff" },
  { name: "Vercel",       icon: "vercel",     color: "#ffffff" },
  { name: "VS Code",      icon: "vscode",     color: "#007acc" },
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
    id: "frontend", label: "Frontend", icon: "FE",
    color: "#00d4ff", bgColor: "rgba(0,212,255,0.1)",
    skills: [
      { name: "React.js",      level: "expert" },
      { name: "Next.js",       level: "expert" },
      { name: "TypeScript",    level: "expert" },
      { name: "JavaScript ES6+", level: "expert" },
      { name: "Tailwind CSS",  level: "strong" },
      { name: "Material-UI",   level: "strong" },
      { name: "Svelte",        level: "strong" },
    ],
  },
  {
    id: "backend", label: "Backend", icon: "BE",
    color: "#4488ff", bgColor: "rgba(68,136,255,0.1)",
    skills: [
      { name: "Node.js",       level: "expert" },
      { name: "Express.js",    level: "expert" },
      { name: "Python",        level: "expert" },
      { name: "RESTful APIs",  level: "expert" },
      { name: "Microservices", level: "strong" },
      { name: "Serverless",    level: "strong" },
      { name: "WebSockets",    level: "strong" },
    ],
  },
  {
    id: "database", label: "Database & Cloud", icon: "DB",
    color: "#a855f7", bgColor: "rgba(168,85,247,0.1)",
    skills: [
      { name: "PostgreSQL",    level: "expert" },
      { name: "Supabase",      level: "expert" },
      { name: "MongoDB",       level: "expert" },
      { name: "Redis",         level: "strong" },
      { name: "AWS",           level: "strong" },
      { name: "Docker",        level: "strong" },
      { name: "GitHub Actions", level: "strong" },
      { name: "Vercel",        level: "good" },
    ],
  },
  {
    id: "ai", label: "AI & Automation", icon: "AI",
    color: "#f72585", bgColor: "rgba(247,37,133,0.1)",
    skills: [
      { name: "AI Chatbots",   level: "strong" },
      { name: "n8n Workflows", level: "strong" },
      { name: "Claude AI",     level: "strong" },
      { name: "Web Agents",    level: "strong" },
      { name: "Lovable",       level: "good" },
      { name: "Jest Testing",  level: "strong" },
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
  gradient: string;
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "khoros-automation",
    cat: "saas",
    name: "Khoros Automation Platform",
    desc: "5+ intelligent automation workflows cutting manual processing time by 35%. 8 modular microservices serving 100,000+ monthly active users.",
    stack: ["Next.js", "Node.js", "Python", "AWS", "Docker"],
    gradient: "linear-gradient(135deg, #0d1117 0%, #1a2235 40%, #001a4d 100%)",
    accentColor: "#00d4ff",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ai-chatbot-system",
    cat: "ai",
    name: "AI Automation System",
    desc: "3 production AI-powered automation systems with autonomous web agents, n8n workflows, and Claude AI integrations for enterprise clients.",
    stack: ["Python", "n8n", "Claude AI", "Node.js", "Supabase"],
    gradient: "linear-gradient(135deg, #0d1117 0%, #1a1035 40%, #2a0050 100%)",
    accentColor: "#a855f7",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "netsol-apps",
    cat: "saas",
    name: "NETSOL Enterprise Suite",
    desc: "12+ full-stack applications for 50,000+ users. Caching layers improved response speed by 45%. CI/CD pipelines cut deployment time by 60%.",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Supabase"],
    gradient: "linear-gradient(135deg, #0d1117 0%, #0d2530 40%, #003322 100%)",
    accentColor: "#00ff88",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "api-optimization",
    cat: "web",
    name: "API Performance Pipeline",
    desc: "Optimized 15+ RESTful APIs and data pipelines, reducing average latency by 40%. Managed AWS & Docker deployments at scale.",
    stack: ["Node.js", "Python", "Redis", "AWS", "Docker"],
    gradient: "linear-gradient(135deg, #0d1117 0%, #1a0d00 40%, #2a1500 100%)",
    accentColor: "#ff9900",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "noHes-apps",
    cat: "web",
    name: "NoHes Business Applications",
    desc: "6 business applications using React, Svelte & Express.js. MongoDB + Redis caching cut data retrieval time by 35%. 85% test coverage.",
    stack: ["React", "Svelte", "Express.js", "MongoDB", "Redis"],
    gradient: "linear-gradient(135deg, #0d1117 0%, #1a0d12 40%, #2a0020 100%)",
    accentColor: "#f72585",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "frontend-redesign",
    cat: "web",
    name: "NETSOL Frontend Redesign",
    desc: "Led frontend redesign for 3 products at NETSOL, improving accessibility scores by 40% and achieving 90%+ test coverage with QA.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Jest"],
    gradient: "linear-gradient(135deg, #0d1117 0%, #001020 40%, #002040 100%)",
    accentColor: "#4488ff",
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
    period: "Jan 2024 — Present",
    role: "Full Stack Developer",
    company: "Khoros",
    location: "Lahore (Remote)",
    accentColor: "#00d4ff",
    achievements: [
      "Built <strong>5+ intelligent automation workflows</strong>, cutting manual processing time by 35%.",
      "Developed <strong>8 modular microservices</strong> in Python and Node.js, improving system scalability by 50%.",
      "Optimized <strong>15+ RESTful APIs</strong> and data pipelines, reducing average latency by 40%.",
      "Managed AWS and Docker deployments serving <strong>100,000+ monthly active users</strong>.",
      "Translated AI-driven features into user interfaces, boosting user engagement by <strong>25%</strong>.",
      "Mentored 4 junior developers and reduced code review cycle time by <strong>30%</strong>.",
    ],
  },
  {
    period: "Sep 2020 — Dec 2023",
    role: "Senior Full-Stack Engineer",
    company: "NETSOL Technologies Inc.",
    location: "Lahore",
    accentColor: "#4488ff",
    achievements: [
      "Engineered <strong>12+ full-stack applications</strong> using React, Next.js, and Node.js for 50,000+ users.",
      "Integrated PostgreSQL and Supabase, reducing data query time by <strong>30%</strong>.",
      "Implemented caching layers that improved app response speed by <strong>45%</strong>.",
      "Automated CI/CD pipelines via GitHub Actions, cutting deployment time by <strong>60%</strong>.",
      "Led frontend redesign for 3 products, improving accessibility scores by <strong>40%</strong>.",
      "Achieved <strong>90%+ test coverage</strong> with QA, reducing production bugs by 50%.",
    ],
  },
  {
    period: "Apr 2019 — Aug 2020",
    role: "Software Engineer",
    company: "No Hes",
    location: "Lahore",
    accentColor: "#a855f7",
    achievements: [
      "Built and maintained <strong>6 business applications</strong> using React, Svelte, and Express.js.",
      "Designed backend APIs that reduced frontend-backend integration time by <strong>25%</strong>.",
      "Applied MongoDB and Redis caching, cutting data retrieval time by <strong>35%</strong>.",
      "Containerized 4 applications with Docker, streamlining deployments by <strong>40%</strong>.",
      "Wrote Jest test suites achieving <strong>85% coverage</strong>, reducing bug rate by 30%.",
    ],
  },
];

export const educations = [
  {
    icon: "🎓",
    degree: "Bachelor of Computer Science",
    school: "COMSATS Institute of Information Technology, Lahore",
    year: "2017 – 2021",
    color: "#00d4ff",
  },
  {
    icon: "⚙️",
    degree: "Software Engineer Certification",
    school: "HackerRank",
    year: "September 2024",
    color: "#00ff88",
  },
  {
    icon: "🖥️",
    degree: "Senior Backend Developer Certification",
    school: "HackerRank",
    year: "July 2022",
    color: "#4488ff",
  },
];

export const testimonials = [
  {
    quote: "Furqan shipped our entire MVP in 6 weeks — flawlessly. Rare developer who brings both technical depth and product thinking. Will hire again without hesitation.",
    name: "Sarah Ahmed",
    role: "CEO, LaunchPad Ventures · UK",
    initials: "SA",
    avatarBg: "rgba(0,212,255,0.1)",
    avatarColor: "#00d4ff",
  },
  {
    quote: "Platform performance went from 3s to under 800ms after Furqan's optimisations. His backend and database expertise is genuinely world-class.",
    name: "Marcus Kim",
    role: "CTO, DataPulse Analytics · USA",
    initials: "MK",
    avatarBg: "rgba(168,85,247,0.1)",
    avatarColor: "#a855f7",
  },
  {
    quote: "Furqan doesn't wait for instructions — he proactively identifies problems and solves them. Exactly the engineer you want on critical projects.",
    name: "Fatima Rajput",
    role: "Product Lead, FinEdge · Dubai",
    initials: "FR",
    avatarBg: "rgba(247,37,133,0.1)",
    avatarColor: "#f72585",
  },
];

export const missionCards = [
  {
    icon: "🎯",
    label: "My Goal",
    text: "Become a globally recognised product engineer — building software that reaches millions and solves real, hard problems at scale.",
    bg: "#e8eefb",
    border: "#c3d2f5",
    labelColor: "#00d4ff",
    textColor: "#c8d0e8",
  },
  {
    icon: "🧭",
    label: "My Mission",
    text: "Bridge the gap between emerging markets and world-class tech. Elite engineering has no geography — Lahore ships just as well as London.",
    bg: "#eeecfb",
    border: "#c5bef4",
    labelColor: "#4488ff",
    textColor: "#c8d0e8",
  },
  {
    icon: "⚡",
    label: "How I Work",
    text: "Ownership mindset. I treat every project like my own startup — obsessing over performance, security, and UX from first commit to deploy.",
    bg: "#e0f3ec",
    border: "#9fd9c8",
    labelColor: "#a855f7",
    textColor: "#c8d0e8",
  },
  {
    icon: "🌍",
    label: "Bigger Picture",
    text: "Empowering Pakistani entrepreneurs with the same digital tools as Silicon Valley. Technology is the great equaliser.",
    bg: "#fdf0e0",
    border: "#f5c98a",
    labelColor: "#f72585",
    textColor: "#c8d0e8",
  },
];