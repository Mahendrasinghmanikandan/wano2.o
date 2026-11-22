"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IMAGE_HELPER } from "@/app/helper/imageHelper";
import { SecondaryButton, PrimaryButton } from "@/app/component/Buttons";
import LensImagesDisplay from "@/app/component/LensImagesDisplay";
import { TextAnimate } from "@/components/ui/text-animate";

const easeOut = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center gap-x-4">
      <motion.div
        className="w-1/2 h-[80vh] object-cover rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: -56, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: easeOut }}
      >
        <LensImagesDisplay
          img={IMAGE_HELPER.HOME_HERO_LEFT_IMAGE}
          height="80vh"
        />
      </motion.div>

      <motion.div
        className="w-1/2 h-full bg-secondary-color rounded-2xl flex items-left justify-center px-[5vw] flex-col gap-4 relative overflow-hidden"
        initial={{ opacity: 0, x: 56 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.12, ease: easeOut }}
      >
        <motion.div
          className="absolute top-0 left-0 h-1 w-0 bg-primary-color rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "40%" }}
          transition={{ duration: 1.1, delay: 0.35, ease: easeOut }}
          aria-hidden
        />

        <h1 className="text-6xl font-normal text-primary-color leading-tight">
          <TextAnimate
            as="span"
            by="word"
            animation="blurInUp"
            startOnView={false}
            once
            delay={0.2}
            duration={0.55}
            className="font-bold block"
          >
            Engineered Buildings
          </TextAnimate>
          <TextAnimate
            as="span"
            by="word"
            animation="blurInUp"
            startOnView={false}
            once
            delay={0.55}
            duration={0.55}
            className="block pt-1"
          >
            Built the Right Way
          </TextAnimate>
        </h1>

        <TextAnimate
          as="p"
          by="line"
          animation="slideUp"
          startOnView={false}
          once
          delay={0.75}
          duration={0.5}
          className="text-primary-color/90 leading-relaxed"
        >
          {
            "Architecture, Structural Design, Soil Study, MEP Coordination, and\nConstruction — Delivered Through One Structured Workflow."
          }
        </TextAnimate>

        <motion.div
          className="flex items-center gap-4 pt-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.05, ease: easeOut }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <Link href="/contact">
              <PrimaryButton text="Start Your Project" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <Link href="/projects">
              <SecondaryButton text="View Our Projects" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
