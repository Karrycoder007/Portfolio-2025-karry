"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

export default function MediaPage() {
  const photos = [
    "/1.jpeg",
    "/2.jpeg",
    "/13.jpeg",
    "/4.jpeg",
    "/9.jpeg",
    "/3.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/10.jpeg",
    "/15.jpeg",
    "/11.jpeg",
    "/12.jpeg",
    "/14.jpeg",
    "/16.jpeg",
    "/17.jpeg",
    "/18.jpeg",
    "/19.jpeg",
    
  ];

  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center py-20 px-0"
      >
        <Camera size={72} className="text-gray-400 mb-6" />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
          Photography
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Capturing emotions, details, and stories — one frame at a time.
        </p>
      </motion.section>

      {/* Image Grid */}
      <motion.section
        className="px-6 pb-24"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(255,255,255,0.1)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-xl bg-neutral-900 border border-gray-900"
            >
              <Image
                src={src}
                alt={`photo-${index}`}
                width={800}
                height={600}
                className="w-full h-full object-contain bg-black transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
