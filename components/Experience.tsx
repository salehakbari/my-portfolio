"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Role = {
  years: string;
  company: string;
  role: string;
  summary: string;
  highlight: string;
};

const ROLES: Role[] = [
  {
    years: "2024 - Present",
    company: "Parsis International Inc.",
    role: "Social Media and MarOps Specialist",
    summary:
      "Engineered a full-scale AI content factory for multilingual publishing, built lead automation pipelines, and managed Google Ads campaigns — reducing manual workload by 916 hours while achieving ~20% funnel conversion rates.",
    highlight:
      "916 hours saved through automation · ~20% conversion rate · $0.19 avg CPC",
  },
  {
    years: "2020 - 2023",
    company: "Amin Daneshjoo Pasargad",
    role: "Social Media and Website Content Manager",
    summary:
      "Led end-to-end content production and social media strategy, resulting in 300% growth in Instagram engagement over 12 months through consistent publishing, influencer campaigns, and performance-aligned creative.",
    highlight:
      "300% Instagram engagement growth · Full-cycle content production · Influencer campaigns",
  },
  {
    years: "2016 - 2020",
    company: "Yadak118.com",
    role: "COO and SEO Manager",
    summary:
      "Scaled organic traffic from 50 to 12,000+ daily visitors through SEO strategy, content systems, and e-commerce operations — while managing a 3,000+ product image library and a custom ASP.NET platform.",
    highlight:
      "50 → 12,000 daily visitors · 1,400+ Page 1 keywords · 3,000+ product images",
  },
  {
    years: "2011 - 2015",
    company: "Hozeh Honari (Ehonari.ir)",
    role: "Multimedia Content Producer",
    summary:
      "Produced and archived 1,500+ multimedia assets across audio and video formats, improved audience engagement by 30%, and built the creative foundation that shaped the next decade of digital work.",
    highlight:
      "1,500+ assets produced · 30% engagement lift · Foundation for all future digital roles",
  },
];

type RangeSpec = { inputs: number[]; outputs: number[] };

function buildRange(
  index: number,
  total: number,
  peak: number,
  off: number,
  trans = 0.035,
): RangeSpec {
  const segSize = 1 / total;
  const start = index * segSize;
  const end = (index + 1) * segSize;

  const inputs: number[] = [];
  const outputs: number[] = [];

  inputs.push(0);
  outputs.push(index === 0 ? peak : off);

  if (index > 0) {
    inputs.push(Math.max(0, start - trans));
    outputs.push(off);
    inputs.push(start + trans);
    outputs.push(peak);
  }

  if (index < total - 1) {
    inputs.push(end - trans);
    outputs.push(peak);
    inputs.push(Math.min(1, end + trans));
    outputs.push(off);
  }

  inputs.push(1);
  outputs.push(index === total - 1 ? peak : off);

  return { inputs, outputs };
}

function buildAsymRange(
  index: number,
  total: number,
  peak: number,
  enter: number,
  exit: number,
  trans = 0.035,
): RangeSpec {
  const segSize = 1 / total;
  const start = index * segSize;
  const end = (index + 1) * segSize;

  const inputs: number[] = [];
  const outputs: number[] = [];

  inputs.push(0);
  outputs.push(index === 0 ? peak : enter);

  if (index > 0) {
    inputs.push(Math.max(0, start - trans));
    outputs.push(enter);
    inputs.push(start + trans);
    outputs.push(peak);
  }

  if (index < total - 1) {
    inputs.push(end - trans);
    outputs.push(peak);
    inputs.push(Math.min(1, end + trans));
    outputs.push(exit);
  }

  inputs.push(1);
  outputs.push(index === total - 1 ? peak : exit);

  return { inputs, outputs };
}

