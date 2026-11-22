"use client";

import { FadeIn, SectionHeading } from "@/components/ui/Motion";
import MediaImage from "@/components/ui/MediaImage";
import { displayFont, outfit } from "@/config/font.config";
import { aboutPage, gallery } from "@/content/site";

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

      <section className="section-pad border-t border-line bg-surface/40 py-24">
        <FadeIn>
          <SectionHeading
            title={aboutPage.different.heading}
            body={aboutPage.different.intro}
          />
        </FadeIn>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {aboutPage.different.points.map((point, i) => (
            <FadeIn key={point} delay={i * 0.04}>
              <li className="flex gap-4 border border-line bg-background/50 px-6 py-5 transition hover:border-accent/40">
                <span className={`text-accent ${outfit.className}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-concrete">{point}</span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {gallery.slice(0, 3).map((item, i) => (
            <FadeIn key={item.src} delay={i * 0.05}>
              <MediaImage
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                frameClassName="aspect-[4/3]"
                hover={(["wipe", "iris", "glow-frame"] as const)[i % 3]}
                caption={item.caption}
              />
            </FadeIn>
          ))}
        </div>
      </section>
    </article>
  );
}
