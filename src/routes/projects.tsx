import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { accentDot, accentRule, projects } from "@/lib/portfolio-data";

const projectHover: Record<string, string> = {
  gold: "hover:bg-sun/25",
  coral: "hover:bg-rose/25",
  teal: "hover:bg-sea/25",
  violet: "hover:bg-grape/25",
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mohammed Shahzaman" },
      {
        name: "description",
        content:
          "MeritOne, Interpret, Movellea and AutoClip — MERN and AI-agent products built and shipped from idea to production.",
      },
      { property: "og:title", content: "Projects — Mohammed Shahzaman" },
      {
        property: "og:description",
        content:
          "MERN and AI-agent products built and shipped at hackathons and independently.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-12 md:py-20">
      <span className="aurora -left-16 top-4 size-64 bg-coral/35 drift" aria-hidden="true" />
      <span className="aurora right-0 top-56 size-56 bg-gold/35 drift" style={{ animationDelay: "-8s" }} aria-hidden="true" />
      <header>
        <p className="eyebrow text-ink/50">Index of work</p>
        <h1 className="settle ink-wash mt-4 max-w-[16ch] font-display text-4xl font-light leading-[0.94] tracking-tight text-balance sm:text-5xl md:text-7xl">
          Projects
        </h1>
        <p className="mt-6 max-w-[48ch] text-pretty text-sm text-ink/65 md:text-base">
          Built and shipped at hackathons and independently — from idea to production.
        </p>
      </header>

      <div className="stripe-rule mt-12" />

      <div>
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className={`group grid gap-5 border-b border-border py-8 transition-colors duration-500 md:grid-cols-12 md:gap-6 md:py-10 ${projectHover[p.accent]}`}>
              <div className="flex min-w-0 items-baseline gap-3 sm:gap-4 md:col-span-4">
                <span className="text-[12px] font-medium tabular-nums text-ink/40">
                  {p.index}
                </span>
                <div>
                  <h2 className="font-display text-xl font-medium leading-tight tracking-tight sm:text-2xl md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-ink/45">
                    {p.subtitle}
                  </p>
                  <span
                    className={`mt-4 block h-0.5 w-10 ${accentRule[p.accent]} transition-all duration-500 group-hover:w-20`}
                  />
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-[46ch] text-pretty text-sm text-ink/70">
                  {p.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-ink/60">
                      <span
                        className={`mt-[7px] size-1.5 shrink-0 rounded-full ${accentDot[p.accent]}`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:col-span-3 md:flex-col md:items-end md:gap-4">
                <span className="rounded-full bg-paper-deep px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-ink/55">
                  {p.tech}
                </span>
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink"
                  >
                    {p.live.replace("https://", "")}
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="text-[12px] uppercase tracking-[0.2em] text-ink/35">
                    In development
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
