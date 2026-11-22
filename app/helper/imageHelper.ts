function placeholder(seed: string, width = 1200, height = 800): string {
  return `https://picsum.photos/seed/wano-${seed}/${width}/${height}`;
}

export const IMAGE_HELPER = {
  PLACEHOLDER_GENERIC: placeholder("generic"),

  HOME_HERO_LEFT_IMAGE:
    "https://images.pexels.com/photos/36598794/pexels-photo-36598794.png",
  HOME_ENGINEERING_BANNER:
    "https://images.pexels.com/photos/34277650/pexels-photo-34277650.jpeg",
  HOME_PHILOSOPHY_SIDE:
    "https://images.pexels.com/photos/8186477/pexels-photo-8186477.jpeg",
  HOME_DIFFERENTIATORS:
    "https://images.pexels.com/photos/30050827/pexels-photo-30050827.jpeg",
  HOME_SERVICE_ARCHITECTURAL_PLANNING:
    "https://images.pexels.com/photos/7027775/pexels-photo-7027775.jpeg",
  HOME_SERVICE_SOIL_INVESTIGATION:
    "https://images.pexels.com/photos/34764055/pexels-photo-34764055.jpeg",
  HOME_SERVICE_STRUCTURAL_DESIGN:
    "https://images.pexels.com/photos/276572/pexels-photo-276572.jpeg",
  HOME_SERVICE_MEP:
    "https://images.pexels.com/photos/34717351/pexels-photo-34717351.jpeg",
  HOME_SERVICE_CONSTRUCTION:
    "https://images.pexels.com/photos/7098014/pexels-photo-7098014.jpeg",
  HOME_SERVICE_RENOVATION:
    "https://images.pexels.com/photos/10847178/pexels-photo-10847178.jpeg",

  HOME_WARRANTY:
    "https://images.pexels.com/photos/8186478/pexels-photo-8186478.jpeg",
  HOME_WORKFLOW:
    "https://images.pexels.com/photos/8186478/pexels-photo-8186478.jpeg",
  HOME_CONSTRUCTION_PHASE_SITE: placeholder("home-phase-site", 600, 380),
  HOME_CONSTRUCTION_PHASE_STRUCTURE:
    "https://images.pexels.com/photos/8186478/pexels-photo-8186478.jpeg",
  HOME_CONSTRUCTION_PHASE_MEP:
    "https://images.pexels.com/photos/8186478/pexels-photo-8186478.jpeg",
  HOME_CONSTRUCTION_PHASE_HANDOVER:
    "https://images.pexels.com/photos/8186478/pexels-photo-8186478.jpeg",
  HOME_FAQ:
    "https://images.pexels.com/photos/8186478/pexels-photo-8186478.jpeg",
  HOME_CTA:
    "https://images.pexels.com/photos/8186478/pexels-photo-8186478.jpeg",

  // —— Projects ——
  PROJECTS_HERO:
    "https://images.pexels.com/photos/35189676/pexels-photo-35189676.jpeg",
  PROJECT_G3_RESIDENTIAL_TENKASI:
    "https://images.pexels.com/photos/36389506/pexels-photo-36389506.jpeg",
  PROJECTS_CTA:
    "https://images.pexels.com/photos/12359215/pexels-photo-12359215.jpeg",

  // —— Services (listing) ——
  SERVICES_HERO:
    "https://images.pexels.com/photos/34208339/pexels-photo-34208339.jpeg",
  SERVICES_WORKFLOW_BANNER:
    "https://images.pexels.com/photos/18285942/pexels-photo-18285942.jpeg",
  SERVICE_ARCHITECTURAL_PLANNING:
    "https://images.pexels.com/photos/7546716/pexels-photo-7546716.jpeg",
  SERVICE_STRUCTURAL_DESIGN:
    "https://images.pexels.com/photos/36745201/pexels-photo-36745201.jpeg",
  SERVICE_MEP_DESIGN_COORDINATION: placeholder("service-mep", 1000, 650),
  SERVICE_CONSTRUCTION_SERVICES: placeholder("service-construction", 1000, 650),
  SERVICE_RENOVATION_SERVICES: placeholder("service-renovation", 1000, 650),
  SERVICE_PMC: placeholder("service-pmc", 1000, 650),
  SERVICE_STRUCTURAL_AUDIT: placeholder("service-audit", 1000, 650),

  // —— Why Wano ——
  WHY_WANO_HERO:
    "https://images.pexels.com/photos/18470963/pexels-photo-18470963.jpeg",
  WHY_WANO_PROBLEM_01:
    "https://images.pexels.com/photos/18470963/pexels-photo-18470963.jpeg",
  WHY_WANO_PROBLEM_02:
    "https://images.pexels.com/photos/18470963/pexels-photo-18470963.jpeg",
  WHY_WANO_PROBLEM_03:
    "https://images.pexels.com/photos/18470963/pexels-photo-18470963.jpeg",
  WHY_WANO_PROBLEM_04:
    "https://images.pexels.com/photos/18470963/pexels-photo-18470963.jpeg",
  WHY_WANO_PROBLEM_05:
    "https://images.pexels.com/photos/18470963/pexels-photo-18470963.jpeg",
  WHY_WANO_BEST_FOR:
    "https://images.pexels.com/photos/18470963/pexels-photo-18470963.jpeg",

  // —— FAQ ——
  FAQ_HERO:
    "https://images.pexels.com/photos/12277201/pexels-photo-12277201.jpeg",
  FAQ_BROWSE_TOPICS:
    "https://images.pexels.com/photos/32791637/pexels-photo-32791637.jpeg",
  FAQ_SECTION_ABOUT_WANO: placeholder("faq-about-wano", 700, 450),
  FAQ_SECTION_WORKFLOW: placeholder("faq-workflow", 700, 450),
  FAQ_SECTION_ARCHITECTURAL_PLANNING: placeholder(
    "faq-architectural",
    700,
    450,
  ),
  FAQ_SECTION_STRUCTURAL_DESIGN: placeholder("faq-structural", 700, 450),
  FAQ_SECTION_SOIL_INVESTIGATION: placeholder("faq-soil", 700, 450),
  FAQ_SECTION_MEP_DESIGN: placeholder("faq-mep", 700, 450),
  FAQ_SECTION_CONSTRUCTION_SERVICES: placeholder("faq-construction", 700, 450),
  FAQ_SECTION_RENOVATION_SERVICES: placeholder("faq-renovation", 700, 450),
  FAQ_SECTION_PMC: placeholder("faq-pmc", 700, 450),
  FAQ_SECTION_STRUCTURAL_AUDIT: placeholder("faq-audit", 700, 450),
  FAQ_SECTION_PRICING_AND_VALUE: placeholder("faq-pricing", 700, 450),
  FAQ_SECTION_WARRANTY: placeholder("faq-warranty", 700, 450),
  FAQ_SECTION_CLIENT_EXPERIENCE: placeholder("faq-client", 700, 450),
  FAQ_SECTION_ONE_POINT_CONTACT: placeholder("faq-one-point", 700, 450),
  FAQ_SECTION_SERVICE_COVERAGE: placeholder("faq-coverage", 700, 450),

  // —— Contact ——
  CONTACT_HERO:
    "https://images.pexels.com/photos/12359215/pexels-photo-12359215.jpeg",
  CONTACT_FORM_SIDE:
    "https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg",
  CONTACT_FOOTER:
    "https://images.pexels.com/photos/12359215/pexels-photo-12359215.jpeg",

  // —— About ——
  ABOUT_HERO:
    "https://images.pexels.com/photos/7601077/pexels-photo-7601077.jpeg",
  ABOUT_VISION:
    "https://images.pexels.com/photos/11414429/pexels-photo-11414429.jpeg",
  ABOUT_MISSION:
    "https://images.pexels.com/photos/5883723/pexels-photo-5883723.jpeg",
  ABOUT_TEAM_STRENGTH:
    "https://images.pexels.com/photos/18038065/pexels-photo-18038065.jpeg",
  ABOUT_DISCIPLINE_ARCHITECTURE:
    "https://images.pexels.com/photos/8082301/pexels-photo-8082301.jpeg",
  ABOUT_DISCIPLINE_STRUCTURAL:
    "https://images.pexels.com/photos/37192236/pexels-photo-37192236.jpeg",
  ABOUT_DISCIPLINE_MEP:
    "https://images.pexels.com/photos/20130635/pexels-photo-20130635.jpeg",
  ABOUT_DISCIPLINE_CIVIL:
    "https://images.pexels.com/photos/28272350/pexels-photo-28272350.jpeg",
  ABOUT_INTEGRATED_TEAM:
    "https://images.pexels.com/photos/10486138/pexels-photo-10486138.jpeg",
} as const;

