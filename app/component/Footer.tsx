import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Wano", href: "/why-wano" },
  { label: "FAQ", href: "/faq" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <section className="w-full relative overflow-hidden rounded-2xl bg-[#f4efe9] px-6 py-12 md:px-10 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, #212c00 0, #212c00 1px, transparent 1px, transparent 28px)",
        }}
      />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold uppercase">Wano Projects</h2>
          <p className="pt-2 leading-loose text-primary-color/80">
            Structured building solutions from planning to handover, with a
            focus on engineering quality and responsible execution.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-primary-color/90 transition-colors duration-300 hover:text-secondary-color"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 border-t border-primary-color/15 pt-4 text-sm text-primary-color/70">
        © {new Date().getFullYear()} Wano Projects. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
