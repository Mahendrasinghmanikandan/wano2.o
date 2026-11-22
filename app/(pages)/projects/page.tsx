import Link from "next/link";
import SectionImage from "@/app/component/SectionImage";
import { PrimaryButton } from "@/app/component/Buttons";
import { getProjectImage, IMAGE_HELPER } from "@/app/helper/imageHelper";
import {
  getProjectHref,
  PROJECTS,
  PROJECTS_FOOTER_LINE,
} from "@/app/helper/projectsData";
import { Meteors } from "@/components/ui/meteors";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import { ArrowRight, MapPin } from "lucide-react";
import RestHero from "@/app/component/RestHero";

const ProjectsPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-secondary-color via-primary-color to-[#f4efe9]" />
      <RestHero
        subtitle="Our Projects"
        title="Our Projects"
        description="Real projects delivered through structured planning, structural control, service coordination, and cost discipline — especially on difficult residential sites across Tamil Nadu."
        image={IMAGE_HELPER.PROJECTS_HERO}
      />

      <section className="w-full flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="group w-full overflow-hidden rounded-2xl border border-primary-color/10 bg-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 bg-primary-color text-white px-6 py-10 md:px-10 flex flex-col justify-between gap-6 min-h-[280px]">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em]">
                    {project.projectType}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
                    {project.title}
                  </h2>
                  <p className="inline-flex items-center gap-2 text-sm text-white/80">
                    <MapPin className="h-4 w-4 shrink-0 text-secondary-color" />
                    {project.location}
                  </p>
                </div>
                {project.budgetNote && (
                  <p className="rounded-lg border border-secondary-color/30 bg-secondary-color/15 px-4 py-2 text-sm font-medium text-secondary-color">
                    {project.budgetNote}
                  </p>
                )}
              </div>

              <div className="lg:col-span-7 px-6 py-10 md:px-10 flex flex-col gap-6">
                <SectionImage
                  src={getProjectImage(project.slug)}
                  alt={project.title}
                  wrapperClassName="h-44 md:h-52 rounded-xl border border-primary-color/10"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <p className="leading-loose text-primary-color/90">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary-color/15 bg-secondary-color/60 px-3 py-2 text-sm text-primary-color"
                    >
                      <span aria-hidden>{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>

                <Link
                  href={getProjectHref(project.slug)}
                  className="inline-flex w-fit items-center gap-2 rounded-xl border-2 border-primary-color bg-primary-color px-5 py-2.5 text-sm font-semibold text-secondary-color transition-all duration-300 hover:bg-secondary-color hover:text-primary-color group-hover:gap-3"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {PROJECTS.length === 0 && (
        <section className="w-full rounded-2xl border border-dashed border-primary-color/25 bg-secondary-color/50 px-6 py-16 text-center">
          <p className="text-primary-color/80 leading-relaxed">
            Case studies will be published here soon.
          </p>
        </section>
      )}

      <section className="w-full relative overflow-hidden rounded-2xl bg-primary-color text-white px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <SectionImage
          src={IMAGE_HELPER.PROJECTS_CTA}
          alt="Start your project with Wano Projects"
          wrapperClassName="absolute inset-0"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-primary-color/65" aria-hidden />
        <div className="relative z-10 flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-color/80">
            Your project next?
          </p>
          <h2 className="text-3xl font-bold uppercase leading-tight">
            Share your plot or building requirement
          </h2>
          <p className="leading-loose text-white/90">
            Whether the site is congested, on weak soil, or needs renovation —
            we can review conditions and guide the right engineering workflow.
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
        {PROJECTS_FOOTER_LINE}
      </p>
    </div>
  );
};

export default ProjectsPage;
