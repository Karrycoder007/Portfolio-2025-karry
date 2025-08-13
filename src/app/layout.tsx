
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";


// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartik Bhat | Portfolio",
  description: "Web developer, designer & future creative visual artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-black text-black dark:text-white transition-all duration-300 antialiased`}
      >
         
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen px-4 md:px-16 lg:px-24 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
