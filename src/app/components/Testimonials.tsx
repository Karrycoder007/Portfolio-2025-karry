"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "HarshaVardhana P",
    role: "Backend Developer",
    review:
      "Working with Kartik was an absolute pleasure. He delivered exactly what we needed and went above and beyond.",
    image: "/harsha.jpg",
  },
  {
    name: "MuraliKrishna S",
    role: "Startup Founder",
    review:
      "Kartik’s expertise in frontend and modern frameworks is outstanding. The project was fast, responsive, and visually impressive.",
    image: "/mks.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-700 mb-4">
          Feedback That Inspires
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-600">
          Feedback from our amazing clients and collaborators. See how we&apos;ve
          helped bring their ideas to life with clean, responsive, and
          interactive digital solutions.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center h-[420px] md:h-[480px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-96 md:w-[28rem] bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="relative w-28 h-28 mb-6">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                fill
                className="rounded-full object-cover shadow-md"
                priority
              />
            </div>

            {/* Review */}
            <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg md:text-xl">
              &quot;{testimonials[current].review}&quot;
            </p>
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {testimonials[current].name}
            </h4>
            <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              {testimonials[current].role}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
