"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Metric = { value: string; label: string };

type Stage = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  metrics: Metric[];
  body: string;
};

const STAGES: Stage[] = [
  {
    index: "01",
    title: "Make it visible",
    description:
      "Content, SEO, paid campaigns — getting the product in front of the right people.",
    tags: ["SEO", "Paid ads", "Video", "Social"],
    metrics: [
      { value: "1,400+", label: "Keywords on Google Page 1" },
      { value: "300%", label: "Instagram engagement growth" },
      { value: "50→12k", label: "Daily visitors built" },
    ],
    body:
      "I build the content strategy, run the SEO, produce the videos, and manage paid campaigns. Not as separate workstreams, but as one coordinated push to put the product in front of people who need it.",
  },
  {
    index: "02",
    title: "Make it work",
    description:
      "Funnels, landing pages, conversion logic — turning attention into action.",
    tags: ["CRO", "Funnels", "Lead ops", "Analytics"],
    metrics: [
      { value: "~20%", label: "Funnel conversion rate" },
      { value: "$0.19", label: "Average CPC achieved" },
      { value: "3×", label: "Lead tracking reliability" },
    ],
    body:
      "Getting traffic is only half the job. I optimize for what happens after the click: landing pages, form logic, CRM routing, and follow-up sequences so the attention you paid for actually converts.",
  },
  {
    index: "03",
    title: "Make it scale",
    description:
      "Automation, AI workflows, systems — removing bottlenecks so teams do more with less.",
    tags: ["n8n", "AI pipelines", "MarOps", "RAG"],
    metrics: [
      { value: "916h", label: "Manual work eliminated" },
      { value: "3 lang", label: "Content pipelines automated" },
      { value: "RAG", label: "AI sales assistant deployed" },
    ],
    body:
      "The best marketing systems keep working without constant intervention. I build automation workflows, AI-assisted pipelines, and CRM logic that let small teams execute at scale.",
  },
];

export default function HowIWork() {
  const reduceMotion = !!useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = STAGES[activeIndex];

  return (
    <section
      id="approach"
      className="relative bg-canvas pt-20 md:pt-24 pb-20 md:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-line" />
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-mute">
          <span className="text-ink/80">00 - Approach</span>
          <span>Make - Work - Scale</span>
        </div>

        <div className="mt-12 md:mt-16">
          <h2 className="font-display font-medium text-ink leading-[0.9] tracking-tightest text-[clamp(3rem,7vw,6rem)]">
            How I
            <br />
            <span className="text-graphite">work.</span>
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-14 md:mt-20 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-0"
          >
            {STAGES.map((stage, i) => (
              <Fragment key={stage.index}>
                <StageCard
                  stage={stage}
                  i={i}
                  active={i === activeIndex}
                  reduceMotion={reduceMotion}
                  onSelect={() => setActiveIndex(i)}
                />
                {i < STAGES.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden md:flex items-center justify-center self-center px-2"
                  >
                    <div className="flex items-center">
                      <div className="h-px w-8 bg-ink/25" />
                      <div className="h-0 w-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-ink/25" />
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </motion.div>

          <div className="mt-10 pt-10 border-t border-line">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={reduceMotion ? undefined : { opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="h-px w-12 bg-ink/40 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {activeStage.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-line rounded-xl bg-canvas/80 px-5 py-4"
                    >
                      <div className="font-display text-[1.75rem] font-medium text-ink leading-[1]">
                        {metric.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-mute mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[15px] text-graphite leading-[1.65] max-w-[58ch]">
                  {activeStage.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden mt-10">
          <MobileStages
            stages={STAGES}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}

function StageCard({
  stage,
  i,
  active,
  reduceMotion,
  onSelect,
}: {
  stage: Stage;
  i: number;
  active: boolean;
  reduceMotion: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: i * 0.05 }}
      aria-pressed={active}
      className={[
        "text-left rounded-xl p-7 bg-canvas cursor-pointer border transition-all duration-300 shadow-[inset_0_0_0_1px_rgba(20,22,23,0.06)]",
        active ? "border-ink/50" : "border-line hover:border-ink/20",
      ].join(" ")}
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-mute tabular-nums">
        {stage.index} /
      </div>
      <h3 className="mt-3 font-display font-medium text-ink leading-[1.0] tracking-tight text-[clamp(1.4rem,2.2vw,1.8rem)]">
        {stage.title}
      </h3>
      <p className="mt-3 text-[13px] text-graphite leading-[1.5] max-w-[28ch]">
        {stage.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {stage.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] uppercase tracking-[0.2em] text-ink/70 border border-line px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className={[
          "mt-5 pt-4 border-t border-line flex items-center gap-2 transition-opacity duration-300",
          active ? "opacity-0" : "opacity-60",
        ].join(" ")}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-mute">
          See results
        </span>
        <span className="text-[10px] text-mute">→</span>
      </div>
    </motion.button>
  );
}

function MobileStages({
  stages,
  activeIndex,
  setActiveIndex,
}: {
  stages: Stage[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const reduceMotion = !!useReducedMotion();
  const [showHint, setShowHint] = useState(true);
  const touchStartX = useRef(0);
  const activeStage = stages[activeIndex];

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0 && activeIndex < stages.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
      if (delta > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <div>
      <div className="w-full flex border-b border-line mb-6">
        {stages.map((stage, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={stage.index}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              className={[
                "flex-1 pb-3 text-left transition-colors duration-300",
                isActive ? "border-b-[1.5px] border-ink mb-[-1px]" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "text-[9px] uppercase tracking-[0.25em] tabular-nums",
                  isActive ? "text-ink/60" : "text-mute",
                ].join(" ")}
              >
                {stage.index}
              </div>
              <div
                className={[
                  "mt-1 font-display font-medium leading-[1.1] text-[clamp(0.85rem,3.5vw,1rem)] tracking-tight",
                  isActive ? "text-ink" : "text-ink/35",
                ].join(" ")}
              >
                {stage.title}
              </div>
            </button>
          );
        })}
      </div>

      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="text-[14px] text-graphite leading-[1.6] mb-6">
              {activeStage.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {activeStage.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-[0.2em] text-ink/70 border border-line px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {activeStage.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-line rounded-xl bg-canvas px-4 py-4"
                >
                  <div className="h-[1.5px] w-8 bg-ink/30 mb-3" />
                  <div className="font-display text-[1.5rem] font-medium text-ink leading-[1] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-mute mt-1.5 leading-[1.3]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[14px] text-graphite leading-[1.65] max-w-full">
              {activeStage.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div
            key="swipe-hint"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mt-6 text-[10px] uppercase tracking-[0.2em] text-mute/60"
          >
            <span>←</span>
            <span>swipe to explore</span>
            <span>→</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
