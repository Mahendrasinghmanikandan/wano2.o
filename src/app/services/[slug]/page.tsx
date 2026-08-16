import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageView from "@/components/services/ServicePageView";
import { getService, services, site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.heroSubheading,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.heroSubheading,
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return (
    <main>
      <ServicePageView service={service} />
    </main>
  );
}
