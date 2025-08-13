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
    demo: "https://your-portfolio-demo.com",
  },
  {
    image: "/travel.png",
    title: "Travel Website",
    description: "Full-stack online store with cart, checkout, and admin panel.",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://your-ecommerce-demo.com",
  },
  {
    image: "/grudhra.png",
    title: "Travel Booking Platform",
    description: "Responsive app for booking trips and accommodations.",
    github: "https://github.com/yourusername/travel-booking",
    demo: "https://your-travel-demo.com",
  },
  {
    image: "/zoom.png",
    title: "Admin Dashboard",
    description: "Interactive dashboard for analytics and user management.",
    github: "https://github.com/yourusername/admin-dashboard",
    demo: "https://your-dashboard-demo.com",
  },
  {
    image: "/projects/blog.jpg",
    title: "Blog CMS",
    description: "Content management system for creating and editing blog posts.",
    github: "https://github.com/yourusername/blog-cms",
    demo: "https://your-blog-demo.com",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;
    const scrollSpeed = 0.5; // ✅ changed to const
    let isHovered = false;

    const animateScroll = () => {
      if (!isHovered) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    container.addEventListener("mouseenter", () => (isHovered = true));
    container.addEventListener("mouseleave", () => (isHovered = false));

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-white">
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
        {/* Animated underline */}
        <motion.span
          className="absolute left-0 bottom-0 h-[3px] w-full bg-gradient-to-r from-gray-900 to-gray-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...projects, ...projects].map((project, index) => (
          <motion.div
            key={index}
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
