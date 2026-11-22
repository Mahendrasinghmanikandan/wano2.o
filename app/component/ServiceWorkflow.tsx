import type { WorkflowStep } from "@/app/helper/servicesData";

type ServiceWorkflowProps = {
  steps: WorkflowStep[];
  title?: string;
};

const ServiceWorkflow = ({
  steps,
  title = "Project Workflow",
}: ServiceWorkflowProps) => {
  return (
    <section className="w-full rounded-2xl border border-primary-color/10 bg-white p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
        Mind Map
      </p>
      <h2 className="pt-2 text-2xl md:text-3xl font-bold uppercase text-primary-color leading-tight">
        {title}
      </h2>
      <p className="pt-2 leading-loose text-primary-color/80 max-w-3xl">
        Each stage connects to the next so planning, technical work, and
        execution stay aligned from start to handover.
      </p>

      <div className="pt-8 relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-primary-color/30 via-primary-color/15 to-transparent lg:block"
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={`relative rounded-xl border border-primary-color/15 bg-secondary-color/50 px-5 py-5 transition-all duration-300 hover:border-primary-color/30 hover:bg-[#f4efe9] hover:-translate-y-0.5 ${
                index % 2 === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-color text-secondary-color text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-primary-color leading-snug">
                    {step.title}
                  </h3>
                  <p className="pt-2 text-sm leading-relaxed text-primary-color/85">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -bottom-3 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-primary-color/25 md:block lg:hidden"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ServiceWorkflow;
