import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import {
  AboutTeaser,
  ArchitectureGallery,
  BelowHeroCopy,
  ClosingSection,
  ProjectsSection,
  ServicesPreview,
  WarrantySection,
} from "@/components/home/HomeSections";
import { home, site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | ${home.heroTitle}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${home.heroTitle}`,
    description: site.description,
  },
};

function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.description,
    url: site.url,
    logo: `${site.url}/wano-logo.png`,
    areaServed: "Tamil Nadu, India",
    slogan: home.heroTitle,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <main>
      <OrgJsonLd />
      <HomeHero />
      <BelowHeroCopy />
      <AboutTeaser />
      <ArchitectureGallery />
      <ServicesPreview />
      <ProjectsSection />
      <WarrantySection />
      <ClosingSection />
    </main>
  );
}
