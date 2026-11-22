import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import { PrimaryButton, SecondaryButton } from "@/app/component/Buttons";
import { getProjectImage } from "@/app/helper/imageHelper";
import {
  PROJECTS_FOOTER_LINE,
  type ProjectPageData,
} from "@/app/helper/projectsData";
import { Meteors } from "@/components/ui/meteors";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import { Check } from "lucide-react";

type ProjectPageLayoutProps = {
  project: ProjectPageData;
};

const CLIENT_REQUIREMENT_ITEMS = [
  "Efficient use of a highly congested site",
  "Structural safety on weak soil",
  "Integrated planning for a swimming pool",
  "Lift provision",
  "Proper service routing",
  "Better air circulation",
  "Controlled project cost",
];

const ProjectPageLayout = ({ project }: ProjectPageLayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-[#f4efe9] via-primary-color to-secondary-color" />

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color px-6 py-12 md:px-10 md:py-16 text-white">
        <SectionImage
          src={getProjectImage(project.slug)}
          alt={project.title}
          wrapperClassName="absolute inset-0"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-primary-color/75" aria-hidden />
        <div className="relative z-10 flex flex-col gap-4 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em]">
              {project.projectType}
            </span>
            <span className="text-sm text-secondary-color/90">
              {project.location}
            </span>
          </div>
          <TextAnimate
            as="h1"
            by="line"
            animation="blurInUp"
            className="text-3xl md:text-5xl font-bold uppercase leading-tight"
            once
          >
            {project.title}
          </TextAnimate>
          <p className="leading-loose text-white/90 max-w-4xl text-lg">
            {project.shortDescription}
          </p>
          {project.budgetNote && (
            <p className="inline-flex w-fit rounded-lg border border-secondary-color/40 bg-secondary-color/20 px-4 py-2 text-sm font-medium text-secondary-color">
              {project.budgetNote}
            </p>
          )}
        </div>
        <Meteors number={12} />
      </section>

      <section className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {project.highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-primary-color/15 bg-white px-4 py-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="text-3xl" aria-hidden>
              {item.icon}
            </span>
            <p className="pt-3 text-sm font-semibold text-primary-color leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section className="w-full rounded-2xl border border-primary-color/10 bg-white overflow-hidden">
        <SectionImage
          src={getProjectImage(project.slug)}
          alt={`${project.title} overview`}
          wrapperClassName="h-48 md:h-56"
          className="object-cover"
        />
        <div className="p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
          Project Overview
        </p>
        <div className="pt-4 flex flex-col gap-4">
          {project.overview.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-loose text-primary-color/90 text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article className="rounded-2xl bg-secondary-color border border-primary-color/15 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
            Client Requirement
          </p>
          <div className="pt-4 flex flex-col gap-4">
            {project.clientRequirement.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-loose text-primary-color/90"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="pt-4 flex flex-col gap-2">
            {CLIENT_REQUIREMENT_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg bg-white/80 px-3 py-2 text-sm leading-relaxed text-primary-color"
              >
                <Check className="h-4 w-4 shrink-0 mt-0.5 text-primary-color" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl bg-primary-color text-white p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            Main Challenges
          </p>
          <ul className="pt-6 flex flex-col gap-2">
            {project.mainChallenges.map((challenge, index) => (
              <li
                key={challenge}
                className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary-color text-primary-color text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-white/90 text-sm pt-0.5">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="w-full rounded-2xl bg-gradient-to-br from-[#f4efe9] via-secondary-color to-white p-4 md:p-6">
        <div className="rounded-2xl border border-primary-color/10 bg-white p-6 md:p-8">
          <TextAnimate
            as="h2"
            by="word"
            animation="slideUp"
            className="text-2xl md:text-3xl font-bold uppercase text-primary-color"
            once
          >
            Wano Projects Solution
          </TextAnimate>
          <p className="pt-3 leading-loose text-primary-color/80 max-w-3xl">
            To handle the project successfully, Wano Projects followed a
            disciplined engineering approach.
          </p>
          <div className="pt-8 flex flex-col gap-4">
            {project.solutions.map((solution, index) => (
              <article
                key={solution.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 rounded-xl border border-primary-color/15 bg-secondary-color/40 p-5 md:p-6"
              >
                <div className="md:col-span-1 flex md:justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-color text-secondary-color font-bold">
                    {index + 1}
                  </span>
                </div>
                <div className="md:col-span-11">
                  <h3 className="text-lg font-bold text-primary-color uppercase leading-tight">
                    {solution.title}
                  </h3>
                  <p className="pt-2 leading-relaxed text-primary-color/85">
                    {solution.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full rounded-2xl border border-primary-color/15 bg-white px-6 py-8 md:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
          Key Engineering Features
        </p>
        <ul className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {project.engineeringFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 rounded-xl border border-primary-color/15 bg-secondary-color/50 px-4 py-3 text-sm leading-relaxed text-primary-color"
            >
              <span className="text-primary-color/50 shrink-0">◆</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article className="lg:col-span-2 rounded-2xl bg-primary-color text-white p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            Project Outcome
          </p>
          <div className="pt-4 flex flex-col gap-4">
            {project.outcome.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-loose text-white/90"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl border-2 border-primary-color/20 bg-secondary-color p-6 md:p-8 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
            Warranty
          </p>
          <div className="rounded-xl bg-white px-5 py-4 border border-primary-color/15">
            <p className="text-2xl font-bold text-primary-color">15</p>
            <p className="pt-1 text-sm font-semibold text-primary-color">
              {project.warranty.structural}
            </p>
          </div>
          <div className="rounded-xl bg-primary-color text-white px-5 py-4">
            <p className="text-2xl font-bold text-secondary-color">5</p>
            <p className="pt-1 text-sm font-semibold">
              {project.warranty.workmanship}
            </p>
          </div>
        </aside>
      </section>

      <section className="w-full rounded-2xl px-6 py-8 md:px-10 bg-[#f4efe9] border border-primary-color/10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
          Why This Project Matters
        </p>
        {project.whyItMatters.map((paragraph) => (
          <p
            key={paragraph}
            className="pt-4 text-lg leading-loose text-primary-color/90 max-w-4xl font-medium"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color text-white px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="relative z-10 flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            Planning a similar project?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
            Discuss your site conditions with Wano Projects
          </h2>
          <p className="leading-loose text-white/90">
            Congested plots, weak soil, or complex residential requirements —
            we can review your project and recommend the right engineering
            approach.
          </p>
        </div>
        <div className="relative z-10 shrink-0 flex flex-wrap gap-3">
          <Link href="/projects">
            <SecondaryButton text="All Projects" />
          </Link>
          <Link href="/contact">
            <PrimaryButton text="Contact Wano Projects" />
          </Link>
        </div>
        <Meteors number={8} />
      </section>

      <p className="text-center text-sm leading-relaxed text-primary-color/70 px-4 pb-2">
        {PROJECTS_FOOTER_LINE}
      </p>
    </div>
  );
};

export default ProjectPageLayout;
