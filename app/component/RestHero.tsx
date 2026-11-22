import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import SectionImage from "./SectionImage";

const RestHero = ({
  subtitle,
  title,
  description,
  image,
}: {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <section className="w-full relative overflow-hidden rounded-2xl bg-[#f4efe9] px-6 py-12 md:px-10 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, #212c00 0, #212c00 1px, transparent 1px, transparent 28px)",
        }}
      />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-color/25 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-color">
            {subtitle}
          </span>
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            className="text-4xl md:text-6xl font-bold uppercase text-primary-color leading-[1.05]"
            once
          >
            {title}
          </TextAnimate>
          <p className="leading-loose text-primary-color/90 max-w-2xl text-lg">
            {description}
          </p>
        </div>
        <div className="lg:col-span-5">
          <SectionImage
            src={image}
            alt="Contact Wano Projects"
            wrapperClassName="h-52 md:h-64 lg:h-full !h-[240px]  !rounded-2xl"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default RestHero;
