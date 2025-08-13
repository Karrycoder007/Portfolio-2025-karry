"use client";

import Image from "next/image";

const images = [
  "https://plus.unsplash.com/premium_photo-1754392582865-6902ee69cdb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1754147388611-c0f0179a05b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
];

export default function PhotographySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Photography</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg grayscale hover:grayscale-0 transition duration-300">
            <Image
              src={src}
              alt={`photo-${i + 1}`}
              width={300}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
