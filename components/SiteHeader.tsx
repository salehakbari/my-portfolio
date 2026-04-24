"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NAV = [
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Visual", href: "#visual" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#profile" },
];

const DOT_NAV = [
  { label: "Approach", href: "#approach", id: "approach" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Visual", href: "#visual", id: "visual" },
  { label: "Skills", href: "#capabilities", id: "capabilities" },
  { label: "Exp", href: "#experience", id: "experience" },
  { label: "About", href: "#profile", id: "profile" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled
            ? "backdrop-blur-md bg-canvas/75 border-b border-line"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-header flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-ink"
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-ink"
            />
            <span>Saleh Akbari</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-graphite">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative hover:text-ink transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm rounded-full border border-ink/80 px-4 py-1.5 hover:bg-ink hover:text-canvas transition-colors"
          >
            <span>Get in touch</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              {"->"}
            </span>
          </a>
        </div>
      </header>

      <DotNav />
    </>
  );
}

function DotNav() {
  const reduceMotion = !!useReducedMotion();
  const [activeId, setActiveId] = useState<string>(DOT_NAV[0].id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const getActiveId = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const headerH = parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--header-h") || "64"
      ) * 16;

      let bestId = DOT_NAV[0].id;
      let bestScore = -Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewportH = window.innerHeight;

        // How much of the section is visible in viewport
        const visibleTop = Math.max(rect.top, headerH);
        const visibleBottom = Math.min(rect.bottom, viewportH);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight <= 0) return;

        // Score: visible height weighted by proximity to top of viewport
        // Sections closer to top of viewport score higher
        const distanceFromTop = Math.abs(rect.top - headerH);
        const score = visibleHeight - distanceFromTop * 0.3;

        if (score > bestScore) {
          bestScore = score;
          bestId = section.id;
        }
      });

      setActiveId(bestId);
    };

    getActiveId();
    window.addEventListener("scroll", getActiveId, { passive: true });
    window.addEventListener("resize", getActiveId, { passive: true });
    return () => {
      window.removeEventListener("scroll", getActiveId);
      window.removeEventListener("resize", getActiveId);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={[
        "md:hidden fixed z-40 top-1/2 -translate-y-1/2 transition-opacity duration-500",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
      style={{ right: "14px" }}
    >
      <nav>
        <ul className="flex flex-col gap-5">
          {DOT_NAV.map((item, i) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                  animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  aria-label={item.label}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center justify-end gap-2"
                >
                  <span
                    className={[
                      "text-[9px] uppercase tracking-[0.2em] transition-all duration-300 group-hover:text-ink/50",
                      isActive ? "text-ink/60" : "text-ink/0",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                  <span className="relative flex h-[10px] w-[10px] items-center justify-center">
                    <span
                      className={[
                        "rounded-full transition-all duration-300",
                        isActive
                          ? "w-[6px] h-[6px] bg-ink/70 ring-1 ring-ink/20 ring-offset-1 ring-offset-canvas"
                          : "w-[5px] h-[5px] bg-ink/20 group-hover:bg-ink/40",
                      ].join(" ")}
                    />
                    {isActive && !reduceMotion && (
                      <motion.span
                        key={activeId}
                        aria-hidden
                        initial={{ scale: 1.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute h-[6px] w-[6px] rounded-full ring-1 ring-ink/20 ring-offset-1 ring-offset-canvas"
                      />
                    )}
                  </span>
                </motion.a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
