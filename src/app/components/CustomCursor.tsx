"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const interactiveTags = ["IMG", "A", "BUTTON"];

    const handleMouseOver = (e: MouseEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (interactiveTags.includes(tag)) {
        setIsHidden(true);
        return;
      }
      if (["H1", "H2", "H3", "P"].includes(tag)) {
        setIsHoveringText(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (interactiveTags.includes(tag)) {
        setIsHidden(false);
        return;
      }
      if (["H1", "H2", "H3", "P"].includes(tag)) {
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
  }, [mouseX, mouseY]);

  return (
    <>
      {!isHidden && (
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
      )}
    </>
  );
}
