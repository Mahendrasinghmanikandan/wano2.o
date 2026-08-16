"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { accents, useTheme } from "@/components/theme/ThemeProvider";

export default function ThemeControls() {
  const { mode, accent, toggleMode, setAccent } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-2">
      <button
        type="button"
        onClick={toggleMode}
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        className="border border-line px-2.5 py-1.5 text-[11px] tracking-widest uppercase text-foreground transition hover:border-accent/50"
      >
        {mode === "dark" ? "Light" : "Dark"}
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Text theme color"
          className="flex items-center gap-2 border border-line px-2.5 py-1.5 text-[11px] tracking-widest uppercase text-foreground transition hover:border-accent/50"
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--accent)" }}
            aria-hidden
          />
          Color
        </button>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute right-0 top-full z-50 mt-2 w-44 border border-line bg-surface p-3 shadow-xl"
            >
              <p className="mb-2 text-[10px] tracking-[0.18em] text-muted uppercase">
                Text accent
              </p>
              <div className="grid grid-cols-5 gap-2">
                {accents.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    title={item.label}
                    aria-label={item.label}
                    aria-pressed={accent === item.id}
                    onClick={() => {
                      setAccent(item.id);
                      setOpen(false);
                    }}
                    className={`h-7 w-7 rounded-full border transition ${
                      accent === item.id
                        ? "border-foreground scale-110"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ background: item.hex }}
                  />
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
