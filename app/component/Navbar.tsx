"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAVBAR_ITEMS } from "../helper/data";
import { cn } from "@/lib/utils";

const CONFETTI_COLORS = ["#212c00", "#ede9db", "#ede9db", "#212c00"];
const easeOut = [0.22, 1, 0.36, 1] as const;

function fireConfetti() {
  const end = Date.now() + 1200;
  const frame = () => {
    if (Date.now() > end) return;
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: CONFETTI_COLORS,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: CONFETTI_COLORS,
    });
    requestAnimationFrame(frame);
  };
  frame();
}

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    fireConfetti();
    router.push(href);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <nav
        className="relative w-full min-h-[64px] md:min-h-[80px] bg-linear-to-r from-white via-white/95 to-primary-color rounded-2xl flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-10 shadow-sm ring-1 ring-primary-color/10"
        aria-label="Main navigation"
      >
        <Link href="/" className="relative z-10 shrink-0 group">
          <motion.div
            whileHover={{ scale: 1.06, rotate: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 18 }}
          >
            <Image
              src="/logo.png"
              alt="WANO Projects"
              width={100}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              priority
            />
          </motion.div>
        </Link>

        <ul className="hidden lg:flex flex-1 items-center justify-end gap-0.5 xl:gap-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAVBAR_ITEMS.map((item, index) => {
            const active = isActive(item.href);
            return (
              <motion.li
                key={item.label}
                className="shrink-0"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + index * 0.04,
                  duration: 0.4,
                  ease: easeOut,
                }}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-white/90 rounded-lg transition-colors duration-300 cursor-pointer select-none whitespace-nowrap",
                    "hover:text-white hover:bg-white/10",
                    active && "text-white"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-lg border border-secondary-color/40 bg-white/5 -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                      }}
                    />
                  )}
                  <motion.span
                    className="absolute bottom-1 left-2 xl:left-3 right-2 xl:right-3 h-0.5 rounded-full bg-secondary-color origin-left"
                    initial={false}
                    animate={{ scaleX: active ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                  />
                </button>
              </motion.li>
            );
          })}
        </ul>

        <motion.button
          type="button"
          className="lg:hidden relative z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white border border-white/20 backdrop-blur-sm"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" aria-hidden />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" aria-hidden />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-primary-color/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id="mobile-nav-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-[calc(4rem+1.25rem)] sm:top-[calc(4.5rem+1.25rem)] right-5 left-5 z-50 lg:hidden max-h-[min(72vh,540px)] overflow-hidden rounded-2xl border border-secondary-color/25 bg-primary-color shadow-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-secondary-color to-transparent opacity-80" />
              <ul className="flex flex-col p-3 gap-1 overflow-y-auto">
                {NAVBAR_ITEMS.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 16 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: easeOut,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "w-full flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-white font-medium transition-colors",
                          active
                            ? "bg-secondary-color/20 border border-secondary-color/35"
                            : "hover:bg-white/10 border border-transparent"
                        )}
                      >
                        <span>{item.label}</span>
                        <motion.span
                          className="text-secondary-color text-lg"
                          animate={{
                            x: active ? 0 : 4,
                            opacity: active ? 1 : 0.5,
                          }}
                        >
                          →
                        </motion.span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="px-4 pb-4 pt-1">
                <motion.button
                  type="button"
                  className="w-full rounded-xl bg-secondary-color text-primary-color font-semibold py-3.5"
                  onClick={() => handleNavClick("/contact")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: NAVBAR_ITEMS.length * 0.05 + 0.08,
                  }}
                >
                  Start Your Project
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
