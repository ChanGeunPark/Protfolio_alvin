import { cls } from "@/lib/utils";

type ProjectMetaProps = {
  label: string;
  value: string;
  wide?: boolean;
};

export default function ProjectMeta({ label, value, wide }: ProjectMetaProps) {
  return (
    <div
      className={cls(
        "min-h-16 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2",
        wide && "col-span-2",
      )}
    >
      <p className="text-xs text-zinc-500 font-medium">{label}</p>
      <p className="mt-1 text-sm text-zinc-200 leading-snug">{value}</p>
    </div>
  );
}
