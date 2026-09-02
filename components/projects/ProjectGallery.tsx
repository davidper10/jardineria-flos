import type { Project } from "@/types/project";

type ProjectGalleryProps = {
  project: Project;
};

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  const images = [
    {
      src: project.planImage,
      label: "Diseño y planificación",
    },
    {
      src: project.executionImage,
      label: "Proceso de ejecución",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
      "
    >
      {images.map((image) => (
        <figure
          key={image.src}
          className="
            overflow-hidden
            rounded-2xl
            border
            border-stone-200
            bg-white
          "
        >
          <img
            src={image.src}
            alt={`${image.label} - ${project.title}`}
            className="
              h-80
              w-full
              object-cover
            "
          />

          <figcaption
            className="
              px-5
              py-4
              text-sm
              font-semibold
              text-stone-700
            "
          >
            {image.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}