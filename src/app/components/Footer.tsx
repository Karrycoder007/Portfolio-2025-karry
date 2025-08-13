"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      {/* Top Footer */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2
            className="righteous-regular text-2xl font-bold mb-2"
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            Kartik Bhat
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Frontend Developer · Web & App Specialist · Turning ideas into smooth, pixel-perfect experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3
            className="righteous-regular text-lg font-semibold mb-3"
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3
            className="righteous-regular text-lg font-semibold mb-3"
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            Connect
          </h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com" target="_blank" className="hover:text-yellow-400 transition">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-400 transition">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="mailto:kbhat4203@gmail.com" className="hover:text-yellow-400 transition">
              <i className="ri-mail-fill"></i>
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
