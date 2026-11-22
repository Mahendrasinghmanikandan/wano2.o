import SectionImage from "@/app/component/SectionImage";
import {
  ABOUT_VALUE_IMAGES,
  getAboutDisciplineImage,
  IMAGE_HELPER,
} from "@/app/helper/imageHelper";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import RestHero from "@/app/component/RestHero";

const ABOUT_VALUES = [
  {
    title: "Vision",
    content: [
      "Wano Projects aims to make engineering-driven building solutions more accessible, practical, and reliable for homeowners and project owners.",
      "We want every project to receive proper planning, proper coordination, and disciplined execution - not just large or premium projects, but projects of all sizes at practical market budgets.",
    ],
  },
  {
    title: "Mission",
    content: [
      "Our mission is to deliver complete building solutions through one coordinated system that brings architecture, structural design, MEP coordination, and construction together.",
      "We work to reduce confusion, avoid skipped stages, improve control, and create a smoother project experience for the client from planning to handover.",
    ],
  },
  {
    title: "Team Strength",
    content: [
      "Wano Projects brings multiple technical disciplines under one roof.",
      "Our team includes architecture, structural engineering, MEP coordination, and civil execution support in one integrated system. This helps reduce communication gaps between different consultants and improves the flow of the project.",
      "With all key disciplines connected in one place, clients get a more organized, stress-free, and properly managed building process.",
    ],
  },
];

const TEAM_DISCIPLINES = [
  "Architecture",
  "Structural Engineering",
  "MEP Coordination",
  "Civil Execution Support",
];

const About = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <ScrollProgress className="h-1 bg-linear-to-r from-secondary-color via-primary-color to-[#f4efe9]" />
      <RestHero
        subtitle="About Wano Projects"
        title="About Wano Projects"
        description="Wano Projects is an engineering-driven design and construction company. This about page explains our vision, mission, and team strength."
        image={IMAGE_HELPER.ABOUT_HERO}
      />

      <section className="w-full rounded-2xl bg-gradient-to-br from-secondary-color via-[#f4efe9] to-secondary-color p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {ABOUT_VALUES.map((item, index) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-2xl border shadow-sm flex flex-col ${
                index === 1
                  ? "border-secondary-color/40 bg-primary-color text-white"
                  : "border-primary-color/15 bg-white text-primary-color"
              }`}
            >
              <SectionImage
                src={ABOUT_VALUE_IMAGES[index]}
                alt={item.title}
                wrapperClassName="h-[250px] shrink-0"
                className="object-cover"
              />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div
                  className={`absolute top-0 left-0 h-1.5 w-40 ${
                    index === 1 ? "bg-secondary-color" : "bg-primary-color"
                  }`}
                />
                <TextAnimate
                  as="h2"
                  by="word"
                  animation="slideUp"
                  className="text-3xl font-bold uppercase leading-tight"
                  once
                >
                  {item.title}
                </TextAnimate>
                <div className="pt-4 flex flex-col gap-3">
                  {item.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={
                        index === 1
                          ? "leading-loose text-white/90"
                          : "leading-loose text-primary-color/90"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full rounded-2xl px-6 py-10 md:px-10 bg-secondary-color text-primary-color flex flex-col gap-5">
        <TextAnimate
          as="h2"
          by="word"
          animation="blurInUp"
          className="text-3xl md:text-4xl font-bold uppercase leading-tight"
          once
        >
          One Integrated Team
        </TextAnimate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className="leading-loose max-w-4xl">
              Instead of disconnected consultants, Wano Projects connects all
              key technical disciplines into one coordinated system for better
              control, faster decisions, and smoother execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEAM_DISCIPLINES.map((discipline, index) => (
                <div
                  key={discipline}
                  className="overflow-hidden rounded-xl border border-primary-color/20 bg-white shadow-sm"
                >
                  <SectionImage
                    src={getAboutDisciplineImage(index)}
                    alt={discipline}
                    wrapperClassName="h-[180px]"
                    className="object-cover"
                  />
                  <div className="px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-color/60">
                      Discipline {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="pt-1 text-lg font-semibold leading-snug">
                      {discipline}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <SectionImage
              src={IMAGE_HELPER.ABOUT_INTEGRATED_TEAM}
              alt="One integrated team"
              wrapperClassName="h-56 lg:h-full min-h-[240px] rounded-2xl border border-primary-color/20 shadow-sm"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
