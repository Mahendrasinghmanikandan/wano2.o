"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { HouseView } from "@/components/3d/ConstructionCanvas";
import { useTheme } from "@/components/theme/ThemeProvider";
import { displayFont, outfit } from "@/config/font.config";
import { home, site } from "@/content/site";

const ConstructionCanvas = dynamic(
  () => import("@/components/3d/ConstructionCanvas"),
  { ssr: false, loading: () => <div className="h-full w-full bg-surface" /> },
);

const views: { id: HouseView; label: string }[] = [
  { id: "orbit", label: "360°" },
  { id: "front", label: "Front" },
  { id: "side", label: "Side" },
  { id: "aerial", label: "Aerial" },
];

export default function HomeHero() {
  const { accentHex, mode } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [view, setView] = useState<HouseView>("orbit");
  const [hint, setHint] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.55, 0.75], [1, 1, 0.35, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);
  const captionOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.85], [0, 1, 1]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      scrollProgress.current = v;
      if (v > 0.08) setHint(false);
    });
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[240vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 site-grain" />
        <div className="absolute inset-0">
          <ConstructionCanvas
            accent={accentHex}
            mode={mode}
            view={view}
            scrollProgress={scrollProgress}
            interactive={view === "orbit"}
          />
        </div>

        {/* soft vignette — keep house visible like Apple product pages */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent md:from-background/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="section-pad pointer-events-none relative z-10 flex h-full flex-col justify-end pb-28 pt-28 md:justify-center md:pb-24"
        >
          <div className="pointer-events-auto max-w-xl">
            <p
              className={`mb-4 text-sm tracking-[0.28em] text-accent uppercase ${outfit.className}`}
            >
              {site.name}
            </p>
            <h1
              className={`text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl ${displayFont.className}`}
            >
              {home.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-concrete sm:text-lg">
              Drag to inspect the house. Scroll to orbit around the build.
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

        <motion.p
          style={{ opacity: captionOpacity }}
          className={`section-pad absolute bottom-24 left-0 z-10 max-w-md text-sm text-muted md:bottom-28 ${outfit.className}`}
        >
          Structure, glass, and living space — planned as one system before construction begins.
        </motion.p>

        {/* view switcher */}
        <div className="section-pad absolute inset-x-0 bottom-6 z-20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2 rounded-full border border-line bg-background/70 p-1 backdrop-blur-md">
            {views.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs tracking-wide transition ${
                  view === item.id
                    ? "bg-accent text-on-accent"
                    : "text-concrete hover:text-foreground"
                } ${outfit.className}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {hint ? (
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              Drag · Scroll to explore
            </p>
          ) : (
            <p className="text-xs tracking-[0.18em] text-muted uppercase">3D building view</p>
          )}
        </div>
      </div>
    </section>
  );
}
