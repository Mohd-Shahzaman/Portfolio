import { motion, useScroll, useSpring, useTransform } from "motion/react";

/** Ink rule that fills with a spring as the page is read, plus a travelling glow. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.35 });
  const left = useTransform(scaleX, (v) => `${v * 100}%`);
  const opacity = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], [0, 1, 1, 0]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px]" aria-hidden="true">
      <motion.div
        style={{ scaleX, transformOrigin: "left center", opacity }}
        className="h-[2px] w-full bg-gradient-to-r from-gold via-coral to-teal"
      />
      <motion.span
        style={{ left, opacity }}
        className="absolute top-0 -ml-4 h-[2px] w-8 bg-ink/70 blur-[3px]"
      />
    </div>
  );
}
