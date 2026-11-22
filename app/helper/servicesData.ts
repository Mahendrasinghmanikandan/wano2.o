export const SERVICE_FOOTER_LINE =
  "Wano Projects provides engineering-driven planning, design, and construction services across Tamil Nadu, with a focus on complete workflow and responsible execution.";

export type WorkflowStep = {
  title: string;
  description: string;
};

export type ServicePageData = {
  slug: string;
  pageTitle: string;
  heroHeading: string;
  heroSubheading: string;
  shortDescription: string;
  icon: string;
  whatThisServiceIs: string[];
  highlights?: string[];
  whyItMatters: string[];
  ourApproach: string[];
  cta: string;
  samplePdf?: string;
  workflow?: WorkflowStep[];
  warrantyNote?: {
    structural: string;
    workmanship: string;
  };
};

export const SERVICES: ServicePageData[] = [
  {
    slug: "architectural-planning",
    pageTitle: "Architectural Planning",
    icon: "📐",
    heroHeading: "Architectural Planning That Supports Practical Living",
    heroSubheading:
      "Functional layout planning designed for comfort, efficiency, circulation, and everyday usability.",
    shortDescription:
      "Functional layout planning for comfort, circulation, and everyday usability.",
    whatThisServiceIs: [
      "Architectural planning defines how the building will function before construction begins. It covers space planning, room arrangement, movement flow, and the relationship between different areas of the house or building.",
      "At Wano Projects, architectural planning is not treated as only a visual exercise. It is a practical planning stage that sets the foundation for the rest of the project.",
    ],
    whyItMatters: [
      "A good architectural plan helps reduce wasted space, improves comfort, and makes structural and service coordination easier. Poor planning often leads to repeated changes during execution, which increases cost and confusion.",
    ],
    ourApproach: [
      "We study the client's requirements, plot condition, orientation, usage pattern, and practical needs before preparing the plan. The goal is to create a layout that works well in real life and supports the technical stages that follow.",
    ],
    samplePdf: "/samples/architectural-planning-sample.pdf",
    cta: "Need a practical building plan? Contact Wano Projects.",
  },
  {
    slug: "structural-design",
    pageTitle: "Structural Design",
    icon: "🏗️",
    heroHeading: "Structural Design Built for Safety and Long-Term Performance",
    heroSubheading:
      "Engineering-based structural planning focused on safety, stability, and durability.",
    shortDescription:
      "Engineering-based structural planning for safety, stability, and durability.",
    whatThisServiceIs: [
      "Structural design is the process of analyzing and designing the building framework so it can safely carry loads and perform reliably over time.",
    ],
    highlights: [
      "RC Structure Design",
      "Steel Structure Design",
      "Other special structural elements",
    ],
    whyItMatters: [
      "A building may look complete on the outside, but its real strength depends on the structural system behind it. Structural design protects the building from unsafe loading, settlement problems, and long-term performance issues.",
    ],
    ourApproach: [
      "Wano Projects follows an engineering-first method. We consider architectural requirements, soil conditions, usage expectations, and construction realities before finalizing the structure. This helps create a design that is safe, practical, and execution-friendly.",
    ],
    samplePdf: "/samples/structural-design-sample.pdf",
    cta: "Looking for a reliable structural design? Contact Wano Projects.",
  },
  {
    slug: "mep-design-coordination",
    pageTitle: "MEP Design Coordination",
    icon: "⚡",
    heroHeading: "MEP Coordination That Reduces Site Clashes",
    heroSubheading:
      "Planning of electrical, plumbing, and service systems for smoother execution.",
    shortDescription:
      "Electrical, plumbing, and service planning coordinated with the main design.",
    whatThisServiceIs: [
      "MEP stands for mechanical, electrical, and plumbing coordination. This service ensures that essential building services are planned properly along with the architectural and structural design.",
    ],
    whyItMatters: [
      "Many site problems happen because services are not coordinated early. That leads to clashes, delays, rework, and changes during construction. Proper MEP coordination improves project clarity and reduces execution issues.",
    ],
    ourApproach: [
      "Wano Projects coordinates the service layout with the building plan so that electrical points, plumbing lines, and other service elements fit the project properly. This helps the site team execute work with fewer conflicts.",
    ],
    cta: "Need coordinated MEP planning? Contact Wano Projects.",
  },
  {
    slug: "construction-services",
    pageTitle: "Construction Services",
    icon: "🧱",
    heroHeading: "Disciplined Construction with Stage-Wise Control",
    heroSubheading:
      "Structured site execution with monitoring, coordination, and quality checks.",
    shortDescription:
      "Structured site execution with monitoring, coordination, and quality checks.",
    whatThisServiceIs: [
      "Construction services cover the actual execution of the building work on site. This includes planning the work sequence, coordinating materials and labor, monitoring progress, and maintaining quality.",
    ],
    workflow: [
      {
        title: "Understand Requirement",
        description:
          "We study the client's needs, site condition, and project goals before starting.",
      },
      {
        title: "Architectural Planning",
        description:
          "We prepare practical layouts that support living comfort, space use, and project function.",
      },
      {
        title: "Soil Investigation",
        description:
          "We assess the soil condition so foundation decisions are based on actual site data.",
      },
      {
        title: "Structural Design",
        description:
          "We design the structural framework for safety, stability, and long-term performance.",
      },
      {
        title: "MEP Coordination",
        description:
          "We coordinate electrical, plumbing, and service planning with the main design.",
      },
      {
        title: "Estimation & Cost-Benefit Analysis",
        description:
          "We review cost versus value early, so decisions support budget control and better project planning.",
      },
      {
        title: "Cost Overrun Protection",
        description:
          "We reduce unexpected cost growth through proper planning, coordination, and early stage control.",
      },
      {
        title: "Construction Execution",
        description:
          "We carry out the work on site in a structured and disciplined manner.",
      },
      {
        title: "Checklist Verification",
        description:
          "Each stage is checked before moving ahead, so small issues are corrected early.",
      },
      {
        title: "Final Handover",
        description:
          "The project is completed and handed over with proper responsibility and documentation.",
      },
    ],
    whyItMatters: [
      "Even a well-designed project can fail in execution if site control is weak. Construction must be handled with discipline, checking, and coordination to protect quality and budget.",
    ],
    ourApproach: [
      "Wano Projects follows a structured workflow during construction. Each stage is reviewed before moving to the next stage. This reduces avoidable mistakes, helps maintain clarity, and improves the final result.",
    ],
    warrantyNote: {
      structural: "Structural Warranty: 15 Years",
      workmanship: "Workmanship Warranty: 1 Year",
    },
    cta: "Planning a construction project? Contact Wano Projects.",
  },
  {
    slug: "renovation-services",
    pageTitle: "Renovation Services",
    icon: "🔧",
    heroHeading: "Renovation with Planning, Safety, and Control",
    heroSubheading:
      "Improvement and strengthening of existing buildings through proper assessment and disciplined execution.",
    shortDescription:
      "Upgrading and strengthening existing buildings with proper assessment and control.",
    whatThisServiceIs: [
      "Renovation involves modifying, upgrading, repairing, or strengthening an existing building. It may include layout changes, structural improvements, repair work, utility upgrades, or functional enhancement.",
    ],
    workflow: [
      {
        title: "Understand Requirement",
        description:
          "We understand what the client wants to change, improve, repair, or strengthen.",
      },
      {
        title: "Site Visit & Existing Condition Study",
        description:
          "We inspect the present condition of the building, spaces, finishes, and visible issues.",
      },
      {
        title: "Structural Check / Audit",
        description:
          "We study the structural condition where required before any major modification or strengthening work.",
      },
      {
        title: "Renovation Planning",
        description:
          "We plan the scope, sequence, and practical method for the renovation work.",
      },
      {
        title: "Design & Service Coordination",
        description:
          "We coordinate architectural changes, structural needs, and MEP adjustments.",
      },
      {
        title: "Estimation & Cost-Benefit Analysis",
        description:
          "We review cost versus value to keep the renovation practical and controlled.",
      },
      {
        title: "Execution Planning",
        description:
          "We plan the work sequence so the site can be handled properly without confusion.",
      },
      {
        title: "Renovation Execution",
        description:
          "We carry out the repair, modification, upgrade, or strengthening work on site.",
      },
      {
        title: "Checklist Verification",
        description:
          "Each stage is checked before moving to the next stage.",
      },
      {
        title: "Final Handover",
        description:
          "The renovated project is completed and handed over with responsibility.",
      },
    ],
    whyItMatters: [
      "Renovation is not just visual work. Existing buildings may have hidden structural, service, or condition-related issues. That is why renovation must be planned carefully before execution begins.",
    ],
    ourApproach: [
      "We assess the existing condition of the building first, then define the scope of work based on practical need and technical safety. The goal is to improve the building without creating unnecessary risk or confusion.",
    ],
    cta: "Need to renovate an existing building? Contact Wano Projects.",
  },
  {
    slug: "pmc",
    pageTitle: "Project Management Consultancy (PMC)",
    icon: "📋",
    heroHeading: "PMC for Better Project Control",
    heroSubheading:
      "Technical supervision and project coordination to keep execution aligned with plan, quality, and schedule.",
    shortDescription:
      "Technical supervision and coordination to keep execution on plan and schedule.",
    whatThisServiceIs: [
      "PMC stands for Project Management Consultancy. This service helps the client manage the project in a structured way through monitoring, coordination, and supervision.",
    ],
    whyItMatters: [
      "Construction projects can go off track when quality, timing, and communication are not managed properly. PMC helps maintain control across different stages and supports better decision-making.",
    ],
    ourApproach: [
      "Wano Projects provides monitoring and coordination support to help the project progress in the correct direction. This includes checking execution against the plan, supporting coordination between teams, and maintaining project discipline.",
    ],
    cta: "Need support in managing your project? Contact Wano Projects.",
  },
  {
    slug: "structural-audit",
    pageTitle: "Structural Audit",
    icon: "🔍",
    heroHeading: "Structural Audit for Existing Buildings",
    heroSubheading:
      "Assessment of existing buildings to identify safety concerns, structural condition, and repair needs.",
    shortDescription:
      "Assessment of existing buildings for safety, condition, and repair needs.",
    whatThisServiceIs: [
      "Structural audit is the process of examining an existing building to understand its current structural condition. It helps identify visible distress, possible safety issues, and areas that may need repair or strengthening.",
    ],
    whyItMatters: [
      "Older buildings, modified buildings, and structures showing signs of distress should be reviewed properly. A structural audit helps the owner understand the condition of the building before deciding on repair, strengthening, or renovation.",
    ],
    ourApproach: [
      "Wano Projects studies the building condition carefully and identifies areas that need technical attention. This helps the owner take informed decisions instead of relying on guesswork.",
    ],
    cta: "Need a structural audit for your building? Contact Wano Projects.",
  },
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getServiceHref(slug: string): string {
  return `/services/${slug}`;
}
