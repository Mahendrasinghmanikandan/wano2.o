"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import { site } from "@/content/site";

export default function BrandLogo({
  className = "",
  height = 40,
}: {
  className?: string;
  height?: number;
}) {
  const { mode } = useTheme();
  const width = Math.round(height * 1.25);

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label={site.name}
    >
      <span
        className={`relative  inline-flex items-center justify-center overflow-hidden rounded-sm ${
          mode === "light" ? "bg-white mix-blend-darken px-2 py-1" : "bg-white"
        }`}
      >
        <Image
          src="/wano-logo.png"
          alt={site.name}
          width={width}
          height={height}
          className="h-auto w-auto object-contain"
          style={{ height, width: "auto", maxWidth: width * 1.4 }}
          priority
        />
      </span>
    </Link>
  );
}
