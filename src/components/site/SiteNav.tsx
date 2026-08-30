import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { LocalClock } from "@/components/site/LocalClock";

const links = [
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-30 border-b border-border bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6">
        <Link to="/" className="group flex min-w-0 items-baseline gap-3">
          <span className="truncate font-display text-[15px] font-medium tracking-tight">
            {profile.name}
          </span>
          <span className="eyebrow hidden truncate text-ink/45 lg:inline">
            {profile.role}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-4 sm:gap-5">
          <div className="hidden items-center gap-5 sm:flex">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group relative py-1 text-[12px] uppercase tracking-[0.2em] text-ink/55 transition-colors hover:text-ink"
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-ink transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          <LocalClock className="hidden text-[11px] uppercase tracking-[0.18em] text-ink/40 md:inline" />
          <div className="hidden items-center gap-2 sm:flex" aria-hidden="true">
            <span className="size-3 rounded-full bg-gold" />
            <span className="size-3 rounded-full bg-coral" />
            <span className="size-3 rounded-full bg-teal" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 shrink-0 place-items-center border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper sm:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-paper px-5 pb-5 pt-2 sm:hidden">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center justify-between border-b border-border py-3 text-[12px] uppercase tracking-[0.2em] text-ink/70"
              >
                {l.label}
                <span
                  className={`size-2 rounded-full ${active ? "bg-gold" : "bg-ink/15"}`}
                />
              </Link>
            );
          })}
          <div className="mt-4 flex items-center justify-between">
            <LocalClock className="text-[11px] uppercase tracking-[0.18em] text-ink/40" />
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-gold" />
              <span className="size-2.5 rounded-full bg-coral" />
              <span className="size-2.5 rounded-full bg-teal" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
