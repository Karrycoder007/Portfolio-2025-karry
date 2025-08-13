"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiFirebase, 
  SiMongodb, 
  SiSupabase, 
  SiNodedotjs, 
  SiExpress,
  SiNextdotjs,
  SiSvelte
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdAnimation } from "react-icons/md"; // for Framer Motion

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "React Native", icon: FaReact, color: "#61DAFB" },
  { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
  { name: "Framer Motion", icon: MdAnimation, color: "#FF69B4" }, // added
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      {/* Animated Title */}
      <motion.h2
        className="text-5xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Skills & Technologies
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 shadow-md hover:shadow-2xl cursor-pointer border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Icon size={48} color={skill.color} />
              <p className="mt-3 font-semibold text-gray-800">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
