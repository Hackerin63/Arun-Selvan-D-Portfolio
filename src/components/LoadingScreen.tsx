import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const BOOT_LINES = [
  "Initializing portfolio...",
  "Loading skills...",
  "Loading projects...",
  "Loading experience...",
  "System ready.",
];

const SESSION_KEY = "portfolio-booted";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const reducedMotion = useReducedMotion();
  const alreadyBooted =
    typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1";

  const [visibleLines, setVisibleLines] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (alreadyBooted || reducedMotion) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onDone();
      return;
    }

    const stepDelay = 260;
    const timers: number[] = [];

    BOOT_LINES.forEach((_, i) => {
      timers.push(
        window.setTimeout(() => setVisibleLines(i + 1), stepDelay * i + 120)
      );
    });

    const totalTime = stepDelay * BOOT_LINES.length + 260;
    timers.push(
      window.setTimeout(() => {
        setLeaving(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }, totalTime)
    );
    timers.push(window.setTimeout(onDone, totalTime + 420));

    return () => timers.forEach((t) => window.clearTimeout(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (alreadyBooted || reducedMotion) return null;

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          <div className="w-[min(90vw,380px)] font-mono-label text-sm">
            <div className="mb-3 flex items-center gap-2 text-text-faint">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>arun@portfolio</span>
            </div>
            <div className="space-y-1.5">
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i < visibleLines ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={i === BOOT_LINES.length - 1 ? "text-accent" : "text-text-soft"}
                >
                  {i < visibleLines && <span className="mr-2 text-text-faint">$</span>}
                  {i < visibleLines && line}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: visibleLines / BOOT_LINES.length }}
              transition={{ duration: 0.25 }}
              style={{ transformOrigin: "left" }}
              className="mt-4 h-[2px] w-full bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
