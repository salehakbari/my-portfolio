import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import SelectedProjects from "@/components/SelectedProjects";
import SiteHeader from "@/components/SiteHeader";
import VisualWork from "@/components/VisualWork";

export default function HomePage() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <HowIWork />
      <SelectedProjects />
      <VisualWork />
      <Capabilities />
      <Experience />
      <About />
      <footer id="contact" className="relative bg-canvas pt-20 md:pt-24 pb-10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="h-px w-full bg-line" />
          <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.3em] text-mute">
            <span className="text-ink/80">06 - Contact</span>
            <span>Open to full-time opportunities - 2026</span>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display font-medium text-ink leading-[0.9] tracking-tightest text-[clamp(2.75rem,6.5vw,5.5rem)]">
                Let&rsquo;s build something
                <br />
                <span className="text-graphite">that actually works.</span>
              </h2>
              <p className="mt-6 text-[15px] text-graphite leading-[1.6] max-w-[52ch]">
                I&rsquo;m looking for a team that cares about doing marketing
                right. Strong content, campaigns that perform, and systems that
                make it all easier to scale. If that sounds like your team,
                I&rsquo;d love to talk.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <a
                href="mailto:akbari.saleh@gmail.com"
                className="group inline-flex items-center gap-3 text-base text-ink md:justify-end"
                aria-label="Email Saleh Akbari at akbari.saleh@gmail.com"
              >
                <span className="h-px w-8 bg-ink/50 transition-all duration-500 group-hover:w-14 group-hover:bg-ink" />
                <span className="underline underline-offset-[6px] decoration-1 decoration-ink/30 transition-colors duration-300 group-hover:decoration-ink">
                  akbari.saleh@gmail.com
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  {"->"}
                </span>
              </a>
            </div>
          </div>

          <dl className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 border-t border-line pt-10">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-mute">
                Name
              </dt>
              <dd className="mt-2 text-sm text-ink">Saleh Akbari Beiragh</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-mute">
                Location
              </dt>
              <dd className="mt-2 text-sm text-ink">Montreal, QC - Canada</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-mute">
                Phone
              </dt>
              <dd className="mt-2 text-sm text-ink">
                <a
                  href="tel:+15149718818"
                  className="hover:underline underline-offset-[6px] decoration-1"
                >
                  +1 (514) 971-8818
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-20 md:mt-24 pt-10 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-mute">
            <span>(c) {new Date().getFullYear()} Saleh Akbari Beiragh - All rights reserved.</span>
            <span className="uppercase tracking-[0.3em]">Built with restraint</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
