"use client";
import React from "react";
import { motion } from "framer-motion";
import MyFace from "./myFace";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

function About() {
  const aboutMeData = [
    {
      index: "01",
      title: "프론트를 중심으로 넓혀온 5년의 개발 경험",
      description: `저는 프론트엔드를 메인으로 사용자 경험과 화면 흐름을 설계해왔습니다. 
                    AI 채팅 서비스, 마켓플레이스, 교육 플랫폼 등 다양한 도메인에서 
                    서비스 맥락에 맞는 인터랙션과 상태 흐름을 정교하게 다듬으며 
                    제품 완성도를 높여왔습니다.`,
    },
    {
      index: "02",
      title: "도메인을 넘나들며 문제를 끝까지 해결하는 방식",
      description: `역할을 프론트엔드로 한정하지 않고, 문제의 원인이 어디에 있든 필요한 영역까지 책임지고 해결합니다. 이 과정에서 화면, 상태, 데이터 흐름을 하나의 사용자 여정으로 연결해 병목과 이슈를 줄이는 데 집중합니다.`,
    },
    {
      index: "03",
      title: "실무에서 만들어낸 결과",
      description: `실무에서는 UI 구현을 넘어 상태 관리와 운영 관점의 안정성까지 함께 챙겨왔습니다. 페이지 성격에 맞는 데이터 로딩 전략과 상태 구조를 정리해 초기 로딩 부담을 줄였고, 기능 확장과 협업이 쉬운 구조로 개선해 서비스 완성도를 높였습니다.`,
    },
  ];

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
