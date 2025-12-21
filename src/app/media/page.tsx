"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  const categories: Record<string, string[]> = {
    Human: ["/h1.jpeg", "/h2.jpeg", "/h3.jpeg", "/h4.jpeg", "/h5.jpeg", "/h6.jpeg", "/h7.jpeg"],
    Nature: ["/n1.jpeg", "/n2.jpeg", "/n3.jpeg", "/n4.jpeg", "/n5.jpeg", "/n15.jpeg",
      "/n6.jpeg", "/n7.jpeg", "/n8.jpeg", "/n9.jpeg", "/n10.jpeg",
      "/n11.jpeg", "/n12.jpeg", "/n13.jpeg", "/n14.jpeg"],
    Architecture: ["/a1.jpeg", "/a2.jpeg", "/a3.jpeg", "/a4.jpeg", "/a5.jpeg",
      "/a6.jpeg", "/a7.jpeg", "/a8.jpeg", "/a9.jpeg", "/a10.jpeg", "/a11.jpeg"],
    Cultural: ["/c7.jpeg", "/c1.jpeg", "/c2.jpeg", "/c3.jpeg", "/c4.jpeg", "/c5.jpeg", "/c6.jpeg"],
  };

  const [selected, setSelected] = useState<keyof typeof categories>("Human");
  const [viewer, setViewer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">

      {/* FILTER BUTTONS – GUARANTEED CLICKABLE */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-6 pointer-events-auto">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat as keyof typeof categories)}
            className={`flex-shrink-0 px-4 py-2 rounded-full border text-sm ${
              selected === cat
                ? "bg-white text-black border-white"
                : "border-gray-500 text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* STATIC MASONRY GRID (NO AnimatePresence) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {categories[selected].map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setViewer(src)}
          >
            <Image
              src={src}
              alt=""
              width={1000}
              height={1300}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {viewer && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center"
          onClick={() => setViewer(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 bg-white/20 rounded-full"
            onClick={() => setViewer(null)}
          >
            <X size={24} />
          </button>

          <img
            src={viewer}
            className="max-w-[95%] max-h-[85%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
