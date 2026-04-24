"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type VisualProject = {
  index: string;
  title: string;
  summary: string;
  tools: string[];
  thumbnail: string;
  vimeoId: string;
  aspectRatio: "9:16" | "16:9";
};

const VISUAL_PROJECTS: VisualProject[] = [
  {
    index: "01",
    title: "Merry Christmas from Santa",
    summary:
      "For Christmas 2026, the goal was not just to post another holiday greeting. The video had to carry the warmth of the season while also strengthening trust in the Parsis Immigration brand. That led to a simple idea that felt both playful and strategic: let Santa deliver the message. The final piece was produced in English, French, and Persian so it could feel personal and familiar across different parts of the audience, while still keeping the brand front and center.",
    tools: ["Nanobanana Pro", "Kling", "Dzine Lip Sync", "ElevenLabs", "CapCut", "ChatGPT"],
    thumbnail: "/Visual%20Work/Merry%20Christmas%202026.jpg",
    vimeoId: "1185020543",
    aspectRatio: "9:16",
  },
  {
    index: "02",
    title: "Francophone Express Entry for African Audiences",
    summary:
      "This video was created for an Instagram campaign focused on the Francophone Express Entry pathway for French speaking audiences in Africa. A strong first hook mattered, so I did not want the opening to sound overly formal or too safe. Instead, I used an AI presenter with a polished but approachable look and shaped the script to sit somewhere between brand credibility and natural conversation. The result was a piece designed to stop the scroll without losing the tone Parsis needed to maintain.",
    tools: ["Kling", "Nanobanana Pro", "Veo 3.1", "Claude", "CapCut"],
    thumbnail: "/Visual%20Work/Canada%20invests%20in%20Francophone%20FR.jpg",
    vimeoId: "1185020744",
    aspectRatio: "9:16",
  },
  {
    index: "03",
    title: "Tara Covers the Express Entry Changes",
    summary:
      "When new changes were announced in Canada's Express Entry system, the video needed to feel informative, timely, and visually grounded. I built it by combining an AI presenter, interview style news visuals, and real footage from Canada so the update would feel closer to an actual media piece rather than a plain explainer. This project also introduced Tara, a custom designed AI presenter created to feel more aligned with the Parsis brand across both English and Persian content.",
    tools: ["CapCut", "Nanobanana Pro", "Kling", "Veo", "ChatGPT"],
    thumbnail: "/Visual%20Work/major%20changes%20to%20its%20Express%20Entry%20system%202026en%20(1).jpg",
    vimeoId: "1185029804",
    aspectRatio: "9:16",
  },
  {
    index: "04",
    title: "What Happens After You Get an ITA",
    summary:
      "A surprising number of applicants lose their opportunity after receiving an invitation because documents are incomplete or the submission process takes too long. This video was made to explain that risk quickly and clearly, without overwhelming the viewer. I used an AI presenter designed for Francophone content and focused on delivering the problem and the solution in a short format that could work well in a campaign environment.",
    tools: ["CapCut", "Nanobanana Pro", "Kling", "Claude"],
    thumbnail: "/Visual%20Work/What%20you%20should%20know%20after%20getting%20ITA.jpg",
    vimeoId: "1185030531",
    aspectRatio: "16:9",
  },
  {
    index: "05",
    title: "Tara on the CN Tower",
    summary:
      "For this immigration update, I wanted the opening to do more than introduce the topic. It needed a visual hook strong enough to make people stop before the message even began. So instead of starting with a standard presenter shot, I placed Tara on the edge of Toronto's CN Tower, speaking to the camera while it slowly pulls away. The scene was designed to create tension and curiosity first, then carry the viewer into the actual update.",
    tools: ["CapCut", "Nanobanana Pro", "Kling", "Claude"],
    thumbnail: "/Visual%20Work/Doctrs%20Express%20Entry.jpg",
    vimeoId: "1185024313",
    aspectRatio: "9:16",
  },
];

