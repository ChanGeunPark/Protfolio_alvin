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
      title: "소수정예 팀에서 0→1을 만든 프론트엔드 경험",
      description: `교육 도메인, 이미지 마켓플레이스, AI 채팅 콘텐츠 서비스까지 서로 다른 제품을 연속으로 개발하며 프론트엔드 아키텍처와 UI/UX 흐름을 설계해왔습니다. SSR 기반 서비스 운영과 실서비스 배포까지 연결한 경험이 강점입니다.`,
    },
    {
      index: "02",
      title: "프론트를 중심으로, 필요한 영역까지 확장하는 문제 해결 방식",
      description: `역할을 프론트엔드에 고정하지 않고 문제의 원인에 따라 데이터 흐름과 백엔드 연동까지 직접 다룹니다. 기획·디자인·백엔드와 문제 중심으로 협업하며, 상태 관리·성능·코드 품질을 함께 개선해 서비스가 끊기지 않게 만드는 데 집중합니다.`,
    },
    {
      index: "03",
      title: "제품 중심 팀에서 더 크게 기여하고 싶습니다",
      description: `목표가 분명하고 사용자에게 실제로 쓰이는 제품을 빠르게 개선하는 팀을 지향합니다. 새로운 기술은 학습 자체보다 문제 해결의 수단으로 활용하며, 더 나은 UX와 코드 품질을 함께 만드는 문화에서 강점을 발휘합니다.`,
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
