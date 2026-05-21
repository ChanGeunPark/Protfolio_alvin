"use client";

type IntroOverlayProps = {
  onCycleTexture: () => void;
};

export function IntroOverlay({ onCycleTexture }: IntroOverlayProps) {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 z-10 block h-[200px] w-full bg-gradient-to-t from-transparent to-zinc-900" />
      <h2 className="pointer-events-none absolute bottom-1/4 left-1/2 -translate-x-1/2 text-zinc-200 font-bold text-center w-full">
        화면을 넘어,&nbsp;
        <span className="text-primaryMain">경험을 설계하는</span>
        <br />
        프론트엔드 개발자&nbsp;
        <span className="text-primaryMain">박찬근</span>
        입니다
      </h2>

      <button
        type="button"
        className="absolute right-1/4 top-1/4 text-zinc-500"
        onClick={onCycleTexture}
      >
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="relative flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-300 opacity-75" />
            <span className="relative inline-flex h-5 w-5 rounded-full border border-zinc-700 bg-zinc-800" />
          </span>
          <span>CLICK</span>
        </div>
      </button>
      <article className="container absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="absolute bottom-20 right-2 z-20 flex translate-x-[40%] rotate-90 items-center">
          <span className="mr-2 text-zinc-400">Park Chan Geun</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.214"
            className="stroke-zinc-300"
            height="6.927"
            viewBox="0 0 36.214 6.927"
            aria-hidden
          >
            <path
              d="M1717.5,832.471v34.458l-5.72-6.047"
              transform="translate(-831.971 1718) rotate(-90)"
              fill="none"
              strokeLinecap="round"
              strokeWidth="1"
              opacity="0.485"
            />
          </svg>
        </div>
      </article>
    </>
  );
}
