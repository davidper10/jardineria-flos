import ProjectCard from "./ProjectCard";

import { projects } from "@/data/project";
import type { ProjectCategory } from "@/types/project";

type ProjectsGridProps = {
  category?: ProjectCategory;
};

export default function ProjectsGrid({
  category,
}: ProjectsGridProps) {
  const filteredProjects = category
    ? projects.filter(
        (project) => project.category === category
      )
    : projects;

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}