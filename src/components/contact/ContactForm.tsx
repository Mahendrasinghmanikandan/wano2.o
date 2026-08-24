"use client";

import { type FormEvent, useState } from "react";
import { Aos, SectionHeading } from "@/components/ui/Motion";
import { outfit } from "@/config/font.config";
import { services, site } from "@/content/site";

const fieldClass =
  "w-full border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent disabled:opacity-60";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("mobile") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: site.email,
          subject: `Enquiry from ${name}`,
          name,
          email,
          phone,
          service,
          message,
        }),
      });
      const payload = (await res.json().catch(() => ({}))) as { message?: string };

      if (!res.ok) {
        throw new Error(payload.message || "Could not send enquiry.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : `Could not send. Please write to ${site.email}.`,
      );
    }
  }

  const sending = status === "sending";

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
              disabled={sending}
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
              disabled={sending}
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
            disabled={sending}
          />
        </label>

        <label className="block space-y-2">
          <span className={`text-xs tracking-[0.18em] text-muted uppercase ${outfit.className}`}>
            Selected Service
          </span>
          <select
            required
            name="service"
            defaultValue=""
            className={fieldClass}
            disabled={sending}
          >
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
            disabled={sending}
          />
        </label>

        <button
          type="submit"
          disabled={sending}
          className={`rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-70 ${outfit.className}`}
        >
          {sending ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" ? (
          <p className="text-sm text-muted" aria-live="polite">
            Thanks — your enquiry has been sent. We’ll get back to you shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-muted" aria-live="polite">
            {errorMessage} If this continues, write to{" "}
            <a href={`mailto:${site.email}`} className="text-accent hover:text-accent-soft">
              {site.email}
            </a>
            .
          </p>
        ) : null}
      </form>
    </Aos>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.6-1.3h1.4V3h-2.4C12.4 3 11 4.6 11 6.9v1.6H9v2.6h2V21h3.5v-9.9h2.3l.4-2.6h-2.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8zm9.2 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z" />
    </svg>
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
                Phone
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {site.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="text-lg text-foreground hover:text-accent"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-line bg-surface p-6 transition hover:border-accent/40">
              <p className={`text-xs tracking-[0.2em] text-accent uppercase ${outfit.className}`}>
                Social
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {site.social.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-line px-3 py-2 text-sm text-foreground transition hover:border-accent/50 hover:text-accent"
                  >
                    {item.label === "Facebook" ? <FacebookIcon /> : <InstagramIcon />}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {site.branches.map((branch) => (
              <div
                key={branch.name}
                className="border border-line bg-surface p-6 transition hover:border-accent/40"
              >
                <p className={`text-xs tracking-[0.2em] text-accent uppercase ${outfit.className}`}>
                  {branch.name}
                </p>
                <p className="mt-2 text-lg text-foreground">{branch.city}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{branch.address}</p>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-3 inline-block text-sm text-accent hover:text-accent-soft ${outfit.className}`}
                >
                  Open in Map →
                </a>
              </div>
            ))}
          </div>
        </Aos>
        <ContactForm />
      </section>

      <section className="section-pad pb-24">
        <Aos direction="up">
          <div className="mb-8">
            <SectionHeading
              eyebrow="Map"
              title="Find us in Chennai and Sivaganga"
              body="Visit either branch, or open the full map for directions."
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {site.branches.map((branch) => (
              <div key={branch.name} className="space-y-3">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p
                      className={`text-xs tracking-[0.2em] text-accent uppercase ${outfit.className}`}
                    >
                      {branch.name}
                    </p>
                    <p className="mt-1 text-lg text-foreground">{branch.city}</p>
                  </div>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm text-accent hover:text-accent-soft ${outfit.className}`}
                  >
                    Open in Map →
                  </a>
                </div>
                <div className="overflow-hidden border border-line bg-surface shadow-sm transition hover:border-accent/35">
                  <iframe
                    title={`${branch.name} — ${branch.city}`}
                    src={branch.mapEmbed}
                    className="h-[320px] w-full grayscale-[20%] transition duration-500 hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </Aos>
      </section>
    </article>
  );
}
