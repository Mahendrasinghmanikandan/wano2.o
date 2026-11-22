"use client";

import { type FormEvent, useState } from "react";
import { Aos, SectionHeading } from "@/components/ui/Motion";
import MediaImage from "@/components/ui/MediaImage";
import { outfit } from "@/config/font.config";
import { services, site } from "@/content/site";

const fieldClass =
  "w-full border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const mobile = String(data.get("mobile") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Enquiry — ${service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Aos direction="up">
      <form onSubmit={onSubmit} className="space-y-5 border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block space-y-2">
            <span className={`text-xs tracking-[0.18em] text-muted uppercase ${outfit.className}`}>
              Name
            </span>
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              className={fieldClass}
            />
          </label>
          <label className="block space-y-2">
            <span className={`text-xs tracking-[0.18em] text-muted uppercase ${outfit.className}`}>
              Mobile
            </span>
            <input
              required
              name="mobile"
              type="tel"
              autoComplete="tel"
              placeholder="+91 XXXXX XXXXX"
              className={fieldClass}
            />
          </label>
        </div>

        <label className="block space-y-2">
          <span className={`text-xs tracking-[0.18em] text-muted uppercase ${outfit.className}`}>
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>

        <label className="block space-y-2">
          <span className={`text-xs tracking-[0.18em] text-muted uppercase ${outfit.className}`}>
            Selected Service
          </span>
          <select required name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </label>

        <label className="block space-y-2">
          <span className={`text-xs tracking-[0.18em] text-muted uppercase ${outfit.className}`}>
            Message
          </span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell us about your plot, timeline, or renovation need…"
            className={`${fieldClass} resize-y`}
          />
        </label>

        <button
          type="submit"
          className={`rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent-soft ${outfit.className}`}
        >
          Send Message
        </button>

        {submitted ? (
          <p className="text-sm text-muted">
            Opening your email app… If it does not open, write to {site.email}.
          </p>
        ) : null}
      </form>
    </Aos>
  );
}

export function ContactPageView() {
  return (
    <article>
      <section className="section-pad relative overflow-hidden border-b border-line pb-16 pt-32">
        <div className="absolute inset-0 -z-10 site-grain" />
        <SectionHeading
          eyebrow="Contact"
          title="Let’s plan your project the right way"
          body="Share your details and the service you need. We’ll respond with the next practical steps."
        />
      </section>

      <section className="section-pad grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <Aos direction="down">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted">
              One point of contact for architecture, structural design, MEP, construction, and
              renovation across Tamil Nadu.
            </p>
            <div className="border border-line bg-surface p-6 transition hover:border-accent/40">
              <p className={`text-xs tracking-[0.2em] text-accent uppercase ${outfit.className}`}>
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg text-foreground hover:text-accent"
              >
                {site.email}
              </a>
            </div>
            <div className="border border-line bg-surface p-6 transition hover:border-accent/40">
              <p className={`text-xs tracking-[0.2em] text-accent uppercase ${outfit.className}`}>
                Service area
              </p>
              <p className="mt-2 text-lg text-foreground">{site.location.label}</p>
            </div>
            <MediaImage
              src={site.location.cover}
              alt="Tamil Nadu service coverage"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              frameClassName="aspect-[16/10]"
              hover="glow-frame"
              caption="Projects across Tamil Nadu"
            />
          </div>
        </Aos>
        <ContactForm />
      </section>

      <section className="section-pad pb-24">
        <Aos direction="up">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <SectionHeading
              eyebrow="Map"
              title="Find us across Tamil Nadu"
              body="We support residential and renovation projects statewide with one coordinated workflow."
            />
            <a
              href={site.location.mapLink}
              target="_blank"
              rel="noreferrer"
              className={`text-sm text-accent hover:text-accent-soft ${outfit.className}`}
            >
              Open full map →
            </a>
          </div>
          <div className="overflow-hidden border border-line bg-surface shadow-sm transition hover:border-accent/35">
            <iframe
              title="Wano Projects service map — Tamil Nadu"
              src={site.location.mapEmbed}
              className="h-[380px] w-full grayscale-[20%] transition duration-500 hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Aos>
      </section>
    </article>
  );
}
