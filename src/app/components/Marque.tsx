"use client";

import { motion } from "framer-motion";

const items = ["Freelancer", "Developer", "Designer"];

export default function MarqueeStrip() {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden py-6">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 10,
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-8 px-6">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="text-6xl sm:text-6xl lg:text-9xl font-extrabold uppercase tracking-tight"
              >
                {item}
                {idx !== items.length - 1 && (
                  <span className="mx-4 text-6xl sm:text-6xl lg:text-9xl">•</span>
                )}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
