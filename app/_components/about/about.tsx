"use client";
import Image from "next/image";
import React, { useRef } from "react";

function About() {
  const myFace = useRef(null);

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
      <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-50 pointer-events-none">
        <Image
          src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/2df8ffb4-eb06-4938-b481-5d40a7db5600/public"
          alt="background"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </span>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-[#28292e] via-[#28292e]/85 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-1 bg-linear-to-t from-[#28292e] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 z-1 bg-linear-to-b from-[#28292e] to-transparent pointer-events-none" />

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

        {/* Right — SVG face illustration */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative group cursor-default">
            {/* Ambient glow behind illustration */}
            <div className="absolute inset-0 scale-75 blur-3xl rounded-full bg-approveSub/5 group-hover:bg-approveSub/10 transition-all duration-700" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="face w-[420px] md:w-[520px] max-w-full stroke-[1.2] transition-all duration-700 ease-in-out group-hover:drop-shadow-[0_0_24px_rgba(51,235,189,0.12)]"
              viewBox="0 0 564.195 781.168"
              ref={myFace}
            >
              <path
                id="hat"
                data-name="hat"
                d="M215.86,330.682s29.592,101.27,33.538,140.726S244.137,501,232.3,481.625s-30.25-39.808-46.032-55.591-5.261,25.646-1.315,59.841-17.1,46.032-49.978,48S33.706,547.69,17.923,551.636,2.8,552.951,6.744,530.592,43.57,470.751,79.08,429.322s29.592-74.966,23.674-112.449S31.733,209.684,12,180.75,3.456,120.908,30.418,61.724s67.733-82.2,119.025-81.542S254-21.791,290.827-29.024s63.129,11.179,80.157,43.492,5.989,74.876.728,99.207S391.439,145.9,391.439,145.9s7.739,3.266,9.988-8.8-3.451-20.483,19.555-54.066,22.88-81.585,0-120.081S325.9-113.19,334.506-164.909s52.25-61.123,52.25-61.123"
                transform="translate(-1.13 227.01)"
                fill="none"
                stroke="#33EBBD"
                strokeOpacity="0.45"
                strokeMiterlimit="10"
              />
              <path
                id="face"
                data-name="face"
                d="M434.757,347.092s4.96,5.918,5.11,0-8.4-17.755-5.768-21.7,5.261-3.946,6.576-4.6.658-3.946-1.315-7.234-6.576-7.891-9.206-8.549.658-2.63,1.973-2.63a24.668,24.668,0,0,0,6.576-.658c1.973-.658,5.918-5.918,5.918-7.234s-.658-1.973-3.946-5.918-5.918-7.234-7.891-9.864-2.63-4.6-7.891-4.6-11.837.658-13.81-.658-7.891-9.206-9.206-14.467,0-12.494,1.973-13.152,5.688-1.315,5.474,0-1.528,4.6-1.528,7.234,3.288,11.837,5.261,13.152,6.576,3.288,9.206-.658,4.6-10.522,11.179-11.179,11.179,3.288,14.467,3.288,4.6-2.63,4.6-5.918.658-8.549-3.946-13.152-13.152-12.494-17.1-18.413-13.81-12.494-15.125-15.125-.658-4.6,0-6.576,1.973-9.206.658-9.206-1.973.658-3.288,3.288-3.946,3.946-7.891,6.576-11.179,7.234-12.494,9.864-.658,8.549-3.288,10.522-5.261,2.63-10.522-2.63-16.44-14.467-13.81-14.467S380.176,213.6,384.122,213.6s3.946-1.315,4.6-2.63-1.315-15.125-2.63-17.1-19.07,3.288-21.7,5.261-7.234-12.494-3.946-21.7,11.179-8.549,20.386-6.576,27.619,10.522,29.592,12.494,1.973,1.315,2.63-1.315,1.315-15.125.658-18.413-17.1-28.277-21.7-37.483S369,81.422,368.34,70.9s4.6-13.152,13.152-7.891,10.522,17.1,8.549,29.592-13.81,108.5-53.923,128.889-61.157-7.234-72.994,0-17.1,10.522-17.1,17.1,3.288,13.152,2.63,15.125-3.946-2.63-11.837-5.261-15.125-5.261-11.837-7.891,10.522-6.576,7.891-7.891-7.234,1.973-11.179,1.973-7.234-.658-5.918-9.206,7.891-13.152,9.206-9.864,1.315,9.864,5.918,7.891,4.6-7.234,4.6-19.728-10.522-19.728-21.7-17.1-15.394,3.946-22.493,18.413-7.757,39.456,3.422,54.581,21.7,19.07,36.168,21.7,21.043,8.549,24.331,20.386,9.206,32.222,25.646,40.114,51.95,19.728,90.749,22.358,53.266,1.315,59.184,1.315,8.549,1.973,5.918,6.576-5.261,11.837-20.386,12.494-42.086-3.288-50.635-1.973-10.522,5.261-10.522,9.206,3.946,24.989,10.522,33.538,7.234,11.837,21.7,15.125,35.51,7.234,49.978,12.494,19.728,10.522,40.113,10.522,65.1.658,94.037,27.619,49.32,51.95,55.9,69.706"
                transform="translate(-64.176 174.432)"
                fill="none"
                stroke="#ffeedd"
                strokeOpacity="0.75"
                strokeMiterlimit="10"
              />
            </svg>

            {/* Accent dot with glow */}
            <span className="w-3 h-3 block rounded-full bg-approveSub absolute top-0 -translate-y-1/2 right-[30%] shadow-[0_0_14px_5px_rgba(51,235,189,0.4)]" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
