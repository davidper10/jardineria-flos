import type { Metadata } from "next";
import Link from "next/link";

import ProjectsGrid from "@/components/projects/ProjectsGrid";
import type { ProjectCategory } from "@/types/project";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de estudio de jardines, piscinas, sistemas de riego y proyectos de ingeniería agronómica.",
};

const categories = [
  {
    label: "Todos",
    href: "/proyectos",
  },
  {
    label: "Jardines",
    href: "/proyectos?categoria=jardin",
  },
  {
    label: "Sistemas de riego",
    href: "/proyectos?categoria=riego",
  },
  {
    label: "Piscinas",
    href: "/proyectos?categoria=piscina",
  },
  {
    label: "Ingeniería técnica",
    href: "/proyectos?categoria=agronomia",
  },
];

type ProjectsPageProps = {
  searchParams: Promise<{
    categoria?: string;
  }>;
};

const validCategories: ProjectCategory[] = [
  "jardin",
  "riego",
  "piscina",
  "agronomia",
];

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const { categoria } = await searchParams;

  const selectedCategory =
    validCategories.includes(
      categoria as ProjectCategory
    )
      ? (categoria as ProjectCategory)
      : undefined;

  return (
    <section className="bg-stone-50 py-20">
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[#256348]
            "
          >
            Trabajos realizados
          </span>

          <h1
            className="
              mt-2
              text-3xl
              font-extrabold
              tracking-tight
              text-stone-900
              sm:text-4xl
            "
          >
            Casos de estudio y proyectos
          </h1>

          <p className="mt-4 text-lg text-stone-600">
            Descubre el problema inicial, la solución
            técnica y el resultado de cada proyecto.
          </p>
        </header>

        <nav
          className="
            mb-12
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="
                rounded-xl
                border border-stone-200
                bg-white
                px-4
                py-2.5
                text-sm
                font-semibold
                text-stone-700
                transition-colors
                hover:border-[#256348]
                hover:text-[#256348]
              "
            >
              {category.label}
            </Link>
          ))}
        </nav>

        <ProjectsGrid
          category={selectedCategory}
        />
      </div>
    </section>
  );
}