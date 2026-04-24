"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { FallingPattern } from "@/components/ui/falling-pattern";

const EYEBROW = "Content · Growth · Systems";
const IDENTITY_NOTE =
  "I help teams get seen, convert better, and build the workflows that make it last — across content, performance marketing, and AI-driven operations.";
const WORK_STYLE =
  "From producing the first video to building the automation that ships a hundred — I work across the full stack of growth, and connect the parts that usually stay separate.";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-canvas">
      <div className="hidden md:block">
        <DesktopHero />
      </div>
      <div className="md:hidden">
        <MobileHero />
      </div>
    </section>
  );
}

function DesktopHero() {
  const reduceMotion = !!useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const copyY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.985]);
  const blobTopY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const blobBottomY = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const stageY = useTransform(scrollYProgress, [0, 1], [0, -8]);

  const photoScale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.965, 0.94]);
  const photoX = useTransform(scrollYProgress, [0, 0.45, 1], [0, -16, -22]);
  const photoY = useTransform(scrollYProgress, [0, 0.45, 1], [0, 8, 14]);
  const photoRotate = useTransform(scrollYProgress, [0, 0.45, 1], [-1.4, -2.4, -2.9]);

  const profileOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.38, 1],
    [0, 0, 1, 1],
  );
  const profileY = useTransform(scrollYProgress, [0, 0.1, 0.38, 1], [54, 54, 0, -2]);
  const profileX = useTransform(scrollYProgress, [0, 0.1, 0.38, 1], [34, 34, 0, -2]);
  const profileRotate = useTransform(scrollYProgress, [0, 0.38, 1], [3.2, 1, 0.4]);
  const profileScale = useTransform(scrollYProgress, [0, 0.38, 1], [0.975, 1, 1.004]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[calc(100svh-var(--header-h)+5rem)] pt-[calc(var(--header-h)+1.75rem)] pb-16"
    >
      <HeroBackground
        reduceMotion={reduceMotion}
        blobTopY={blobTopY}
        blobBottomY={blobBottomY}
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-h))] max-w-[1400px] items-center px-6 md:px-10">
        <div className="grid w-full grid-cols-12 gap-8 md:gap-10 items-start md:items-center">
          <motion.div
            style={reduceMotion ? undefined : { y: copyY }}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="col-span-7 pr-8"
          >
            <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-mute tabular-nums">
              <span className="text-ink/80">I / II</span>
              <span aria-hidden className="h-px w-8 bg-mute/60" />
              {EYEBROW}
            </p>
            <motion.h1
              style={reduceMotion ? undefined : { y: headingY, scale: headingScale }}
              className="font-display font-medium text-ink leading-[0.86] tracking-tightest text-[clamp(3.25rem,9vw,8.25rem)]"
            >
              Saleh Akbari
            </motion.h1>
            <p className="mt-7 text-[clamp(1rem,1.65vw,1.28rem)] text-graphite leading-[1.5] max-w-[34ch]">
              {IDENTITY_NOTE}
            </p>
            <p className="mt-4 text-[15px] text-graphite leading-[1.65] max-w-[54ch]">
              {WORK_STYLE}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink border border-ink rounded-full px-5 py-2 hover:bg-ink hover:text-canvas transition-colors duration-300"
              >
                View Selected Work
                <span aria-hidden>{"->"}</span>
              </a>
              <a
                href="#contact"
                className="text-sm text-graphite hover:text-ink transition-colors duration-300"
              >
                Let&rsquo;s Connect
              </a>
            </div>
          </motion.div>

          <motion.div
            style={reduceMotion ? undefined : { y: stageY }}
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            className="col-span-5"
          >
            <div className="relative mx-auto h-[520px] w-full max-w-[540px]">
              <motion.div
                style={
                  reduceMotion
                    ? undefined
                    : {
                        scale: photoScale,
                        x: photoX,
                        y: photoY,
                        rotate: photoRotate,
                      }
                }
                className="absolute left-0 top-0 h-[76%] w-[74%] rounded-[2px] bg-gradient-to-b from-[#242527] to-[#121416] shadow-[0_30px_80px_-30px_rgba(20,22,23,0.4)] overflow-hidden"
              >
                <div className="absolute inset-2.5 overflow-hidden rounded-[1px]">
                  <Image
                    src="/Saleh1.jpg"
                    alt="Saleh Akbari portrait"
                    fill
                    sizes="(min-width: 768px) 40vw, 92vw"
                    className="object-cover"
                    style={{ filter: "grayscale(20%) contrast(1.05)" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-2.5 rounded-[1px] border border-white/[0.06]" />
                <div className="absolute bottom-5 left-6 z-10">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-canvas/60">
                    Based in Montreal
                  </div>
                  <div className="mt-1 font-display text-[0.95rem] tracking-tight text-canvas">
                    Build, improve, scale
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: profileOpacity,
                        x: profileX,
                        y: profileY,
                        rotate: profileRotate,
                        scale: profileScale,
                      }
                }
                className="absolute right-0 bottom-[9%] w-[62%] rounded-[2px] border border-line bg-canvas p-6 shadow-[0_34px_90px_-40px_rgba(20,22,23,0.22)]"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-mute pb-4 border-b border-line">
                  <span>N 02 - Practice</span>
                  <span>Profile</span>
                </div>
                <p className="mt-4 font-display text-[1.18rem] leading-[1.2] tracking-tight text-ink">
                  Creative execution shaped by operational clarity.
                </p>
                <p className="mt-3 text-[13px] leading-[1.6] text-graphite">
                  I connect narrative quality with production systems so teams can
                  launch stronger work, more reliably.
                </p>
                <div className="mt-4 pt-4 border-t border-line flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-mute">
                  <span>Content to Systems</span>
                  <span>Execution Layer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MobileHero() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div className="relative overflow-hidden pt-[calc(var(--header-h)+2rem)] pb-14">
      <HeroBackground reduceMotion={reduceMotion} />
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-8 items-start">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-mute tabular-nums">
              <span className="text-ink/80">I / II</span>
              <span aria-hidden className="h-px w-8 bg-mute/60" />
              {EYEBROW}
            </p>
            <h1 className="font-display font-medium text-ink leading-[0.88] tracking-tightest text-[clamp(3.2rem,15vw,5.75rem)]">
              Saleh Akbari
            </h1>
            <p className="mt-7 text-[1.02rem] text-graphite leading-[1.55] max-w-[34ch]">
              {IDENTITY_NOTE}
            </p>
            <p className="mt-4 text-[15px] text-graphite leading-[1.65] max-w-[54ch]">
              {WORK_STYLE}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink border border-ink rounded-full px-5 py-2 hover:bg-ink hover:text-canvas transition-colors duration-300"
              >
                View Selected Work
                <span aria-hidden>{"->"}</span>
              </a>
              <a
                href="#contact"
                className="text-sm text-graphite hover:text-ink transition-colors duration-300"
              >
                Let&rsquo;s Connect
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="relative h-[360px] rounded-[2px] bg-gradient-to-b from-[#242527] to-[#121416] shadow-[0_30px_80px_-30px_rgba(20,22,23,0.4)] overflow-hidden">
              <div className="absolute inset-2.5 overflow-hidden rounded-[1px]">
                <Image
                  src="/Saleh1.jpg"
                  alt="Saleh Akbari portrait"
                  fill
                  sizes="90vw"
                  className="object-cover"
                  style={{ filter: "grayscale(20%) contrast(1.05)" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-2.5 rounded-[1px] border border-white/[0.06]" />
              <div className="absolute bottom-5 left-6 z-10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-canvas/60">
                  Based in Montreal
                </div>
                <div className="mt-1 font-display text-[0.95rem] tracking-tight text-canvas">
                  Build, improve, scale
                </div>
              </div>
            </div>

            <div className="relative mt-4 rounded-[2px] border border-line bg-canvas p-6 shadow-[0_34px_90px_-40px_rgba(20,22,23,0.22)]">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-mute pb-4 border-b border-line">
                <span>N 02 - Practice</span>
                <span>Profile</span>
              </div>
              <p className="mt-4 font-display text-[1.08rem] leading-[1.2] tracking-tight text-ink">
                Creative execution shaped by operational clarity.
              </p>
              <p className="mt-3 text-[13px] leading-[1.6] text-graphite">
                I connect narrative quality with production systems so teams can
                launch stronger work, more reliably.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function HeroBackground({
  reduceMotion,
  blobTopY,
  blobBottomY,
}: {
  reduceMotion: boolean;
  blobTopY?: MotionValue<number>;
  blobBottomY?: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-[18%] -left-[14%] h-[62vw] w-[62vw] rounded-full bg-[#EDEAE3] blur-3xl"
        style={reduceMotion || !blobTopY ? undefined : { y: blobTopY }}
        animate={
          reduceMotion ? undefined : { x: [0, 24, -18, 0], y: [0, 16, -10, 0] }
        }
        transition={
          reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }
        }
      />
      <motion.div
        className="absolute -bottom-[20%] -right-[16%] h-[62vw] w-[62vw] rounded-full bg-[#E8E9EB] blur-3xl"
        style={reduceMotion || !blobBottomY ? undefined : { y: blobBottomY }}
        animate={
          reduceMotion ? undefined : { x: [0, -20, 16, 0], y: [0, -12, 14, 0] }
        }
        transition={
          reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }
        }
      />
      <FallingPattern
        color="rgba(20,22,23,0.2)"
        backgroundColor="var(--canvas)"
        duration={170}
        blurIntensity="0.75em"
        density={0.95}
        className="absolute inset-0 opacity-[0.55] [mask-image:linear-gradient(to_bottom,black_0%,black_76%,transparent_100%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/55 via-canvas/20 to-canvas/70" />
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent via-canvas/65 to-canvas" />
    </div>
  );
}
