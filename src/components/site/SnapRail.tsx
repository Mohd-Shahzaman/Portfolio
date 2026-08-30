import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Mobile-only horizontal snap rail with live dot indicator.
 * Turns straight vertical scrolling into a swipeable deck on small screens.
 */
export function SnapRail({
  children,
  count,
  wide = false,
  label,
  className = "",
}: {
  children: ReactNode;
  count: number;
  wide?: boolean;
  label?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const paint = () => {
      const railBox = el.getBoundingClientRect();
      const railCenter = railBox.left + railBox.width / 2;
      for (const child of Array.from(el.children) as HTMLElement[]) {
        const box = child.getBoundingClientRect();
        const d = (box.left + box.width / 2 - railCenter) / (railBox.width || 1);
        const k = Math.max(-1, Math.min(1, d));
        const away = Math.abs(k);
        child.style.setProperty("--rail-rot", `${(-k * 14).toFixed(2)}deg`);
        child.style.setProperty("--rail-scale", `${(1 - away * 0.12).toFixed(3)}`);
        child.style.setProperty("--rail-lift", `${(away * 14).toFixed(1)}px`);
        child.style.setProperty("--rail-fade", `${(1 - away * 0.45).toFixed(3)}`);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = el.scrollWidth - el.clientWidth;
        const ratio = max > 0 ? el.scrollLeft / max : 0;
        setActive(Math.round(ratio * (count - 1)));
        if (!reduce) paint();
      });
    };
    if (!reduce) paint();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [count]);


  const go = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max / Math.max(count - 1, 1)) * i, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={ref}
        className={`snaprail -mx-5 ${wide ? "snaprail-wide" : ""}`}
        role="group"
        aria-label={label}
      >
        {children}
      </div>
      <div className="mt-3 flex items-center gap-2 px-1">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to item ${i + 1}`}
            onClick={() => go(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === active ? "w-7 bg-ink" : "w-3 bg-ink/20"
            }`}
          />
        ))}
        <span className="ml-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-ink/40">
          Swipe
          <span className="nudge-x inline-block">→</span>
        </span>
      </div>
    </div>
  );
}
