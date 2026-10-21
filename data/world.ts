import type { LucideIcon } from "lucide-react";
import { BookOpen, Briefcase, Code2, FlaskConical, Trophy, Users } from "lucide-react";

export type WorldId = "projects" | "experience" | "research" | "wins" | "leadership" | "toolbox";

export type ExternalLink = { label: string; href: string };

export type WorldNode = {
  id: WorldId;
  eyebrow: string;
  title: string;
  short: string;
  detail: string;
  color: string;
  position: string;
  icon: LucideIcon;
  facts: string[];
  actionLabel: string;
  links?: ExternalLink[];
};

export const contact = {
  email: "usomya23@gmail.com",
  github: "https://github.com/Somyaaaaa23",
  linkedin: "https://www.linkedin.com/in/somya-upadhyay-720094280/",
  leetcode: "https://leetcode.com/u/somyaaaaa23/",
  resume: "/Somya-Upadhyay-Resume.pdf",
};

export const worldNodes: WorldNode[] = [
  {
    id: "projects",
    eyebrow: "THE BUILDER'S CORNER",
    title: "Things I've made",
    short: "Products, prototypes & systems",
    detail: "I like taking a messy, real-world problem and turning it into something people can use. This corner is for the products and engineering experiments behind that instinct.",
    color: "persimmon",
    position: "node-projects",
    icon: Code2,
    facts: [
      "GraphSentinel · real-time banking fraud detection with Temporal GNNs (EvolveGCN) and LSTM autoencoders: 0.89 F1, 94% fewer false positives than threshold-based AML rules",
      "PharmaDrishti · pharma supply-chain intelligence combining XGBoost with knowledge-graph features and SHAP explainability: R² 0.89, finalist at SAP MBA Hackfest",
      "SaviHer · women-safety product",
    ],
    actionLabel: "Ask me about a project",
    links: [
      { label: "GraphSentinel on GitHub", href: "https://github.com/Somyaaaaa23/graph-sentinel-banks" },
      { label: "PharmaDrishti on GitHub", href: "https://github.com/Somyaaaaa23/PharmaDrishti" },
    ],
  },
  {
    id: "experience",
    eyebrow: "WHERE IT GOT REAL",
    title: "Work experience",
    short: "Software Developer Intern · Daanik",
    detail: "My internship was the first time I owned a product from the first idea to the working build: writing the docs, designing the system, and shipping it.",
    color: "plum",
    position: "node-experience",
    icon: Briefcase,
    facts: [
      "Software Developer Intern · Daanik Eduventures · May–July 2026",
      "Led BHAO end to end, a 2D gamified financial-literacy platform for 15 to 35 year olds",
      "Combined ML models with rules-based logic to drive 30+ financial scenarios across 200+ unique cards",
      "React · TypeScript · FastAPI · PostgreSQL · ML",
    ],
    actionLabel: "Ask me about the internship",
  },
  {
    id: "research",
    eyebrow: "QUESTIONS WORTH CHASING",
    title: "Research notes",
    short: "Two accepted papers · AI/ML",
    detail: "Research gives me a reason to ask why a model works, what its output means, and how to make its decisions easier to understand.",
    color: "cobalt",
    position: "node-research",
    icon: BookOpen,
    facts: [
      "“Explainable Drug Adoption Forecasting using Knowledge Graphs” · accepted at IDBA 2026 (Springer LAIS series)",
      "“The Idiographic Shift in Computational Psychiatry” · selected for presentation at ICBAI 2026, IIM Bangalore",
      "Interested in explainable ML, knowledge graphs and graph learning",
    ],
    actionLabel: "Ask me about the research",
  },
  {
    id: "wins",
    eyebrow: "THE HAPPY ACCIDENTS",
    title: "Wins & challenges",
    short: "Hackathons, demos & deadlines",
    detail: "Short deadlines have taught me to make trade-offs, communicate a clear idea, and keep moving when the first approach does not work.",
    color: "butter",
    position: "node-wins",
    icon: Trophy,
    facts: [
      "AI FOR BHARAT (PAN-IIT) · theme winner and ₹1,00,000 prize for SaanchaarSetu, middleware linking Karnataka's SWS to 40+ departments",
      "iDEA Hackathon 2.0 (Union Bank) · Top 40 of 1600+ teams with GraphSentinel",
      "Women Who Master (Aspire For Her × Logitech) · zonal finalist, top 3.1%",
      "SAP MBA Hackfest · finalist with PharmaDrishti",
      "LeetCode · 1622 contest rating, 370+ problems solved",
    ],
    actionLabel: "Ask me about a hackathon",
    links: [{ label: "LeetCode profile", href: contact.leetcode }],
  },
  {
    id: "leadership",
    eyebrow: "PEOPLE ARE PART OF THE BUILD",
    title: "Beyond the IDE",
    short: "Placements, sponsorships & teamwork",
    detail: "Working as a Training & Placement Coordinator has given me a different view of technology careers: clear communication, follow-through, and making opportunities easier to reach matter too.",
    color: "moss",
    position: "node-leadership",
    icon: Users,
    facts: [
      "Training & Placement Coordinator (2026) · corporate outreach and industry partnerships to connect students with tech firms",
      "Battle of Bytes · Sponsorship Lead & Head Coordinator for the university's flagship coding competition",
      "Leading cross-functional teams from planning to event day",
    ],
    actionLabel: "Ask me about the people side",
  },
  {
    id: "toolbox",
    eyebrow: "TOOLS ARE A MEANS, NOT THE STORY",
    title: "My toolbox",
    short: "Software, data & experimentation",
    detail: "I work across software development and applied machine learning. I enjoy learning a tool when it helps solve the problem in front of me, not just adding another name to a list.",
    color: "paper",
    position: "node-toolbox",
    icon: FlaskConical,
    facts: [
      "Languages: Python, Java, C, SQL, Dart",
      "Product & backend: React, TypeScript, FastAPI, PostgreSQL, Flutter, Firebase",
      "ML: PyTorch Geometric, XGBoost, scikit-learn, TensorFlow, SHAP, NetworkX",
      "Data & infra: Kafka, Flink, Neo4j, Docker, Kubernetes, GCP, n8n",
      "Foundations: data structures, algorithms, OOP",
    ],
    actionLabel: "Ask me about my stack",
    links: [{ label: "GitHub profile", href: contact.github }],
  },
];

export const recruiterSnapshot = {
  title: "Somya Upadhyay",
  role: "B.Tech CSE, BIT Mesra (2023–2027) · 8.74 CGPA · Software & AI/ML builder",
  summary: "I build products, explore applied machine learning, and enjoy working on problems that connect technology with real people. Most recently I led a gamified fintech product end to end as a software developer intern.",
  strengths: ["Full-stack product development", "Applied AI/ML & graph learning", "Research · 2 accepted papers", "Leadership & outreach"],
  note: "Theme winner at AI FOR BHARAT · Top 40 of 1600+ at iDEA Hackathon 2.0 · LeetCode 1622",
};
