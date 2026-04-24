"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  backgroundColor?: string;
};

export function GradientDots({
  dotSize = 6,
  spacing = 14,
  duration = 40,
  backgroundColor = "#F6F5F2",
  className = "",
  ...props
}: GradientDotsProps) {
  const reduceMotion = useReducedMotion();
  const hexSpacing = spacing * 1.732;

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #2a2a2a, transparent 65%),
          radial-gradient(circle at 50% 50%, #555555, transparent 65%),
          radial-gradient(circle at 50% 50%, #888888, transparent 65%),
          radial-gradient(ellipse at 50% 50%, #1a1a1a, transparent 65%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%, 0% 0%, 0% 0%, 0% 0%
        `,
      }}
      animate={
        reduceMotion
          ? undefined
          : {
              backgroundPosition: [
                `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
                `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
              ],
            }
      }
      transition={{
        backgroundPosition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      }}
      {...props}
    />
  );
}
