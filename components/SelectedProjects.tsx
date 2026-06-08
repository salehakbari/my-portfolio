import Image from "next/image";
import { PROJECT_SLOTS, type ProjectSlot } from "@/lib/projects";

export default function SelectedProjects() {
  return (
    <section id="work" className="relative bg-canvas pt-20 md:pt-24 pb-20 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-line" />
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-mute">
          <span className="text-ink/80">01 - Work</span>
          <span>Four case studies</span>
        </div>

        <div id="work-heading" className="mt-12 md:mt-16">
          <h2 className="font-display font-medium text-ink leading-[0.9] tracking-tightest text-[clamp(3rem,7vw,6rem)]">
            Selected
            <br />
            <span className="text-graphite">Work.</span>
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-x-6 md:gap-x-8 gap-y-20 md:gap-y-28">
          {PROJECT_SLOTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectSlot }) {
  const span = project.format === "wide" ? "md:col-span-7" : "md:col-span-5";

  return (
    <article className={`col-span-12 ${span}`}>
      <div className="mb-4 md:mb-5 flex items-baseline">
        <span className="font-display font-thin leading-[0.8] tracking-tightest text-ink/15 text-[clamp(4rem,8vw,7rem)] select-none">
          {project.index}
        </span>
      </div>

      <MediaFrame project={project} />
      <Caption project={project} />
    </article>
  );
}

function MediaFrame({ project }: { project: ProjectSlot }) {
  const aspect =
    project.format === "wide" ? "aspect-[17/10]" : "aspect-[4/5]";

  return (
    <figure>
      <div
        className={[
          "relative overflow-hidden rounded-[2px] border border-line bg-surface",
          aspect,
        ].join(" ")}
      >
        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-500 ${project.mediaSrc ? "opacity-35" : "opacity-100"}`}
          style={{
            backgroundImage:
              "linear-gradient(135deg, #EAEAEA 0%, #DCDCDC 100%), repeating-linear-gradient(45deg, rgba(20,22,23,0.04) 0 1px, transparent 1px 12px)",
            backgroundBlendMode: "multiply",
          }}
        />

        {project.mediaSrc && (
          <div className="absolute inset-1 md:inset-2">
            <Image
              src={project.mediaSrc}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 90vw"
              className="object-contain"
            />
          </div>
        )}
      </div>

      <figcaption className="mt-2 flex items-center gap-2 overflow-hidden border-b border-line pb-3 text-[9px] uppercase tracking-[0.22em] text-mute md:mt-3 md:gap-3 md:text-[10px] md:tracking-[0.3em]">
        <span>{project.discipline}</span>
        <span aria-hidden className="opacity-40">
          /
        </span>
        <span className="tabular-nums">{project.year}</span>
      </figcaption>
    </figure>
  );
}

function Caption({ project }: { project: ProjectSlot }) {
  return (
    <div className="mt-6 md:mt-8">
      <StatsLine stats={project.stats} />
      <h3 className="font-display font-medium text-ink leading-[1.05] tracking-tight text-[clamp(1.5rem,3vw,2.25rem)]">
        {project.title}
      </h3>
      <p className="mt-3 text-[13px] text-graphite leading-[1.6] max-w-[52ch]">
        {project.context}
      </p>
      <div className="mt-3 text-sm text-ink font-medium leading-[1.4]">
        {project.outcome}
      </div>
    </div>
  );
}

function StatsLine({ stats }: { stats: string }) {
  const parts = stats.split(/\s*\u00C2?\u00B7\s*/).filter(Boolean);

  return (
    <div className="mb-3 flex flex-col gap-1 text-[10px] uppercase tracking-[0.16em] text-mute md:mb-2 md:flex-row md:flex-wrap md:gap-0 md:text-[11px] md:tracking-[0.2em]">
      {parts.map((part) => (
        <span
          key={part}
          className="leading-[1.5] md:after:mx-2 md:after:text-mute/50 md:after:content-['/'] last:md:after:content-none"
        >
          {part}
        </span>
      ))}
    </div>
  );
}
