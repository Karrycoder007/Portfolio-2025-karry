"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function HomePageGallery() {
  const images = [
    "/a11.jpeg",
    "/h7.jpeg",
    "/a6.jpeg",
    "/c2.jpeg",
  ];

  const [viewer, setViewer] = useState<string | null>(null);

  return (
    <div className="w-full py-10 px-6">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Featured Work
      </h2>

      {/* 4 Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setViewer(src)}
          >
            <Image
              src={src}
              alt={`featured-${i}`}
              width={600}
              height={800}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {viewer && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[999] flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewer(null)}
          >
            <button className="absolute top-5 right-5 bg-white/20 p-2 rounded-full">
              <X size={28} className="text-white" />
            </button>

            <motion.img
              src={viewer}
              className="max-w-[90%] max-h-[90%] object-contain rounded-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
