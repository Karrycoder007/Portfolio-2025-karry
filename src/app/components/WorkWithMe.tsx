"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {  FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const WorkWithMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section
      id="contact"
      className="w-full bg-cover bg-center bg-no-repeat relative py-20 px-6 md:px-20"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-white z-10 font-raleway"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-lg mb-6 text-gray-200">
            I’m open for freelance work, collaborations, or exciting projects
            in tech and design. Drop me a message and let’s build something
            great!
          </p>
          <p className="text-sm mb-6 text-gray-400">Response within 24–48 hrs.</p>

          {/* Social Links */}
          <motion.div
            className="flex space-x-4 text-white text-xl mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              { icon: <FaEnvelope />, link: "mailto:kbhat3007@gmail.com" },
              { icon: <FaGithub />, link: "https://github.com/Karrycoder007" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/coderkarry007/" }
              
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                aria-label="Social Link"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          className="w-full md:w-1/2 z-10 font-raleway"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg space-y-5 text-black"
          >
            <div>
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 font-raleway bg-white bg-opacity-20 border border-gray-400 border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 font-raleway bg-white bg-opacity-20 border border-gray-400 border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 font-raleway bg-white bg-opacity-20 border border-gray-400 border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white py-2 px-4 rounded-md font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithMe;
