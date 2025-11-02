import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import GoogleAnalytics from "./components/GoogleAnalytics"; // (you’ll add this small helper next)

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
      <head>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 antialiased">
        <CustomCursor />
        <Navbar />
        <Loader />
        <main className="min-h-screen px-4 md:px-12 lg:px-14 py-2">
          {children}
        </main>
        <Footer />
        {/* Tracks route changes */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
