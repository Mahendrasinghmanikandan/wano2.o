"use client";

import Link from "next/link";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";
import MediaImage from "@/components/ui/MediaImage";
import { outfit } from "@/config/font.config";
import type { ServicePage } from "@/content/site";

export default function ServicePageView({ service }: { service: ServicePage }) {
  return (
    <article>
      <section className="section-pad relative min-h-[70vh] overflow-hidden border-b border-line pb-16 pt-32">
        <div className="absolute inset-0 -z-10">
          <MediaImage
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            frameClassName="absolute inset-0 h-full min-h-full w-full border-0"
            hover="kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <FadeIn>
          <p className={`text-xs tracking-[0.28em] text-accent uppercase ${outfit.className}`}>
            {service.title}
          </p>
          <h1 className="heading-font mt-4 max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {service.heroHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-concrete">{service.heroSubheading}</p>
        </FadeIn>
      </section>

      <section className="section-pad grid items-start gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {service.shortContent.map((p, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.1}>
          <MediaImage
            src={service.image}
            alt={`${service.title} visual`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            frameClassName="aspect-[4/3]"
            hover="wipe"
            caption={service.title}
          />
        </FadeIn>
      </section>

      {service.listItems ? (
        <section className="section-pad border-y border-line bg-surface/50 py-20">
          <FadeIn>
            <SectionHeading title={service.listHeading ?? "What we offer"} />
          </FadeIn>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.listItems.map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <li className="border border-line bg-background/40 px-5 py-4 text-sm text-concrete transition hover:border-accent/40 hover:bg-surface">
                  <span className="mr-3 text-accent">▸</span>
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </section>
      ) : null}

      {service.workflow ? (
        <section className="section-pad py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Workflow"
              title="Stage-wise construction control"
              body="Each step supports the next — so nothing critical is skipped."
            />
          </FadeIn>
          <ol className="mt-14 grid gap-4 lg:grid-cols-2">
            {service.workflow.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.04}>
                <li className="flex gap-5 border border-line bg-surface p-6 transition hover:border-accent/35">
                  <span className={`text-2xl font-semibold text-accent ${outfit.className}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={`text-lg font-medium ${outfit.className}`}>{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </section>
      ) : null}

      {service.workflowSimple ? (
        <section className="section-pad py-16">
          <FadeIn>
            <SectionHeading eyebrow="Simple Workflow" title="Clear sequence" />
            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-concrete">
              {service.workflowSimple}
            </p>
          </FadeIn>
        </section>
      ) : null}

      {service.extraSections?.map((section) => (
        <section key={section.heading} className="section-pad border-t border-line py-16">
          <FadeIn>
            <SectionHeading title={section.heading} />
            {Array.isArray(section.body) ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {section.body.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-5 py-4 text-sm text-concrete transition hover:border-accent/35"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                {section.body}
              </p>
            )}
          </FadeIn>
        </section>
      ))}

      {service.downloadNote ? (
        <section className="section-pad py-16">
          <FadeIn>
            <div className="border border-dashed border-accent/40 bg-accent/5 p-8">
              <h2 className={`text-2xl font-semibold ${outfit.className}`}>Sample Drawings</h2>
              <p className="mt-3 max-w-2xl text-muted">{service.downloadNote}</p>
              <a
                href="/samples/structural-sample.pdf"
                className={`mt-6 inline-block rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-on-accent ${outfit.className}`}
              >
                Sample Drawing PDF Download
              </a>
            </div>
          </FadeIn>
        </section>
      ) : null}

      {service.warranty ? (
        <section className="section-pad py-16">
          <FadeIn>
            <SectionHeading title="Warranty" />
            <ul className="mt-8 space-y-3">
              {service.warranty.map((w) => (
                <li key={w} className="text-lg text-concrete">
                  {w}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>
      ) : null}

      <section className="section-pad border-t border-line py-20">
        <FadeIn>
          <p className="max-w-2xl text-xl text-concrete">
            {service.cta ?? "Ready to plan your next project? Contact Wano Projects."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={`rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-on-accent ${outfit.className}`}
            >
              Contact Wano Projects
            </Link>
            <Link
              href="/services"
              className="rounded-sm border border-line px-7 py-3 text-sm text-foreground"
            >
              All Services
            </Link>
          </div>
        </FadeIn>
      </section>
    </article>
  );
}
