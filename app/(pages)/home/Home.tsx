import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import {
  getHomeConstructionPhaseImage,
  getHomeServiceImage,
  IMAGE_HELPER,
} from "@/app/helper/imageHelper";
import {
  getServiceHref,
  SERVICES as SITE_SERVICES,
} from "@/app/helper/servicesData";
import Hero from "./Hero";
import { Meteors } from "@/components/ui/meteors";
import LensImagesDisplay from "@/app/component/LensImagesDisplay";
import { PrimaryButton, SecondaryButton } from "@/app/component/Buttons";
import { TextAnimate } from "@/components/ui/text-animate";
import ContactForm from "@/app/component/ContactForm";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CoolMode } from "@/components/ui/cool-mode";

const HOME_SERVICES = [
  {
    title: "Architectural Planning",
    slug: "architectural-planning",
    content:
      "Functional layouts designed for practical living and efficient space usage.",
    image: IMAGE_HELPER.HOME_SERVICE_ARCHITECTURAL_PLANNING,
  },
  {
    title: "Soil Investigation",
    slug: "soil-investigation",
    content: "Soil testing to support safe foundation design.",
    image: IMAGE_HELPER.HOME_SERVICE_SOIL_INVESTIGATION,
  },
  {
    title: "Structural Design",
    slug: "structural-design",
    content:
      "Engineering-based structural planning focused on safety and durability.",
    image: IMAGE_HELPER.HOME_SERVICE_STRUCTURAL_DESIGN,
  },
  {
    title: "MEP Design Coordination",
    slug: "mep-design-coordination",
    content:
      "Electrical, plumbing, and service planning to reduce site conflicts.",
    image: IMAGE_HELPER.HOME_SERVICE_MEP,
  },
  {
    title: "Construction",
    slug: "construction-services",
    content: "Structured execution with stage-wise monitoring and supervision.",
    image: IMAGE_HELPER.HOME_SERVICE_CONSTRUCTION,
  },
  {
    title: "Renovation",
    slug: "renovation-services",
    content:
      "Upgrading and strengthening existing buildings through careful planning.",
    image: IMAGE_HELPER.HOME_SERVICE_RENOVATION,
  },
];

const WORKFLOW_STEPS = [
  "Architectural Planning",
  "Soil Investigation",
  "Structural Design",
  "MEP Coordination",
  "Estimation & Cost-Benefit Analysis",
  "Cost Overrun Protection",
  "Construction Execution",
  "Checklist Verification",
  "Final Handover",
];

const FAQ_ITEMS = [
  {
    question: "How We Control Cost Overruns",
    intro:
      "Cost overruns usually do not happen suddenly. They develop through missed details, rework, and repeated changes during construction. At Wano Projects, cost control begins before execution.",
    lead: "We reduce risk by:",
    bullets: [
      "Completing design stages before construction",
      "Coordinating structural and service layouts early",
      "Reducing avoidable changes",
      "Reviewing work stage by stage",
    ],
    outro: "This helps maintain better control over project cost and timeline.",
  },
  {
    question: "Checklist-Based Execution at Every Stage",
    intro:
      "Each stage of construction is verified using structured checklists.",
    lead: "These checklists help confirm:",
    bullets: [
      "Material quality",
      "Work accuracy",
      "Structural alignment",
      "Service coordination",
      "Stage completion correctness",
    ],
    outro:
      "Small issues identified early are corrected immediately, preventing larger problems later.",
  },
];

const CONSTRUCTION_PHASES = [
  {
    phase: "Site & Soil Readiness",
    detail: "Survey and soil verification before any structural commitment.",
    completion: "98%",
    image: IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_SITE,
  },
  {
    phase: "Structure & Frame Build",
    detail:
      "Controlled sequencing of footing, columns, slab work, and curing windows.",
    completion: "92%",
    image: IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_STRUCTURE,
  },
  {
    phase: "MEP & Civil Coordination",
    detail:
      "Electrical, plumbing, and service lines aligned early to avoid rework.",
    completion: "89%",
    image: IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_MEP,
  },
  {
    phase: "Finishing & Handover Checks",
    detail:
      "Quality checklist, snag closure, and final readiness sign-off before handover.",
    completion: "96%",
    image: IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_HANDOVER,
  },
];

