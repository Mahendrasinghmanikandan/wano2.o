import { notFound } from "next/navigation";
import ProjectPageLayout from "@/app/component/ProjectPageLayout";
import {
  getProjectBySlug,
  PROJECTS,
  type ProjectPageData,
} from "@/app/helper/projectsData";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project | Wano Projects" };

  return {
    title: `${project.title} | Wano Projects`,
    description: project.shortDescription,
  };
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageLayout project={project as ProjectPageData} />;
};

export default ProjectDetailPage;
