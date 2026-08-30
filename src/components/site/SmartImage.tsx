import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

/**
 * Image that degrades to a paper placeholder instead of a broken icon when the
 * source can't be loaded.
 */
export function SmartImage({
  fallbackLabel,
  className = "",
  fallbackClassName = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel: string;
  fallbackClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onErr = () => setFailed(true);
    if (el.complete && el.naturalWidth === 0) setFailed(true);
    el.addEventListener("error", onErr);
    return () => el.removeEventListener("error", onErr);
  }, []);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-paper-deep outline outline-offset-[-1px] outline-ink/10 ${fallbackClassName || className}`}
        role="img"
        aria-label={typeof props.alt === "string" ? props.alt : fallbackLabel}
      >
        <span className="eyebrow px-4 py-10 text-center text-ink/35">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img ref={ref} {...props} className={className} onError={() => setFailed(true)} />
  );
}
