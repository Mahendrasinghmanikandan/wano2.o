export const PROJECTS_FOOTER_LINE =
  "Wano Projects delivers engineering-driven residential and commercial projects across Tamil Nadu with disciplined planning, structural control, and responsible execution.";

export type ProjectHighlight = {
  icon: string;
  label: string;
};

export type ProjectSolution = {
  title: string;
  description: string;
};

export type ProjectPageData = {
  slug: string;
  title: string;
  location: string;
  shortDescription: string;
  highlights: ProjectHighlight[];
  overview: string[];
  clientRequirement: string[];
  mainChallenges: string[];
  solutions: ProjectSolution[];
  engineeringFeatures: string[];
  outcome: string[];
  whyItMatters: string[];
  warranty: {
    structural: string;
    workmanship: string;
  };
  projectType: string;
  budgetNote?: string;
};

export const PROJECTS: ProjectPageData[] = [
  {
    slug: "g3-residential-tenkasi",
    title: "G+3 Residential Building — Tenkasi",
    location: "Tenkasi, Tamil Nadu",
    projectType: "Residential",
    shortDescription:
      "G+3 residential building on a highly congested site with weak soil and second-floor swimming pool. Delivered using combined raft footing, concealed service ducts, wind tower ventilation, and cost-controlled execution.",
    highlights: [
      { icon: "🏠", label: "G+3 + Swimming Pool" },
      { icon: "🪨", label: "Weak Soil → Raft Foundation" },
      { icon: "↔️", label: "Narrow Entry (4 ft)" },
      { icon: "🛗", label: "Lift + Wind Tower" },
      { icon: "💰", label: "Cost Controlled (₹1 Cr)" },
    ],
    overview: [
      "This project was a highly challenging G+3 residential building on a very congested site with tight side boundaries and weak soil conditions. The site began with a narrow access width of 4 feet and gradually widened to 30 feet, which created major planning and execution constraints.",
      "The project also included a swimming pool at the second floor level, a lift, concealed plumbing routing, and ventilation planning for better air circulation.",
      "To manage these conditions effectively, Wano Projects carried out a prior cost-benefit analysis and executed the project with a structured engineering workflow.",
    ],
    clientRequirement: [
      "The client wanted a residential building that could be developed within a practical budget while still handling the site constraints, structural complexity, and functional requirements of the project.",
      "The project needed:",
    ],
    mainChallenges: [
      "Very congested site condition",
      "Narrow entry width of 4 feet",
      "Widening site geometry up to 30 feet",
      "Tight side boundary with neighboring buildings",
      "Weak soil condition",
      "Swimming pool at second floor level",
      "Service routing complexity",
      "Ventilation and air movement issues",
      "Cost control in a complex project",
    ],
    solutions: [
      {
        title: "Structural Foundation Solution",
        description:
          "Because of the weak soil condition, a combined raft footing system was adopted to support the building safely and distribute loads effectively.",
      },
      {
        title: "Concealed Utility Routing",
        description:
          "Separate hidden ducts were planned for plumbing and for the swimming pool water line system. This helped keep the services organized and reduced visible clutter.",
      },
      {
        title: "Lift Integration",
        description:
          "A lift was incorporated into the building planning and structural coordination to improve usability and long-term convenience.",
      },
      {
        title: "Ventilation Planning",
        description:
          "For better air circulation, a wind tower was constructed above the terrace level to support improved airflow in the building.",
      },
      {
        title: "Cost-Benefit Analysis",
        description:
          "Before execution, a detailed cost-benefit analysis was carried out to control budget and avoid unnecessary escalation. The project was completed at around ₹1 crore including elevation, while comparable work by others was estimated at around ₹1.5 crore.",
      },
    ],
    budgetNote: "Completed at ~₹1 Cr vs ~₹1.5 Cr market estimate",
    engineeringFeatures: [
      "Combined raft footing for weak soil",
      "Integrated planning for G+3 structure",
      "Swimming pool on second floor",
      "Concealed plumbing duct system",
      "Separate water route for pool services",
      "Lift provision",
      "Wind tower above terrace for air circulation",
      "Controlled execution in a congested site",
      "Prior cost-benefit analysis for budget discipline",
    ],
    outcome: [
      "Despite the site limitations and structural complexity, the project was delivered through proper planning, engineering control, and stage-wise execution.",
      "The result was a highly functional residential building that managed safety, service coordination, ventilation, space efficiency, and budget control.",
      "This project demonstrates Wano Projects' ability to handle difficult residential sites with engineering discipline and practical decision-making.",
    ],
    whyItMatters: [
      "This project shows how complex residential construction can be handled properly when engineering, planning, and cost control are integrated from the beginning.",
    ],
    warranty: {
      structural: "Structural Warranty: 15 Years",
      workmanship: "Workmanship Warranty: 5 Years",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectPageData | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectHref(slug: string): string {
  return `/projects/${slug}`;
}
