"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 font-raleway [&_*]:font-raleway relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between md:items-center gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h2 className="text-2xl font-bold mb-2">Kartik Bhat</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Frontend Developer · Web & App Specialist · Turning ideas into smooth, pixel-perfect experiences.
          </p>
        </div>

        {/* Image + Social Links */}
        <div className="flex flex-col items-center gap-4">
          {/* Profile Image */}
          <Image
            src="/profile-1.jpeg"
            alt="Kartik Bhat"
            width={80}
            height={80}
            className="rounded-full border-2 border-yellow-400 shadow-lg"
          />

          {/* Social Links */}
          <div className="flex space-x-4 text-2xl">
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-500 text-xs mt-8 border-t border-gray-800 pt-4"
      >
        © {new Date().getFullYear()} Kartik Bhat · Built with ❤️ using Next.js
      </motion.div>
    </footer>
  );
}
