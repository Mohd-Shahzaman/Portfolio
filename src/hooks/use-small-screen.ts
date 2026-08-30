import { useEffect, useState } from "react";

/**
 * Hydration-safe small-screen / touch detection used to tune the motion
 * language on phones (earlier triggers, punchier travel, cheaper filters).
 */
export function useIsSmall(query = "(max-width: 767px)") {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setSmall(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return small;
}

export function useIsTouch() {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return touch;
}
