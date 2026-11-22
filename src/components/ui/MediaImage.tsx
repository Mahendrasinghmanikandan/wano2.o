"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export type HoverStyle =
  | "kenburns"
  | "tilt"
  | "wipe"
  | "duotone"
  | "iris"
  | "slide-up"
  | "glow-frame"
  | "blueprint";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  hover?: HoverStyle;
  caption?: string;
  frameClassName?: string;
  fallbackSrc?: string;
};

export default function MediaImage({
  src,
  alt,
  hover = "kenburns",
  caption,
  frameClassName = "",
  fallbackSrc = "/images/gallery/01.jpg",
  className = "",
  fill,
  ...rest
}: Props) {
  const [current, setCurrent] = useState(src);

  return (
    <figure
      className={`media-frame media-${hover} group relative overflow-hidden border border-line bg-surface ${frameClassName}`}
    >
      <div className="media-stage">
        {fill ? (
          <Image
            {...rest}
            fill
            src={current}
            alt={alt}
            className={`media-img object-cover ${className}`}
            onError={() => {
              if (current !== fallbackSrc) setCurrent(fallbackSrc);
            }}
          />
        ) : (
          <Image
            {...rest}
            src={current}
            alt={alt}
            className={`media-img ${className}`}
            onError={() => {
              if (current !== fallbackSrc) setCurrent(fallbackSrc);
            }}
          />
        )}
      </div>

      <div className="media-veil pointer-events-none absolute inset-0" aria-hidden />
      <div className="media-accent pointer-events-none absolute inset-0" aria-hidden />
      <div className="media-shine pointer-events-none absolute inset-0" aria-hidden />

      {caption ? (
        <figcaption className="media-caption absolute inset-x-0 bottom-0 z-10 p-4 text-sm text-white">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
