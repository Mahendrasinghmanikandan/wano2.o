"use client";

import Link from "next/link";
import { Aos, FadeIn, SectionHeading } from "@/components/ui/Motion";
import MediaImage from "@/components/ui/MediaImage";
import { outfit } from "@/config/font.config";
import { gallery, home, servicesNav } from "@/content/site";

export function BelowHeroCopy() {
  return (
    <section className="section-pad border-y border-line bg-surface py-16">
      <Aos direction="up">
        <p className="max-w-4xl text-xl leading-relaxed text-concrete sm:text-2xl">
          {home.heroSub}
        </p>
      </Aos>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section id="about" className="section-pad py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About" title={home.aboutHeading} />
          <div className="mt-10 space-y-6">
            {home.aboutBody.map((p, i) => (
              <Aos key={i} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </Aos>
            ))}
          </div>
          <Aos delay={0.15} direction="up" className="mt-10">
            <Link
              href="/about"
              className={`text-sm font-medium tracking-wide text-accent hover:text-accent-soft ${outfit.className}`}
            >
              Read the full story →
            </Link>
          </Aos>
        </div>
        <Aos direction="down" delay={0.1}>
          <MediaImage
            src={gallery[0].src}
            alt={gallery[0].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            frameClassName="aspect-[4/5]"
            hover="tilt"
            caption={gallery[0].caption}
          />
        </Aos>
      </div>
    </section>
  );
}

export function ArchitectureGallery() {
  return (
    <section className="section-pad overflow-hidden py-24">
      <SectionHeading
        eyebrow="Architecture"
        title="Spaces built with clarity"
        body="Real building atmosphere — homes, villas, and renovations shaped by planning and structure."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <Aos key={item.src} direction={i % 2 === 0 ? "up" : "down"} delay={i * 0.05}>
            <MediaImage
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              frameClassName="aspect-[4/3]"
              hover={
                (["kenburns", "wipe", "duotone", "iris", "glow-frame", "blueprint"] as const)[
                  i % 6
                ]
              }
              caption={item.caption}
            />
          </Aos>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 blueprint-grid opacity-30" />
      <SectionHeading
        eyebrow="Selected Work"
        title={home.projectsHeading}
        body="Real projects across Tamil Nadu — planned, engineered, and delivered with discipline."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {home.projects.map((project, i) => (
          <Aos key={project.title} delay={i * 0.06} direction={i % 2 === 0 ? "up" : "down"}>
            <article className="overflow-hidden border border-line bg-surface transition hover:border-accent/40">
              <MediaImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                frameClassName="aspect-[16/10] border-0"
                hover={(["tilt", "slide-up", "glow-frame", "wipe"] as const)[i % 4]}
                caption={project.location}
              />
              <div className="p-8">
                <p className="text-xs tracking-[0.22em] text-steel uppercase">
                  {project.location}
                </p>
                <h3 className={`mt-3 text-2xl font-semibold text-foreground ${outfit.className}`}>
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {project.detail}
                </p>
              </div>
            </article>
          </Aos>
        ))}
      </div>
    </section>
  );
}

export function WarrantySection() {
  return (
    <section className="section-pad py-24">
      <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionHeading
          eyebrow="Responsibility & Warranty"
          title={home.warrantyHeading}
          body={home.warrantyBody}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {home.warranties.map((w, i) => (
            <Aos key={w.label} delay={0.1 + i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
              <div className="border border-line bg-surface-2 px-6 py-7 transition hover:border-accent/40">
                <p className="text-xs tracking-[0.2em] text-muted uppercase">{w.label}</p>
                <p className={`mt-2 text-3xl font-semibold text-accent ${outfit.className}`}>
                  {w.value}
                </p>
              </div>
            </Aos>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="section-pad border-y border-line bg-surface/80 py-24">
      <SectionHeading
        eyebrow="Services"
        title="One structured workflow"
        body="From planning to handover — architecture, structure, MEP, construction, and more under one roof."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {servicesNav.map((s, i) => (
          <Aos key={s.href} delay={i * 0.04} direction={i % 2 === 0 ? "up" : "down"}>
            <Link
              href={s.href}
              className="group block overflow-hidden border border-line bg-background transition hover:border-accent/50"
            >
              <MediaImage
                src={s.image}
                alt={s.label}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                frameClassName="aspect-[4/3] border-0"
                hover={
                  (["iris", "duotone", "blueprint", "kenburns", "wipe", "glow-frame", "tilt", "slide-up"] as const)[
                    i % 8
                  ]
                }
              />
              <div className="flex items-center justify-between px-5 py-4">
                <span className={`text-lg font-medium text-foreground ${outfit.className}`}>
                  {s.label}
                </span>
                <span className="text-xs text-steel transition group-hover:text-accent">
                  0{i + 1}
                </span>
              </div>
            </Link>
          </Aos>
        ))}
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="section-pad relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-steel/10" />
      <FadeIn direction="up">
        <SectionHeading title={home.closingHeading} body={home.closingBody} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/faq"
            className={`rounded-sm border border-line px-7 py-3 text-sm font-medium text-foreground ${outfit.className}`}
          >
            Read FAQ
          </Link>
          <Link
            href="/contact"
            className={`rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-on-accent ${outfit.className}`}
          >
            Contact Wano Projects
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
