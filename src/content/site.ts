export const site = {
  name: "Wano Projects",
  tagline: "Engineered Buildings Built the Right Way",
  description:
    "Engineering-driven design and construction across Tamil Nadu — architecture, structural design, soil study, MEP, construction, renovation, PMC, and estimation under one system.",
  url: "https://wanoprojects.com",
  locale: "en_IN",
  contactCta: "Contact Wano Projects",
  email: "hello@wanoprojects.com",
  location: {
    label: "Tamil Nadu, India",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=76.8%2C8.0%2C80.4%2C13.6&layer=mapnik&marker=11.1271%2C78.6569",
    mapLink: "https://www.openstreetmap.org/?mlat=11.1271&mlon=78.6569#map=7/11.127/78.657",
    cover: "/images/contact-map-cover.jpg",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const servicesNav = [
  {
    label: "Architect",
    href: "/services/architect",
    short: "Architecture",
    image: "/images/services/architect.jpg",
  },
  {
    label: "Structural",
    href: "/services/structural",
    short: "Structure",
    image: "/images/services/structural.jpg",
  },
  {
    label: "MEP",
    href: "/services/mep",
    short: "MEP",
    image: "/images/services/mep.jpg",
  },
  {
    label: "Construction",
    href: "/services/construction",
    short: "Build",
    image: "/images/services/construction.jpg",
  },
  {
    label: "Interiors",
    href: "/services/interiors",
    short: "Interiors",
    image: "/images/services/interiors.jpg",
  },
  {
    label: "Renovation",
    href: "/services/renovation",
    short: "Renovate",
    image: "/images/services/renovation.jpg",
  },
  {
    label: "PMC",
    href: "/services/pmc",
    short: "PMC",
    image: "/images/services/pmc.jpg",
  },
  {
    label: "Estimation",
    href: "/services/estimation",
    short: "Estimate",
    image: "/images/services/estimation.jpg",
  },
];

export const home = {
  heroTitle: "Engineered Buildings Built the Right Way",
  heroSupport:
    "Architecture, Structural Design, Soil Study, MEP Coordination, and Construction — delivered through one structured workflow.",
  heroSub:
    "Every project follows essential engineering stages without skipping critical steps.",
  aboutHeading: "About Wano",
  aboutBody: [
    "Wano Projects is an engineering-driven design and construction company that brings architecture, structural design, MEP coordination, and construction together under one system. We focus on proper planning, disciplined execution, and practical solutions to deliver safe, reliable, and well-engineered buildings.",
    "Wano Projects is an engineering-driven design and construction company working across residential and renovation projects. We provide integrated services including architectural planning, structural design, soil investigation, MEP coordination, construction, project management consultancy, and structural audit. Our approach is based on one clear principle: a building should be properly planned before it is built.",
  ],
  projectsHeading: "Projects",
  projects: [
    {
      title: "Tenkasi G+2",
      detail:
        "First floor swimming pool, second floor home theatre, villa-type building. ₹1 Cr project.",
      location: "Tenkasi",
      image: "/images/projects/tenkasi.jpg",
    },
    {
      title: "Twin Villa Sivagangai",
      detail:
        "Budget house by cost-benefit analysis — structurally safe building.",
      location: "Sivagangai",
      image: "/images/projects/sivagangai.jpg",
    },
    {
      title: "Vellore G+2",
      detail: "Farm house with gazebo at terrace.",
      location: "Vellore",
      image: "/images/projects/vellore.jpg",
    },
    {
      title: "Chennai Paruthipattu Renovation",
      detail:
        "KV Kendra Vihar — old building structural safety renovation.",
      location: "Chennai",
      image: "/images/projects/chennai.jpg",
    },
  ],
  warrantyHeading: "Built with Responsibility",
  warrantyBody:
    "We treat every project as an important investment and focus on delivering with accountability and technical discipline.",
  warranties: [
    { label: "Structural Warranty", value: "15 Years" },
    { label: "Workmanship Warranty", value: "1 Year" },
  ],
  closingHeading: "Built with Planning, Precision, and Responsibility",
  closingBody:
    "Wano Projects focuses on doing the right steps in the right order. Our goal is to deliver buildings that are safe, practical, and reliable for long-term use.",
};

export const gallery = [
  {
    src: "/images/gallery/01.jpg",
    alt: "Modern villa exterior",
    caption: "Residential planning",
  },
  {
    src: "/images/gallery/02.jpg",
    alt: "Contemporary house facade",
    caption: "Architectural form",
  },
  {
    src: "/images/gallery/03.jpg",
    alt: "Home exterior with landscaping",
    caption: "Practical living",
  },
  {
    src: "/images/gallery/04.jpg",
    alt: "Interior living space",
    caption: "Interior coordination",
  },
  {
    src: "/images/gallery/05.jpg",
    alt: "Construction structural frame",
    caption: "Structural stage",
  },
  {
    src: "/images/gallery/06.jpg",
    alt: "Building under construction",
    caption: "Site execution",
  },
];

export const aboutPage = {
  title: "About Us",
  heroLine: "ALL UNDER ONE ROOF",
  image: "/images/about-hero.jpg",
  whyStarted: {
    heading: "Why We Started",
    paragraphs: [
      "Many building projects lack proper discipline, coordination, and technical planning. Important stages are often skipped or handled too late, leading to confusion, rework, and cost problems.",
      "Wano Projects was started to change that.",
      "We wanted to bring real engineering under one roof so that clients do not have to depend on multiple disconnected consultants or guesswork-based decisions.",
      "Proper engineering and structured planning are often seen only in large or premium projects. Our goal is to make that level of discipline accessible to more people at practical market budgets.",
    ],
  },
  different: {
    heading: "What Makes Wano Projects Different",
    intro: "Our key strengths are:",
    points: [
      "Complete workflow from planning to handover",
      "No skipped engineering stages",
      "Checklist-based execution at every stage",
      "Early coordination of architectural, structural, and service design",
      "Cost-overrun control through proper planning",
      "Practical local-market pricing",
      "Structured responsibility and warranty support",
    ],
  },
};

export type ServicePage = {
  slug: string;
  title: string;
  image: string;
  heroHeading: string;
  heroSubheading: string;
  shortContent: string[];
  listHeading?: string;
  listItems?: string[];
  extraSections?: { heading: string; body: string | string[] }[];
  workflow?: { title: string; detail: string }[];
  workflowSimple?: string;
  warranty?: string[];
  cta?: string;
  downloadNote?: string;
};

export const services: ServicePage[] = [
  {
    slug: "architect",
    image: "/images/services/architect.jpg",
    title: "Wano Architect",
    heroHeading: "Architectural Planning That Supports Practical Living",
    heroSubheading:
      "Functional layouts designed for comfort, efficiency, and everyday usability.",
    shortContent: [
      "Architectural planning defines how a building will function before construction begins. It includes space planning, room arrangement, circulation, and practical use of the available area.",
      "At Wano Projects, we create plans that are not only visually good, but also practical for real life and ready for the next engineering stages.",
    ],
  },
  {
    slug: "structural",
    image: "/images/services/structural.jpg",
    title: "Wano Structural Design",
    heroHeading:
      "Structural Design Built for Safety and Long-Term Performance",
    heroSubheading:
      "Engineering-based structural planning focused on safety, stability, and durability.",
    shortContent: [
      "Structural design is the process of analyzing and designing the building framework to safely carry loads and perform reliably throughout its life.",
      "At Wano Projects, every structure is designed with consideration for architectural requirements, soil conditions, usage needs, and construction practicality.",
    ],
    listHeading: "Our services include:",
    listItems: [
      "RCC Structure Design",
      "Steel Structure Design",
      "Industrial Structures",
      "Residential Structures",
      "Commercial Structures",
      "Special Structural Design Solutions",
    ],
    downloadNote:
      "Download sample structural drawings to understand the level of engineering and detailing provided.",
  },
  {
    slug: "mep",
    image: "/images/services/mep.jpg",
    title: "Wano MEP Design & Execution",
    heroHeading: "MEP Design and Execution for Plumbing and Electrical Works",
    heroSubheading:
      "Planned and coordinated plumbing and electrical systems for smoother site execution.",
    shortContent: [
      "MEP covers the planning and execution of essential building services, especially plumbing and electrical work. This service ensures that these systems are properly coordinated with the architectural and structural plan before and during construction.",
    ],
  },
  {
    slug: "construction",
    image: "/images/services/construction.jpg",
    title: "Construction Services",
    heroHeading: "Disciplined Construction with Stage-Wise Control",
    heroSubheading:
      "Structured site execution with monitoring, coordination, and quality checks.",
    shortContent: [
      "Construction services cover the actual execution of the building work on site. This includes planning the work sequence, coordinating materials and labor, monitoring progress, and maintaining quality.",
    ],
    extraSections: [
      {
        heading: "Why It Matters",
        body: "Even a well-designed project can fail in execution if site control is weak. Construction must be handled with discipline, checking, and coordination to protect quality and budget.",
      },
      {
        heading: "Our Approach",
        body: "Wano Projects follows a structured workflow during construction. Each stage is reviewed before moving to the next stage. This reduces avoidable mistakes, helps maintain clarity, and improves the final result.",
      },
    ],
    workflow: [
      {
        title: "Understand Requirement",
        detail:
          "We study the client’s needs, site condition, and project goals before starting.",
      },
      {
        title: "Architectural Planning",
        detail:
          "We prepare practical layouts that support living comfort, space use, and project function.",
      },
      {
        title: "Soil Investigation",
        detail:
          "We assess the soil condition so foundation decisions are based on actual site data.",
      },
      {
        title: "Structural Design",
        detail:
          "We design the structural framework for safety, stability, and long-term performance.",
      },
      {
        title: "MEP Coordination",
        detail:
          "We coordinate electrical, plumbing, and service planning with the main design.",
      },
      {
        title: "Estimation & Cost-Benefit Analysis",
        detail:
          "We review cost versus value early, so decisions support budget control and better project planning.",
      },
      {
        title: "Cost Overrun Protection",
        detail:
          "We reduce unexpected cost growth through proper planning, coordination, and early stage control.",
      },
      {
        title: "Construction Execution",
        detail:
          "We carry out the work on site in a structured and disciplined manner.",
      },
      {
        title: "Checklist Verification",
        detail:
          "Each stage is checked before moving ahead, so small issues are corrected early.",
      },
      {
        title: "Final Handover",
        detail:
          "The project is completed and handed over with proper responsibility and documentation.",
      },
    ],
    warranty: [
      "Structural Warranty: 15 Years",
      "Workmanship Warranty: 1 Year",
    ],
    cta: "Planning a construction project? Contact Wano Projects.",
  },
  {
    slug: "interiors",
    image: "/images/services/interiors.jpg",
    title: "Wano Interiors",
    heroHeading: "Interiors Designed for Practical Living",
    heroSubheading:
      "Functional, coordinated, and well-planned interior solutions that improve comfort, usability, and aesthetics.",
    shortContent: [
      "Wano Interiors focuses on creating spaces that are practical, comfortable, and visually appealing. We combine design, functionality, material selection, and execution planning to deliver interiors that work well in everyday life.",
    ],
    listHeading: "Our services include:",
    listItems: [
      "Modular Kitchen",
      "Bedroom Interiors",
      "Living Room Design",
      "False Ceiling",
      "TV Units",
      "Wardrobes",
      "Storage Solutions",
      "Customized Interior Works",
    ],
    warranty: ["Workmanship Warranty Available on Interior Execution"],
  },
  {
    slug: "renovation",
    image: "/images/services/renovation.jpg",
    title: "Wano Renovation",
    heroHeading: "Renovation Planned with Care and Engineering",
    heroSubheading:
      "Upgrade, repair, strengthen, and transform existing buildings through a structured renovation process.",
    shortContent: [
      "Wano Renovation helps improve existing homes and buildings through proper assessment, planning, and execution. Whether it is modernization, structural strengthening, space modification, or complete renovation, we focus on improving functionality, safety, and appearance.",
    ],
    listHeading: "Our services include:",
    listItems: [
      "House Renovation",
      "Structural Strengthening",
      "Building Extension",
      "Layout Modification",
      "Interior Upgrades",
      "Waterproofing Solutions",
      "Repair and Rehabilitation",
      "Building Modernization",
    ],
    extraSections: [
      {
        heading: "Why It Matters",
        body: "Renovation is more than replacing finishes. Existing buildings require careful evaluation before changes are made. Proper planning helps avoid hidden issues, unnecessary costs, and execution problems.",
      },
      {
        heading: "Our Approach",
        body: "We first understand the building condition and renovation goals. Based on the findings, we develop a practical renovation plan that balances safety, functionality, aesthetics, and budget.",
      },
    ],
    workflowSimple:
      "Building Assessment → Renovation Planning → Design Coordination → Estimation & Cost Analysis → Renovation Execution → Quality Verification → Final Handover",
    warranty: [
      "Structural Warranty: Up to 15 Years (where applicable)",
      "Workmanship Warranty: 1 Year",
    ],
    cta: "Planning to renovate your home or building? Contact Wano Projects.",
  },
  {
    slug: "pmc",
    image: "/images/services/pmc.jpg",
    title: "Wano PMC",
    heroHeading: "Professional Project Management for Better Project Control",
    heroSubheading:
      "Technical supervision, coordination, and monitoring to keep your project on track.",
    shortContent: [
      "Wano PMC (Project Management Consultancy) helps clients manage construction projects through structured planning, monitoring, quality checks, and coordination.",
      "We act as the client's technical representative to ensure the project follows approved plans, quality standards, budget expectations, and timelines.",
    ],
    listHeading: "Our services include:",
    listItems: [
      "Project Planning",
      "Technical Supervision",
      "Quality Monitoring",
      "Contractor Coordination",
      "Progress Tracking",
      "Material Verification",
      "Cost Monitoring",
      "Project Reporting",
    ],
    workflowSimple:
      "Project Review → Planning → Site Monitoring → Quality Checks → Progress Tracking → Coordination → Reporting → Project Completion",
    extraSections: [
      {
        heading: "Benefits",
        body: [
          "Independent technical oversight",
          "Better quality control",
          "Improved project coordination",
          "Reduced project risk",
          "Better control over cost and timeline",
        ],
      },
    ],
    cta: "Need professional supervision for your project? Contact Wano Projects.",
  },
  {
    slug: "estimation",
    image: "/images/services/estimation.jpg",
    title: "Wano Estimation & Cost Benefit Analysis",
    heroHeading: "Build with Better Cost Control",
    heroSubheading:
      "Detailed estimation and cost-benefit analysis to support informed decisions before construction begins.",
    shortContent: [
      "Wano Estimation & Cost Benefit Analysis helps clients understand project costs before execution starts. By evaluating design choices, materials, construction methods, and project requirements, we help identify practical solutions that balance cost, performance, and long-term value.",
    ],
    listHeading: "Our services include:",
    listItems: [
      "Detailed Cost Estimation",
      "BOQ (Bill of Quantities)",
      "Material Quantity Take-Off",
      "Cost Benefit Analysis",
      "Budget Planning",
      "Alternative Solution Evaluation",
      "Cost Optimization Support",
      "Pre-Construction Cost Review",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const faqIntro =
  "Wano Projects is an engineering-driven design and construction company. This FAQ explains our services, workflow, pricing approach, warranty support, and how we handle residential, renovation, and project coordination work across Tamil Nadu.";

export const faqSections: {
  title: string;
  items: { q: string; a: string }[];
}[] = [
  {
    title: "About Wano Projects",
    items: [
      {
        q: "What is Wano Projects?",
        a: "Wano Projects is an engineering-driven design and construction company that provides architectural planning, structural design, soil investigation, MEP coordination, construction services, renovation, PMC, and structural audit services.",
      },
      {
        q: "What type of projects does Wano Projects handle?",
        a: "We handle residential buildings, renovation projects, structural strengthening work, and project coordination assignments that require disciplined engineering and execution.",
      },
      {
        q: "What makes Wano Projects different from ordinary builders?",
        a: "Wano Projects follows a complete engineering workflow, uses stage-wise checklists, and coordinates architecture, structure, MEP, and construction under one system.",
      },
      {
        q: "Why was Wano Projects started?",
        a: "Wano Projects was started to make real engineering, proper planning, and disciplined construction accessible to more people at practical market budgets.",
      },
      {
        q: "Who is Wano Projects best suited for?",
        a: "Wano Projects is suitable for homeowners, plot owners, renovation clients, B2B clients, architects, companies, NRIs, foreign clients building in Tamil Nadu, and IT professionals who want a well-managed project process.",
      },
      {
        q: "Do you provide one point of contact for the project?",
        a: "Yes. We provide one point of contact for architecture, structural design, civil execution, and MEP coordination under one system.",
      },
      {
        q: "Can Wano Projects work with architects and other professionals?",
        a: "Yes. We are suitable for B2B clients such as architects, consultants, developers, and companies that need reliable engineering and execution support.",
      },
      {
        q: "Can Wano Projects support NRIs or foreign clients?",
        a: "Yes. We can help clients living outside India manage the local project process through one structured system with clear coordination and responsibility.",
      },
    ],
  },
  {
    title: "Our Workflow",
    items: [
      {
        q: "What is the standard workflow followed by Wano Projects?",
        a: "Our standard workflow is: architectural planning, soil investigation, structural design, MEP coordination, construction planning, execution, inspection, and handover.",
      },
      {
        q: "Why do you follow a complete workflow?",
        a: "We follow a complete workflow because each stage supports the next stage. Skipping any technical stage increases the chance of rework, confusion, and cost escalation later.",
      },
      {
        q: "Do you skip stages to reduce cost?",
        a: "No. Wano Projects does not skip essential engineering stages. We believe proper planning saves more cost than shortcuts.",
      },
      {
        q: "Why is stage-wise execution important?",
        a: "Stage-wise execution helps control quality, detect issues early, and keep the project aligned with the approved plan.",
      },
      {
        q: "Do you use checklists during execution?",
        a: "Yes. Wano Projects uses stage-wise checklists to verify work and correct small issues before they become larger problems.",
      },
      {
        q: "How does your workflow reduce stress for the client?",
        a: "Because all major disciplines are coordinated under one roof, the client does not have to manage multiple people and repeated communication separately.",
      },
    ],
  },
  {
    title: "Architectural Planning",
    items: [
      {
        q: "What is architectural planning?",
        a: "Architectural planning is the process of designing the building layout, room arrangement, circulation, and practical use of space before construction begins.",
      },
      {
        q: "Why is architectural planning important?",
        a: "It helps create a building that works well in real life, not just on paper. Good planning improves comfort, usability, and coordination with structure and services.",
      },
      {
        q: "Does Wano Projects prepare plans based on client requirements?",
        a: "Yes. We study the client’s needs, plot condition, and practical usage before preparing the plan.",
      },
      {
        q: "Can architectural planning reduce project changes later?",
        a: "Yes. Proper architectural planning reduces repeated changes during construction and improves overall project control.",
      },
      {
        q: "Is architectural planning only about appearance?",
        a: "No. At Wano Projects, architectural planning is treated as a functional and technical stage that supports the entire project.",
      },
    ],
  },
  {
    title: "Structural Design",
    items: [
      {
        q: "What is structural design?",
        a: "Structural design is the engineering process of designing the building framework so it can safely carry loads and perform reliably over time.",
      },
      {
        q: "Why is structural design necessary?",
        a: "It ensures the building is safe, stable, and suitable for long-term use.",
      },
      {
        q: "Does every building need structural design?",
        a: "Yes. Every building should have proper structural design before construction starts.",
      },
      {
        q: "Can structural design be used in renovation?",
        a: "Yes. Structural design is important in renovation, strengthening, and modification projects.",
      },
      {
        q: "What elements are included in structural design?",
        a: "Structural design includes foundations, columns, beams, slabs, reinforcement detailing, and structural drawings.",
      },
      {
        q: "Do you provide structural drawings?",
        a: "Yes. Structural drawings are part of the structural design deliverables.",
      },
    ],
  },
  {
    title: "Soil Investigation",
    items: [
      {
        q: "What is soil investigation?",
        a: "Soil investigation is the process of studying the site soil condition to support safe foundation planning.",
      },
      {
        q: "Why is soil investigation important?",
        a: "It helps the design team understand the ground condition and choose the correct foundation system.",
      },
      {
        q: "What happens if soil investigation is skipped?",
        a: "Skipping soil investigation can lead to foundation mistakes, settlement problems, or unnecessary construction cost.",
      },
      {
        q: "Is soil investigation useful for all projects?",
        a: "Yes. Soil information is useful for new construction and is also helpful in certain renovation or strengthening projects.",
      },
      {
        q: "Does Wano Projects use soil data in design?",
        a: "Yes. Soil data is used to support foundation-related design decisions and improve project reliability.",
      },
    ],
  },
  {
    title: "MEP Design",
    items: [
      {
        q: "What is MEP design?",
        a: "MEP design means planning mechanical, electrical, and plumbing systems within the building.",
      },
      {
        q: "Why is MEP coordination important?",
        a: "It reduces clashes between services and helps execution happen more smoothly on site.",
      },
      {
        q: "Does Wano Projects coordinate MEP with structure and architecture?",
        a: "Yes. We coordinate MEP along with architecture and structural design to improve overall project clarity.",
      },
      {
        q: "What problems happen when MEP is not planned early?",
        a: "It can cause site conflicts, repeated changes, delays, and execution errors.",
      },
      {
        q: "Is MEP coordination needed in renovation projects?",
        a: "Yes. Renovation projects often require service changes, so MEP coordination is very useful.",
      },
    ],
  },
  {
    title: "Construction Services",
    items: [
      {
        q: "What does Wano Projects’ construction service include?",
        a: "Our construction service includes structured site execution, coordination, stage-wise checks, and project control.",
      },
      {
        q: "Do you supervise the site during construction?",
        a: "Yes. Site supervision and execution control are part of our construction process.",
      },
      {
        q: "How do you control quality during construction?",
        a: "We use stage-wise checklist verification and review work before moving to the next stage.",
      },
      {
        q: "How do you reduce rework on site?",
        a: "We complete planning properly and verify each stage carefully to avoid avoidable mistakes.",
      },
      {
        q: "Do you handle handover after construction?",
        a: "Yes. We support project completion and handover after construction is finished.",
      },
    ],
  },
  {
    title: "Renovation Services",
    items: [
      {
        q: "What is renovation?",
        a: "Renovation means improving, modifying, repairing, or strengthening an existing building.",
      },
      {
        q: "How do I know if my building needs renovation?",
        a: "A building may need renovation if it has outdated layout, visible wear, service issues, structural concerns, or functional limitations.",
      },
      {
        q: "Can an old house be renovated safely?",
        a: "Yes, but only after proper assessment and planning of the existing condition.",
      },
      {
        q: "Does Wano Projects handle both minor and major renovation?",
        a: "Yes. We handle renovation projects based on scope, condition, and technical need.",
      },
      {
        q: "Is structural checking required before renovation?",
        a: "Yes. Structural checking is important before major alterations or strengthening work.",
      },
    ],
  },
  {
    title: "PMC",
    items: [
      {
        q: "What is PMC in construction?",
        a: "PMC means Project Management Consultancy. It involves monitoring, coordination, and project control support.",
      },
      {
        q: "Why should I hire PMC?",
        a: "PMC helps keep the project aligned with plan, quality, and schedule.",
      },
      {
        q: "Is PMC separate from construction?",
        a: "Yes. PMC focuses on management and supervision, while construction focuses on execution.",
      },
      {
        q: "Can PMC help reduce confusion on site?",
        a: "Yes. PMC improves coordination between teams and helps maintain project discipline.",
      },
      {
        q: "Is PMC useful for residential projects?",
        a: "Yes. Even residential projects can benefit from better supervision and control.",
      },
    ],
  },
  {
    title: "Structural Audit",
    items: [
      {
        q: "What is a structural audit?",
        a: "A structural audit is an assessment of an existing building to understand its structural condition and safety concerns.",
      },
      {
        q: "When should structural audit be done?",
        a: "It should be done when a building is old, modified, distressed, or showing signs of structural concern.",
      },
      {
        q: "What does a structural audit help identify?",
        a: "It helps identify visible distress, possible safety issues, and areas that may need repair or strengthening.",
      },
      {
        q: "Is structural audit useful before renovation?",
        a: "Yes. It helps the owner understand the condition of the building before changing or strengthening it.",
      },
      {
        q: "Do you recommend structural audit for old buildings?",
        a: "Yes. It is strongly recommended for older buildings, especially when there are visible problems or planned modifications.",
      },
    ],
  },
  {
    title: "Pricing and Value",
    items: [
      {
        q: "Is Wano Projects a low-cost builder?",
        a: "No. Wano Projects is not positioned as a cheap builder. We are positioned as an engineering-driven company with practical market pricing.",
      },
      {
        q: "Why do you say market-aligned pricing?",
        a: "Because we aim to keep pricing practical and aligned with local market conditions while still following the required engineering workflow.",
      },
      {
        q: "Can you give one fixed sq.ft rate for all projects?",
        a: "Not always. Cost depends on project type, site condition, scope, specification level, and technical requirements.",
      },
      {
        q: "How does Wano Projects help control budget?",
        a: "We control budget through proper planning, early coordination, stage-wise checks, and reduced rework.",
      },
      {
        q: "Why do cost overruns happen in many projects?",
        a: "Cost overruns usually build up because of missed details, repeated changes, poor coordination, and rework.",
      },
      {
        q: "Is your cost same as local construction in your city?",
        a: "Our pricing is aligned with local construction cost conditions in your city, while still maintaining a complete engineering workflow.",
      },
    ],
  },
  {
    title: "Warranty and Responsibility",
    items: [
      {
        q: "What warranty does Wano Projects provide?",
        a: "Wano Projects provides 15 years structural warranty and 1 year workmanship warranty.",
      },
      {
        q: "What does the 15-year structural warranty mean?",
        a: "It means the structural components are covered under the agreed terms for long-term structural performance.",
      },
      {
        q: "What does the 1-year workmanship warranty mean?",
        a: "It covers workmanship-related issues under the agreed terms after project completion.",
      },
      {
        q: "Is warranty included in every project?",
        a: "Warranty terms are shared during the project agreement and documentation stage.",
      },
      {
        q: "Why is warranty important?",
        a: "Warranty reflects responsibility, accountability, and long-term support after handover.",
      },
    ],
  },
  {
    title: "Client Experience",
    items: [
      {
        q: "Do I need to coordinate with multiple consultants myself?",
        a: "No. Wano Projects brings the required disciplines under one system to reduce client stress.",
      },
      {
        q: "How does Wano Projects reduce project confusion?",
        a: "We coordinate planning, design, and execution internally so the project stays aligned.",
      },
      {
        q: "Can you help me if I do not know where to start?",
        a: "Yes. We can review your requirement and guide you to the correct service or sequence.",
      },
      {
        q: "Is your approach suitable for first-time homeowners?",
        a: "Yes. Our structured workflow is especially useful for first-time homeowners who want clarity and control.",
      },
      {
        q: "Do you work only on large projects?",
        a: "No. We work on practical residential and renovation projects as well.",
      },
    ],
  },
  {
    title: "One Point Contact",
    items: [
      {
        q: "Why is one point of contact useful?",
        a: "It reduces confusion and makes communication easier because the client does not need to handle separate consultants one by one.",
      },
      {
        q: "What does “one call for all engineers” mean?",
        a: "It means architecture, structural design, civil execution, and MEP coordination can be handled through one integrated system.",
      },
      {
        q: "How does one point contact help NRIs and foreign clients?",
        a: "It makes remote project coordination easier because the client can depend on one structured system instead of managing multiple parties directly.",
      },
      {
        q: "Is this useful for B2B clients too?",
        a: "Yes. Architects, consultants, developers, and companies can benefit from one coordinated technical partner.",
      },
    ],
  },
  {
    title: "Service Coverage and Audience",
    items: [
      {
        q: "Do you work across Tamil Nadu?",
        a: "Yes. Our pricing and workflow are designed for local market conditions across Tamil Nadu.",
      },
      {
        q: "Can you support projects at practical local budgets?",
        a: "Yes. We aim to deliver proper engineering workflow at practical market budgets.",
      },
      {
        q: "Is Wano Projects suitable for professional clients?",
        a: "Yes. Our structured approach suits homeowners, builders, B2B clients, and professionals who want reliable coordination.",
      },
      {
        q: "Can Wano Projects be used as a technical partner for other firms?",
        a: "Yes. We can support architects, consultants, and companies that need coordinated engineering and execution support.",
      },
      {
        q: "Do you support foreign clients building in Tamil Nadu?",
        a: "Yes. We are suitable for foreign clients who want a dependable team to manage local building work.",
      },
    ],
  },
];
