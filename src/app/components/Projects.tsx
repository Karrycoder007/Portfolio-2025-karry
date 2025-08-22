"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";

const projects = [
  {
    image: "/portfolio.png",
    title: "Portfolio Website",
    description: "A modern personal portfolio built with Next.js and TailwindCSS.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://www.mounesh-kn.com/",
  },
  {
    image: "/travel.png",
    title: "Travel Website",
    description: "Full-stack online store with cart, checkout, and admin panel.",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://travel-website-j.vercel.app/",
  },
  {
    image: "/grudhra.png",
    title: "Grudhra Agency",
    description: "Responsive app for booking trips and accommodations.",
    github: "https://github.com/yourusername/travel-booking",
    demo: "https://grudhrasolutions.com",
  },
  {
    image: "/zoom.png",
    title: "Zoom Clone",
    description: "Interactive dashboard for analytics and user management.",
    github: "https://github.com/yourusername/admin-dashboard",
    demo: "https://zoom-clone-app-two.vercel.app/",
  },
  {
    image: "/2023.png",
    title: "Grudhra Agency 2023",
    description: "Grudhra Solutions website.",
    github: "https://github.com/yourusername/blog-cms",
    demo: "https://grudhra-2023.vercel.app/",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;
    const scrollSpeed = 1.5; 
    let isPaused = false;

    const animateScroll = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    // Pause on hover (desktop)
    container.addEventListener("mouseenter", () => (isPaused = true));
    container.addEventListener("mouseleave", () => (isPaused = false));

    // Pause when user touches / scrolls (mobile)
    container.addEventListener("touchstart", () => (isPaused = true));
    container.addEventListener("touchend", () => (isPaused = false));

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-zinc-0">
      <motion.h2
        className="relative inline-block text-5xl md:text-6xl font-extrabold text-transparent 
                   bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 
                   tracking-wide mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
        <motion.span
          className="absolute left-0 bottom-0 h-[4px] w-full bg-gradient-to-r from-gray-900 to-gray-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...projects, ...projects].map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              link={project.demo}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
