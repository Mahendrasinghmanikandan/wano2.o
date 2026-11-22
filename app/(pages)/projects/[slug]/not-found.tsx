import Link from "next/link";
import { PrimaryButton } from "@/app/component/Buttons";

const ProjectNotFound = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 py-20 text-center">
      <h1 className="text-3xl font-bold uppercase text-primary-color">
        Project Not Found
      </h1>
      <p className="text-primary-color/80 max-w-md leading-relaxed">
        This case study does not exist. Browse our completed projects or contact
        us about your requirement.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/projects">
          <PrimaryButton text="View All Projects" />
        </Link>
        <Link href="/contact">
          <PrimaryButton text="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectNotFound;
