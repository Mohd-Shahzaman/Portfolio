export const profile = {
  name: "Mohammed Shahzaman",
  role: "Full-Stack Product Developer",
  discipline: "MERN Stack · AI Agents · Automation",
  summary:
    "Building AI-powered systems and real-time applications — from idea to deployment.",
  award: "Rs. 13.6 Lakhs funded · MSME 5.0 Hackathon 2026",
  location: "Hyderabad, Telangana, India",
  education:
    "B.Tech in Electronics & Communication Engineering · CMR College (2023–27)",
  email: "mohammedzama9024@gmail.com",
  phone: "+91 8121364055",
  github: "https://github.com/shahzaman",
  linkedin: "https://linkedin.com/in/shahzaman",
} as const;

export type Accent = "gold" | "coral" | "teal" | "violet";

export const accentDot: Record<Accent, string> = {
  gold: "bg-gold",
  coral: "bg-coral",
  teal: "bg-teal",
  violet: "bg-[oklch(0.62_0.16_305)]",
};

export const accentRule: Record<Accent, string> = {
  gold: "bg-gold",
  coral: "bg-coral",
  teal: "bg-teal",
  violet: "bg-[oklch(0.62_0.16_305)]",
};

export const projects = [
  {
    index: "01",
    title: "MeritOne",
    subtitle: "Skill Exchange Platform",
    tech: "MERN Stack",
    accent: "gold" as Accent,
    live: "https://meritone.in",
    description:
      "Platform enabling users to exchange skills without money — no transactions, just real collaboration.",
    highlights: [
      "Task-based value exchange system",
      "User profiles and coordination logic",
      "Skill validation and matching",
    ],
  },
  {
    index: "02",
    title: "Interpret",
    subtitle: "AI Communication Coach",
    tech: "MERN + AI Agents",
    accent: "coral" as Accent,
    live: "https://interpret.blog",
    description:
      "AI system that analyzes and improves user communication in real time.",
    highlights: [
      "Feedback on clarity, accuracy, and expression",
      "Covers explanations, debates, and discussions",
      "Actionable improvement suggestions via AI evaluation",
    ],
  },
  {
    index: "03",
    title: "Movellea",
    subtitle: "AI Story Visualization",
    tech: "Python · AI Pipeline",
    accent: "violet" as Accent,
    live: null,
    description:
      "AI pipeline that converts books into cinematic narrative outputs. Funded at MSME 5.0 Hackathon 2026.",
    highlights: [
      "Automates scene generation and story structuring",
      "Cinematic narrative output from book input",
      "Rs. 13.6 Lakhs funded at MSME 5.0 Hackathon 2026",
    ],
  },
  {
    index: "04",
    title: "AutoClip",
    subtitle: "Autonomous AI Content Pipeline",
    tech: "Node.js · AI Agents · AWS",
    accent: "teal" as Accent,
    live: null,
    description:
      "End-to-end AI agent that autonomously generates and publishes visual short-form video content.",
    highlights: [
      "Research → script → visuals → publish, fully automated",
      "Zero manual interaction required",
      "Deploys to YouTube and Instagram automatically",
    ],
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    accent: "gold" as Accent,
    tint: "bg-amber-tint",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    category: "Backend",
    accent: "teal" as Accent,
    tint: "bg-blue-tint",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "Docker"],
  },
  {
    category: "Database & Cloud",
    accent: "violet" as Accent,
    tint: "bg-violet-tint",
    items: ["MongoDB", "Firebase", "Supabase", "AWS"],
  },
  {
    category: "AI & Automation",
    accent: "coral" as Accent,
    tint: "bg-green-tint",
    items: [
      "LLM-based App Development",
      "AI API Integration",
      "Prompt Engineering",
      "AI Pipeline Automation",
    ],
  },
];

export const achievements = [
  {
    label: "Funded — Rs. 13.6 Lakhs",
    detail: "MSME 5.0 Hackathon 2026 · Movellea (AI Story Visualization)",
    highlight: true,
  },
  {
    label: "Runner-up",
    detail: "NIT Rourkela Hackathon · AI project with IGDC (Jan 2026)",
    highlight: false,
  },
  {
    label: "Runner-up",
    detail: "GITAM Havana National Level Hackathon (Mar 2026)",
    highlight: false,
  },
  {
    label: "Top Finalist",
    detail: "HackWave · Sreenidhi Institute of Science & Technology (2025)",
    highlight: false,
  },
  {
    label: "Top Finalist",
    detail: "WebWars · CMR College of Engineering & Technology (2025)",
    highlight: false,
  },
  {
    label: "Winner",
    detail: "Autobots Workshop Competition · Technotrant at CMRCET",
    highlight: false,
  },
];

export const experience = {
  role: "MERN Developer",
  company: "GalactPro · Remote",
  period: "Mar 2026 – Jul 2026",
  bullets: [
    "Build and deliver full-stack web applications for real clients with real deadlines",
    "Handle everything from understanding client requirements to architecting, developing, and deploying production-ready solutions",
    "Stack: React, Node.js, Python",
  ],
};

export const resumeSkills = [
  { group: "Languages", items: ["Python", "JavaScript (ES6+) / TypeScript", "C, Java"] },
  { group: "Frontend", items: ["React, Next.js", "Tailwind CSS, Figma", "Responsive Design"] },
  { group: "Backend", items: ["Node.js, Express.js", "Flask", "REST APIs"] },
  { group: "Database & Cloud", items: ["MongoDB", "Firebase, Supabase", "AWS, Docker"] },
  {
    group: "AI / ML",
    items: [
      "AI API Integration",
      "Prompt Engineering",
      "AI Pipeline Automation",
      "LLM-based Application Development",
    ],
  },
];

export const certifications = [
  "ServiceNow: Certified System Administrator (CSA)",
  "ServiceNow: Certified Application Developer (CAD)",
  "Scaler: JavaScript Certification (2024)",
];
