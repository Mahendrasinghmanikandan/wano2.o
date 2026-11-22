import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import { PrimaryButton } from "@/app/component/Buttons";
import { getWhyWanoProblemImage, IMAGE_HELPER } from "@/app/helper/imageHelper";
import { Meteors } from "@/components/ui/meteors";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import { CoolMode } from "@/components/ui/cool-mode";
import RestHero from "@/app/component/RestHero";

const PROBLEMS = [
  {
    number: "01",
    title: "Lack of Coordination",
    problem:
      "In many projects, architecture, structural design, and services are handled separately. This creates confusion, miscommunication, and repeated changes during construction.",
    solution:
      "Wano Projects brings all disciplines — architecture, structural engineering, MEP, and construction — under one coordinated system. This improves communication, reduces conflicts, and keeps the project aligned from start to finish.",
  },
  {
    number: "02",
    title: "Skipping Important Stages",
    problem:
      "To reduce initial cost or save time, important stages like soil investigation, structural planning, or service coordination are often skipped. This leads to structural risk, poor planning, and costly corrections later.",
    solution:
      "We follow a complete workflow for every project. No critical stage is skipped. This ensures better planning, safety, and long-term performance.",
    workflow: [
      "Architectural Planning",
      "Soil Investigation",
      "Structural Design",
      "MEP Coordination",
      "Construction Execution",
    ],
  },
  {
    number: "03",
    title: "Cost Overruns",
    problem:
      "Cost overruns do not happen suddenly. They build slowly due to missed details, design changes, rework, and poor coordination.",
    solution: "We control cost through:",
    solutionBullets: [
      "Proper planning before execution",
      "Early coordination between disciplines",
      "Stage-wise verification",
      "Reduced rework",
    ],
    solutionOutro:
      "This helps maintain better control over budget throughout the project.",
  },
  {
    number: "04",
    title: "Stressful Project Management",
    problem:
      "Clients often have to coordinate with multiple engineers, contractors, and consultants. This creates stress, confusion, and lack of clarity.",
    solution:
      "Wano Projects provides all services under one system. Clients get a single point of coordination, making the process simpler, clearer, and more manageable.",
  },
  {
    number: "05",
    title: "Limited Access to Proper Engineering",
    problem:
      "In many cases, proper engineering practices are only followed in large or high-budget projects. Smaller or residential projects often do not receive the same level of technical attention.",
    solution:
      "Wano Projects was created to make real engineering accessible for all projects. We deliver structured planning and technical discipline at practical local market budgets.",
  },
];

const BEST_FOR_ITEMS = [
  "A properly planned building process",
  "Engineering-led decisions",
  "Better control over budget and quality",
  "A complete workflow without shortcuts",
  "Professional support for new construction or renovation",
];

const WhyWano = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-[#f4efe9] via-primary-color to-secondary-color" />
      <RestHero
        subtitle="Why Wano Projects"
        title="Why Wano Projects"
        description="Because we build through a complete engineering workflow, use stage-wise checklist control, manage cost carefully, and deliver practical local-market solutions without skipping essential steps."
        image={IMAGE_HELPER.WHY_WANO_HERO}
      />

      <section className="w-full flex flex-col gap-5">
        {PROBLEMS.map((item, index) => (
          <article
            key={item.number}
            className="group relative w-full overflow-hidden rounded-2xl border border-primary-color/10 bg-white"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] md:text-[9rem] font-bold leading-none text-primary-color/[0.04] group-hover:text-primary-color/[0.07] transition-colors duration-500"
            >
              {item.number}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
              <div
                className={`relative px-6 py-8 md:px-10 md:py-10 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-color/20" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary-color/55">
                  Problem {item.number}
                </p>
                <h2 className="pt-2 text-2xl md:text-3xl font-bold uppercase text-primary-color leading-tight">
                  {item.title}
                </h2>
                <p className="pt-4 leading-loose text-primary-color/85">
                  {item.problem}
                </p>
                <SectionImage
                  src={getWhyWanoProblemImage(item.number)}
                  alt={item.title}
                  wrapperClassName="mt-6 h-40 md:h-44 rounded-xl border border-primary-color/10"
                  className="object-cover"
                />
              </div>

              <div
                className={`relative bg-primary-color text-white px-6 py-8 md:px-10 md:py-10 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary-color" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-secondary-color/80">
                  Our Solution
                </p>
                <p className="pt-4 leading-loose text-white/90">
                  {item.solution}
                </p>

                {item.workflow && (
                  <div className="pt-6 flex flex-wrap gap-2">
                    {item.workflow.map((step, stepIndex) => (
                      <span
                        key={step}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm leading-snug"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-color text-primary-color text-xs font-semibold">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </span>
                    ))}
                  </div>
                )}

                {item.solutionBullets && (
                  <ul className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.solutionBullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm leading-relaxed"
                      >
                        <span className="mt-0.5 text-secondary-color">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {item.solutionOutro && (
                  <p className="pt-4 leading-loose text-white/90">
                    {item.solutionOutro}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color px-6 py-12 md:px-12 md:py-14 text-white text-center">
        <TextAnimate
          as="p"
          by="line"
          animation="blurInUp"
          className="relative z-10 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium"
          once
        >
          {
            "We believe that better planning leads to better buildings.\nBy solving these common problems through a structured approach, Wano Projects delivers projects that are safer, more controlled, and easier to manage."
          }
        </TextAnimate>
        <Meteors number={10} />
      </section>

      <section className="w-full rounded-2xl overflow-hidden border border-primary-color/15">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 relative bg-primary-color text-white px-6 py-10 md:px-10 flex flex-col justify-center gap-3 overflow-hidden">
            <SectionImage
              src={IMAGE_HELPER.WHY_WANO_BEST_FOR}
              alt="Who Wano Projects is best for"
              wrapperClassName="absolute inset-0"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-primary-color/75" aria-hidden />
            <div className="relative z-10 flex flex-col gap-3">
              <TextAnimate
                as="h2"
                by="word"
                animation="slideUp"
                className="text-3xl md:text-4xl font-bold uppercase leading-tight"
                once
              >
                Who Wano Projects Is Best For
              </TextAnimate>
              <p className="leading-loose text-white/85 text-sm md:text-base">
                We are especially suited for homeowners and project owners who
                want a practical and disciplined approach instead of a rushed
                one.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 bg-secondary-color px-6 py-10 md:px-10">
            <p className="text-sm uppercase tracking-[0.18em] text-primary-color/60">
              Wano Projects is a good fit for clients who want:
            </p>
            <ul className="pt-6 flex flex-col gap-3">
              {BEST_FOR_ITEMS.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-primary-color/15 bg-white px-5 py-4 shadow-sm transition-transform duration-300 hover:-translate-x-1"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-color text-secondary-color text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed text-primary-color pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <CoolMode options={{ particle: "🧱", size: 12, speedHorz: 6 }}>
                <Link href="/contact">
                  <PrimaryButton text="Contact Wano Projects" />
                </Link>
              </CoolMode>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWano;
