export type ExternalLink = { label: string; href: string };

export const contact = {
  email: "usomya23@gmail.com",
  github: "https://github.com/Somyaaaaa23",
  linkedin: "https://www.linkedin.com/in/somya-upadhyay-720094280/",
  leetcode: "https://leetcode.com/u/somyaaaaa23/",
  resume: "/Somya-Upadhyay-Resume.pdf",
};

export type Offering = {
  id: string;
  tab: string;
  color: string;
  ink: string;
  // Where the tab sits along its folder edge: 0 = far left, 1 = far right.
  pos: number;
  eyebrow: string;
  title: string;
  line: string;
  facts: string[];
  links?: ExternalLink[];
};

export const offerings: Offering[] = [
  {
    id: "experience",
    tab: "WORK EXPERIENCE",
    color: "#C4BD55",
    ink: "#1B1A0F",
    pos: 0.06,
    eyebrow: "WHERE IT GOT REAL",
    title: "Work experience",
    line: "my first time owning a product end to end",
    facts: [
      "Software Developer Intern · Daanik Eduventures · May–July 2026",
      "Led BHAO end to end, a 2D gamified financial-literacy platform for 15 to 35 year olds",
      "Combined ML models with rules-based logic to drive 30+ financial scenarios across 200+ unique cards",
      "React · TypeScript · FastAPI · PostgreSQL · ML",
    ],
  },
  {
    id: "projects",
    tab: "THINGS I’VE MADE",
    color: "#C6A0B1",
    ink: "#1E1418",
    pos: 0.74,
    eyebrow: "THE BUILDER’S CORNER",
    title: "Things I’ve made",
    line: "messy real problems, turned into something usable",
    facts: [
      "GraphSentinel · real-time AML fraud detection with Temporal GNNs, 0.89 F1",
      "PharmaDrishti · pharma supply-chain intelligence with XGBoost and knowledge graphs, R² 0.89",
      "SanchaarSetu · AI-assisted interoperability layer for Karnataka's Single Window System, ₹1,00,000 winner at AI FOR BHARAT",
      "Agentic RFP · four AI agents that answer paint-industry tenders in about 7 seconds, built for a hackathon",
      "SaviHer · women-safety product",
    ],
    links: [{ label: "Open the project drawer", href: "#projects" }],
  },
  {
    id: "research",
    tab: "RESEARCH NOTES",
    color: "#F0CDD4",
    ink: "#2A1519",
    pos: 0.26,
    eyebrow: "QUESTIONS WORTH CHASING",
    title: "Research notes",
    line: "asking why a model works, not just whether",
    facts: [
      "“Explainable Drug Adoption Forecasting using Knowledge Graphs” · accepted at IDBA 2026 (Springer LAIS series)",
      "“The Idiographic Shift in Computational Psychiatry” · selected for presentation at ICBAI 2026, IIM Bangalore",
      "SanchaarSetu · submitted to ANTIC-2026 (IIIT Lucknow, Springer CCIS)",
      "Interested in explainable ML, knowledge graphs and graph learning",
    ],
  },
  {
    id: "wins",
    tab: "WINS & CHALLENGES",
    color: "#8E2621",
    ink: "#FFF4EE",
    pos: 0.86,
    eyebrow: "THE HAPPY ACCIDENTS",
    title: "Wins & challenges",
    line: "short deadlines, clear ideas, keep moving",
    facts: [
      "AI FOR BHARAT (PAN-IIT) · theme winner and ₹1,00,000 prize for SanchaarSetu, an interoperability layer for Karnataka's Single Window System",
      "iDEA Hackathon 2.0 (Union Bank) · Top 40 of 1600+ teams with GraphSentinel",
      "Women Who Master (Aspire For Her × Logitech) · zonal finalist, top 3.1%",
      "SAP MBA Hackfest · finalist with PharmaDrishti",
      "LeetCode · 1622 contest rating, 370+ problems solved",
    ],
    links: [{ label: "LeetCode profile", href: contact.leetcode }],
  },
  {
    id: "leadership",
    tab: "BEYOND THE IDE",
    color: "#F2D3A3",
    ink: "#231A0C",
    pos: 0.43,
    eyebrow: "PEOPLE ARE PART OF THE BUILD",
    title: "Beyond the IDE",
    line: "communication and follow-through matter too",
    facts: [
      "Training & Placement Coordinator (2026) · corporate outreach and industry partnerships to connect students with tech firms",
      "Battle of Bytes · Sponsorship Lead & Head Coordinator for the university's flagship coding competition",
      "Leading cross-functional teams from planning to event day",
    ],
  },
  {
    id: "toolbox",
    tab: "MY TOOLBOX",
    color: "#B7B04A",
    ink: "#1B1A0F",
    pos: 0.11,
    eyebrow: "TOOLS ARE A MEANS, NOT THE STORY",
    title: "My toolbox",
    line: "learned because a problem needed them",
    facts: [
      "Languages: Python, Java, C, SQL, Dart",
      "Product & backend: React, TypeScript, FastAPI, PostgreSQL, Flutter, Firebase",
      "ML: PyTorch Geometric, XGBoost, scikit-learn, TensorFlow, SHAP, NetworkX",
      "Data & infra: Kafka, Flink, Neo4j, Docker, Kubernetes, GCP, n8n",
      "Foundations: data structures, algorithms, OOP",
    ],
    links: [{ label: "GitHub profile", href: contact.github }],
  },
];

