"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLaptopCode,
  FaCameraRetro,
  FaLanguage,
  FaDraftingCompass,
} from "react-icons/fa";

export default function About() {
  const revealVariant = {
    hidden: { opacity: 0.4, color: "#9ca3af", y: 10 },
    visible: {
      opacity: 1,
      color: "#000000",
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Container for all cards
  const cardContainerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  // Each card animation
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Inner text animation (inside each card)
  const innerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const highlight = (text: string) => (
    <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-semibold">
      {text}
    </span>
  );

  const highlightWithImage = (text: string, imgSrc: string) => (
    <span className="inline-flex items-center gap-2">
      <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-semibold">
        {text}
      </span>
      <Image
        src={imgSrc}
        alt={text}
        width={48}
        height={32}
        className="w-12 h-8 rounded-2xl object-cover shadow-sm border"
      />
    </span>
  );

  const paragraphs = [
    <>
      I’m {highlight("Kartik Bhat")}, a creative developer from{" "}
      {highlightWithImage("Goa", "/profile.jpeg")} with over{" "}
      {highlight("three and a half years")} of experience crafting fast, modern,
      and animated websites. My work blends clean design with interactive
      elements, turning ideas into{" "}
      {highlight("memorable digital experiences")}.
    </>,
    <>
      When I’m not building on the web, you’ll probably find me with a{" "}
      {highlightWithImage("camera", "/profile-2.jpeg")} in hand — capturing
      moments through {highlight("photography")} and exploring the art of
      filmmaking. I’m also learning{" "}
      {highlightWithImage(
        "Japanese (日本語)",
        "https://images.unsplash.com/photo-1553695730-3e86115764b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0"
      )}{" "}
      and have a deep love for travel, culture, and design that inspires the
      stories I tell online.
    </>,
    <>
      Beyond coding, I have a passion for {highlight("UI/UX design")} and{" "}
      {highlight("product design")} — creating not just how things look, but how
      they feel. I approach every project like a film director: planning each
      frame, choreographing motion, and making sure the experience stays with
      the user long after they close the tab.
    </>,
  ];

  return (
    <section className="py-20 px-6 bg-white text-black dark:text-white">
      <div className="max-w-5xl mx-auto">
        {/* Opening Quote */}
        <motion.div
          className="text-[10rem] leading-none text-gray-400 font-serif mb-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          “
        </motion.div>

        {/* Paragraphs */}
        <div className="space-y-6 text-2xl leading-relaxed font-light">
          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.8 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Closing Quote */}
        <motion.div
          className="text-[10rem] leading-none text-gray-400 font-serif mt-6 text-right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ”
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-10 h-1 w-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Fact Cards */}
        <motion.div
          className="mt-14 grid md:grid-cols-4 gap-8"
          variants={cardContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: <FaLaptopCode className="text-4xl text-pink-500 mb-4" />,
              title: "Tech Stack",
              desc: "React, Next.js, Tailwind CSS, Node.js, Firebase, MongoDB.",
            },
            {
              icon: <FaDraftingCompass className="text-4xl text-green-500 mb-4" />,
              title: "Design",
              desc: "UI/UX design, product design, and creative direction.",
            },
            {
              icon: <FaCameraRetro className="text-4xl text-yellow-500 mb-4" />,
              title: "Hobbies",
              desc: "Photography, videography, anime, and travel.",
            },
            {
              icon: <FaLanguage className="text-4xl text-blue-500 mb-4" />,
              title: "Languages",
              desc: "English, Hindi, Kannada, Konkani, Marathi and Japanese (日本語).",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition-all"
              variants={cardVariant}
            >
              {/* Inner content stagger */}
              <motion.div variants={innerVariant}>
                <motion.div variants={textVariant}>{card.icon}</motion.div>
                <motion.h3
                  className="text-xl text-white font-semibold mb-2"
                  variants={textVariant}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 dark:text-gray-300"
                  variants={textVariant}
                >
                  {card.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
