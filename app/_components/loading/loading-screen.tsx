"use client";

import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NAME = "Park Chan Geun";
const SUBTITLE = "Frontend Developer";

function useAnimatedCount(target: number) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef(0);

  useEffect(() => {
    fromRef.current = count;
    startRef.current = null;

    const animate = (time: number) => {
      if (!startRef.current) startRef.current = time;
      const elapsed = time - startRef.current;
      const t = Math.min(elapsed / 600, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(
        fromRef.current + (target - fromRef.current) * eased,
      );
      setCount(next);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return count;
}

const EASE_CURTAIN = [0.76, 0, 0.24, 1] as const;

export default function LoadingScreen() {
  const { progress } = useProgress();
  const displayCount = useAnimatedCount(Math.round(progress));
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (progress < 100) return;
    const t1 = setTimeout(() => setIsExiting(true), 500);
    const t2 = setTimeout(() => setIsHidden(true), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [progress]);

  // safety fallback: hide after 10 seconds regardless
  useEffect(() => {
    const t = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsHidden(true), 1200);
    }, 10_000);
    return () => clearTimeout(t);
  }, []);

  if (isHidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      {/* Left curtain panel */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#1c1d21]"
        animate={isExiting ? { x: "-100%" } : { x: 0 }}
        transition={{
          duration: 0.95,
          ease: EASE_CURTAIN,
          delay: isExiting ? 0.05 : 0,
        }}
      />

      {/* Right curtain panel */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#1c1d21]"
        animate={isExiting ? { x: "100%" } : { x: 0 }}
        transition={{
          duration: 0.95,
          ease: EASE_CURTAIN,
          delay: isExiting ? 0.05 : 0,
        }}
      />

      {/* Vertical seam glow */}
      <motion.div
        className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#FFE55C]/20"
        animate={
          isExiting ? { opacity: 0, scaleY: 0 } : { opacity: 1, scaleY: 1 }
        }
        transition={{ duration: 0.3 }}
      />

      {/* Center content */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        animate={isExiting ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeIn" }}
      >
        {/* Faint PCG watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute select-none font-bold text-white"
          style={{
            fontSize: "24vw",
            opacity: 0.03,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          PCG
        </span>

        {/* Decorative top line */}
        <motion.div
          className="mb-8 h-px w-40 bg-zinc-600 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        />

        {/* Animated name */}
        <div className="flex overflow-hidden" aria-label={NAME}>
          {NAME.split("").map((char, i) => (
            <motion.span
              key={i}
              className="font-bold text-white"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.75rem)",
                fontFamily: "var(--font-geist-sans)",
                display: "inline-block",
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.2 + i * 0.032,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-3 tracking-[0.5em] text-zinc-500 uppercase"
          style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          {SUBTITLE}
        </motion.p>

        {/* Decorative bottom line */}
        <motion.div
          className="mt-8 h-px w-40 bg-zinc-600 origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        />

        {/* Corner accents */}
        {(["tl", "tr", "bl", "br"] as const).map((pos, i) => (
          <motion.span
            key={pos}
            aria-hidden
            className="absolute h-4 w-4 border-[#FFE55C]/40"
            style={{
              top: pos.startsWith("t") ? "2rem" : undefined,
              bottom: pos.startsWith("b") ? "2rem" : undefined,
              left: pos.endsWith("l") ? "2rem" : undefined,
              right: pos.endsWith("r") ? "2rem" : undefined,
              borderTopWidth: pos.startsWith("t") ? 1 : 0,
              borderBottomWidth: pos.startsWith("b") ? 1 : 0,
              borderLeftWidth: pos.endsWith("l") ? 1 : 0,
              borderRightWidth: pos.endsWith("r") ? 1 : 0,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
          />
        ))}
      </motion.div>

      {/* Progress bar (pinned to bottom) */}
      <motion.div
        className="absolute bottom-12 left-1/2 z-20 flex w-56 -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <div className="flex w-full items-center justify-between text-xs text-zinc-600">
          <span className="tracking-widest uppercase">Loading</span>
          <span className="font-mono tabular-nums" style={{ color: "#FFE55C" }}>
            {displayCount}%
          </span>
        </div>

        <div className="h-px w-full bg-zinc-800">
          <div
            className="h-full bg-[#FFE55C] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
