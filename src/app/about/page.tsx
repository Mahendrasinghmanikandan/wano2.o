import type { Metadata } from "next";
import AboutPageView from "@/components/about/AboutPageView";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Why Wano Projects started — real engineering under one roof, structured planning, and disciplined construction at practical market budgets across Tamil Nadu.",
  openGraph: {
    title: `About Us | ${site.name}`,
    description:
      "All under one roof: architecture, structure, MEP, and construction coordinated as one system.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageView />
    </main>
  );
}
