"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Media", href: "/media" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Motion variants for nav links (only initial and visible)
  const navLinkVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white text-black border-b border-neutral-200 shadow-sm backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-2 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Kartik Bhat
          <Image
            src="/profile.jpeg"
            alt="Kartik Bhat"
            width={48}
            height={32}
            className="w-14 h-9 rounded-2xl object-cover shadow-sm border-2 border-gray-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex gap-6 text-lg items-center"
          style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={navLinkVariants}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3, opacity: 1, transition: { type: "spring", stiffness: 300 } }}
            >
              <Link href={link.href} className="hover:underline">
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Work With Me Button */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Link
              href="/work"
              className="px-4 py-2 bg-black text-white rounded-md shadow-sm flex items-center gap-2 overflow-hidden"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
            >
              Work With Me
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-0.5 w-6 bg-black"
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-black"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-black"
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white text-black px-6 py-4 flex flex-col gap-4 shadow-inner"
            style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-normal hover:underline"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/work"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-black text-white rounded-md shadow-sm text-center hover:bg-gray-800 transition-colors duration-300"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }}
            >
              Work With Me 
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
