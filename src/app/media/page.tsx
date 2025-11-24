"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  // ---------------------------------------------------
  // Your image categories
  // ---------------------------------------------------
  const categories: Record<string, string[]> = {
    Human: [
      "/h1.jpeg", "/h2.jpeg", "/h3.jpeg", "/h4.jpeg", "/h5.jpeg",
      "/h6.jpeg", "/h7.jpeg",
    ],
    Nature: [
      "/n1.jpeg", "/n2.jpeg", "/n3.jpeg", "/n4.jpeg", "/n5.jpeg", "/n15.jpeg",
      "/n6.jpeg", "/n7.jpeg", "/n8.jpeg", "/n9.jpeg", "/n10.jpeg",
      "/n11.jpeg", "/n12.jpeg", "/n13.jpeg", "/n14.jpeg",
    ],
    Architecture: [
      "/a1.jpeg", "/a2.jpeg", "/a3.jpeg", "/a4.jpeg", "/a5.jpeg",
      "/a6.jpeg", "/a7.jpeg", "/a8.jpeg", "/a9.jpeg", "/a10.jpeg", "/a11.jpeg",
    ],
    Cultural: [
     "/c7.jpeg", "/c1.jpeg", "/c2.jpeg", "/c3.jpeg", "/c4.jpeg", "/c5.jpeg","/c6.jpeg",

    ],
  };

  const [selected, setSelected] = useState<keyof typeof categories>("Human");
  const [viewer, setViewer] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-10">
      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-6 mb-10">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat as keyof typeof categories)}
            className={`px-6 py-2 text-lg rounded-full border transition-all ${
              selected === cat
                ? "bg-white text-black border-white"
                : "border-gray-500 text-gray-300 hover:border-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MASONRY GRID */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={selected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
        >
          {categories[selected].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-full break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setViewer(src)}
            >
              <Image
                src={src}
                alt=""
                width={1000}
                height={1300}
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {viewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewer(null)}
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button className="absolute top-5 right-5 p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <X size={28} className="text-white" />
            </button>

            <motion.img
              src={viewer}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-[95%] max-h-[90%] object-contain rounded-xl shadow-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
