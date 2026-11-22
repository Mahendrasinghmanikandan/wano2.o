import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import { PrimaryButton } from "@/app/component/Buttons";
import { getServiceImage, IMAGE_HELPER } from "@/app/helper/imageHelper";
import {
  getServiceHref,
  SERVICES,
  SERVICE_FOOTER_LINE,
} from "@/app/helper/servicesData";
import { Meteors } from "@/components/ui/meteors";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import { ArrowRight } from "lucide-react";
import RestHero from "@/app/component/RestHero";

const SERVICE_GROUPS = [
  {
    label: "Planning & Design",
    slugs: [
      "architectural-planning",
      "structural-design",
      "mep-design-coordination",
    ],
    image: IMAGE_HELPER.SERVICE_ARCHITECTURAL_PLANNING,
  },
  {
    label: "Execution",
    slugs: ["construction-services", "renovation-services"],
    image: IMAGE_HELPER.SERVICE_CONSTRUCTION_SERVICES,
  },
  {
    label: "Advisory & Assessment",
    slugs: ["pmc", "structural-audit"],
    image: IMAGE_HELPER.SERVICE_PMC,
  },
];

const ServicesPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-[#f4efe9] via-primary-color to-secondary-color" />

      <RestHero
        subtitle="Our Services"
        title="Our Services"
        description="Our specialised services are designed to meet the unique needs of our clients. We offer a wide range of services to help you achieve your goals."
        image={IMAGE_HELPER.SERVICES_HERO}
      />

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color text-white px-6 py-8 md:px-10">
        <SectionImage
          src={IMAGE_HELPER.SERVICES_WORKFLOW_BANNER}
          alt="Connected planning and construction workflow"
          wrapperClassName="absolute inset-0"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-primary-color/70" aria-hidden />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            One Connected System
          </p>
          <p className="pt-3 leading-loose text-white/90 max-w-4xl">
            Every service below is part of one workflow — planning, structure,
            services, and execution stay coordinated so your project moves
            forward with fewer clashes, fewer surprises, and clearer
            responsibility.
          </p>
          <div className="pt-6 flex flex-wrap gap-2">
            {[
              "Architectural Planning",
              "Structural Design",
              "MEP Coordination",
              "Construction",
              "Renovation",
              "PMC",
              "Structural Audit",
            ].map((step, index) => (
              <span
                key={step}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-color text-primary-color text-xs font-semibold">
                  {index + 1}
                </span>
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      {SERVICE_GROUPS.map((group, groupIndex) => {
        const groupServices = SERVICES.filter((s) =>
          group.slugs.includes(s.slug),
        );

        return (
          <section
            key={group.label}
            className={`w-full rounded-2xl p-4 md:p-6 ${
              groupIndex % 2 === 0
                ? "bg-gradient-to-br from-secondary-color via-[#f5f1e7] to-white"
                : "bg-gradient-to-br from-[#f4efe9] to-white"
            }`}
          >
            <div className="rounded-2xl border border-primary-color/10 bg-white p-4 md:p-6">
              <TextAnimate
                as="h2"
                by="word"
                animation="slideUp"
                className="text-2xl md:text-3xl font-bold uppercase text-primary-color"
                once
              >
                {group.label}
              </TextAnimate>
              <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {groupServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={getServiceHref(service.slug)}
                    className="group relative overflow-hidden rounded-2xl border border-primary-color/15 bg-secondary-color/40 transition-all duration-300 hover:border-primary-color/35 hover:bg-[#f4efe9] hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="h-[200px] overflow-hidden">
                      <SectionImage
                        src={group.image}
                        alt={service.pageTitle}
                        wrapperClassName="h-full"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 pt-4">
                      <span className="text-4xl" aria-hidden>
                        {service.icon}
                      </span>
                      <h3 className="pt-4 text-xl font-bold text-primary-color uppercase leading-tight group-hover:text-[#2f3f11]">
                        {service.pageTitle}
                      </h3>
                      <p className="pt-3 leading-relaxed text-primary-color/85">
                        {service.shortDescription}
                      </p>
                      <span className="pt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-color">
                        View service details
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-4 -bottom-6 text-7xl opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                      >
                        {service.icon}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color text-white px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="relative z-10 flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            Not sure which service you need?
          </p>
          <h2 className="text-3xl font-bold uppercase leading-tight">
            We will guide you to the right starting point
          </h2>
          <p className="leading-loose text-white/90">
            Whether you are planning a new build, renovating, or need a
            structural audit — tell us your requirement and we will map the
            correct service sequence.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <Link href="/contact">
            <PrimaryButton text="Contact Wano Projects" />
          </Link>
        </div>
        <Meteors number={10} />
      </section>

      <p className="text-center text-sm leading-relaxed text-primary-color/70 px-4 pb-2">
        {SERVICE_FOOTER_LINE}
      </p>
    </div>
  );
};

export default ServicesPage;
