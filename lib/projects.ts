export type ProjectStatus = "Case study" | "In progress" | "In development";
export type ProjectFormat = "wide" | "portrait";

export type ProjectSlot = {
  id: string;
  index: string;
  title: string;
  role: string;
  year: string;
  discipline: string;
  status: ProjectStatus;
  tone: "light" | "dark";
  format: ProjectFormat;
  glyph: string;
  tags: [string, string];
  outcome: string;
  context: string;
  approach: string;
  tools: string[];
  stats: string;
  mediaSrc?: string;
};

export const PROJECT_SLOTS: ProjectSlot[] = [
  {
    id: "slot-01",
    index: "01",
    title: "AI Content Workflow for Multilingual Publishing",
    role: "Content operations - AI pipeline",
    year: "2025",
    discipline: "Content and AI",
    status: "Case study",
    tone: "dark",
    format: "wide",
    glyph: "C",
    tags: ["Automation", "Multilingual"],
    outcome: "Turned multilingual publishing into a repeatable, lower-friction workflow",
    context:
      "Content production was manual, fragmented across tools, and difficult to scale across English, French, and Persian channels.",
    approach:
      "Built an AI-assisted workflow for topic sourcing, idea filtering, script generation, and asset preparation across multilingual publishing needs.",
    tools: ["n8n", "ChatGPT", "Claude", "ElevenLabs", "Notion"],
    stats: "916 hrs saved · EN / FA · 3 language pipelines",
    mediaSrc: "/projects/multilingual-pipeline.svg",
  },
  {
    id: "slot-02",
    index: "02",
    title: "Organic Growth System for E-commerce Search Visibility",
    role: "SEO strategy - Content system",
    year: "2016 - 2019",
    discipline: "SEO and Growth",
    status: "Case study",
    tone: "light",
    format: "portrait",
    glyph: "S",
    tags: ["SEO", "On-page"],
    outcome: "Built a durable search visibility engine for product discovery",
    context:
      "The business needed sustainable traffic growth and stronger search visibility in a competitive market.",
    approach:
      "Built and executed an SEO-driven growth system covering keyword targeting, content structure, product page optimization, and publishing consistency.",
    tools: ["Google Search Console", "Ahrefs", "Semrush", "Content Strategy"],
    stats: "50 → 12,000 daily visitors · 1,400+ Page 1 keywords",
    mediaSrc: "/projects/seo-dashboard.svg",
  },
  {
    id: "slot-03",
    index: "03",
    title: "Lead Handling Workflow for Evaluation Funnels",
    role: "Automation - CRM logic",
    year: "2025 - 2026",
    discipline: "Lead operations",
    status: "Case study",
    tone: "dark",
    format: "wide",
    glyph: "L",
    tags: ["n8n", "CRM"],
    outcome: "Improved lead routing, response speed, and CRM reliability",
    context:
      "Leads from forms and campaigns needed better routing, cleaner tracking, and more reliable follow-up.",
    approach:
      "Designed a workflow connecting website forms, webhooks, automation logic, and Notion CRM.",
    tools: ["Formidable", "Webhooks", "n8n", "Notion"],
    stats: "~20% conversion rate · $0.19 avg CPC · Notion CRM",
    mediaSrc: "/projects/Francophone.svg",
  },
  {
    id: "slot-04",
    index: "04",
    title: "RAG Assistant for Faster, More Consistent Sales Replies",
    role: "AI sales enablement - Prompt design",
    year: "2025",
    discipline: "AI Sales",
    status: "Case study",
    tone: "light",
    format: "portrait",
    glyph: "R",
    tags: ["RAG", "OpenAI"],
    outcome: "Made internal answers faster, more consistent, and easier to access",
    context:
      "The sales team needed faster access to internal information without relying on scattered documents and manual searching.",
    approach:
      "Built a retrieval-based AI assistant connected to internal documentation and structured knowledge sources for context-aware replies.",
    tools: ["Notion", "OpenAI API", "RAG Workflow", "Prompt Design"],
    stats: "Real-time AI responses · RAG-connected · Notion knowledge base",
    mediaSrc: "/projects/rag-architecture.svg",
  },
];
