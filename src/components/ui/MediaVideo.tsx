"use client";

import { useEffect, useRef } from "react";
import type { HoverStyle } from "@/components/ui/MediaImage";

type Props = {
  src: string;
  alt: string;
  hover?: HoverStyle;
  caption?: string;
  frameClassName?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

export default function MediaVideo({
  src,
  alt,
  hover = "kenburns",
  caption,
  frameClassName = "",
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [autoPlay, src]);

  return (
    <figure
      className={`media-frame media-${hover} group relative overflow-hidden border border-line bg-surface ${frameClassName}`}
    >
      <div className="media-stage relative">
        <video
          ref={videoRef}
          className={`media-img h-full w-full object-cover ${className}`}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          aria-label={alt}
        />
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
