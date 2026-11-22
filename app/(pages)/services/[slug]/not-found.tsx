import Link from "next/link";
import { PrimaryButton } from "@/app/component/Buttons";

const ServiceNotFound = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 py-20 text-center">
      <h1 className="text-3xl font-bold uppercase text-primary-color">
        Service Not Found
      </h1>
      <p className="text-primary-color/80 max-w-md leading-relaxed">
        The service you are looking for does not exist. Browse our specialised
        services or contact us for guidance.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/services">
          <PrimaryButton text="View All Services" />
        </Link>
        <Link href="/contact">
          <PrimaryButton text="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceNotFound;
