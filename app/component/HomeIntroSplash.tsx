"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HardHat, Hammer, Building2 } from "lucide-react";

const SPLASH_DURATION_MS = 2000;

const BUILD_STAGES = [
  "Site survey",
  "Foundation",
  "Structure",
  "MEP coordination",
  "Handover ready",
];

const HomeIntroSplash = ({ children }: { children: React.ReactNode }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / SPLASH_DURATION_MS) * 100);
      setProgress(pct);
      setStageIndex(
        Math.min(
          BUILD_STAGES.length - 1,
          Math.floor((elapsed / SPLASH_DURATION_MS) * BUILD_STAGES.length),
        ),
      );
      if (elapsed < SPLASH_DURATION_MS) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="home-splash"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-color text-secondary-color"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            aria-live="polite"
            aria-busy="true"
            role="status"
            aria-label="Loading WANO Projects home page"
          >
            <div className="home-splash-grid absolute inset-0 opacity-30" />
            <div className="home-splash-tape absolute top-0 left-0 right-0 h-3" />

            <div className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-lg w-full">
              <div className="flex items-center gap-3 text-secondary-color/80">
                <HardHat className="h-5 w-5 animate-pulse" aria-hidden />
                <span className="text-xs uppercase tracking-[0.35em] font-medium">
                  WANO Projects
                </span>
                <Hammer className="h-5 w-5 home-splash-hammer" aria-hidden />
              </div>

              <div className="relative w-56 h-56 md:w-64 md:h-64">
                <motion.div
                  className="absolute inset-x-6 bottom-0 flex flex-col-reverse gap-1.5"
                  initial="hidden"
                  animate="visible"
                >
                  {[0, 1, 2, 3, 4].map((floor) => (
                    <motion.div
                      key={floor}
                      className="h-5 rounded-sm border border-secondary-color/40 bg-secondary-color/15 home-splash-brick"
                      custom={floor}
                      variants={{
                        hidden: { scaleY: 0, opacity: 0, originY: 1 },
                        visible: (i: number) => ({
                          scaleY: 1,
                          opacity: 1,
                          transition: {
                            delay: 0.35 + i * 0.55,
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }),
                      }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  className="absolute -top-2 right-4 text-secondary-color/70"
                  initial={{ rotate: -28, opacity: 0 }}
                  animate={{ rotate: [-28, -8, -22], opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 4.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  aria-hidden
                >
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    className="home-splash-crane"
                  >
                    <line
                      x1="8"
                      y1="64"
                      x2="8"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <line
                      x1="8"
                      y1="14"
                      x2="58"
                      y2="28"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="58"
                      y1="28"
                      x2="58"
                      y2="44"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <rect
                      x="52"
                      y="44"
                      width="12"
                      height="8"
                      fill="currentColor"
                      opacity="0.5"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{
                    delay: 1.1,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                >
                  <div className="relative rounded-2xl bg-white/95 p-4 shadow-[0_0_40px_rgba(237,233,219,0.35)] ring-2 ring-secondary-color/50">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        delay: 1.8,
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="/logo.png"
                        alt="WANO Projects logo"
                        width={120}
                        height={120}
                        className="w-24 h-24 md:w-28 md:h-28 object-contain"
                        priority
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="text-center space-y-2">
                <motion.p
                  className="text-lg md:text-xl font-semibold tracking-wide flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Building2 className="h-5 w-5 shrink-0" aria-hidden />
                  Building your experience
                </motion.p>
                <motion.p
                  key={stageIndex}
                  className="text-sm text-secondary-color/75 uppercase tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {BUILD_STAGES[stageIndex]}
                </motion.p>
              </div>

              <div className="w-full max-w-xs space-y-2">
                <div className="h-2 w-full rounded-full bg-secondary-color/20 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-secondary-color home-splash-progress"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-center text-xs text-secondary-color/60 tabular-nums">
                  {Math.round(progress)}%
                </p>
              </div>
            </div>

            <div className="home-splash-tape absolute bottom-0 left-0 right-0 h-3 rotate-180" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          opacity: showSplash ? 0 : 1,
          filter: showSplash ? "blur(6px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-hidden={showSplash}
      >
        {children}
      </motion.div>
    </>
  );
};

export default HomeIntroSplash;
