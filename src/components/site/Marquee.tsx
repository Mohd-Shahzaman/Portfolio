/** Letterpress ticker strip — repeated caps set, seamless scroll. */
export function Marquee({ items }: { items: string[] }) {
  const run = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/15 bg-paper-deep py-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee flex w-max items-center gap-10 pr-10 [animation-play-state:running] hover:[animation-play-state:paused]">
        {run.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10">
            <span className="eyebrow whitespace-nowrap text-ink/55">{t}</span>
            <span
              className={`size-1.5 shrink-0 rounded-full ${
                i % 3 === 0 ? "bg-gold" : i % 3 === 1 ? "bg-coral" : "bg-teal"
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
