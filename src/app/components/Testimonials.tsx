"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    review:
      "Working with Kartik was an absolute pleasure. He delivered exactly what we needed and went above and beyond.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Lee",
    role: "Startup Founder",
    review:
      "Kartik’s expertise in frontend and modern frameworks is outstanding. The project was fast, responsive, and visually impressive.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Carter",
    role: "Designer",
    review:
      "His eye for detail and dedication really stand out. I’d recommend him to anyone looking for quality and reliability in development.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Brown",
    role: "Entrepreneur",
    review:
      "Kartik is extremely professional and creative. His work exceeded our expectations and delivered amazing results quickly.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto scroll every 2.5 seconds
 // Auto scroll every 4 seconds
useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4000ms = 4s
    return () => clearInterval(interval);
  }, []);
  

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-black mb-4"
        >
          Feedback That Inspires
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-600"
        >
          Feedback from our amazing clients and collaborators. See how we’ve
          helped bring their ideas to life with clean, responsive, and
          interactive digital solutions.
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="flex justify-center items-center gap-8 relative h-[420px] md:h-[480px]">
        {testimonials.map((t, i) => {
          const pos =
            i === current
              ? "center"
              : i === (current + 1) % testimonials.length
              ? "right"
              : i === (current - 1 + testimonials.length) % testimonials.length
              ? "left"
              : "back"; // back cards hidden

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: pos === "center" ? 1 : 0.85,
                x: pos === "center" ? 0 : pos === "left" ? -200 : pos === "right" ? 200 : 0,
              }}
              animate={{
                opacity: pos === "center" ? 1 : pos === "back" ? 0 : 0.6,
                scale: pos === "center" ? 1 : 0.85,
                x: pos === "center" ? 0 : pos === "left" ? -200 : pos === "right" ? 200 : 0,
                zIndex: pos === "center" ? 10 : 1,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
              className="absolute w-96 md:w-[28rem] bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-6 object-cover shadow-md"
              />
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg md:text-xl">
                "{t.review}"
              </p>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                {t.name}
              </h4>
              <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                {t.role}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
