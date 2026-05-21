"use client";

import { useProjectSceneMotion } from "./hooks/useProjectSceneMotion";
import ProjectIntroScene from "./components/project-intro-scene";
import { useAppModal } from "@/components/common/modal";
import { allProjects, type ProjectItem } from "./data/projects";
import ProjectDetailModal from "./components/project-detail-modal";
import ProjectCard from "./components/project-card";

function Project() {
  useProjectSceneMotion();

  const { openModal } = useAppModal();
  const handleOpenModal = (project: ProjectItem) => {
    openModal({
      children: <ProjectDetailModal project={project} />,
    });
  };

  return (
    <section
      id="project"
      data-project-section
      className="relative min-h-screen md:py-28 overflow-hidden"
    >
      <div className="mx-auto">
        {/* 프로젝트 타이틀 */}
        <ProjectIntroScene />

        {/* 프로젝트 카드 */}
        <div className="space-y-8 md:space-y-10">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={`${project.organization}-${project.title}`}
              project={project}
              index={index}
              onOpen={handleOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
