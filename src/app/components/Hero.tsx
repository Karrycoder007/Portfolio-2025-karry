"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
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

  const rotateX = useTransform(
    mouseY,
    [0, windowSize.h],
    [rotationFactor, -rotationFactor]
  );
  const rotateY = useTransform(
    mouseX,
    [0, windowSize.w],
    [-rotationFactor, rotationFactor]
  );
  const translateX = useTransform(
    mouseX,
    [0, windowSize.w],
    [-translateFactor, translateFactor]
  );
  const translateY = useTransform(
    mouseY,
    [0, windowSize.h],
    [-translateFactor, translateFactor]
  );

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white">
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[380px] h-[500px] overflow-hidden rounded-lg shadow-lg">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="/profile-1.jpeg"
              alt="Kartik Bhat"
              fill
              className="object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Right Side - Content */}
      <motion.div
        className="flex-1 max-w-xl text-center md:text-left mt-8 md:mt-0"
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Hi, I’m Kartik Bhat
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-800">
          I build modern, animated websites — and soon, I&apos;ll be showcasing
          photography, videography, and business collaborations.
        </p>
        <a
          href="#contact"
          className="relative inline-block px-8 py-3 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-gray-900 to-gray-700 shadow-md overflow-hidden
                     transition-shadow duration-300 hover:shadow-lg"
        >
          {/* Shine Effect */}
          <span
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                   translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-700 ease-in-out"
          ></span>

          <span className="relative z-10">Work With Me</span>
        </a>
      </motion.div>
    </section>
  );
}
