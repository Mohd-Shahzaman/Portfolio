import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { useIsSmall } from "@/hooks/use-small-screen";

/* ------------------------------------------------------------------ */
/* Shared easing / spring language                                     */
/* ------------------------------------------------------------------ */

const softSpring = { stiffness: 90, damping: 22, mass: 0.6 } as const;
/* Phones get a snappier spring so effects resolve inside a short flick. */
const phoneSpring = { stiffness: 140, damping: 20, mass: 0.5 } as const;

function useProgress(offset: [string, string], mobileOffset?: [string, string]) {
  const small = useIsSmall();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: (small && mobileOffset ? mobileOffset : offset) as any,
  });
  return { ref, progress: scrollYProgress, small };
}


/* ------------------------------------------------------------------ */
/* 1. WordCurtain — headline where each word rises, unblurs and        */
/*    un-rotates on its own slice of the scroll timeline.              */
/* ------------------------------------------------------------------ */

function CurtainWord({
  word,
  progress,
  start,
  end,
  accent,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  accent?: boolean;
}) {
  const y = useTransform(progress, [start, end], ["115%", "0%"]);
  const rotate = useTransform(progress, [start, end], [8, 0]);
  const blurPx = useTransform(progress, [start, end], [10, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <motion.span
        style={{ y, rotate, filter, opacity, transformOrigin: "left bottom" }}
        className={`inline-block will-change-transform ${accent ? "italic text-coral" : ""}`}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function WordCurtain({
  text,
  className = "",
  accentWords = [],
  offset = ["start 0.92", "start 0.35"],
}: {
  text: string;
  className?: string;
  accentWords?: string[];
  offset?: [string, string];
}) {
  const reduce = useReducedMotion();
  const { ref, progress, small } = useProgress(offset, ["start 0.99", "start 0.55"]);
  const words = text.split(" ").filter(Boolean);

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={`flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((w, i) => {
        const slice = (small ? 0.42 : 0.62) / Math.max(words.length, 1);
        const start = i * slice;
        return (
          <CurtainWord
            key={`${w}-${i}`}
            word={w}
            progress={progress}
            start={start}
            end={start + slice + 0.34}
            accent={accentWords.includes(w.replace(/[^\w']/g, ""))}
          />
        );
      })}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Parallax — layered depth on scroll.                              */
/* ------------------------------------------------------------------ */

export function Parallax({
  children,
  distance = 80,
  scaleTo,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  scaleTo?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const { ref, progress, small } = useProgress(["start end", "end start"]);
  const y = useSpring(
    useTransform(progress, [0, 1], [distance, -distance]),
    small ? phoneSpring : softSpring,
  );
  const scale = useTransform(progress, [0, 0.5, 1], [1, scaleTo ?? 1, 1]);
  const rotate = useTransform(progress, [0, 0.5, 1], small ? [2.5, 0, -2.5] : [0, 0, 0]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, scale, rotate }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. TiltIn — element arrives lying back in 3D space, stands up as it */
/*    reaches reading position, and leans away as it leaves.           */
/* ------------------------------------------------------------------ */

export function TiltIn({
  children,
  className = "",
  from = 14,
  side = "none",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  side?: "left" | "right" | "none";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const { ref, progress, small } = useProgress(
    ["start 0.98", "end 0.15"],
    ["start 1", "end 0.45"],
  );
  const shift = Math.min((small ? 0.28 : 0.35) + delay, 0.6);
  const tilt = small ? from * 1.35 : from;
  const swing = small ? 18 : 12;

  const rotateX = useTransform(progress, [0, shift, 0.85, 1], [tilt, 0, 0, -tilt * 0.5]);
  const rotateY = useTransform(
    progress,
    [0, shift, 1],
    side === "none" ? [0, 0, 0] : side === "left" ? [-swing, 0, swing / 2] : [swing, 0, -swing / 2],
  );
  const scale = useTransform(progress, [0, shift, 0.9, 1], [small ? 0.88 : 0.93, 1, 1, 0.97]);
  const opacity = useTransform(progress, [0, shift * 0.7, 1], [0, 1, 1]);
  const blurPx = useTransform(progress, [0, shift], [small ? 4 : 8, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className} style={{ perspective: "1200px" }}>
      <motion.div
        style={{ rotateX, rotateY, scale, opacity, filter, transformStyle: "preserve-3d" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. CurtainWipe — image / panel unveiled by a moving ink curtain.     */
/* ------------------------------------------------------------------ */

export function CurtainWipe({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left";
}) {
  const reduce = useReducedMotion();
  const { ref, progress, small } = useProgress(
    ["start 0.95", "start 0.35"],
    ["start 1", "start 0.6"],
  );
  const p = useSpring(progress, small ? phoneSpring : { stiffness: 120, damping: 26 });
  const cut = useTransform(p, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(${direction === "up" ? cut : 0}% ${direction === "left" ? cut : 0}% 0% 0%)`;
  const scale = useTransform(p, [0, 1], [1.14, 1]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ clipPath }}>
        <motion.div style={{ scale }} className="will-change-transform">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. VelocityFlex — the whole block subtly bends with scroll speed,    */
/*    like paper resisting the motion of the page.                      */
/* ------------------------------------------------------------------ */

export function VelocityFlex({
  children,
  className = "",
  intensity = 1,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const reduce = useReducedMotion();
  const small = useIsSmall();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, small ? { stiffness: 260, damping: 38 } : { stiffness: 220, damping: 45 });
  const range = small ? 1400 : 2500;
  const amount = (small ? 4.5 : 3) * intensity;
  const skewY = useTransform(smooth, [-range, 0, range], [amount, 0, -amount], {
    clamp: true,
  });
  const scaleY = useTransform(smooth, [-range, 0, range], [small ? 1.035 : 1.02, 1, small ? 1.035 : 1.02], { clamp: true });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div style={{ skewY, scaleY }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. StickyScale — pinned hero that recedes into the page as you go.   */
/* ------------------------------------------------------------------ */

export function StickyRecede({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const blurPx = useTransform(scrollYProgress, [0.4, 1], [0, 6]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale, opacity, y, filter, transformOrigin: "top center" }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 7. CountRule — hairline that draws itself across as you read.        */
/* ------------------------------------------------------------------ */

export function DrawRule({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const { ref, progress } = useProgress(["start 0.95", "start 0.5"]);
  const scaleX = useSpring(progress, { stiffness: 110, damping: 24 });

  if (reduce) return <div ref={ref} className={`h-px w-full bg-ink/15 ${className}`} />;

  return (
    <div ref={ref} className={`h-px w-full overflow-hidden ${className}`}>
      <motion.div
        style={{ scaleX, transformOrigin: "left center" }}
        className="h-px w-full bg-gradient-to-r from-gold via-coral to-teal"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 8. WordRise — on-mount word-by-word rise (for above-the-fold copy). */
/* ------------------------------------------------------------------ */

export function WordRise({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.055,
  accentWords = [],
  inView = false,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  accentWords?: string[];
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ").filter(Boolean);

  if (reduce) return <p className={className}>{text}</p>;

  return (
    <motion.p
      className={`flex flex-wrap gap-x-[0.3em] ${className}`}
      initial="hidden"
      {...(inView
        ? { whileInView: "shown", viewport: { once: false, amount: 0.2, margin: "0px 0px -8% 0px" } }
        : { animate: "shown" })}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.14em] align-bottom">
          <motion.span
            className={`inline-block will-change-transform ${wordClassName} ${
              accentWords.includes(w.replace(/[^\w']/g, "")) ? "italic text-coral" : ""
            }`}
            variants={{
              hidden: { y: "110%", rotate: 6, opacity: 0, filter: "blur(6px)" },
              shown: { y: "0%", rotate: 0, opacity: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left bottom" }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}
