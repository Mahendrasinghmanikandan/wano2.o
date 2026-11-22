import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import ContactForm from "@/app/component/ContactForm";
import { IMAGE_HELPER } from "@/app/helper/imageHelper";
import { SERVICES } from "@/app/helper/servicesData";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CoolMode } from "@/components/ui/cool-mode";
import { Building2, Clock, MapPin, MessageSquare, Phone } from "lucide-react";
import RestHero from "@/app/component/RestHero";

const CONTACT_POINTS = [
  {
    icon: MapPin,
    title: "Service Area",
    detail: "Tamil Nadu — residential, renovation, and project coordination.",
  },
  {
    icon: Building2,
    title: "What We Handle",
    detail:
      "Planning, structural design, MEP coordination, construction, renovation, PMC, and structural audit.",
  },
  {
    icon: Clock,
    title: "Response",
    detail:
      "Share your requirement and we will guide you to the right service or workflow stage.",
  },
  {
    icon: MessageSquare,
    title: "How to Start",
    detail:
      "Describe your plot, building, or renovation need — new build, upgrade, or audit.",
  },
];

const QUICK_SERVICE_LINKS = SERVICES.slice(0, 4);

const ContactPage = () => {
  return (
    <div className="mx-auto flex h-full w-full  flex-col gap-6 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-secondary-color via-primary-color to-[#f4efe9]" />
      <RestHero
        subtitle="Contact Wano Projects"
        title="Contact Wano Projects"
        description="Tell us about your project — new construction, renovation, or an existing building that needs assessment. We will help you understand the right service sequence and next steps."
        image={IMAGE_HELPER.CONTACT_HERO}
      />

      <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_POINTS.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-primary-color/15 bg-white/95 p-5 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary-color/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-color text-primary-color transition-transform duration-300 group-hover:scale-105">
              <item.icon className="h-5 w-5" />
            </span>
            <h2 className="pt-4 text-base font-semibold text-primary-color">
              {item.title}
            </h2>
            <p className="pt-2 text-sm leading-relaxed text-primary-color/75">
              {item.detail}
            </p>
          </article>
        ))}
      </section>

      <section className="relative w-full overflow-hidden rounded-2xl border border-primary-color/10 bg-secondary-color px-6 py-6 shadow-sm md:px-8">
        <div className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-primary-color/10 blur-2xl" />
        <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
          Popular services
        </p>
        <h2 className="pt-2 text-xl font-semibold text-primary-color md:text-2xl">
          Start with the right service path
        </h2>
        <div className="flex flex-wrap gap-2 pt-5">
          {QUICK_SERVICE_LINKS.map((service) => (
            <CoolMode
              key={service.slug}
              options={{ particle: service.icon, size: 10, speedHorz: 5 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex rounded-full border border-primary-color/20 bg-white px-4 py-2 text-sm font-medium text-primary-color shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-color/40 hover:bg-[#f4efe9]"
              >
                {service.pageTitle}
              </Link>
            </CoolMode>
          ))}
          <Link
            href="/services"
            className="inline-flex rounded-full border border-dashed border-primary-color/35 bg-transparent px-4 py-2 text-sm font-medium text-primary-color/80 transition-colors duration-300 hover:border-primary-color/50 hover:text-primary-color"
          >
            View all services →
          </Link>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <SectionImage
            src={IMAGE_HELPER.CONTACT_FORM_SIDE}
            alt="Project consultation"
            wrapperClassName="h-44 rounded-2xl border border-primary-color/15 shadow-sm lg:h-48"
            className="object-cover"
          />
          <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-primary-color p-6 text-white shadow-md md:p-8">
            <h2 className="text-2xl font-bold uppercase leading-tight">
              Before You Write
            </h2>
            <p className="leading-loose text-white/90 text-sm">
              Helpful details to include in your message:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-white/95">
              {[
                "Project type (new build / renovation / audit)",
                "Location in Tamil Nadu",
                "Plot or building size (approximate)",
                "Current stage (planning / design / construction)",
                "Timeline or budget range if known",
              ].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 leading-relaxed backdrop-blur-sm"
                >
                  <span className="text-secondary-color shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 pt-4">
              <Phone className="h-5 w-5 shrink-0 text-secondary-color" />
              <p className="text-sm leading-relaxed text-white/85">
                Prefer a call? Mention your preferred contact number in the form
                and we will reach out.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>

      <section className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-primary-color/15 bg-gradient-to-br from-[#f4efe9] to-secondary-color px-6 py-10 text-center shadow-sm md:px-10">
        <SectionImage
          src={IMAGE_HELPER.CONTACT_FOOTER}
          alt=""
          wrapperClassName="absolute inset-0"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-white/40" />
        <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-color max-w-3xl mx-auto font-medium">
          Wano Projects provides engineering-driven planning, design, and
          construction services across Tamil Nadu, with a focus on complete
          workflow and responsible execution.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
