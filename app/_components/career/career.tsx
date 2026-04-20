"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiRocket2Fill } from "react-icons/ri";
import AlvinBadge from "@/components/common/badge/alvinBadge";

function Career() {
  const [activeIndex, setActiveIndex] = useState(0);
  const careerData = [
    {
      company: "(주)오지",
      period: "2022.09 ~ 2026.02",
      tags: ["프론트엔드", "클라이언트"],
      description:
        "스타트업에서 프로젝트를 처음부터 끝까지 만들고 운영하면서 프론트엔드 구조 설계, 상태 관리, API 연동, 실서비스 운영 경험을 깊게 쌓았습니다. AI 캐릭터 채팅 시스템을 도입하여 일 10만 회 이상의 대화 요청을 안정적으로 처리했습니다.",
    },
    {
      company: "(주)에듀에듀",
      period: "2020.10 ~ 2022.06",
      tags: ["풀스택", "디자인"],
      description:
        "교육 플랫폼과 서비스 구축 과정에서 기획, 디자인, 퍼블리싱, 프론트엔드, 데이터베이스 설정까지 경험하며 비즈니스 전반의 개발 플로우를 익혔습니다.",
    },
    {
      company: "이젠아카데미 (교육)",
      period: "2020.01 ~ 2020.06",
      tags: ["UI/UX 웹디자인", "웹퍼블리셔", "교육"],
      description: `UI/UX 웹디자인(웹퍼블리셔) 과정을 통해 사용자 리서치, 와이어프레임/프로토타입 제작, 사용성 테스트를 기반으로 한 화면 설계 역량을 익혔고, 웹 퍼블리싱과 Bootstrap 기반 반응형 UI 구현까지 경험하며 프론트엔드 실무 기초를 체계적으로 쌓았습니다.`,
    },
    {
      company: "(주)교원",
      period: "2017.04 ~ 2017.06",
      tags: ["디자이너", "인턴"],
      description:
        "아동 교육 플랫폼 콘텐츠를 디자인하며 사용자 연령대에 맞는 시각 구성과 정보 전달 구조를 설계했고, 이후 퍼블리싱/프론트엔드로 확장할 수 있는 UI 기초 역량을 다졌습니다.",
    },
  ];

  return (
    <section id="experience" className="relative py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <motion.p
          className="text-approveSub text-xs tracking-[0.35em] uppercase font-semibold mb-3"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
        >
          커리어
        </motion.h2>

        <div className="relative ">
          {/* Timeline vertical line — grows top-to-bottom on scroll */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut" as const }}
          />

          <div className="flex flex-col">
            {careerData.map((career, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={career.company}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut" as const,
                    delay: i * 0.1,
                  }}
                >
                  <motion.div
                    className="group relative py-8 border-b border-white/6 last:border-b-0  cursor-default px-5 md:rounded-r-xl rounded-xl "
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(0)}
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(255,255,255,0)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-10px] top-[2.1rem] hidden md:flex items-center justify-center w-5 h-5">
                      {/* Dot — always rendered, hides instantly when rocket appears */}
                      <motion.div
                        className="absolute w-[7px] h-[7px] rounded-full bg-zinc-700"
                        animate={{
                          scale: isActive ? 0 : 1,
                          opacity: isActive ? 0 : 1,
                        }}
                        transition={{ duration: 0 }}
                      />
                      {/* Rocket — springs in/out on top */}
                      <motion.div
                        className="absolute flex items-center justify-center"
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <RiRocket2Fill className="text-approveSub w-8 h-8" />
                      </motion.div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                      {/* Left: company + period + tags */}
                      <div className="md:w-48 shrink-0 mb-3 md:mb-0">
                        <motion.h3
                          className="font-semibold text-base leading-snug mb-1.5"
                          animate={{ color: isActive ? "#ffffff" : "#e4e4e7" }}
                          transition={{ duration: 0.3 }}
                        >
                          {career.company}
                        </motion.h3>
                        <motion.p
                          className="text-xs font-mono mb-3 text-approveSub/70"
                          animate={{ opacity: isActive ? 1 : 0.5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {career.period}
                        </motion.p>
                        <div className="flex flex-wrap gap-1.5">
                          {career.tags.map((tag) => (
                            <AlvinBadge
                              key={tag}
                              BadgeStyle="BLACK"
                              BadgeSize="SMALL"
                            >
                              {tag}
                            </AlvinBadge>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="hidden md:block w-px self-stretch bg-white/[0.07] shrink-0" />

                      {/* Right: description */}
                      <motion.p
                        className="text-sm leading-relaxed flex-1"
                        animate={{ color: isActive ? "#a1a1aa" : "#71717a" }}
                        transition={{ duration: 0.3 }}
                      >
                        {career.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
