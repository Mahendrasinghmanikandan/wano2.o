"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { HouseView, TimeOfDay } from "@/components/3d/ConstructionCanvas";
import { useTheme } from "@/components/theme/ThemeProvider";
import { displayFont, outfit } from "@/config/font.config";
import { home, site } from "@/content/site";

const ConstructionCanvas = dynamic(
  () => import("@/components/3d/ConstructionCanvas"),
  { ssr: false, loading: () => <div className="h-full w-full bg-surface" /> },
);

const views: { id: HouseView; label: string }[] = [
  { id: "orbit", label: "360°" },
  { id: "entry", label: "Entry" },
  { id: "living", label: "Living" },
  { id: "garden", label: "Garden" },
  { id: "terrace", label: "Terrace" },
  { id: "aerial", label: "Site" },
];

const chapters = [
  { until: 0.22, kicker: "01 — Site", copy: "Plot, approach, and light — resolved before a wall goes up." },
  { until: 0.48, kicker: "02 — Structure", copy: "Loads, stairs, and spans engineered as one system." },
  { until: 0.72, kicker: "03 — Envelope", copy: "Glass, shade, and air forming the living skin of the house." },
  { until: 1, kicker: "04 — Living", copy: "Garden, terrace, and rooms finished as a single home." },
];

export default function HomeHero() {
  const { accentHex, mode } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [view, setView] = useState<HouseView>("orbit");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(mode === "light" ? "day" : "dusk");
  const [hint, setHint] = useState(true);
  const [chapter, setChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.18, 0.5, 0.72], [1, 1, 0.28, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -48]);
  const captionOpacity = useTransform(scrollYProgress, [0.28, 0.48, 0.88], [0, 1, 1]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      scrollProgress.current = v;
      if (v > 0.06) setHint(false);
      const next = chapters.findIndex((item) => v <= item.until);
      setChapter(next === -1 ? chapters.length - 1 : next);
    });
  }, [scrollYProgress]);

  const activeChapter = chapters[chapter];

  return (
    <section ref={sectionRef} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 site-grain" />
        <div className="absolute inset-0">
          <ConstructionCanvas
            accent={accentHex}
            mode={mode}
            view={view}
            timeOfDay={timeOfDay}
            scrollProgress={scrollProgress}
            interactive
            onSelectView={setView}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/75 via-background/20 to-transparent md:from-background/60 md:via-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="section-pad pointer-events-none relative z-10 flex h-full flex-col justify-end pb-32 pt-28 md:justify-center md:pb-24"
        >
          <div className="pointer-events-auto max-w-xl">
            <p
              className={`mb-4 text-lg tracking-[0.28em] text-accent uppercase ${outfit.className}`}
            >
              {site.name}
            </p>
            <h1
              className={`text-4xl leading-[1.05] font-bold text-foreground sm:text-5xl lg:text-7xl ${displayFont.className}`}
            >
              {home.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-concrete sm:text-lg">
              Drag to orbit the villa. Scroll to walk the site. Pin a room from the house.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className={`rounded-sm bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-on-accent transition hover:bg-accent-soft ${outfit.className}`}
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className={`rounded-sm border border-line px-7 py-3 text-sm font-medium text-foreground transition hover:border-accent/50 ${outfit.className}`}
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: captionOpacity }}
          className={`section-pad absolute bottom-24 left-0 z-10 max-w-md md:bottom-28 ${outfit.className}`}
        >
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
            {activeChapter.kicker}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{activeChapter.copy}</p>
        </motion.div>

        <div className="section-pad absolute inset-x-0 bottom-5 z-20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-1 rounded-full border border-line bg-background/70 p-1 backdrop-blur-md">
              {views.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id)}
                  className={`rounded-full px-3 py-1.5 text-xs tracking-wide transition ${
                    view === item.id
                      ? "bg-accent text-on-accent"
                      : "text-concrete hover:text-foreground"
                  } ${outfit.className}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex gap-1 rounded-full border border-line bg-background/70 p-1 backdrop-blur-md">
              {(["day", "dusk"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTimeOfDay(item)}
                  className={`rounded-full px-3 py-1.5 text-xs tracking-wide capitalize transition ${
                    timeOfDay === item
                      ? "bg-accent text-on-accent"
                      : "text-concrete hover:text-foreground"
                  } ${outfit.className}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            {hint ? "Drag · Scroll to explore" : "Cinematic site walk"}
          </p>
        </div>
      </div>
    </section>
  );
}
