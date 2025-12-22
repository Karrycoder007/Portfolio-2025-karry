import type { Metadata } from "next";
import { Raleway, Righteous } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import { Analytics } from "@vercel/analytics/react";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kartik Bhat | Portfolio",
  description: "Web developer, designer & future creative visual artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${righteous.variable} ${raleway.variable}`}
    >
      <body className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 antialiased">
        <CustomCursor />
        <Navbar />
        <Loader />
        <main className="min-h-screen px-4 md:px-12 lg:px-14 py-2">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
