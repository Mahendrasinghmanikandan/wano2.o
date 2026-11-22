import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import { PrimaryButton } from "@/app/component/Buttons";
import { getServiceImage } from "@/app/helper/imageHelper";
import ServiceWorkflow from "@/app/component/ServiceWorkflow";
import {
  SERVICE_FOOTER_LINE,
  type ServicePageData,
} from "@/app/helper/servicesData";
import { Meteors } from "@/components/ui/meteors";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import { Download, FileText } from "lucide-react";

type ServicePageLayoutProps = {
  service: ServicePageData;
};

const ServicePageLayout = ({ service }: ServicePageLayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-secondary-color via-primary-color to-[#f4efe9]" />

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color px-6 py-12 md:px-10 md:py-16 text-white">
        <SectionImage
          src={getServiceImage(service.slug)}
          alt={service.pageTitle}
          wrapperClassName="absolute inset-0"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-primary-color/75" aria-hidden />
        <div className="relative z-10 flex flex-col gap-4 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-3xl" aria-hidden>
              {service.icon}
            </span>
            <p className="text-sm uppercase tracking-[0.22em] text-secondary-color/80">
              Specialised Service
            </p>
          </div>
          <TextAnimate
            as="h1"
            by="line"
            animation="blurInUp"
            className="text-4xl md:text-5xl font-bold uppercase leading-tight"
            once
          >
            {service.heroHeading}
          </TextAnimate>
          <p className="leading-loose text-white/90 max-w-4xl text-lg">
            {service.heroSubheading}
          </p>
        </div>
        <Meteors number={12} />
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article className="lg:col-span-2 rounded-2xl border border-primary-color/10 bg-white p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
            What This Service Is
          </p>
          <div className="pt-4 flex flex-col gap-4">
            {service.whatThisServiceIs.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-loose text-primary-color/90"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {service.highlights && (
            <ul className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-primary-color/15 bg-secondary-color/60 px-4 py-3 text-sm font-medium text-primary-color leading-snug"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </article>

        <aside className="rounded-2xl bg-secondary-color border border-primary-color/15 overflow-hidden flex flex-col">
          <SectionImage
            src={getServiceImage(service.slug)}
            alt={`Why ${service.pageTitle} matters`}
            wrapperClassName="h-40 shrink-0"
            className="object-cover"
          />
          <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
            Why It Matters
          </p>
          {service.whyItMatters.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-loose text-primary-color/90"
            >
              {paragraph}
            </p>
          ))}
          </div>
        </aside>
      </section>

      <section className="w-full rounded-2xl bg-gradient-to-br from-[#f4efe9] via-secondary-color to-white px-6 py-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
          Our Approach
        </p>
        <div className="pt-4 flex flex-col gap-4 max-w-4xl">
          {service.ourApproach.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-loose text-primary-color/90 text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-6">
            <SectionImage
              src={getServiceImage(service.slug)}
              alt={`Our approach to ${service.pageTitle}`}
              wrapperClassName="h-56 lg:h-72 rounded-2xl border border-primary-color/15 shadow-sm"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {service.workflow && (
        <ServiceWorkflow
          steps={service.workflow}
          title={
            service.slug === "renovation-services"
              ? "Renovation Workflow"
              : "Construction Workflow"
          }
        />
      )}

      {service.warrantyNote && (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border-2 border-primary-color/20 bg-white px-6 py-6">
            <p className="text-3xl font-bold text-primary-color">15</p>
            <p className="pt-1 text-lg font-semibold text-primary-color">
              {service.warrantyNote.structural}
            </p>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-primary-color/25 bg-primary-color text-white px-6 py-6">
            <p className="text-3xl font-bold text-secondary-color">1</p>
            <p className="pt-1 text-lg font-semibold">
              {service.warrantyNote.workmanship}
            </p>
          </div>
        </section>
      )}

      {service.samplePdf && (
        <section className="w-full rounded-2xl border border-primary-color/15 bg-white px-6 py-8 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-color text-primary-color">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-xl font-bold uppercase text-primary-color">
                Sample Drawing
              </h2>
              <p className="pt-2 leading-relaxed text-primary-color/80 max-w-xl">
                Download a sample drawing to understand our planning and
                documentation approach for this service.
              </p>
            </div>
          </div>
          <a
            href={service.samplePdf}
            download
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-primary-color bg-primary-color px-5 text-sm font-semibold text-secondary-color transition-colors duration-300 hover:bg-secondary-color hover:text-primary-color"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </section>
      )}

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color text-white px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="relative z-10 flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            Get Started
          </p>
          <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
            {service.cta}
          </h2>
        </div>
        <div className="relative z-10 shrink-0">
          <Link href="/contact">
            <PrimaryButton text="Contact Wano Projects" />
          </Link>
        </div>
        <Meteors number={8} />
      </section>

      <p className="text-center text-sm leading-relaxed text-primary-color/70 px-4 pb-2">
        {SERVICE_FOOTER_LINE}
      </p>
    </div>
  );
};

export default ServicePageLayout;
