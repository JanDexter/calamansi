import React from "react";
import { motion } from "motion/react";

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#0a0f25]">
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/40 blur-[120px]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-violet-600/30 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[130px]"
      />
    </div>
  );
}
