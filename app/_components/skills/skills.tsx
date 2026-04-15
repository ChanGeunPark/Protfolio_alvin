"use client";

import { useSkillsSceneMotion } from "./hooks/useSkillsSceneMotion";

type SkillCategory = {
  title: string;
  items: string[];
  parallaxSpeed: number;
  yOffset: number;
  xGap: number;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    items: ["React", "Next.js", "TypeScript"],
    parallaxSpeed: 0.45,
    yOffset: -28,
    xGap: 8,
  },
  {
    title: "Frontend",
    items: [
      "Tailwind CSS",
      "Zustand",
      "Recoil",
      "Apollo Client",
      "GraphQL",
      "Framer Motion",
      "GSAP",
      "Lottie",
    ],
    parallaxSpeed: 1.95,
    yOffset: 18,
    xGap: 72,
  },
  {
    title: "UI / Interaction",
    items: [
      "React Hook Form",
      "Swiper",
      "React Modal",
      "Radix UI",
      "Dropzone",
      "Recharts",
    ],
    parallaxSpeed: 0.7,
    yOffset: -16,
    xGap: 26,
  },
  {
    title: "Auth / SEO / App",
    items: ["NextAuth", "SEO", "PWA", "Web Push"],
    parallaxSpeed: 1.55,
    yOffset: 24,
    xGap: 106,
  },
  {
    title: "Infra / Service",
    items: ["Firebase", "Toss Payments", "EmailJS", "PM2", "GCP"],
    parallaxSpeed: 0.9,
    yOffset: -12,
    xGap: 38,
  },
  {
    title: "AI / Search",
    items: ["LangChain", "Azure OpenAI", "Pinecone"],
    parallaxSpeed: 1.2,
    yOffset: 30,
    xGap: 84,
  },
];

function Skills() {
  useSkillsSceneMotion();

  return (
    <section data-skills-section className="bg-[#28292D] relative">
      <div
        data-skills-viewport
        className="h-screen overflow-hidden border-y border-white/10"
      >
        <div className="h-full flex items-center">
          <div
            data-skills-track
            className="flex items-center gap-0 px-4 md:px-10 lg:px-14 py-16 w-max"
          >
            <div className="w-[80vw] max-w-[460px] shrink-0">
              <p className="text-zinc-400 text-xs md:text-sm tracking-[0.22em] uppercase">
                Skills
              </p>
              <h2 className="text-white text-3xl md:text-5xl font-bold mt-3 leading-tight">
                4+
              </h2>
              <p className="text-zinc-300 text-sm md:text-base mt-6 leading-relaxed">
                Years Experience Working
              </p>
            </div>

            {skillCategories.map((category) => (
              <article
                key={category.title}
                data-skills-card
                data-parallax-speed={category.parallaxSpeed}
                className="w-[78vw] max-w-[400px] min-h-[62vh] rounded-2xl border border-[#10B981]/40 bg-black/45 backdrop-blur-[1px] px-5 py-6 md:px-6 md:py-7 shrink-0"
                style={{
                  marginTop: `${category.yOffset}px`,
                  marginLeft: `${category.xGap}px`,
                }}
              >
                <h3 className="text-[#34D399] text-lg md:text-xl font-semibold">
                  {category.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/15 px-3 py-2 text-zinc-100 text-sm md:text-base"
                    >
                      {item}
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
