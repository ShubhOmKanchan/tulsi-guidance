"use client";

import { motion } from "framer-motion";

export default function Butterfly() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-24 top-24 z-20"
    >
      <div className="text-5xl">
        🦋
      </div>
    </motion.div>
  );
}