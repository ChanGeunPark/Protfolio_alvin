"use client";
import Image from "next/image";
import React from "react";
import MyFace from "./myFace";

function About() {
  const aboutMeData = [
    {
      index: "01",
      title: "프론트엔드를 지향하는 이유",
      description: `사용자와 가장 가까운 곳에서 서비스의 인상을 만드는 영역이 프론트엔드라고 생각합니다. 보이는 화면을 넘어 흐름과 반응까지 설계할 수 있다는 점이 매력적이었습니다. 그래서 저는 경험을 만드는 개발을 하고 싶어 프론트엔드를 선택했습니다.`,
    },
    {
      index: "02",
      title: "가장 중요하게 생각하는 가치",
      description: `제가 가장 중요하게 생각하는 가치는 사용자 중심의 개발입니다. 기능 구현에 그치지 않고, 더 자연스럽고 편한 경험을 만드는 것을 우선합니다. 동시에 운영과 확장을 고려한 구조도 함께 중요하게 생각합니다.`,
    },
    {
      index: "03",
      title: "그 가치를 실무에서 어떻게 구현해왔는지",
      description: `실무에서는 UI 구현뿐 아니라 상태와 데이터 흐름까지 함께 설계해왔습니다. AI 채팅, 결제, 콘텐츠 기능이 자연스럽게 이어지도록 구조를 정리했습니다. 그 결과 대규모 요청이 발생하는 서비스도 안정적으로 운영할 수 있었습니다.`,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background illustration */}
      {/* <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-50 pointer-events-none">
        <Image
          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/2df8ffb4-eb06-4938-b481-5d40a7db5600/public"
          alt="background"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </span> */}

      {/* Gradient overlays for readability */}
      {/* <div className="absolute inset-0 z-1 bg-linear-to-r from-[#28292e] via-[#28292e]/85 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-1 bg-linear-to-t from-[#28292e] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 z-1 bg-linear-to-b from-[#28292e] to-transparent pointer-events-none" />
       */}

      <article className="container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 z-10 py-24">
        {/* Left — text content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow label */}
          <p className="text-approveSub text-xs tracking-[0.35em] uppercase font-semibold mb-6">
            About Me
          </p>

          {/* Hero identity */}
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-2">
            Park Changeun
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mb-12 leading-relaxed">
            Frontend Developer · 경험을 만드는 개발자
          </p>

          {/* Q&A cards */}
          <div className="space-y-4">
            {aboutMeData.map((item) => (
              <div
                key={item.index}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/3 hover:bg-white/6 hover:border-approveSub/25 transition-all duration-300 px-5 py-5 overflow-hidden"
              >
                {/* Left accent line on hover */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-[55%] bg-linear-to-b from-approveSub/0 via-approveSub to-approveSub/0 rounded-full transition-all duration-400" />

                <div className="flex items-start gap-4">
                  {/* Number */}
                  <span className="text-approveSub/30 text-2xl font-bold leading-none mt-0.5 group-hover:text-approveSub/60 transition-colors duration-300 select-none font-mono shrink-0 w-8">
                    {item.index}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-zinc-100 font-semibold text-sm md:text-base mb-2 leading-snug">
                      Q.&nbsp;{item.title}
                    </h2>
                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — ASCII portrait (Canvas 2D) */}
        <div className="hidden md:flex justify-center items-center aspect-square h-full w-full">
          <MyFace />
        </div>
      </article>
    </section>
  );
}

export default About;
