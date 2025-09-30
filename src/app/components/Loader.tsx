"use client";

import { motion, useMotionValue, animate, Transition } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [animateStrips, setAnimateStrips] = useState(false);
  const [counterComplete, setCounterComplete] = useState(false);

  const progress = useMotionValue(0);
  const [digits, setDigits] = useState<number[]>([0, 0, 0]);

  const strips = [0, 1, 2, 3];

  // Animate counter
  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 2.5,
      ease: [0.6, 0.01, 0.05, 0.95] as any,
      onUpdate: (latest) => {
        const num = Math.floor(latest);
        const str = num.toString().padStart(3, "0");
        setDigits(str.split("").map(Number));
      },
      onComplete: () => {
        setCounterComplete(true);
        setAnimateStrips(true); // strips start animating immediately
      },
    });
    return () => controls.stop();
  }, [progress]);

  const stripTransition: Transition = { duration: 2.2, ease: [0.6, 0.01, 0.05, 0.95] as any };

  return loading ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      {/* Vertical strips */}
      <div className="absolute inset-0 flex flex-row w-full h-full">
        {strips.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full bg-black"
            initial={{ y: "0%" }}
            animate={animateStrips ? { y: "-100%", transition: { ...stripTransition, delay: i * 0.05 } } : {}}
            onAnimationComplete={() => i === strips.length - 1 && setLoading(false)}
          />
        ))}
      </div>

      {/* Digital counter flying up */}
      <motion.div
        className="absolute bottom-6 right-6 flex space-x-2 text-white text-5xl md:text-7xl font-orbitron font-bold"
        initial={{ y: 0, opacity: 1 }}
        animate={counterComplete ? { y: -200, opacity: 0, transition: { duration: 1, ease: "easeIn" } } : {}}
      >
        {digits.map((digit, idx) => (
          <div key={idx} className="overflow-hidden h-[70px] md:h-[90px]">
            <span className="block" style={{ lineHeight: "70px" }}>
              {digit}
            </span>
          </div>
        ))}
        <span className="block text-3xl md:text-5xl ml-1">%</span>
      </motion.div>
    </div>
  ) : null;
}
