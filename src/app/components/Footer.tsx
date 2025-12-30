"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const marqueeItems = ["Freelancer", "Developer", "Designer"];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white font-raleway [&_*]:font-raleway">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-8 py-12 md:py-16">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Kartik Bhat</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            Frontend Developer · Web & App Specialist · Turning ideas into smooth, pixel-perfect experiences.
          </p>
        </div>

        {/* Profile Image + Social */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/profile-1.jpeg"
            alt="Kartik Bhat"
            width={120}
            height={120}
            className="rounded-full border-2 border-yellow-400 shadow-lg"
          />
          <div className="flex space-x-6 text-3xl md:text-4xl">
            <a
              href="https://github.com/Karrycoder007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/coderkarry007/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kbhat3007@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm md:text-base border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Kartik Bhat · Built with ❤️ using Next.js
      </div>

      {/* Marquee inside footer */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full bg-black text-white overflow-hidden py-6 mt-0 font-raleway"
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
              {marqueeItems.map((item, idx) => (
                <span
                  key={idx}
                  className="text-6xl sm:text-6xl lg:text-9xl font-extrabold uppercase tracking-tight font-raleway"
                > 
                  {item}
                  {idx !== marqueeItems.length - 1 && (
                    <span className="mx-4 text-6xl sm:text-6xl lg:text-9xl font-raleway">•</span>
                  )}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </footer>
  );
} 
