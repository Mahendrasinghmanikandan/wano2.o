"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/layout/BrandLogo";
import ThemeControls from "@/components/theme/ThemeControls";
import { navLinks, servicesNav } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-pad flex items-center justify-between gap-4 border-b border-line/60 bg-background/80 py-3 backdrop-blur-md">
        <BrandLogo height={44} />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-sm tracking-wide text-concrete transition hover:text-foreground"
                >
                  Services
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 border border-line bg-surface p-3 shadow-xl"
                    >
                      {servicesNav.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-3 py-2 text-sm text-concrete transition hover:bg-surface-2 hover:text-foreground"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-concrete transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeControls />
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            className="border border-line px-3 py-2 text-xs tracking-widest uppercase text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-line bg-surface lg:hidden"
          >
            <div className="section-pad flex flex-col gap-1 py-4">
              <div className="mb-3 sm:hidden">
                <ThemeControls />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <p className="mt-3 text-xs tracking-widest text-muted uppercase">
                Services
              </p>
              {servicesNav.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5 pl-2 text-sm text-concrete"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
