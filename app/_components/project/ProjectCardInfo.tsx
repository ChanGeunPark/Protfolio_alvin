import type { ProjectItem } from "./data/projects";
import ProjectDetailButton from "./ProjectDetailButton";

type ProjectCardInfoProps = {
  project: ProjectItem;
  index: number;
  onOpenDetail: () => void;
};

export default function ProjectCardInfo({
  project,
  index,
  onOpenDetail,
}: ProjectCardInfoProps) {
  return (
    <div className="order-2 lg:order-1 min-h-0">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          data-project-badge
          className="inline-flex text-xs px-2.5 py-1 rounded-full bg-black/30 text-zinc-200"
        >
          {project.organization}
        </span>
        <span className="inline-flex text-xs px-2.5 py-1 rounded-full bg-white/10 text-zinc-100">
          Project {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-white text-lg md:text-3xl font-semibold">
        {project.title}
      </h3>

      <p className="text-zinc-300 mt-2 text-sm md:text-base">
        {project.oneLine}
      </p>
      <p className="text-zinc-200 mt-3 text-sm md:text-base leading-relaxed">
        <span className="text-zinc-400 mr-2">역할</span>
        {project.role}
      </p>

      <ProjectBulletList title="주요 기여" items={project.contributions} />
      <ProjectNumberedList title="성과" items={project.achievements} />

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-white/10 text-zinc-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <ProjectDetailButton
        className="w-full mt-6 max-lg"
        onClick={onOpenDetail}
      />
    </div>
  );
}

function ProjectBulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-4">
      <h4 className="text-zinc-100 text-sm md:text-base font-semibold mb-2">
        {title}
      </h4>
      <ul className="text-zinc-300 text-sm leading-relaxed list-disc pl-5 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectNumberedList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mt-4">
      <h4 className="text-zinc-100 text-sm md:text-base font-semibold mb-2">
        {title}
      </h4>
      <ol className="text-zinc-300 text-sm leading-relaxed list-decimal pl-5 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
