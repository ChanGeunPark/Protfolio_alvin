"use client";

import { useSkillsSceneMotion } from "./hooks/useSkillsSceneMotion";
import Image from "next/image";
import { skillCategories, type SkillItem } from "./data/skills";

function SkillIcon({ skill }: { skill: SkillItem }) {
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
      style={{ background: skill.iconBg }}
    >
      {skill.iconImage ? (
        <Image
          src={skill.iconImage}
          alt={skill.name}
          width={18}
          height={18}
          className="w-6 h-6"
        />
      ) : skill.Icon ? (
        <skill.Icon size={18} style={{ color: skill.iconColor }} />
      ) : (
        <span
          className="text-[10px] font-bold leading-none"
          style={{ color: skill.iconColor }}
        >
          {skill.name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}

function Skills() {
  useSkillsSceneMotion();

  return (
    <section id="skills" data-skills-section className="relative">
      <div data-skills-viewport className="h-screen overflow-hidden">
        <div className="h-full flex items-center">
          <div
            data-skills-track
            className="flex items-center gap-0 pl-8 md:px-10 lg:px-14 py-16 w-max"
          >
            {/* Intro panel */}
            <div className="w-[80vw] max-w-[460px] shrink-0 pr-4">
              <p className="text-zinc-500 text-xs md:text-sm tracking-[0.25em] uppercase">
                Tech Stack
              </p>
              <h2 className="text-white text-5xl md:text-7xl font-bold mt-3 leading-none tracking-tight">
                Skills
              </h2>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-white text-4xl md:text-5xl font-bold leading-none">
                  5+
                </span>
                <span className="text-zinc-400 text-sm md:text-base mb-1 leading-tight">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
              <p className="text-zinc-600 text-xs md:text-sm mt-6 leading-relaxed max-w-[280px]">
                프론트엔드 개발부터 AI 통합까지
                <br />
                다양한 기술 스택을 실무에 적용했습니다.
              </p>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-5 h-px bg-zinc-600" />
                <span className="text-zinc-600 text-xs tracking-widest uppercase">
                  scroll
                </span>
                <div className="w-5 h-px bg-zinc-600" />
              </div>
            </div>

            {/* Skill cards */}
            {skillCategories.map((category) => (
              <article
                key={category.title}
                data-skills-card
                data-parallax-speed={category.parallaxSpeed}
                className="relative overflow-hidden w-[78vw] max-w-[380px] min-h-[62vh] rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm px-4 py-5 md:px-5 md:py-6 shrink-0"
                style={{
                  marginTop: `${category.yOffset}px`,
                  marginLeft: `${category.xGap}px`,
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})`,
                  }}
                />

                {/* Subtle glow behind top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-28 opacity-[0.06] rounded-t-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, ${category.gradientFrom}, transparent)`,
                  }}
                />

                {/* Category header */}
                <div className="relative flex items-center justify-between mb-4">
                  <h3
                    className="text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{
                      background: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {category.title}
                  </h3>
                  <span className="text-[10px] text-zinc-600 font-mono">
                    {category.items.length} skills
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-4 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, ${category.gradientFrom}55, transparent)`,
                  }}
                />

                {/* Skill items */}
                <ul className="space-y-1">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-white/4 transition-colors duration-200"
                    >
                      <SkillIcon skill={skill} />
                      <div className="min-w-0 flex-1">
                        <p className="text-zinc-100 text-sm font-medium leading-tight">
                          {skill.name}
                        </p>
                        <p className="text-zinc-500 text-[11px] mt-0.5 leading-tight truncate">
                          {skill.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
