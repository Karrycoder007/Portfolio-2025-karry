/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          "spin-slow": "spin 8s linear infinite",
        },
        fontFamily: {
          raleway: ["Raleway", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  