const DIFFERENTIATORS = [
  "Complete workflow from planning to handover",
  "No skipped engineering stages",
  "Checklist-based execution at every stage",
  "Early coordination of architectural, structural, and service design",
  "Cost-overrun control through proper planning",
  "Practical local-market pricing",
  "Structured responsibility and warranty support",
];

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-secondary-color via-primary-color to-[#f4efe9]" />
      <Hero />
      <div className="w-full relative overflow-hidden h-[30vh] min-h-[220px] bg-primary-color flex flex-col items-center justify-center">
        <SectionImage
          src={IMAGE_HELPER.HOME_ENGINEERING_BANNER}
          alt="Engineering-led construction workflow"
          wrapperClassName="absolute inset-0"
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-primary-color/55" aria-hidden />
        <TextAnimate
          as="h1"
          by="line"
          animation="blurInUp"
          className="relative z-10 text-4xl text-white font-normal text-center leading-loose px-4"
          once
        >
          {
            "Every project follows essential engineering\nstages without skipping critical process."
          }
        </TextAnimate>

        <Meteors number={10} />
      </div>
      <section className="w-full rounded-2xl bg-gradient-to-br from-secondary-color via-[#f4efe9] to-secondary-color p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <article className="relative overflow-hidden rounded-2xl border border-primary-color/15 bg-white p-6 md:p-8 shadow-sm">
              <div className="absolute top-0 left-0 h-1.5 w-40 bg-primary-color" />
              <TextAnimate
                as="h2"
                by="word"
                animation="blurInUp"
                className="text-3xl md:text-4xl font-bold uppercase text-primary-color leading-tight"
                once
              >
                Our Philosophy
              </TextAnimate>
              <p className="leading-loose text-primary-color/90 pt-4">
                Wano Projects believes that a building should be planned
                properly before it is built. Good construction is not only about
                appearance. It is about safety, usability, long-term
                performance, and disciplined execution.
              </p>
              <p className="leading-loose text-primary-color/90 pt-3">
                We follow an engineering-first approach where design, structure,
                services, and execution are coordinated from the beginning. This
                helps reduce confusion, avoids unnecessary changes later, and
                creates better project control.
              </p>
              <p className="leading-loose text-primary-color/90 pt-3">
                Our goal is simple: build in a way that is practical,
                technically sound, and responsible.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-primary-color/15 bg-primary-color p-6 md:p-8 text-white shadow-sm">
              <SectionImage
                src={IMAGE_HELPER.HOME_DIFFERENTIATORS}
                alt="Engineering-first building coordination"
                wrapperClassName="absolute inset-0"
                className="object-cover opacity-20"
              />
              <div
                className="absolute inset-0 bg-primary-color/75"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.22em] text-secondary-color/80">
                  Engineering-first
                </div>
                <TextAnimate
                  as="h2"
                  by="word"
                  animation="slideUp"
                  className="text-3xl md:text-4xl font-bold uppercase leading-tight"
                  once
                >
                  What Makes Wano Projects Different
                </TextAnimate>
                <p className="pt-3 text-white/85 leading-loose">
                  Our key strengths are:
                </p>
                <ul className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {DIFFERENTIATORS.map((point, index) => (
                    <li
                      key={point}
                      className="group rounded-xl border border-white/20 bg-white/10 px-4 py-3 transition-all duration-300 hover:bg-white/15 hover:border-secondary-color"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-color text-primary-color text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="leading-loose pt-4 text-white/90">
                  Many projects become costly because important steps are
                  skipped in the beginning. We reduce that risk by planning
                  carefully before execution starts.
                </p>
              </div>
            </article>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-6 h-full overflow-hidden rounded-2xl border border-primary-color/20 bg-white p-2 shadow-sm">
              <div className="relative h-full rounded-xl overflow-hidden">
                <LensImagesDisplay
                  img={IMAGE_HELPER.HOME_PHILOSOPHY_SIDE}
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full rounded-2xl px-10 py-10 bg-gradient-to-br from-primary-color via-primary-color to-[#1f2f40] text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-6">
          <TextAnimate
            as="h2"
            by="word"
            animation="blurInUp"
            className="text-4xl font-bold tracking-wide uppercase"
            once
          >
            Our Services
          </TextAnimate>
          <p className="leading-loose max-w-4xl text-white/90">
            Wano Projects provides integrated services covering planning,
            design, and construction stages.
          </p>
          <Link
            href="/services"
            className="inline-flex w-fit text-sm font-semibold text-secondary-color underline-offset-4 hover:underline"
          >
            Explore all specialised services →
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOME_SERVICES.map((service, index) => {
              const cardClassName =
                "group rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary-color/60 hover:bg-white/15";

              const cardContent = (
                <>
                  <div className="h-[300px] overflow-hidden">
                    <SectionImage
                      src={service.image}
                      alt={service.title}
                      wrapperClassName="h-full"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 pt-2">
                    Service {index + 1}
                  </p>
                  <h3 className="text-xl font-semibold pt-1">
                    {service.title}
                  </h3>
                  <p className="leading-loose text-white/85 pt-2 group-hover:text-white">
                    {service.content}
                  </p>
                  {service.slug && (
                    <p className="pt-3 text-sm font-medium text-secondary-color">
                      View details →
                    </p>
                  )}
                </>
              );

              return service.slug ? (
                <div key={service.title} className={cardClassName}>
                  {cardContent}
                </div>
              ) : (
                <div key={service.title} className={cardClassName}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
        <Meteors number={12} />
      </section>
      <section className="w-full bg-secondary-color rounded-2xl px-10 py-10 flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2 className="text-4xl font-bold leading-tight uppercase text-primary-color">
              Built with Responsibility and Warranty Support
            </h2>
            <p className="leading-loose text-primary-color">
              Wano Projects provides structured warranty support to ensure
              confidence and accountability after project completion.
            </p>
            <p className="leading-loose text-primary-color">
              Our warranty framework includes:
            </p>
          </div>
          <div className="lg:col-span-5">
            <SectionImage
              src={IMAGE_HELPER.HOME_WARRANTY}
              alt="Warranty and long-term building responsibility"
              wrapperClassName="h-56 md:h-full min-h-[220px] rounded-2xl border border-primary-color/20 shadow-sm"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary-color/30 bg-white px-6 py-6">
            <h3 className="text-2xl text-primary-color font-semibold">
              Structural Warranty - 15 Years
            </h3>
            <p className="leading-loose text-primary-color pt-2">
              Structural components are designed and executed with long-term
              performance in mind. Structural warranty support reflects our
              commitment to engineering discipline and construction
              responsibility.
            </p>
          </div>
          <div className="rounded-xl border border-primary-color/30 bg-white px-6 py-6">
            <h3 className="text-2xl text-primary-color font-semibold">
              Workmanship Warranty - 1 Year
            </h3>
            <p className="leading-loose text-primary-color pt-2">
              Execution-related workmanship is supported for one year after
              project completion, covering issues related to construction
              quality and finishing performance.
            </p>
          </div>
        </div>
        <p className="leading-loose text-primary-color">
          This structured warranty system reflects our focus on delivering
          reliable buildings with long-term responsibility.
        </p>
      </section>

      <section className="w-full relative overflow-hidden bg-primary-color rounded-2xl px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <TextAnimate
              as="h2"
              by="word"
              animation="slideUp"
              className="text-3xl md:text-4xl font-bold leading-loose text-white"
              once
            >
              Our Standard Workflow for Every Project
            </TextAnimate>
            <p className="leading-loose text-white">
              Every Wano Projects building follows a clear sequence:
            </p>
            <ol className="relative flex flex-col gap-3 pl-2 md:pl-4">
              {WORKFLOW_STEPS.map((step, index) => (
                <li
                  key={step}
                  className={`group relative rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-secondary-color hover:bg-white/10 ${
                    index % 2 === 0 ? "md:ml-0" : "md:ml-12"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {index !== WORKFLOW_STEPS.length - 1 && (
                      <span className="absolute left-5 top-[52px] h-[calc(100%-20px)] w-px bg-gradient-to-b from-secondary-color/90 to-white/10" />
                    )}
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-color text-primary-color font-semibold shadow-[0_0_0_4px_rgba(244,239,233,0.15)] group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                    <span className="h-px w-6 bg-secondary-color/80" />
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-secondary-color/85">
                        Stage {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white font-medium tracking-wide">
                        {step}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <p className="leading-loose text-white">
              This system helps maintain clarity, reduce rework, and improve
              coordination between design and execution.
            </p>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-6 self-start">
            <SectionImage
              src={IMAGE_HELPER.HOME_WORKFLOW}
              alt="Standard project workflow from planning to handover"
              wrapperClassName="h-64 lg:h-[min(520px,70vh)] rounded-2xl border border-white/20"
              className="object-cover"
            />
          </div>
        </div>
        <Meteors number={12} />
      </section>
      <section className="w-full rounded-2xl px-6 py-10 md:px-10 bg-secondary-color text-primary-color flex flex-col gap-6">
        <TextAnimate
          as="h2"
          by="word"
          animation="slideUp"
          className="text-3xl md:text-4xl font-bold uppercase leading-tight"
          once
        >
          Construction Progress Intelligence
        </TextAnimate>
        <p className="leading-loose max-w-4xl">
          Every major project stage is reviewed like a live build board so teams
          can spot delays early, protect budget, and keep execution disciplined.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {CONSTRUCTION_PHASES.map((stage, index) => (
            <div
              key={stage.phase}
              className="group overflow-hidden rounded-xl border border-primary-color/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-[150px] overflow-hidden">
                <SectionImage
                  src={stage.image}
                  alt={stage.phase}
                  wrapperClassName="h-full"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{stage.phase}</h3>
                  <span className="text-sm font-semibold text-primary-color/75 group-hover:text-primary-color">
                    {stage.completion}
                  </span>
                </div>
                <p className="leading-loose text-primary-color/80 pt-2">
                  {stage.detail}
                </p>
                <div className="pt-4">
                  <div className="h-2 w-full rounded-full bg-primary-color/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary-color transition-all duration-700"
                      style={{ width: stage.completion }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full rounded-2xl px-6 py-10 md:px-10 bg-gradient-to-br from-[#f4efe9] to-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <SectionImage
              src={IMAGE_HELPER.HOME_FAQ}
              alt="Frequently asked questions about Wano Projects"
              wrapperClassName="h-56 lg:h-full min-h-[220px] rounded-2xl border border-primary-color/15 shadow-sm"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-8 flex flex-col gap-4 order-1 lg:order-2">
            <h2 className="text-4xl font-bold uppercase text-primary-color">
              FAQ
            </h2>
            <p className="text-primary-color/70 leading-loose">
              Click any question to expand and read details.
            </p>
            <div className="flex flex-col gap-4">
              {FAQ_ITEMS.map((item, index) => (
                <details
                  key={item.question}
                  className="group w-full rounded-xl border border-primary-color/20 bg-white px-6 py-5 open:border-primary-color/40 open:shadow-sm"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl md:text-2xl text-primary-color font-semibold leading-snug marker:content-none">
                    {item.question}
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-color/25 text-primary-color transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="pt-4 text-primary-color">
                    <p className="leading-loose">{item.intro}</p>
                    <p className="leading-loose pt-2">{item.lead}</p>
                    <ul className="leading-loose list-disc pl-5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <p className="leading-loose pt-2">{item.outro}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <section className="min-h-[50vh] relative overflow-hidden rounded-2xl px-6 py-10 md:px-10 bg-primary-color text-white flex flex-col justify-center gap-5">
          <SectionImage
            src={IMAGE_HELPER.HOME_CTA}
            alt="Planning a new home or renovation project"
            wrapperClassName="absolute inset-0"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary-color/70" aria-hidden />
          <div className="relative z-10 flex flex-col justify-center gap-5">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
              Planning a New Home or Renovation Project?
            </h2>
            <p className="leading-loose text-white/90 max-w-4xl">
              If you are looking for a structured and disciplined building
              process, Wano Projects is ready to support your project from
              planning to completion.
            </p>
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <CoolMode options={{ particle: "🧱", size: 12, speedHorz: 6 }}>
                <Link href="/contact">
                  <PrimaryButton text="Contact Wano Projects" />
                </Link>
              </CoolMode>
              <CoolMode options={{ particle: "🏗️", size: 12, speedUp: 18 }}>
                <Link href="/contact">
                  <SecondaryButton text="Schedule a Consultation" />
                </Link>
              </CoolMode>
            </div>
          </div>
          <Meteors number={12} />
        </section>
        <div className="min-h-[50vh] bg-secondary-color rounded-2xl p-4 md:p-8 flex items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