export default function Experience() {
  const reduceMotion = !!useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="experience"
      className="relative bg-canvas pt-20 md:pt-24 pb-20 md:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-line" />
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-mute">
          <span className="text-ink/80">04 - Experience</span>
          <span>Making - Growing - Systemizing</span>
        </div>

        <div id="experience-heading" className="mt-12 md:mt-16">
          <h2 className="font-display font-medium text-ink leading-[0.9] tracking-tightest text-[clamp(3rem,7vw,6rem)]">
            How I
            <br />
            <span className="text-graphite">got here.</span>
          </h2>
        </div>

        {!reduceMotion && (
          <div
            ref={scrollRef}
            className="hidden md:block relative mt-8 md:mt-10"
            style={{ height: `${ROLES.length * 100}vh` }}
          >
            <div className="sticky top-[var(--header-h)] h-[calc(100vh-var(--header-h))] overflow-hidden">
              <div className="grid grid-cols-12 gap-10 h-full">
                <TimelineRail progress={scrollYProgress} />
                <div className="col-span-7 relative flex items-center">
                  <div className="relative w-full h-[80%] min-h-[400px]">
                    {ROLES.map((role, i) => (
                      <TimelineCard
                        key={role.years}
                        role={role}
                        index={i}
                        total={ROLES.length}
                        progress={scrollYProgress}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`${reduceMotion ? "" : "md:hidden"} mt-10`}>
          <StackedTimeline />
        </div>
      </div>
    </section>
  );
}

function TimelineRail({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="col-span-5 relative flex flex-col justify-center py-12">
      <div className="relative pl-1">
        <div
          className="absolute left-[7px] top-1 bottom-1 w-px bg-line"
          aria-hidden
        />
        <MovingIndicator progress={progress} />
        <ul className="relative flex flex-col gap-16">
          {ROLES.map((role, i) => (
            <TimelineDot
              key={role.years}
              role={role}
              index={i}
              total={ROLES.length}
              progress={progress}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function MovingIndicator({ progress }: { progress: MotionValue<number> }) {
  const top = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      aria-hidden
      style={{ top }}
      className="absolute left-[6px] -translate-y-1/2 h-10 w-[3px] rounded-full bg-ink/80"
    />
  );
}

function TimelineDot({
  role,
  index,
  total,
  progress,
}: {
  role: Role;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacityRange = buildRange(index, total, 1, 0.35);
  const scaleRange = buildRange(index, total, 1.35, 1);
  const textRange = buildRange(index, total, 1, 0.45);

  const dotOpacity = useTransform(
    progress,
    opacityRange.inputs,
    opacityRange.outputs,
  );
  const dotScale = useTransform(
    progress,
    scaleRange.inputs,
    scaleRange.outputs,
  );
  const textOpacity = useTransform(
    progress,
    textRange.inputs,
    textRange.outputs,
  );
  const textColor = useTransform(
    progress,
    opacityRange.inputs,
    opacityRange.outputs.map((v) => (v === 1 ? "#141617" : "#6D6D6D")),
  );

  return (
    <li className="relative flex items-center gap-6">
      <div className="relative z-10 flex h-[15px] w-[15px] items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-canvas" aria-hidden />
        <motion.div
          className="relative h-[8px] w-[8px] rounded-full bg-ink"
          style={{ opacity: dotOpacity, scale: dotScale }}
        />
      </div>
      <motion.div
        className="text-[10px] uppercase tracking-[0.3em] tabular-nums"
        style={{ opacity: textOpacity, color: textColor }}
      >
        {role.years}
      </motion.div>
    </li>
  );
}

function TimelineCard({
  role,
  index,
  total,
  progress,
}: {
  role: Role;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacityRange = buildRange(index, total, 1, 0);
  const yRange = buildAsymRange(index, total, 0, 28, -28);

  const opacity = useTransform(
    progress,
    opacityRange.inputs,
    opacityRange.outputs,
  );
  const y = useTransform(progress, yRange.inputs, yRange.outputs);

  return (
    <motion.article
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="text-[10px] uppercase tracking-[0.25em] text-mute">
        {role.company}
      </div>
      <h3 className="mt-4 font-display font-medium text-ink leading-[1.02] tracking-tight text-[clamp(1.75rem,3.4vw,2.75rem)] max-w-[22ch]">
        {role.role}
      </h3>
      <p className="mt-6 text-[15px] text-graphite leading-[1.65] max-w-[54ch]">
        {role.summary}
      </p>
      <div className="mt-8 pt-6 border-t border-line text-[13px] text-ink/85 leading-[1.55] max-w-[54ch]">
        {role.highlight}
      </div>
    </motion.article>
  );
}

function StackedTimeline() {
  const reduce = !!useReducedMotion();
  return (
    <ol className="relative pl-8">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-line"
        aria-hidden
      />
      {ROLES.map((role) => (
        <li key={role.years} className="relative pb-14 last:pb-0">
          <div
            className="absolute -left-8 top-1.5 flex h-[15px] w-[15px] items-center justify-center"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full bg-canvas" />
            <div className="relative h-[8px] w-[8px] rounded-full bg-ink" />
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-ink tabular-nums">
              {role.years}
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-mute">
              {role.company}
            </div>
            <h3 className="mt-3 font-display font-medium text-ink leading-[1.1] tracking-tight text-[clamp(1.25rem,2.5vw,1.75rem)]">
              {role.role}
            </h3>
            <p className="mt-4 text-[14px] text-graphite leading-[1.65]">
              {role.summary}
            </p>
            <div className="mt-5 pt-4 border-t border-line text-[13px] text-ink/85 leading-[1.55]">
              {role.highlight}
            </div>
          </motion.div>
        </li>
      ))}
    </ol>
  );
}
