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
    <section className="relative overflow-hidden bg-stone-50 py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(37,99,72,0.10),_transparent_60%)]" />
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <header className="relative mx-auto mb-16 max-w-5xl pt-4 text-center">
          <div className="absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full bg-[#dff6ea] blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <span
              className="
                mb-4
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-[#cfe9dc]
                bg-white/70
                px-4
                py-2
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#256348]
              "
            >
              Trabajos realizados
            </span>

            <h1
              className="
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-stone-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              <span className="bg-gradient-to-r from-stone-900 via-[#1f4d3d] to-[#3a8a6a] bg-clip-text text-transparent">
                Casos de estudio y proyectos
              </span>
            </h1>

            <div className="mx-auto mt-5 flex max-w-2xl items-center justify-center gap-4 text-stone-500">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#256348]" />
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
            </div>

            <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
              Descubre el problema inicial, la solución técnica y el resultado
              de cada proyecto para entender cómo transformamos espacios con
              criterio, precisión y cuidado.
            </p>
          </div>
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