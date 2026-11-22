"use client";

import Link from "next/link";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";
import MediaImage from "@/components/ui/MediaImage";
import { outfit } from "@/config/font.config";
import { services } from "@/content/site";

export default function ServicesIndexView() {
  return (
    <>
      <section className="section-pad relative overflow-hidden border-b border-line pb-16 pt-32">
        <div className="absolute inset-0 -z-10 site-grain" />
        <FadeIn>
          <p className={`text-xs tracking-[0.28em] text-accent uppercase ${outfit.className}`}>
            Services
          </p>
          <h1 className="heading-font mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Engineering under one roof
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Choose a discipline — every service connects into the same planning-first workflow.
          </p>
        </FadeIn>
      </section>

      <section className="section-pad py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.04}>
              <Link
                href={`/services/${service.slug}`}
                className="group block overflow-hidden border border-line bg-surface transition hover:border-accent/45"
              >
                <MediaImage
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  frameClassName="aspect-[16/9] border-0"
                  hover={
                    (["tilt", "duotone", "iris", "glow-frame", "blueprint", "slide-up", "wipe", "kenburns"] as const)[
                      i % 8
                    ]
                  }
                />
                <div className="p-7">
                  <span className="text-xs text-steel">0{i + 1}</span>
                  <h2
                    className={`mt-3 text-2xl font-semibold transition group-hover:text-accent ${outfit.className}`}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.heroSubheading}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad pb-24">
        <FadeIn>
          <SectionHeading
            title="Not sure where to start?"
            body="Begin with architectural planning or talk to us — we’ll guide you to the right sequence."
          />
          <Link
            href="/contact"
            className={`mt-8 inline-block rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-on-accent ${outfit.className}`}
          >
            Contact Wano Projects
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
