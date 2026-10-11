"use client";

import Link from "next/link";
import { Aos, FadeIn, SectionHeading } from "@/components/ui/Motion";
import MediaImage from "@/components/ui/MediaImage";
import MediaVideo from "@/components/ui/MediaVideo";
import { displayFont, outfit } from "@/config/font.config";
import {
  aboutPage,
  gallery,
  home,
  servicesNav,
  team,
  VIDEO_HELPER,
} from "@/content/site";

export function BelowHeroCopy() {
  return (
    <section className="section-pad border-y border-line bg-surface py-16">
      <Aos direction="up">
        <p className={`!text-6xl font-semibold text-center tracking-wide text-foreground ${displayFont.className}`}>
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
              <Aos
                key={i}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "up" : "down"}
              >
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
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
          <MediaVideo
            src={VIDEO_HELPER.ABOUT_PAGE}
            alt={gallery[0].alt}
            poster={gallery[0].src}
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
<section className="section-pad py-24">
  <FadeIn>
    <SectionHeading
      title={aboutPage.different.heading}
      body={aboutPage.different.intro}
    />
  </FadeIn>

  <div className="mt-14  max-w-4xl">
    {aboutPage.different.points.map((point, i) => (
      <FadeIn key={point} delay={i * 0.08}>
        <div className="group relative flex gap-6 border-b border-line py-7 transition-colors hover:border-accent/50 sm:gap-10">
          {/* Number */}
          <span
            className={`shrink-0 text-2xl font-light text-accent/70 transition-colors group-hover:text-accent sm:text-3xl ${outfit.className}`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* Content */}
          <div className="flex flex-1 items-center justify-between gap-4">
            <h3
              className={`text-lg font-medium text-foreground transition-colors group-hover:text-accent sm:text-xl ${outfit.className}`}
            >
              {point}
            </h3>
          </div>
        </div>
      </FadeIn>
    ))}
  </div>
</section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-pad relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 -z-10 blueprint-grid opacity-30" />
      <SectionHeading
        eyebrow="Selected Work"
        title={home.projectsHeading}
        body="Real projects across Tamil Nadu — planned, engineered, and delivered with discipline."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {home.projects.map((project, i) => (
          <Aos
            key={project.title}
            delay={i * 0.06}
            direction={i % 2 === 0 ? "up" : "down"}
          >
            <article className="overflow-hidden border border-line bg-surface transition hover:border-accent/40">
              <MediaImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                frameClassName="aspect-[16/10] border-0"
                hover={
                  "wipe"
                }
                caption={project.location}
              />
              <div className="p-8">
                <p className="text-xs tracking-[0.22em] text-steel uppercase">
                  {project.location}
                </p>
                <h3
                  className={`mt-3 text-2xl font-semibold text-foreground ${outfit.className}`}
                >
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
    <section className="relative overflow-hidden border-y border-line bg-surface py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%)]" />
      <div className="section-pad relative">
        <SectionHeading
          eyebrow="Responsibility & Warranty"
          title={home.warrantyHeading}
          body={home.warrantyBody}
        />
        <div className="my-12 grid gap-5 sm:grid-cols-2">
          {home.warranties.map((w, i) => (
            <Aos
              key={w.label}
              delay={0.1 + i * 0.08}
              direction={i % 2 === 0 ? "up" : "down"}
            >
              <article className="relative overflow-hidden border border-accent/35 bg-background px-7 py-8 shadow-[inset_4px_0_0_var(--accent)] transition hover:border-accent/70 hover:bg-surface-2 sm:px-9 sm:py-10">
                <p
                  className={`text-xs tracking-[0.28em] text-accent uppercase ${outfit.className}`}
                >
                  {w.label}
                </p>
                <p className="mt-4 flex items-end gap-3 text-foreground">
                  <span
                    className={`text-7xl leading-none sm:text-8xl ${displayFont.className}`}
                  >
                    {w.value}
                  </span>
                  <span
                    className={`mb-1.5 text-xl font-semibold tracking-wide text-accent sm:text-2xl ${outfit.className}`}
                  >
                    {w.unit}
                  </span>
                </p>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-concrete">
                  {w.detail}
                </p>
              </article>
            </Aos>
          ))}
        </div>
        <FadeIn direction="up">
        <SectionHeading title="" body={home.closingBody} />
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
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="section-pad bg-surface/60 py-24"
    >
      <SectionHeading
        eyebrow="People"
        title={home.teamHeading}
        body={home.teamBody}
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <Aos
            key={member.name}
            delay={i * 0.05}
            direction={i % 2 === 0 ? "up" : "down"}
          >
            <article className="flex h-full flex-col overflow-hidden border border-line bg-background transition hover:border-accent/40">
              <MediaImage
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                frameClassName="aspect-[4/5] border-0"
                hover="glow-frame"
              />
              <div className="flex flex-1 flex-col px-6 py-5">
                <p className="text-xs tracking-[0.22em] text-steel uppercase">
                  {member.role}
                </p>
                <h3
                  className={`mt-2 text-xl font-semibold text-foreground ${outfit.className}`}
                >
                  {member.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            </article>
          </Aos>
        ))}
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="section-pad  bg-surface/80 py-24">
      <SectionHeading
        eyebrow="Services"
        title="Our Services, Built Around a Clear Process"
        body="From planning to handover — architecture, structure, MEP, construction, and more under one roof."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {servicesNav.map((s, i) => (
          <Aos
            key={s.href}
            delay={i * 0.04}
            direction={i % 2 === 0 ? "up" : "down"}
          >
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
                hover={"duotone"}
              />
              <div className="flex items-center justify-between px-5 py-4">
                <span
                  className={`text-lg font-medium text-foreground ${outfit.className}`}
                >
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
