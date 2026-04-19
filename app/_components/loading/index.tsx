"use client";

import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./loading-screen"), { ssr: false });

export default function LoadingScreenLoader() {
  return <LoadingScreen />;
}
