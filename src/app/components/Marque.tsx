"use client";

import { motion } from "framer-motion";

const items = ["Freelancer", "Developer", "Designer"];

interface MarqueeStripProps {
  delay?: number; // optional delay in seconds
}

export default function MarqueeStrip({ delay = 0.5 }: MarqueeStripProps) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }} // start further down
      whileInView={{ y: 0, opacity: 1 }} // float up
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.5,       // longer duration for smooth float
        delay,
        ease: [0.6, 0.01, 0.1, 0.99], // smooth, gentle ease
      }}
      className="relative w-full bg-black text-white overflow-hidden py-6"
    >
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
    </motion.div>
  );
}
