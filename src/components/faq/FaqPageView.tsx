"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/ui/Motion";
import { outfit } from "@/config/font.config";
import { faqIntro, faqSections } from "@/content/site";

export default function FaqPageView() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <article>
      <section className="section-pad relative overflow-hidden border-b border-line pb-16 pt-32">
        <div className="absolute inset-0 -z-10 site-grain" />
        <FadeIn>
          <p className={`text-xs tracking-[0.28em] text-accent uppercase ${outfit.className}`}>
            FAQ
          </p>
          <h1 className="heading-font mt-4 max-w-4xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {faqIntro}
          </p>
        </FadeIn>
      </section>

      <div className="section-pad space-y-16 py-20">
        {faqSections.map((section, si) => (
          <section key={section.title} id={section.title.toLowerCase().replace(/\s+/g, "-")}>
            <FadeIn>
              <SectionHeading eyebrow={`Section ${si + 1}`} title={section.title} />
            </FadeIn>
            <div className="mt-8 divide-y divide-line border border-line">
              {section.items.map((item, qi) => {
                const key = `${si}-${qi}`;
                const open = openKey === key;
                return (
                  <div key={key} className="faq-item bg-surface/30">
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                      onClick={() => setOpenKey(open ? null : key)}
                      aria-expanded={open}
                    >
                      <span className={`text-base font-medium text-foreground ${outfit.className}`}>
                        {item.q}
                      </span>
                      <span className="text-accent">{open ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
