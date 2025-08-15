"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024); // hide on iPad + mobile
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (isMobile) return; // 🚫 No events on mobile

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const interactiveTags = ["IMG", "A", "BUTTON"];
    const textTags = ["H1", "H2", "H3", "P"];

    const handleMouseOver = (e: MouseEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (interactiveTags.includes(tag)) {
        setIsHidden(true);
        return;
      }
      if (textTags.includes(tag)) {
        setIsHoveringText(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (interactiveTags.includes(tag)) {
        setIsHidden(false);
        return;
      }
      if (textTags.includes(tag)) {
        setIsHoveringText(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isMobile]);

  if (isMobile || isHidden) return null; // hide completely

  return (
    <motion.div
      className="fixed rounded-full bg-black dark:bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{
        translateX: smoothX,
        translateY: smoothY,
        width: isHoveringText ? "80px" : "24px",
        height: isHoveringText ? "80px" : "24px",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    />
  );
}
