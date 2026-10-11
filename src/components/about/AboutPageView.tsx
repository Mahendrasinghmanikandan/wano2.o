"use client";

import { FadeIn, SectionHeading } from "@/components/ui/Motion";
import MediaImage from "@/components/ui/MediaImage";
import { displayFont, outfit } from "@/config/font.config";
import { aboutPage, gallery } from "@/content/site";
import { TeamSection } from "../home/HomeSections";

export default function AboutPageView() {
  return (
    <article>
      <section className="section-pad relative min-h-[60vh] overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 -z-10">
          <MediaImage
            src={aboutPage.image}
            alt="Wano Projects architecture"
            fill
            priority
            sizes="100vw"
            frameClassName="absolute inset-0 h-full min-h-full w-full border-0"
            hover="blueprint"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
        <FadeIn>
          <p className={`text-xs tracking-[0.28em] text-accent uppercase ${outfit.className}`}>
            {aboutPage.title}
          </p>
          <h1
            className={`mt-6 max-w-5xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl ${displayFont.className}`}
          >
            {aboutPage.heroLine}
          </h1>
           <h1
            className={`mt-6 max-w-5xl text-base text-accent ${outfit.className}`}
          >
           Since 2024, Wano Projects has been delivering thoughtfully designed spaces and well-engineered buildings  
          </h1>
        </FadeIn>
      </section>

      <section className="section-pad grid items-start gap-12 py-20 lg:grid-cols-2">
        <div>
          <FadeIn>
            <SectionHeading title={aboutPage.whyStarted.heading} />
          </FadeIn>
          <div className="mt-10 space-y-6">
            {aboutPage.whyStarted.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p
                  className={
                    i === 1
                      ? `text-xl font-medium text-foreground sm:text-2xl ${outfit.className}`
                      : "text-base leading-relaxed text-muted sm:text-lg"
                  }
                >
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn delay={0.1}>
          <MediaImage
            src={gallery[1].src}
            alt={gallery[1].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            frameClassName="aspect-[4/5]"
            hover="tilt"
            caption={gallery[1].caption}
          />
        </FadeIn>
      </section>

      <TeamSection />
      
    </article>
  );
}
