import { profile } from "@/lib/portfolio-data";
import { LocalClock } from "@/components/site/LocalClock";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="eyebrow text-ink/45">Let’s build something</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block max-w-full break-words font-display text-lg font-light tracking-tight text-ink transition-colors hover:text-ink/55 sm:text-xl md:text-2xl"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex items-end justify-between gap-6 sm:justify-end sm:gap-8">
          <div className="space-y-1 sm:text-right">
            <p className="eyebrow text-ink/45">{profile.location}</p>
            <LocalClock className="block text-[11px] uppercase tracking-[0.18em] text-ink/40" />
            <p className="text-[11px] text-ink/35">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-gold" />
            <span className="size-2.5 rounded-full bg-coral" />
            <span className="size-2.5 rounded-full bg-teal" />
          </div>
        </div>
      </div>
    </footer>
  );
}
