import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  darkMode: "class", 
  images: {
    domains: ['images.unsplash.com','plus.unsplash.com'],
  },
  extend: {
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },

  }
  

};

export default nextConfig;
