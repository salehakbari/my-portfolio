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
    outcome:
      "A fully automated content engine running across 3 languages and 4 platforms — with consistent output and no manual bottlenecks.",
    context:
      "Content production was manual, slow, and hard to scale across multiple platforms and languages. Every post required separate handling — no system, no consistency.",
    approach:
      "Built an automated n8n pipeline that pulls immigration news from multiple sources, filters for relevance, then branches into parallel tracks — generating platform-sized visuals (Instagram Stories, feed posts, web) and rewriting content for each platform and language. Output can publish automatically to Instagram, Telegram, Twitter, and the website.",
    tools: ["n8n", "ChatGPT", "Claude", "ElevenLabs", "Notion"],
    stats: "916 hrs saved in 8 months · EN / FR / FA · 4 platforms automated",
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
    outcome:
      "Dominant search presence built over 2 years — from an invisible site to a market leader in organic search.",
    context:
      "A startup e-commerce site with only 50 daily visitors and zero search presence in a competitive market. No content system, no keyword strategy, no backlink foundation.",
    approach:
      "Built a full SEO growth system from scratch — keyword research and clustering, on-page optimization, internal linking architecture, content production, and a backlink strategy. Within 6 months, the primary keyword reached Google Page 1, position 3.",
    tools: ["Google Search Console", "Ahrefs", "Semrush", "Content Strategy"],
    stats: "50 → 12,000 daily visitors · 1,400+ Page 1 keywords · 7,000+ keywords at position 1",
    mediaSrc: "/projects/seo-dashboard.svg",
  },
  {
    id: "slot-03",
    index: "03",
    title: "Google Ads Campaign for Francophone Africa Lead Generation",
    role: "Paid media - Landing page - Funnel strategy",
    year: "2025 - 2026",
    discipline: "Performance Marketing",
    status: "Case study",
    tone: "dark",
    format: "wide",
    glyph: "L",
    tags: ["n8n", "CRM"],
    outcome:
      "One of the highest-performing campaigns in the account — strong conversion rate on a long, complex form targeting a competitive international audience.",
    context:
      "The company needed qualified immigration leads from French-speaking African countries — a niche, high-intent audience that required a full funnel built from scratch.",
    approach:
      "Designed the complete funnel — landing page strategy, form structure to capture the right data, and a Google Ads campaign targeting Francophone Africa. The form took ~4 minutes to complete, which made conversion rate optimization critical. Continuously refined targeting, ad copy, and landing page based on performance data.",
    tools: ["Formidable", "Webhooks", "n8n", "Notion"],
    stats: "~20% conversion rate · $0.19 avg CPC · 5,000+ leads generated",
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
    outcome:
      "Faster, more consistent sales responses — even outside office hours. The sales team closed more leads with less effort and fewer missed follow-ups.",
    context:
      "The sales team was responding to leads inconsistently — especially when working remotely. They lacked quick access to each lead's profile and the company's sales strategy, which slowed response time and hurt conversion.",
    approach:
      "Built a RAG-based AI agent connected to the company's Notion knowledge base and sales strategy documentation. The system maintains both short-term and long-term chat memory per lead — so when a sales rep receives a message, they get a context-aware response suggestion based on that specific lead's history, profile, and company strategy.",
    tools: ["Notion", "OpenAI API", "RAG Workflow", "Prompt Design"],
    stats: "Real-time AI responses · Lead-specific context · Short + long-term memory per contact",
    mediaSrc: "/projects/rag-architecture.svg",
  },
];
