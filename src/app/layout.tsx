import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import Loader from "./components/Loader";

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
      <body className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 antialiased">
        <CustomCursor />
        <Navbar />
        <Loader/>
        <main className="min-h-screen px-4 md:px-16 lg:px-24 py-2">
          {children}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}
