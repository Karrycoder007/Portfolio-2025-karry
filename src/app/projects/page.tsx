"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/portfolio.png",
    link: "https://mounesh-kn.com",
  },
  {
    title: "Zoom Clone",
    description: "A Video Conferencing Web app.",
    image: "/zoom.png",
    link: "https://zoom-clone-app-two.vercel.app",
  },
  {
    title: "Travel Website(Eco Venture) ",
    description: "A gallery to display high-quality photography with smooth animations.",
    image: "/travel.png",
    link: "https://your-photography-link.com",
  },
  {
    title: "Grudhra Solutions Agency Website",
    description: "A blog documenting travel adventures, with a focus on storytelling and design.",
    image: "/grudhra.png",
    link: "https://grudhrasolutions.com",
  },
  {
    title: "Animated Landing Page",
    description: "An interactive landing page with immersive animations.",
    image: "/projects/landing.jpg",
    link: "https://your-landing-link.com",
  },
  {
    title: "Graphic Design Portfolio",
    description: "A showcase of graphic design work, from posters to digital art.",
    image: "/projects/design.jpg",
    link: "https://your-design-link.com",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 text-center">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white text-amber-50 dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl border-2 transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
              
              
              className="relative w-full h-100 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover "
                />
              </motion.div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-blue-300 hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