export default function VisualWork() {
  const reduceMotion = !!useReducedMotion();
  const [desktopPlayingIndex, setDesktopPlayingIndex] = useState<number | null>(
    null,
  );
  const [mobilePlayingIndex, setMobilePlayingIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const stopAllPlayback = () => {
      setDesktopPlayingIndex(null);
      setMobilePlayingIndex(null);
    };
    mq.addEventListener("change", stopAllPlayback);
    return () => mq.removeEventListener("change", stopAllPlayback);
  }, []);

  return (
    <section
      id="visual"
      className="relative bg-canvas pt-20 md:pt-24 pb-20 md:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-line" />
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-mute">
          <span className="text-ink/80">02 - Visual</span>
          <span>Video - Photography - Visual storytelling</span>
        </div>

        <div id="visual-heading" className="mt-12 md:mt-16">
          <h2 className="font-display font-medium text-ink leading-[0.9] tracking-tightest text-[clamp(3rem,7vw,6rem)]">
            Creative
            <br />
            <span className="text-graphite">production.</span>
          </h2>
        </div>

        {!reduceMotion && (
          <div className="hidden md:block relative mt-8 md:mt-10">
            {VISUAL_PROJECTS.map((project, i) => (
              <ProjectPanel
                key={project.index}
                project={project}
                isPlaying={desktopPlayingIndex === i}
                onPlay={() => setDesktopPlayingIndex(i)}
                onStopPlayback={() => setDesktopPlayingIndex(null)}
              />
            ))}
          </div>
        )}

        <div className={`${reduceMotion ? "mt-10" : "mt-10 md:hidden"}`}>
          <StackedVisual
            playingIndex={mobilePlayingIndex}
            setPlayingIndex={setMobilePlayingIndex}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectPanel({
  project,
  isPlaying,
  onPlay,
  onStopPlayback,
}: {
  project: VisualProject;
  isPlaying: boolean;
  onPlay: () => void;
  onStopPlayback: () => void;
}) {
  const reduceMotion = !!useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { amount: 0.3 });

  useEffect(() => {
    if (!inView && isPlaying) {
      onStopPlayback();
    }
  }, [inView, isPlaying, onStopPlayback]);

  return (
    <div ref={panelRef} className="relative h-[100vh]">
      <div className="sticky top-[var(--header-h)] h-[calc(100vh-var(--header-h))] overflow-hidden">
        <div className="h-full grid grid-cols-12 gap-10 items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="col-span-6 pr-8"
          >
            <div className="text-[11px] uppercase tracking-[0.3em] text-mute tabular-nums">
              /{project.index}
            </div>
            <h3 className="mt-4 font-display font-medium text-ink leading-[1.02] tracking-tight text-[clamp(1.75rem,3.4vw,2.75rem)] max-w-[22ch]">
              {project.title}
            </h3>
            <p className="mt-6 text-[15px] text-graphite leading-[1.65] max-w-[54ch]">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] uppercase tracking-[0.2em] text-ink/70 border border-line px-3 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="col-span-6 flex items-center justify-center h-full"
          >
            <VideoFrame aspectRatio={project.aspectRatio} variant="desktop">
              <VideoPanel project={project} isPlaying={isPlaying} onPlay={onPlay} />
            </VideoFrame>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function VideoFrame({
  aspectRatio,
  children,
  variant = "desktop",
}: {
  aspectRatio: "9:16" | "16:9";
  children: ReactNode;
  variant?: "desktop" | "mobile";
}) {
  if (aspectRatio === "16:9") {
    const sizing =
      variant === "desktop"
        ? "max-w-[620px] max-h-[60vh]"
        : "w-full max-w-[480px]";
    return (
      <div className={`relative w-full ${sizing} aspect-[16/9]`}>
        <div className="absolute inset-0 rounded-[14px] border border-ink/15 bg-ink/[0.03] p-2 shadow-[0_30px_80px_-30px_rgba(20,22,23,0.35)]">
          <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-surface border border-line">
            {children}
          </div>
        </div>
      </div>
    );
  }

  const sizing =
    variant === "desktop" ? "max-w-[340px]" : "max-w-[320px] max-h-[55vh]";
  return (
    <div className={`relative w-full ${sizing} aspect-[9/16]`}>
      <div className="absolute inset-0 rounded-[28px] border border-ink/15 bg-ink/[0.03] p-2 shadow-[0_30px_80px_-30px_rgba(20,22,23,0.35)]">
        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-surface border border-line">
          {children}
        </div>
      </div>
      <div
        className="absolute top-[18px] left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-ink/20"
        aria-hidden
      />
    </div>
  );
}

function VideoPanel({
  project,
  isPlaying,
  onPlay,
}: {
  project: VisualProject;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  if (isPlaying) {
    const vimeoSrc = `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;
    return (
      <iframe
        key={vimeoSrc}
        src={vimeoSrc}
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title={project.title}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={onPlay}
      className="group absolute inset-0 w-full h-full overflow-hidden"
      aria-label={`Play ${project.title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20 transition-opacity duration-500 group-hover:from-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-canvas/90 backdrop-blur-sm border border-white/40 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-110">
          <div
            aria-hidden
            className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-ink"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-canvas/90 bg-gradient-to-t from-black/60 to-transparent">
        <span className="tabular-nums">/{project.index}</span>
        <span>{project.aspectRatio}</span>
      </div>
    </button>
  );
}

function StackedVisual({
  playingIndex,
  setPlayingIndex,
}: {
  playingIndex: number | null;
  setPlayingIndex: (i: number | null) => void;
}) {
  const reduce = !!useReducedMotion();
  return (
    <ul className="space-y-20">
      {VISUAL_PROJECTS.map((project, i) => (
        <motion.li
          key={project.index}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="mx-auto flex w-full justify-center">
            <VideoFrame aspectRatio={project.aspectRatio} variant="mobile">
              <VideoPanel
                project={project}
                isPlaying={playingIndex === i}
                onPlay={() => setPlayingIndex(i)}
              />
            </VideoFrame>
          </div>

          <div className="mt-8">
            <div className="text-[11px] uppercase tracking-[0.3em] text-mute tabular-nums">
              /{project.index}
            </div>
            <h3 className="mt-3 font-display font-medium text-ink leading-[1.05] tracking-tight text-[clamp(1.35rem,2.6vw,2rem)]">
              {project.title}
            </h3>
            <p className="mt-4 text-[14px] text-graphite leading-[1.65]">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] uppercase tracking-[0.2em] text-ink/70 border border-line px-2.5 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
