"use client";

import { motion, useMotionValue, useTransform, useScroll, Variants, easeOut } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll shrink effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const onResize = () =>
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotationFactor = 8;
  const translateFactor = 15;

  const rotateX = useTransform(mouseY, [0, windowSize.h], [rotationFactor, -rotationFactor]);
  const rotateY = useTransform(mouseX, [0, windowSize.w], [-rotationFactor, rotationFactor]);
  const translateX = useTransform(mouseX, [0, windowSize.w], [-translateFactor, translateFactor]);
  const translateY = useTransform(mouseY, [0, windowSize.h], [-translateFactor, translateFactor]);

  // Split text
  const title = "Hi, I’m Kartik Bhat";
  const letters = title.split("");

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  };

  return (
    <motion.section
      ref={heroRef}
      style={{ scale: scrollScale, opacity: scrollOpacity }}
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white z-10"
    >
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="relative w-[370px] h-[500px] overflow-hidden rounded-3xl shadow-[8px_0px_20px_rgba(0,0,0,0.3)] z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="w-full h-full"
          >
            <Image
              src="/profile-1.jpeg"
              alt="Kartik Bhat"
              fill
              className="object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Text */}
      <motion.div
        className="flex-1 max-w-xl text-center md:text-left mt-8 md:mt-0"
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          transformStyle: "preserve-3d",
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Split Text Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 flex flex-wrap"
          variants={containerVariants}
        >
          {letters.map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: easeOut,
            delay: letters.length * 0.05 + 0.2,
          }}
        >
          I build modern, animated websites — and soon, I&apos;ll be showcasing
          photography, videography, and business collaborations.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#contact"
          className="relative inline-block px-8 py-3 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-gray-900 to-gray-900 shadow-md overflow-hidden
                     transition-shadow duration-300 hover:shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: easeOut,
            delay: letters.length * 0.05 + 0.4,
          }}
        >
          <span
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                       -translate-x-[200%] hover:translate-x-[200%] transition-transform duration-700 ease-in-out"
          ></span>

          <span className="relative z-10 font-semibold" style={{ fontFamily: "Raleway, sans-serif" }}>
            Work With Me
          </span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
