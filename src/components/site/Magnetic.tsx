import { useRef, type ReactNode } from "react";

/**
 * Cursor-magnetism on pointer devices; on touch the same element answers a
 * finger with a springy press-and-release (squash, lift, settle) so phones
 * get real feedback instead of a dead tap.
 */
export function Magnetic({
  children,
  strength = 10,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function reduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function move(e: React.MouseEvent) {
    const el = ref.current;
    if (!el || reduced()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  function touchStart(e: React.TouchEvent) {
    const el = ref.current;
    const t = e.touches[0];
    if (!el || !t || reduced()) return;
    const r = el.getBoundingClientRect();
    const x = (t.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (t.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transition = "transform .18s cubic-bezier(.16,1,.3,1)";
    el.style.transform = `perspective(600px) translate(${x * strength * 0.6}px, ${
      y * strength * 0.6
    }px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale(.94)`;
  }

  function touchEnd() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .7s cubic-bezier(.16,1.5,.3,1)";
    el.style.transform = "";
  }

  return (
    <span
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onTouchCancel={touchEnd}
      className={`inline-block will-change-transform ${className}`}
      style={{ transition: "transform .45s cubic-bezier(.16,1,.3,1)" }}
    >
      {children}
    </span>
  );
}
