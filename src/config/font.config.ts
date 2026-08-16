import { DM_Sans, Outfit } from "next/font/google";
import localFont from "next/font/local";

export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const displayFont = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../assets/fonts/Felidae.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
