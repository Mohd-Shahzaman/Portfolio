import { useEffect, useState } from "react";

/** Live local time in Hyderabad — a small human signal, not decoration. */
export function LocalClock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 20_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`tabular-nums ${className}`}>
      {time ? `${time} IST` : "—— IST"}
    </span>
  );
}
