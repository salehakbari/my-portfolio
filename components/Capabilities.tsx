"use client";

import { motion, useReducedMotion } from "framer-motion";

type Capability = {
  index: string;
  title: string;
  discipline: string;
  body: string;
  scope: string[];
  proof: string[];
  metrics: string[];
  tools: string[];
};

const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "Performance marketing and visibility",
    discipline: "SEO - Paid - Funnel",
    body:
      "The parts of marketing that make services and products easier to discover, understand, and convert.",
    scope: [
      "SEO strategy and on-page growth",
      "Paid campaigns and landing pages",
      "Funnel clarity and conversion messaging",
      "Analytics and performance feedback loops",
    ],
    proof: [
      "1,400+ keywords ranked on Google Page 1",
      "Grew daily visitors from 50 to 12,000+ over 4 years",
      "~20% conversion rate on immigration evaluation funnels",
      "$0.19 average CPC on Google Ads campaigns",
    ],
    metrics: [
      "1,400+ keywords on Google Page 1",
      "50 → 12,000 daily visitors",
      "~20% funnel conversion rate",
      "$0.19 avg CPC",
    ],
    tools: ["Google Ads", "Meta Ads", "GA4", "Semrush", "Ahrefs", "GSC"],
  },
  {
    index: "02",
    title: "Marketing operations and automation",
    discipline: "MarOps - n8n - AI",
    body:
      "Workflows that reduce manual work, improve follow-up, and make execution more consistent.",
    scope: [
      "Lead routing and CRM logic",
      "n8n and webhook automations",
      "AI-assisted internal systems",
      "RAG-enabled response support",
    ],
    proof: [
      "916 hours of manual work eliminated in 8 months",
      "Lead routing automated across 3 intake channels",
      "Response time cut from hours to minutes via n8n workflows",
    ],
    metrics: [
      "916 hours saved in 8 months",
      "3 language pipelines automated",
    ],
    tools: ["n8n", "Webhooks", "Notion CRM", "Docker", "API integrations"],
  },
  {
    index: "03",
    title: "Content systems and creative execution",
    discipline: "Content - Video - Photo",
    body:
      "Content is not just strategy on paper - it has to be produced well, adapted fast, and fit the platform.",
    scope: [
      "Short-form video production",
      "Photography and visual storytelling",
      "Content strategy and editorial workflows",
      "AI-assisted content production",
    ],
    proof: [
      "300% growth in Instagram engagement over 12 months",
      "3,000+ product images standardized for e-commerce",
      "Multilingual content pipeline built for EN / FA",
    ],
    metrics: [
      "300% Instagram engagement growth",
      "3,000+ product images standardized",
      "1,500+ multimedia assets produced",
    ],
    tools: ["Premiere Pro", "CapCut", "Midjourney", "ElevenLabs", "Sora", "Kling"],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-canvas pt-20 md:pt-24 pb-20 md:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-line" />
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-mute">
          <span className="text-ink/80">03 - Capabilities</span>
          <span>Content - Growth - Execution</span>
        </div>

        <div id="capabilities-heading" className="mt-12 md:mt-16">
          <h2 className="font-display font-medium text-ink leading-[0.9] tracking-tightest text-[clamp(3rem,7vw,6rem)]">
            What I
            <br />
            <span className="text-graphite">bring.</span>
          </h2>
        </div>

        <ul className="mt-14 md:mt-20 divide-y divide-line border-y border-line">
          {CAPABILITIES.map((capability, i) => (
            <CapabilityRow key={capability.index} capability={capability} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function CapabilityRow({ capability, i }: { capability: Capability; i: number }) {
  const reduceMotion = !!useReducedMotion();
  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: i * 0.06 }}
      className="group relative grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14"
    >
      <div className="col-span-12 md:col-span-1 text-[11px] uppercase tracking-[0.3em] text-mute tabular-nums">
        /{capability.index}
      </div>

      <div className="col-span-12 md:col-span-5">
        <div className="text-[11px] uppercase tracking-[0.3em] text-mute">
          {capability.discipline}
        </div>
        <h3 className="mt-3 font-display font-medium text-ink leading-[1.02] tracking-tight text-[clamp(1.75rem,3.4vw,2.75rem)]">
          {capability.title}
        </h3>
        <p className="mt-4 text-[15px] text-graphite leading-[1.55] max-w-[52ch]">
          {capability.body}
        </p>
      </div>

      <div className="col-span-12 md:col-span-3">
        <div className="text-[10px] uppercase tracking-[0.3em] text-mute">
          Scope
        </div>
        <ul className="mt-3 space-y-1.5 text-[13px] text-ink/85 leading-[1.45]">
          {capability.scope.map((scopeItem) => (
            <li key={scopeItem} className="flex gap-2">
              <span aria-hidden className="text-mute">
                -
              </span>
              <span>{scopeItem}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {capability.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[10px] text-mute bg-surface px-2 py-0.5 rounded-[2px]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-3">
        <div className="text-[10px] uppercase tracking-[0.3em] text-mute">
          Selected impact
        </div>
        <ul className="mt-3 space-y-2 text-[13px] text-ink leading-[1.45]">
          {capability.proof.map((proofItem) => (
            <li key={proofItem}>{proofItem}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {capability.metrics.map((metric) => (
            <span
              key={metric}
              className="text-[11px] uppercase tracking-[0.2em] text-ink/70 border border-line px-3 py-1 rounded-full"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.li>
  );
}
