"use client";

import dynamic from "next/dynamic";

const Intro = dynamic(() => import("./intro"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full bg-[#28292E]" aria-hidden />
  ),
});

export default function IntroLoader() {
  return <Intro />;
}
