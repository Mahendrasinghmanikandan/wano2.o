import type { Metadata } from "next";
import FaqPageView from "@/components/faq/FaqPageView";
import { faqIntro, faqSections, site } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: faqIntro,
  openGraph: {
    title: `FAQ | ${site.name}`,
    description: faqIntro,
  },
};

function FaqJsonLd() {
  const mainEntity = faqSections.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqPage() {
  return (
    <main>
      <FaqJsonLd />
      <FaqPageView />
    </main>
  );
}