const SERVICE_IMAGE_BY_SLUG: Record<string, string> = {
  "architectural-planning": IMAGE_HELPER.SERVICE_ARCHITECTURAL_PLANNING,
  "structural-design": IMAGE_HELPER.SERVICE_STRUCTURAL_DESIGN,
  "mep-design-coordination": IMAGE_HELPER.SERVICE_MEP_DESIGN_COORDINATION,
  "construction-services": IMAGE_HELPER.SERVICE_CONSTRUCTION_SERVICES,
  "renovation-services": IMAGE_HELPER.SERVICE_RENOVATION_SERVICES,
  pmc: IMAGE_HELPER.SERVICE_PMC,
  "structural-audit": IMAGE_HELPER.SERVICE_STRUCTURAL_AUDIT,
};

const HOME_SERVICE_IMAGE_BY_SLUG: Record<string, string> = {
  "architectural-planning": IMAGE_HELPER.HOME_SERVICE_ARCHITECTURAL_PLANNING,
  "structural-design": IMAGE_HELPER.HOME_SERVICE_STRUCTURAL_DESIGN,
  "mep-design-coordination": IMAGE_HELPER.HOME_SERVICE_MEP,
  "construction-services": IMAGE_HELPER.HOME_SERVICE_CONSTRUCTION,
  "renovation-services": IMAGE_HELPER.HOME_SERVICE_RENOVATION,
};

