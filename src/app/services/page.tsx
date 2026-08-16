import type { Metadata } from "next";
import ServicesIndexView from "@/components/services/ServicesIndexView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wano Projects services: architecture, structural design, MEP, construction, interiors, renovation, PMC, and estimation — one structured workflow.",
};

export default function ServicesIndexPage() {
  return (
    <main>
      <ServicesIndexView />
    </main>
  );
}
