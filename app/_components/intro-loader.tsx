"use client";

import dynamic from "next/dynamic";

const Intro = dynamic(() => import("./intro"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-[#28292E] text-white">
      Loading...
    </div>
  ),
});

export default function IntroLoader() {
  return <Intro />;
}
