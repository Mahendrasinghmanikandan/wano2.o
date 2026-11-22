import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import { PrimaryButton } from "@/app/component/Buttons";
import { getFaqSectionImage, IMAGE_HELPER } from "@/app/helper/imageHelper";
import { FAQ_SECTIONS } from "@/app/helper/faqData";
import { Meteors } from "@/components/ui/meteors";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import RestHero from "@/app/component/RestHero";

const FaqPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-secondary-color via-primary-color to-[#f4efe9]" />

      <RestHero
        subtitle="Frequently Asked Questions"
        title="Frequently Asked Questions"
        description="Wano Projects is an engineering-driven design and construction company. This FAQ explains our services, workflow, pricing approach, warranty support, and how we handle residential, renovation, and project coordination work across Tamil Nadu."
        image={IMAGE_HELPER.FAQ_HERO}
      />

      <section className="w-full rounded-2xl bg-secondary-color px-6 py-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-5">
            <TextAnimate
              as="h2"
              by="word"
              animation="slideUp"
              className="text-2xl md:text-3xl font-bold uppercase text-primary-color"
              once
            >
              Browse by Topic
            </TextAnimate>
            <p className="text-primary-color/75 leading-loose max-w-4xl">
              Jump to any section below. Click a question to expand the answer.
            </p>
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {FAQ_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group rounded-xl border border-primary-color/20 bg-white px-4 py-3 transition-colors duration-300 hover:border-primary-color/40 hover:bg-[#f4efe9]"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-color/60">
                    Section {section.number}
                  </p>
                  <p className="pt-1 font-semibold text-primary-color leading-snug group-hover:text-[#2f3f11]">
                    {section.title}
                  </p>
                </a>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-4">
            <SectionImage
              src={IMAGE_HELPER.FAQ_BROWSE_TOPICS}
              alt="Browse FAQ topics"
              wrapperClassName="h-48 lg:h-full min-h-[200px] rounded-2xl border border-primary-color/15"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {FAQ_SECTIONS.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-full scroll-mt-6 rounded-2xl p-4 md:p-6 ${
            sectionIndex % 2 === 0
              ? "bg-gradient-to-br from-secondary-color via-[#f5f1e7] to-white"
              : "bg-gradient-to-br from-[#f4efe9] to-white"
          }`}
        >
          <div className="rounded-2xl border border-primary-color/10 bg-white p-4 md:p-6">
            <div className="flex flex-col gap-4 pb-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-2 md:flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
                  Section {section.number}
                </p>
                <TextAnimate
                  as="h2"
                  by="word"
                  animation="slideUp"
                  className="text-2xl md:text-3xl font-bold text-primary-color uppercase"
                  once
                >
                  {section.title}
                </TextAnimate>
              </div>
              <SectionImage
                src={getFaqSectionImage(section.id)}
                alt={section.title}
                wrapperClassName="h-28 w-full md:h-24 md:w-40 shrink-0 rounded-xl border border-primary-color/15"
                className="object-cover"
              />
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-color/25 bg-secondary-color text-sm font-semibold text-primary-color md:ml-2">
                {section.number}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {section.items.map((item) => (
                <details
                  key={item.id}
                  className="group w-full rounded-xl border border-primary-color/20 bg-secondary-color/40 px-5 py-4 open:border-primary-color/40 open:bg-white open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base md:text-lg text-primary-color font-semibold leading-snug marker:content-none">
                    <span className="flex gap-3">
                      <span className="shrink-0 text-primary-color/50 tabular-nums">
                        {item.id}.
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-color/25 text-primary-color transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pt-4 pl-8 leading-loose text-primary-color/90">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color text-white px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="relative z-10 flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            Still have questions?
          </p>
          <h2 className="text-3xl font-bold uppercase leading-tight">
            Talk to Wano Projects
          </h2>
          <p className="leading-loose text-white/90">
            If your question is not covered here, we can review your requirement
            and guide you to the right service or project sequence.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <Link href="/contact">
            <PrimaryButton text="Contact Wano Projects" />
          </Link>
        </div>
        <Meteors number={10} />
      </section>
    </div>
  );
};

export default FaqPage;
