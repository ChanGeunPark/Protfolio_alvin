import { cls } from "@/lib/utils";

type ProjectDetailButtonProps = {
  onClick: () => void;
  className?: string;
};

export default function ProjectDetailButton({
  onClick,
  className,
}: ProjectDetailButtonProps) {
  return (
    <button
      className={cls(
        "group relative inline-flex items-center gap-2 text-approveSub font-semibold text-sm md:text-base rounded-md px-5 py-2 bg-gradient-to-r from-approveSub/20 via-white/5 to-approveSub/10 backdrop-blur-lg border border-approveSub/25 hover:bg-approveSub/30 hover:text-white hover:border-approveSub/60 shadow-lg shadow-approveSub/5 transition-all duration-300 cursor-pointer overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-approveSub/70 focus:ring-offset-2",
        className,
      )}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        <svg
          className="h-4 w-4 text-approveSub group-hover:text-white transition-colors duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        자세히 보기
      </span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-approveSub/15 to-transparent pointer-events-none" />
    </button>
  );
}
