import Image from "next/image";

const META: { label: string; value: string }[] = [
  { label: "Based", value: "Montreal, QC - Canada" },
  { label: "Experience", value: "14+ years across content and digital" },
  { label: "Focus", value: "Content + Growth + Systems" },
  { label: "Execution", value: "Multilingual - EN - FA" },
];

export default function About() {
  return (
    <section id="profile" className="relative bg-canvas pt-20 md:pt-24 pb-20 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px w-full bg-line" />
        <div
          id="profile-heading"
          className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-mute"
        >
          <span className="text-ink/80">05 - Profile</span>
          <span>A short note on the practice</span>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-4">
            <div className="relative aspect-[4/5] max-w-[360px] overflow-hidden rounded-[2px] border border-ink">
              <Image
                src="/Saleh2.jpg"
                alt="Saleh Akbari"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
                style={{ filter: "grayscale(15%) contrast(1.02)" }}
              />
              <div className="pointer-events-none absolute inset-2.5 rounded-[1px] border border-ink/10" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.3em] text-mute">
              Short note
            </div>
            <p className="mt-5 font-display font-medium text-ink leading-[1.15] tracking-tight text-[clamp(1.5rem,2.6vw,2.1rem)]">
              A hybrid operator across creative production, marketing execution, and
              smarter systems.
            </p>
            <p className="mt-6 text-[15px] text-graphite leading-[1.6] max-w-[58ch]">
              My career started in making things — audio, video, photography,
              digital content that people actually engaged with. Over time that
              creative foundation expanded into SEO, paid campaigns, social
              strategy, and eventually into the AI automation systems that now sit
              underneath the work.
            </p>
            <p className="mt-4 text-[15px] text-graphite leading-[1.6] max-w-[58ch]">
              That range is deliberate. I don&rsquo;t think about visibility,
              conversion, and operations as separate jobs. I think about them as a
              sequence — and the rarest skill is being able to move across all
              three in the same role.
            </p>

            <dl className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-line pt-8">
              {META.map((item) => (
                <div key={item.label}>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-mute">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://www.linkedin.com/in/saleh-akbari/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-ink mt-8"
            >
              <span className="h-px w-8 bg-ink/50 transition-all duration-500 group-hover:w-14 group-hover:bg-ink" />
              <span className="underline underline-offset-[6px] decoration-1 decoration-ink/30 transition-colors duration-300 group-hover:decoration-ink">
                linkedin.com/in/saleh-akbari
              </span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                {"→"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
