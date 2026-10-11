"use client";

import Link from "next/link";
import { displayFont, outfit } from "@/config/font.config";
import { home, site } from "@/content/site";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://luxesource.com/wp-content/uploads/2026/05/LX_California71_HOM_Magni_06.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/10" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Hero Content */}
      <div className="section-pad relative z-10 w-full py-32">
        <div className="max-w-2xl">
          <p
            className={`mb-5 text-sm tracking-[0.3em] text-accent uppercase sm:text-lg ${outfit.className}`}
          >
            {site.name}
          </p>

          <h1
            className={`text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-7xl ${displayFont.className}`}
          >
            {home.heroTitle}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Thoughtfully designed spaces. Timeless architecture.
            Exceptional living experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className={`rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition hover:bg-accent-soft ${outfit.className}`}
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className={`rounded-sm border border-white/50 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10 ${outfit.className}`}
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Label */}
      <div className="absolute right-0 bottom-6 left-0 z-10 section-pad">
        <p className="text-xs tracking-[0.2em] text-white/70 uppercase">
          Architecture · Design · Construction
        </p>
      </div>
    </section>
  );
}