import { notFound } from "next/navigation";
import ServicePageLayout from "@/app/component/ServicePageLayout";
import {
  getServiceBySlug,
  SERVICES,
  type ServicePageData,
} from "@/app/helper/servicesData";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Wano Projects" };

  return {
    title: `${service.pageTitle} | Wano Projects`,
    description: service.heroSubheading,
  };
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageLayout service={service as ServicePageData} />;
};

export default ServiceDetailPage;