const PROJECT_IMAGE_BY_SLUG: Record<string, string> = {
  "g3-residential-tenkasi": IMAGE_HELPER.PROJECT_G3_RESIDENTIAL_TENKASI,
};

const WHY_WANO_PROBLEM_IMAGE_BY_NUMBER: Record<string, string> = {
  "01": IMAGE_HELPER.WHY_WANO_PROBLEM_01,
  "02": IMAGE_HELPER.WHY_WANO_PROBLEM_02,
  "03": IMAGE_HELPER.WHY_WANO_PROBLEM_03,
  "04": IMAGE_HELPER.WHY_WANO_PROBLEM_04,
  "05": IMAGE_HELPER.WHY_WANO_PROBLEM_05,
};

const FAQ_SECTION_IMAGE_BY_ID: Record<string, string> = {
  "about-wano": IMAGE_HELPER.FAQ_SECTION_ABOUT_WANO,
  workflow: IMAGE_HELPER.FAQ_SECTION_WORKFLOW,
  "architectural-planning": IMAGE_HELPER.FAQ_SECTION_ARCHITECTURAL_PLANNING,
  "structural-design": IMAGE_HELPER.FAQ_SECTION_STRUCTURAL_DESIGN,
  "soil-investigation": IMAGE_HELPER.FAQ_SECTION_SOIL_INVESTIGATION,
  "mep-design": IMAGE_HELPER.FAQ_SECTION_MEP_DESIGN,
  "construction-services": IMAGE_HELPER.FAQ_SECTION_CONSTRUCTION_SERVICES,
  "renovation-services": IMAGE_HELPER.FAQ_SECTION_RENOVATION_SERVICES,
  pmc: IMAGE_HELPER.FAQ_SECTION_PMC,
  "structural-audit": IMAGE_HELPER.FAQ_SECTION_STRUCTURAL_AUDIT,
  "pricing-and-value": IMAGE_HELPER.FAQ_SECTION_PRICING_AND_VALUE,
  warranty: IMAGE_HELPER.FAQ_SECTION_WARRANTY,
  "client-experience": IMAGE_HELPER.FAQ_SECTION_CLIENT_EXPERIENCE,
  "one-point-contact": IMAGE_HELPER.FAQ_SECTION_ONE_POINT_CONTACT,
  "service-coverage": IMAGE_HELPER.FAQ_SECTION_SERVICE_COVERAGE,
};

const ABOUT_DISCIPLINE_IMAGES = [
  IMAGE_HELPER.ABOUT_DISCIPLINE_ARCHITECTURE,
  IMAGE_HELPER.ABOUT_DISCIPLINE_STRUCTURAL,
  IMAGE_HELPER.ABOUT_DISCIPLINE_MEP,
  IMAGE_HELPER.ABOUT_DISCIPLINE_CIVIL,
] as const;

const HOME_CONSTRUCTION_PHASE_IMAGES = [
  IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_SITE,
  IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_STRUCTURE,
  IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_MEP,
  IMAGE_HELPER.HOME_CONSTRUCTION_PHASE_HANDOVER,
] as const;

export function getServiceImage(slug: string): string {
  return SERVICE_IMAGE_BY_SLUG[slug] ?? IMAGE_HELPER.PLACEHOLDER_GENERIC;
}

export function getHomeServiceImage(slug: string | null): string {
  if (!slug) return IMAGE_HELPER.HOME_SERVICE_SOIL_INVESTIGATION;
  return HOME_SERVICE_IMAGE_BY_SLUG[slug] ?? IMAGE_HELPER.PLACEHOLDER_GENERIC;
}

export function getProjectImage(slug: string): string {
  return PROJECT_IMAGE_BY_SLUG[slug] ?? IMAGE_HELPER.PLACEHOLDER_GENERIC;
}

export function getWhyWanoProblemImage(problemNumber: string): string {
  return (
    WHY_WANO_PROBLEM_IMAGE_BY_NUMBER[problemNumber] ??
    IMAGE_HELPER.PLACEHOLDER_GENERIC
  );
}

export function getFaqSectionImage(sectionId: string): string {
  return FAQ_SECTION_IMAGE_BY_ID[sectionId] ?? IMAGE_HELPER.PLACEHOLDER_GENERIC;
}

export function getHomeConstructionPhaseImage(index: number): string {
  return (
    HOME_CONSTRUCTION_PHASE_IMAGES[index] ?? IMAGE_HELPER.PLACEHOLDER_GENERIC
  );
}

export function getAboutDisciplineImage(index: number): string {
  return ABOUT_DISCIPLINE_IMAGES[index] ?? IMAGE_HELPER.PLACEHOLDER_GENERIC;
}

export const ABOUT_VALUE_IMAGES = [
  IMAGE_HELPER.ABOUT_VISION,
  IMAGE_HELPER.ABOUT_MISSION,
  IMAGE_HELPER.ABOUT_TEAM_STRENGTH,
] as const;
