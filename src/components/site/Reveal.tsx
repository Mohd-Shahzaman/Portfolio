import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { useIsSmall } from "@/hooks/use-small-screen";

/**
 * Reveal — signature entrance: the block unfolds from a clipped edge while
 * un-blurring, un-skewing and settling out of 3D space.
 *
 * On phones the same move is retuned: it fires as soon as a sliver enters the
 * viewport, travels further, and resolves on a spring so a quick thumb-flick
 * still shows the whole animation.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const small = useIsSmall();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={{ perspective: "1000px" }}
      initial={{
        opacity: 0,
        y: small ? 46 : 34,
        rotateX: small ? 14 : 10,
        scale: small ? 0.94 : 0.975,
        filter: small ? "blur(4px)" : "blur(8px)",
        clipPath: small ? "inset(22% 0% 0% 0%)" : "inset(14% 0% 0% 0%)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={
        small
          ? { once: false, amount: 0.08, margin: "0px 0px -4% 0px" }
          : { once: false, amount: 0.12, margin: "0px 0px -8% 0px" }
      }

      transition={
        small
          ? {
              type: "spring",
              stiffness: 130,
              damping: 17,
              mass: 0.7,
              delay: Math.min(delay, 220) / 1000,
            }
          : { duration: 1.05, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}


const labelAccents = ["bg-gold", "bg-coral", "bg-teal", "bg-blue", "bg-gold"];

export function SectionLabel({ index, label }: { index: string; label: string }) {
  const accent = labelAccents[(Number(index) - 1 + labelAccents.length) % labelAccents.length];
  return (
    <motion.div
      className="group flex items-center gap-3"
      initial={{ opacity: 0, x: -18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.3, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={`size-2 shrink-0 rounded-full ${accent} pulse-soft`} />
      <span className="eyebrow text-ink/40 tabular-nums">{index}</span>
      <h2 className="eyebrow font-medium text-ink/60">{label}</h2>
      <motion.span
        className={`h-px ${accent} opacity-60`}
        initial={{ width: 0 }}
        whileInView={{ width: 26 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

    </motion.div>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-ink/15 drawline ${className}`} />;
}
