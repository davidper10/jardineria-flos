import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        flex
        overflow-hidden
        rounded-2xl
        border border-stone-200
        bg-white
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <Link
        href={`/proyectos/${project.slug}`}
        className="flex w-full flex-col"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <span
            className="
              absolute
              right-4
              top-4
              rounded-full
              bg-stone-950/80
              px-3
              py-1
              text-xs
              font-bold
              text-white
              backdrop-blur
            "
          >
            {project.area}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#256348]
            "
          >
            {project.location}
          </span>

          <h2 className="mt-2 text-xl font-bold text-stone-900">
            {project.title}
          </h2>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-relaxed
              text-stone-600
            "
          >
            {project.need}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="
                  rounded-md
                  bg-stone-100
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-stone-700
                "
              >
                {service}
              </span>
            ))}
          </div>

          <span
            className="
              mt-6
              inline-flex
              items-center
              font-bold
              text-[#256348]
            "
          >
            Ver caso de estudio
            <span
              className="
                ml-2
                transition-transform
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}