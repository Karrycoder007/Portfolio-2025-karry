"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-2 md:py-24 font-raleway [&_*]:font-raleway">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
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
            <a href="mailto:kbhat3007@gmail.com" className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm md:text-base mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Kartik Bhat · Built with ❤️ using Next.js
      </div>
    </footer>
  );
}
