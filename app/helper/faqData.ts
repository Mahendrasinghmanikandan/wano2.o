export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  number: string;
  title: string;
  items: FaqItem[];
};

export const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "about-wano",
    number: "01",
    title: "About Wano Projects",
    items: [
      {
        id: 1,
        question: "What is Wano Projects?",
        answer:
          "Wano Projects is an engineering-driven design and construction company that provides architectural planning, structural design, soil investigation, MEP coordination, construction services, renovation, PMC, and structural audit services.",
      },
      {
        id: 2,
        question: "What type of projects does Wano Projects handle?",
        answer:
          "We handle residential buildings, renovation projects, structural strengthening work, and project coordination assignments that require disciplined engineering and execution.",
      },
      {
        id: 3,
        question: "What makes Wano Projects different from ordinary builders?",
        answer:
          "Wano Projects follows a complete engineering workflow, uses stage-wise checklists, and coordinates architecture, structure, MEP, and construction under one system.",
      },
      {
        id: 4,
        question: "Why was Wano Projects started?",
        answer:
          "Wano Projects was started to make real engineering, proper planning, and disciplined construction accessible to more people at practical market budgets.",
      },
      {
        id: 5,
        question: "Who is Wano Projects best suited for?",
        answer:
          "Wano Projects is suitable for homeowners, plot owners, renovation clients, B2B clients, architects, companies, NRIs, foreign clients building in Tamil Nadu, and IT professionals who want a well-managed project process.",
      },
      {
        id: 6,
        question: "Do you provide one point of contact for the project?",
        answer:
          "Yes. We provide one point of contact for architecture, structural design, civil execution, and MEP coordination under one system.",
      },
      {
        id: 7,
        question: "Can Wano Projects work with architects and other professionals?",
        answer:
          "Yes. We are suitable for B2B clients such as architects, consultants, developers, and companies that need reliable engineering and execution support.",
      },
      {
        id: 8,
        question: "Can Wano Projects support NRIs or foreign clients?",
        answer:
          "Yes. We can help clients living outside India manage the local project process through one structured system with clear coordination and responsibility.",
      },
    ],
  },
  {
    id: "workflow",
    number: "02",
    title: "Our Workflow",
    items: [
      {
        id: 9,
        question: "What is the standard workflow followed by Wano Projects?",
        answer:
          "Our standard workflow is: architectural planning, soil investigation, structural design, MEP coordination, construction planning, execution, inspection, and handover.",
      },
      {
        id: 10,
        question: "Why do you follow a complete workflow?",
        answer:
          "We follow a complete workflow because each stage supports the next stage. Skipping any technical stage increases the chance of rework, confusion, and cost escalation later.",
      },
      {
        id: 11,
        question: "Do you skip stages to reduce cost?",
        answer:
          "No. Wano Projects does not skip essential engineering stages. We believe proper planning saves more cost than shortcuts.",
      },
      {
        id: 12,
        question: "Why is stage-wise execution important?",
        answer:
          "Stage-wise execution helps control quality, detect issues early, and keep the project aligned with the approved plan.",
      },
      {
        id: 13,
        question: "Do you use checklists during execution?",
        answer:
          "Yes. Wano Projects uses stage-wise checklists to verify work and correct small issues before they become larger problems.",
      },
      {
        id: 14,
        question: "How does your workflow reduce stress for the client?",
        answer:
          "Because all major disciplines are coordinated under one roof, the client does not have to manage multiple people and repeated communication separately.",
      },
    ],
  },
  {
    id: "architectural-planning",
    number: "03",
    title: "Architectural Planning",
    items: [
      {
        id: 15,
        question: "What is architectural planning?",
        answer:
          "Architectural planning is the process of designing the building layout, room arrangement, circulation, and practical use of space before construction begins.",
      },
      {
        id: 16,
        question: "Why is architectural planning important?",
        answer:
          "It helps create a building that works well in real life, not just on paper. Good planning improves comfort, usability, and coordination with structure and services.",
      },
      {
        id: 17,
        question: "Does Wano Projects prepare plans based on client requirements?",
        answer:
          "Yes. We study the client's needs, plot condition, and practical usage before preparing the plan.",
      },
      {
        id: 18,
        question: "Can architectural planning reduce project changes later?",
        answer:
          "Yes. Proper architectural planning reduces repeated changes during construction and improves overall project control.",
      },
      {
        id: 19,
        question: "Is architectural planning only about appearance?",
        answer:
          "No. At Wano Projects, architectural planning is treated as a functional and technical stage that supports the entire project.",
      },
    ],
  },
  {
    id: "structural-design",
    number: "04",
    title: "Structural Design",
    items: [
      {
        id: 20,
        question: "What is structural design?",
        answer:
          "Structural design is the engineering process of designing the building framework so it can safely carry loads and perform reliably over time.",
      },
      {
        id: 21,
        question: "Why is structural design necessary?",
        answer:
          "It ensures the building is safe, stable, and suitable for long-term use.",
      },
      {
        id: 22,
        question: "Does every building need structural design?",
        answer:
          "Yes. Every building should have proper structural design before construction starts.",
      },
      {
        id: 23,
        question: "Can structural design be used in renovation?",
        answer:
          "Yes. Structural design is important in renovation, strengthening, and modification projects.",
      },
      {
        id: 24,
        question: "What elements are included in structural design?",
        answer:
          "Structural design includes foundations, columns, beams, slabs, reinforcement detailing, and structural drawings.",
      },
      {
        id: 25,
        question: "Do you provide structural drawings?",
        answer:
          "Yes. Structural drawings are part of the structural design deliverables.",
      },
    ],
  },
  {
    id: "soil-investigation",
    number: "05",
    title: "Soil Investigation",
    items: [
      {
        id: 26,
        question: "What is soil investigation?",
        answer:
          "Soil investigation is the process of studying the site soil condition to support safe foundation planning.",
      },
      {
        id: 27,
        question: "Why is soil investigation important?",
        answer:
          "It helps the design team understand the ground condition and choose the correct foundation system.",
      },
      {
        id: 28,
        question: "What happens if soil investigation is skipped?",
        answer:
          "Skipping soil investigation can lead to foundation mistakes, settlement problems, or unnecessary construction cost.",
      },
      {
        id: 29,
        question: "Is soil investigation useful for all projects?",
        answer:
          "Yes. Soil information is useful for new construction and is also helpful in certain renovation or strengthening projects.",
      },
      {
        id: 30,
        question: "Does Wano Projects use soil data in design?",
        answer:
          "Yes. Soil data is used to support foundation-related design decisions and improve project reliability.",
      },
    ],
  },
  {
    id: "mep-design",
    number: "06",
    title: "MEP Design",
    items: [
      {
        id: 31,
        question: "What is MEP design?",
        answer:
          "MEP design means planning mechanical, electrical, and plumbing systems within the building.",
      },
      {
        id: 32,
        question: "Why is MEP coordination important?",
        answer:
          "It reduces clashes between services and helps execution happen more smoothly on site.",
      },
      {
        id: 33,
        question: "Does Wano Projects coordinate MEP with structure and architecture?",
        answer:
          "Yes. We coordinate MEP along with architecture and structural design to improve overall project clarity.",
      },
      {
        id: 34,
        question: "What problems happen when MEP is not planned early?",
        answer:
          "It can cause site conflicts, repeated changes, delays, and execution errors.",
      },
      {
        id: 35,
        question: "Is MEP coordination needed in renovation projects?",
        answer:
          "Yes. Renovation projects often require service changes, so MEP coordination is very useful.",
      },
    ],
  },
  {
    id: "construction-services",
    number: "07",
    title: "Construction Services",
    items: [
      {
        id: 36,
        question: "What does Wano Projects' construction service include?",
        answer:
          "Our construction service includes structured site execution, coordination, stage-wise checks, and project control.",
      },
      {
        id: 37,
        question: "Do you supervise the site during construction?",
        answer:
          "Yes. Site supervision and execution control are part of our construction process.",
      },
      {
        id: 38,
        question: "How do you control quality during construction?",
        answer:
          "We use stage-wise checklist verification and review work before moving to the next stage.",
      },
      {
        id: 39,
        question: "How do you reduce rework on site?",
        answer:
          "We complete planning properly and verify each stage carefully to avoid avoidable mistakes.",
      },
      {
        id: 40,
        question: "Do you handle handover after construction?",
        answer:
          "Yes. We support project completion and handover after construction is finished.",
      },
    ],
  },
  {
    id: "renovation-services",
    number: "08",
    title: "Renovation Services",
    items: [
      {
        id: 41,
        question: "What is renovation?",
        answer:
          "Renovation means improving, modifying, repairing, or strengthening an existing building.",
      },
      {
        id: 42,
        question: "How do I know if my building needs renovation?",
        answer:
          "A building may need renovation if it has outdated layout, visible wear, service issues, structural concerns, or functional limitations.",
      },
      {
        id: 43,
        question: "Can an old house be renovated safely?",
        answer:
          "Yes, but only after proper assessment and planning of the existing condition.",
      },
      {
        id: 44,
        question: "Does Wano Projects handle both minor and major renovation?",
        answer:
          "Yes. We handle renovation projects based on scope, condition, and technical need.",
      },
      {
        id: 45,
        question: "Is structural checking required before renovation?",
        answer:
          "Yes. Structural checking is important before major alterations or strengthening work.",
      },
    ],
  },
  {
    id: "pmc",
    number: "09",
    title: "PMC",
    items: [
      {
        id: 46,
        question: "What is PMC in construction?",
        answer:
          "PMC means Project Management Consultancy. It involves monitoring, coordination, and project control support.",
      },
      {
        id: 47,
        question: "Why should I hire PMC?",
        answer:
          "PMC helps keep the project aligned with plan, quality, and schedule.",
      },
      {
        id: 48,
        question: "Is PMC separate from construction?",
        answer:
          "Yes. PMC focuses on management and supervision, while construction focuses on execution.",
      },
      {
        id: 49,
        question: "Can PMC help reduce confusion on site?",
        answer:
          "Yes. PMC improves coordination between teams and helps maintain project discipline.",
      },
      {
        id: 50,
        question: "Is PMC useful for residential projects?",
        answer:
          "Yes. Even residential projects can benefit from better supervision and control.",
      },
    ],
  },
  {
    id: "structural-audit",
    number: "10",
    title: "Structural Audit",
    items: [
      {
        id: 51,
        question: "What is a structural audit?",
        answer:
          "A structural audit is an assessment of an existing building to understand its structural condition and safety concerns.",
      },
      {
        id: 52,
        question: "When should structural audit be done?",
        answer:
          "It should be done when a building is old, modified, distressed, or showing signs of structural concern.",
      },
      {
        id: 53,
        question: "What does a structural audit help identify?",
        answer:
          "It helps identify visible distress, possible safety issues, and areas that may need repair or strengthening.",
      },
      {
        id: 54,
        question: "Is structural audit useful before renovation?",
        answer:
          "Yes. It helps the owner understand the condition of the building before changing or strengthening it.",
      },
      {
        id: 55,
        question: "Do you recommend structural audit for old buildings?",
        answer:
          "Yes. It is strongly recommended for older buildings, especially when there are visible problems or planned modifications.",
      },
    ],
  },
  {
    id: "pricing-and-value",
    number: "11",
    title: "Pricing and Value",
    items: [
      {
        id: 56,
        question: "Is Wano Projects a low-cost builder?",
        answer:
          "No. Wano Projects is not positioned as a cheap builder. We are positioned as an engineering-driven company with practical market pricing.",
      },
      {
        id: 57,
        question: "Why do you say market-aligned pricing?",
        answer:
          "Because we aim to keep pricing practical and aligned with local market conditions while still following the required engineering workflow.",
      },
      {
        id: 58,
        question: "Can you give one fixed sq.ft rate for all projects?",
        answer:
          "Not always. Cost depends on project type, site condition, scope, specification level, and technical requirements.",
      },
      {
        id: 59,
        question: "How does Wano Projects help control budget?",
        answer:
          "We control budget through proper planning, early coordination, stage-wise checks, and reduced rework.",
      },
      {
        id: 60,
        question: "Why do cost overruns happen in many projects?",
        answer:
          "Cost overruns usually build up because of missed details, repeated changes, poor coordination, and rework.",
      },
      {
        id: 61,
        question: "Is your cost same as local construction in your city?",
        answer:
          "Our pricing is aligned with local construction cost conditions in your city, while still maintaining a complete engineering workflow.",
      },
    ],
  },
  {
    id: "warranty",
    number: "12",
    title: "Warranty and Responsibility",
    items: [
      {
        id: 62,
        question: "What warranty does Wano Projects provide?",
        answer:
          "Wano Projects provides 15 years structural warranty and 1 year workmanship warranty.",
      },
      {
        id: 63,
        question: "What does the 15-year structural warranty mean?",
        answer:
          "It means the structural components are covered under the agreed terms for long-term structural performance.",
      },
      {
        id: 64,
        question: "What does the 1-year workmanship warranty mean?",
        answer:
          "It covers workmanship-related issues under the agreed terms after project completion.",
      },
      {
        id: 65,
        question: "Is warranty included in every project?",
        answer:
          "Warranty terms are shared during the project agreement and documentation stage.",
      },
      {
        id: 66,
        question: "Why is warranty important?",
        answer:
          "Warranty reflects responsibility, accountability, and long-term support after handover.",
      },
    ],
  },
  {
    id: "client-experience",
    number: "13",
    title: "Client Experience",
    items: [
      {
        id: 67,
        question: "Do I need to coordinate with multiple consultants myself?",
        answer:
          "No. Wano Projects brings the required disciplines under one system to reduce client stress.",
      },
      {
        id: 68,
        question: "How does Wano Projects reduce project confusion?",
        answer:
          "We coordinate planning, design, and execution internally so the project stays aligned.",
      },
      {
        id: 69,
        question: "Can you help me if I do not know where to start?",
        answer:
          "Yes. We can review your requirement and guide you to the correct service or sequence.",
      },
      {
        id: 70,
        question: "Is your approach suitable for first-time homeowners?",
        answer:
          "Yes. Our structured workflow is especially useful for first-time homeowners who want clarity and control.",
      },
      {
        id: 71,
        question: "Do you work only on large projects?",
        answer:
          "No. We work on practical residential and renovation projects as well.",
      },
    ],
  },
  {
    id: "one-point-contact",
    number: "14",
    title: "One Point Contact / Stress-Free Coordination",
    items: [
      {
        id: 72,
        question: "Why is one point of contact useful?",
        answer:
          "It reduces confusion and makes communication easier because the client does not need to handle separate consultants one by one.",
      },
      {
        id: 73,
        question: 'What does "one call for all engineers" mean?',
        answer:
          "It means architecture, structural design, civil execution, and MEP coordination can be handled through one integrated system.",
      },
      {
        id: 74,
        question: "How does one point contact help NRIs and foreign clients?",
        answer:
          "It makes remote project coordination easier because the client can depend on one structured system instead of managing multiple parties directly.",
      },
      {
        id: 75,
        question: "Is this useful for B2B clients too?",
        answer:
          "Yes. Architects, consultants, developers, and companies can benefit from one coordinated technical partner.",
      },
    ],
  },
  {
    id: "service-coverage",
    number: "15",
    title: "Service Coverage and Audience",
    items: [
      {
        id: 76,
        question: "Do you work across Tamil Nadu?",
        answer:
          "Yes. Our pricing and workflow are designed for local market conditions across Tamil Nadu.",
      },
      {
        id: 77,
        question: "Can you support projects at practical local budgets?",
        answer:
          "Yes. We aim to deliver proper engineering workflow at practical market budgets.",
      },
      {
        id: 78,
        question: "Is Wano Projects suitable for professional clients?",
        answer:
          "Yes. Our structured approach suits homeowners, builders, B2B clients, and professionals who want reliable coordination.",
      },
      {
        id: 79,
        question: "Can Wano Projects be used as a technical partner for other firms?",
        answer:
          "Yes. We can support architects, consultants, and companies that need coordinated engineering and execution support.",
      },
      {
        id: 80,
        question: "Do you support foreign clients building in Tamil Nadu?",
        answer:
          "Yes. We are suitable for foreign clients who want a dependable team to manage local building work.",
      },
    ],
  },
];
