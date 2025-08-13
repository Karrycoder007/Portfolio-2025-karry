"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function MediaPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <Camera size={64} className="text-gray-400 mb-6" />
        <h1 className="text-5xl font-bold mb-4">Photography</h1>
        <p className="text-gray-400 text-lg mb-8">
          My collection of photographs will be here soon. Stay tuned!
        </p>

        <motion.div
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Coming Soon...
        </motion.div>
      </motion.div>
    </section>
  );
}
