"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "dark" | "light";

export type AccentId = "olive" | "amber" | "teal" | "coral" | "indigo";

export const accents: {
  id: AccentId;
  label: string;
  hex: string;
  soft: string;
}[] = [
  { id: "olive", label: "Olive", hex: "#6b7e45", soft: "#98a86e" },
  { id: "amber", label: "Amber", hex: "#d4a017", soft: "#e8c45a" },
  { id: "teal", label: "Teal", hex: "#2a9d8f", soft: "#5ec4b8" },
  { id: "coral", label: "Coral", hex: "#e07a5f", soft: "#f0a090" },
  { id: "indigo", label: "Indigo", hex: "#4a6fa5", soft: "#7a9cc7" },
];

const darkVars: Record<string, string> = {
  "--background": "#10130f",
  "--foreground": "#ece8e1",
  "--muted": "#9a958c",
  "--surface": "#1a1f19",
  "--surface-2": "#232a21",
  "--line": "rgba(236, 232, 225, 0.12)",
  "--steel": "#6d7f88",
  "--concrete": "#b8b0a4",
  "--on-accent": "#1a1508",
  "--grain-side": "rgba(109, 127, 136, 0.12)",
  "--grain-base": "linear-gradient(180deg, #121610 0%, #0e110d 45%, #151a14 100%)",
  "--grid-line": "rgba(236, 232, 225, 0.05)",
};

const lightVars: Record<string, string> = {
  "--background": "#f3f0e8",
  "--foreground": "#1c211a",
  "--muted": "#5f5b54",
  "--surface": "#ffffff",
  "--surface-2": "#ebe6dc",
  "--line": "rgba(28, 33, 26, 0.14)",
  "--steel": "#5a6b73",
  "--concrete": "#4f4b44",
  "--on-accent": "#ffffff",
  "--grain-side": "rgba(90, 107, 115, 0.12)",
  "--grain-base": "linear-gradient(180deg, #f8f5ee 0%, #efeae0 50%, #f4f0e8 100%)",
  "--grid-line": "rgba(28, 33, 26, 0.06)",
};

type ThemeContextValue = {
  mode: ThemeMode;
  accent: AccentId;
  accentHex: string;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  setAccent: (id: AccentId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const MODE_KEY = "wano-theme-mode";
const ACCENT_KEY = "wano-theme-accent";

function applyTheme(mode: ThemeMode, accentId: AccentId) {
  const root = document.documentElement;
  root.dataset.theme = mode;
  root.classList.remove("dark", "light");
  root.classList.add(mode);

  const palette = mode === "light" ? lightVars : darkVars;
  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  const accent = accents.find((a) => a.id === accentId) ?? accents[0];
  root.style.setProperty("--accent", accent.hex);
  root.style.setProperty("--accent-soft", accent.soft);
  root.style.setProperty(
    "--grain-top",
    `color-mix(in oklab, ${accent.hex} ${mode === "light" ? "18%" : "16%"}, transparent)`,
  );
  root.dataset.accent = accent.id;
  root.style.colorScheme = mode;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [accent, setAccentState] = useState<AccentId>("olive");

  useEffect(() => {
    const storedMode = localStorage.getItem(MODE_KEY) as ThemeMode | null;
    const storedAccent = localStorage.getItem(ACCENT_KEY) as AccentId | null;
    const nextMode =
      storedMode === "light" || storedMode === "dark" ? storedMode : "dark";
    const nextAccent = accents.some((a) => a.id === storedAccent)
      ? (storedAccent as AccentId)
      : "olive";

    setModeState(nextMode);
    setAccentState(nextAccent);
    applyTheme(nextMode, nextAccent);
  }, []);

  const setMode = useCallback(
    (next: ThemeMode) => {
      setModeState(next);
      localStorage.setItem(MODE_KEY, next);
      applyTheme(next, accent);
    },
    [accent],
  );

  const toggleMode = useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  const setAccent = useCallback(
    (id: AccentId) => {
      setAccentState(id);
      localStorage.setItem(ACCENT_KEY, id);
      applyTheme(mode, id);
    },
    [mode],
  );

  const value = useMemo(
    () => ({
      mode,
      accent,
      accentHex: accents.find((a) => a.id === accent)?.hex ?? accents[0].hex,
      setMode,
      toggleMode,
      setAccent,
    }),
    [mode, accent, setMode, toggleMode, setAccent],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
