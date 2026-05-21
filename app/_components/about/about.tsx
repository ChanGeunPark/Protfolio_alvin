"use client";
import React from "react";
import { motion } from "framer-motion";
import MyFace from "./my-face";
import { aboutMeData } from "./data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <article className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 z-10 py-24">
        <div className="flex flex-col justify-center">
          <motion.p
            className="text-approveSub text-xs tracking-[0.35em] uppercase font-semibold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
          >
            About Me
          </motion.p>

          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold leading-snug mb-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            Park Changeun
          </motion.h1>
          <motion.p
            className="text-zinc-400 text-sm md:text-base mb-12 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={2}
          >
            Frontend Developer · 경험을 설계하는 개발자
          </motion.p>

          <div className="space-y-4">
            {aboutMeData.map((item, i) => (
              <motion.div
                key={item.index}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/3 hover:bg-white/6 hover:border-approveSub/25 transition-all duration-300 px-5 py-5 overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={3 + i}
              >
                {/* Left accent line on hover */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-[55%] bg-linear-to-b from-approveSub/0 via-approveSub to-approveSub/0 rounded-full transition-all duration-400" />

                <div className="flex items-start gap-4">
                  <span className="text-approveSub/30 text-2xl font-bold leading-none group-hover:text-approveSub/60 transition-colors duration-300 select-none font-mono shrink-0 w-8">
                    {item.index}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-zinc-100 font-semibold text-sm md:text-base mb-2 leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — ASCII portrait (Canvas 2D) */}
        <motion.div
          className="hidden md:flex justify-center items-center aspect-square h-full w-full"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <MyFace />
        </motion.div>
      </article>
    </section>
  );
}

export default About;
