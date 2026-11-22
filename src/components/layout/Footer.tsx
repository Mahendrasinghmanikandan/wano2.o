import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import { navLinks, servicesNav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="section-pad grid gap-10 py-14 md:grid-cols-3">
        <div>
          <BrandLogo height={48} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Explore</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-concrete hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Services</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {servicesNav.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm text-concrete hover:text-foreground">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section-pad border-t border-line py-5 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Engineered buildings, built the right way.
      </div>
    </footer>
  );
}
