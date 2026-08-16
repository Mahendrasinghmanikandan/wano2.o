"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { outfit } from "@/config/font.config";

type AosDirection = "up" | "down" | "left" | "right";

const offsets: Record<AosDirection, { x: number; y: number }> = {
  up: { x: 0, y: 36 },
  down: { x: 0, y: -36 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

/** AOS-style scroll reveal (fade + directional move). */
export function Aos({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: AosDirection;
  duration?: number;
}) {
  const offset = offsets[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: AosDirection;
}) {
  return (
    <Aos className={className} delay={delay} direction={direction}>
      {children}
    </Aos>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <Aos direction="down">
          <p className={`mb-3 text-xs tracking-[0.28em] text-accent uppercase ${outfit.className}`}>
            {eyebrow}
          </p>
        </Aos>
      ) : null}
      <Aos direction="up" delay={0.06}>
        <h2 className="heading-font text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Aos>
      {body ? (
        <Aos direction="up" delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{body}</p>
        </Aos>
      ) : null}
    </div>
  );
}
