"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import {
  TbAntennaBars5,
  TbApi,
  TbBucket,
  TbDatabase,
  TbLambda,
} from "react-icons/tb";

type FloatingTechnology = {
  name: string;
  icon: IconType;
  position: string;
  size: string;
  duration: number;
  delay: number;
  drift: number;
  variant?: "technology" | "aws" | "data";
};

const technologies: FloatingTechnology[] = [
  {
    name: "React",
    icon: SiReact,
    position: "left-[3%] top-[28%] md:left-[8%]",
    size: "text-4xl md:text-5xl",
    duration: 12,
    delay: 0,
    drift: 10,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    position: "right-[3%] top-[25%] md:right-[9%]",
    size: "text-3xl md:text-4xl",
    duration: 14,
    delay: 1.5,
    drift: -8,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    position: "hidden sm:flex left-[7%] top-[66%] md:left-[16%]",
    size: "text-4xl",
    duration: 15,
    delay: 0.8,
    drift: -12,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    position: "hidden sm:flex right-[7%] top-[65%] md:right-[16%]",
    size: "text-4xl md:text-5xl",
    duration: 13,
    delay: 2.2,
    drift: 11,
  },
  {
    name: "AWS",
    icon: FaAws,
    position: "hidden md:flex left-[26%] top-[16%]",
    size: "text-4xl",
    duration: 16,
    delay: 1.1,
    drift: 9,
  },
  {
    name: "Python",
    icon: SiPython,
    position: "hidden md:flex right-[27%] top-[14%]",
    size: "text-4xl",
    duration: 14,
    delay: 2.8,
    drift: -10,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    position: "hidden lg:flex left-[47%] top-[78%]",
    size: "text-4xl",
    duration: 17,
    delay: 1.7,
    drift: 8,
  },
  {
    name: "Lambda",
    icon: TbLambda,
    position: "hidden lg:flex left-[2%] top-[48%]",
    size: "text-2xl",
    duration: 15,
    delay: 0.4,
    drift: 8,
    variant: "aws",
  },
  {
    name: "API Gateway",
    icon: TbApi,
    position: "hidden lg:flex right-[2%] top-[47%]",
    size: "text-2xl",
    duration: 16,
    delay: 1.9,
    drift: -8,
    variant: "aws",
  },
  {
    name: "DynamoDB",
    icon: TbDatabase,
    position: "hidden xl:flex left-[34%] top-[7%]",
    size: "text-2xl",
    duration: 17,
    delay: 2.5,
    drift: 7,
    variant: "aws",
  },
  {
    name: "IoT Core",
    icon: TbAntennaBars5,
    position: "hidden xl:flex right-[34%] top-[7%]",
    size: "text-2xl",
    duration: 14,
    delay: 1.3,
    drift: -7,
    variant: "aws",
  },
  {
    name: "S3",
    icon: TbBucket,
    position: "hidden xl:flex right-[34%] top-[82%]",
    size: "text-2xl",
    duration: 16,
    delay: 3.1,
    drift: 8,
    variant: "aws",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    position: "hidden md:flex left-[24%] top-[82%]",
    size: "text-2xl",
    duration: 15,
    delay: 1.6,
    drift: -8,
    variant: "data",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    position: "hidden md:flex right-[23%] top-[81%]",
    size: "text-2xl",
    duration: 17,
    delay: 2.4,
    drift: 8,
    variant: "data",
  },
  {
    name: "scikit-learn",
    icon: SiScikitlearn,
    position: "hidden lg:flex left-[12%] top-[8%]",
    size: "text-2xl",
    duration: 16,
    delay: 0.7,
    drift: 7,
    variant: "data",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    position: "hidden xl:flex left-[45%] top-[4%]",
    size: "text-2xl",
    duration: 18,
    delay: 1.2,
    drift: 6,
    variant: "data",
  },
];

export const FloatingTechLogos = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[50rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_82%,transparent)]"
    >
      {technologies.map(
        ({
          name,
          icon: Icon,
          position,
          size,
          duration,
          delay,
          drift,
          variant = "technology",
        }) => (
          <motion.div
            key={name}
            className={`absolute items-center justify-center rounded-2xl border p-3 backdrop-blur-[2px] ${
              variant === "aws"
                ? "gap-2 border-[#FF9900]/20 bg-[#1f1406]/20 text-[#FFB84D]/40 shadow-[0_0_36px_rgba(255,153,0,0.1)]"
                : variant === "data"
                  ? "gap-2 border-violet-400/15 bg-violet-950/10 text-violet-300/35 shadow-[0_0_36px_rgba(167,139,250,0.1)]"
                : "border-brand/15 bg-slate-950/25 text-brand/30 shadow-[0_0_36px_rgba(34,211,238,0.12)]"
            } ${position}`}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, drift, 0, -drift / 2, 0],
                    y: [0, -16, 4, 12, 0],
                    rotate: [0, 3, 0, -3, 0],
                  }
            }
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className={size} />
            {variant !== "technology" && (
              <span className="whitespace-nowrap text-[10px] font-semibold tracking-wide">
                {name}
              </span>
            )}
          </motion.div>
        ),
      )}
    </div>
  );
};