// Screenshots are app captures cropped to the app window (no browser bar).
export type ProjectScreen = { src: string; caption: string; width: number; height: number };

export type Project = {
  id: string;
  no: string;
  year: string;
  script: string;
  bold: string;
  name: string;
  tag: string;
  about: string;
  problem?: string;
  stack: string[];
  // Add screenshots under public/projects/ and list them here to show the "Screens" page.
  screens: ProjectScreen[];
  highlights: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "saviher",
    no: "01",
    year: "2026",
    script: "Savi",
    bold: "HER",
    name: "SaviHer",
    tag: "Women-safety product",
    about: "A women-safety product. The full write-up for this file is on its way.",
    stack: [],
    screens: [],
    highlights: [],
  },
  {
    id: "graphsentinel",
    no: "02",
    year: "2026",
    script: "Graph",
    bold: "SENTINEL",
    name: "GraphSentinel",
    tag: "AI-powered fraud detection",
    about: "A real-time banking fraud detection system that catches multi-hop money-laundering patterns as they happen.",
    problem: "Threshold-based AML rules flag too many innocent transactions and miss layered laundering across accounts.",
    stack: ["PyTorch Geometric", "Neo4j", "Kafka", "Flink", "Docker", "Kubernetes"],
    screens: [
      { src: "/projects/graphsentinel-dashboard.jpg", caption: "command center: live transactions and fraud alerts", width: 1600, height: 852 },
      { src: "/projects/graphsentinel-fund-flow.jpg", caption: "fund flow graph tracing suspicious money paths", width: 1600, height: 852 },
      { src: "/projects/graphsentinel-federated.jpg", caption: "federated learning across a 26-bank network", width: 1600, height: 852 },
    ],
    highlights: [
      "Temporal GNNs (EvolveGCN) plus LSTM autoencoders",
      "0.89 F1-score for fraud classification",
      "94% fewer false positives than threshold-based AML rules",
      "Top 40 of 1600+ teams at iDEA Hackathon 2.0",
      "Now being extended with federated learning",
    ],
    link: "https://github.com/Somyaaaaa23/graph-sentinel-banks",
  },
  {
    id: "pharmadrishti",
    no: "03",
    year: "2026",
    script: "Pharma",
    bold: "DRISHTI",
    name: "PharmaDrishti",
    tag: "Pharma supply-chain intelligence",
    about: "A hybrid ML pipeline that models drug-distribution inefficiencies and pricing anomalies across regional markets.",
    problem: "Supply-chain data alone misses how drugs, regions and distributors are connected.",
    stack: ["Python 3.11", "XGBoost", "scikit-learn", "NetworkX", "SHAP", "Knowledge graphs"],
    screens: [],
    highlights: [
      "18 tabular supply-chain features plus 22 knowledge-graph features",
      "XGBoost R² 0.8916, beating the 0.8502 baseline",
      "MAE 0.0320 · RMSE 0.0400",
      "SHAP explainability for the drivers of demand clustering",
      "Finalist at SAP MBA Hackfest",
    ],
    link: "https://github.com/Somyaaaaa23/PharmaDrishti",
  },
  {
    id: "sanchaarsetu",
    no: "04",
    year: "2026",
    script: "Sanchaar",
    bold: "SETU",
    name: "SanchaarSetu",
    tag: "Government interoperability layer",
    about: "An AI-assisted interoperability layer that keeps Karnataka's Single Window System and department systems in sync, without changing the department systems. सञ्चार (communication) + सेतु (bridge).",
    problem: "When a business updates its address, signatory or GSTIN on the Single Window System, each department still holds its own copy in its own schema, so records drift apart. 12.1% of businesses with more than one trade licence have different details across their filings.",
    stack: ["FastAPI", "Redpanda (Kafka)", "Redis", "PostgreSQL", "sentence-transformers", "React + TypeScript", "Docker"],
    screens: [
      { src: "/projects/sanchaarsetu-event-feed.jpg", caption: "live event feed: every update, its route and its retries", width: 1600, height: 906 },
      { src: "/projects/sanchaarsetu-conflicts.jpg", caption: "conflict resolver with per-field policies", width: 1600, height: 906 },
      { src: "/projects/sanchaarsetu-departments.jpg", caption: "department systems across webhook, polling and snapshot tiers", width: 1600, height: 906 },
    ],
    highlights: [
      "Theme winner and ₹1,00,000 prize at AI FOR BHARAT (PAN-IIT)",
      "Research paper submitted to ANTIC-2026 (IIIT Lucknow, Springer CCIS)",
      "Every update delivered exactly once: 0 duplicates and 0 lost across 2,000+ deliveries, even with a department offline",
      "One department failing doesn't slow the others: 13 ms p95 latency for the rest",
      "Multilingual embedding model maps fields across schemas with 1.00 precision at the auto-apply threshold",
      "137 / 137 real conflicts caught, and 12,846 hash-chained audit entries verified intact",
    ],
    link: "https://github.com/SagarAgarwal2/Sanchaarsetu1",
  },
  {
    id: "agentic-rfp",
    no: "05",
    year: "2024",
    script: "Agentic",
    bold: "RFP",
    name: "Agentic RFP",
    tag: "Multi-agent RFP automation",
    about: "A multi-agent system, built for a hackathon, that reads a paint-industry RFP and drafts the whole response: requirements, matching products, pricing and a win-probability call.",
    problem: "Answering a tender by hand means reading the document, matching every spec against several vendors' catalogues and pricing it with testing costs, which takes about three hours per RFP.",
    stack: ["React", "Multi-agent orchestration", "Semantic matching", "PDF.js", "Recharts"],
    screens: [
      { src: "/projects/agentic-rfp-workflow.jpg", caption: "four agents turning a sample RFP into a scored response", width: 1243, height: 927 },
      { src: "/projects/agentic-rfp-dashboard.jpg", caption: "live dashboard of incoming tenders (demo data)", width: 1328, height: 922 },
      { src: "/projects/agentic-rfp-scanner.jpg", caption: "RFP scanner across tender portals (demo data)", width: 1325, height: 860 },
      { src: "/projects/agentic-rfp-analytics.jpg", caption: "analytics on the pipeline, vendors and agents (demo data)", width: 1257, height: 928 },
    ],
    highlights: [
      "Four agents (sales, technical, pricing and an orchestrator) answer an RFP in about 7 seconds instead of 3 hours",
      "Running agents in parallel made the pipeline 26% faster",
      "Semantic spec matching (cosine, fuzzy and Jaccard similarity) raised match accuracy from 60% to 90%",
      "Win-probability predictor weighing match, pricing, deadline and history",
      "Learning memory recalls similar past RFPs, and low-confidence decisions are flagged for human review",
      "PDF and CSV reports, with support for 9 currencies",
    ],
  },
];

export const recruiterSnapshot = {
  title: "Somya Upadhyay",
  role: "B.Tech CSE, BIT Mesra (2023–2027) · 8.74 CGPA · Software & AI/ML builder",
  summary: "I build products, explore applied machine learning, and enjoy working on problems that connect technology with real people. Most recently I led a gamified fintech product end to end as a software developer intern.",
  strengths: ["Full-stack product development", "Applied AI/ML & graph learning", "Research · 2 accepted papers", "Leadership & outreach"],
  note: "Theme winner at AI FOR BHARAT · Top 40 of 1600+ at iDEA Hackathon 2.0 · LeetCode 1622",
};
