import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectGallery from "@/components/projects/ProjectGallery";
import BeforeAfterSlider from "@/components/projects/BeforeAfterSlider";

import {
  getProjectBySlug,
  projects,
} from "@/data/project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.need,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              opacity-40
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-stone-950
              via-stone-950/90
              to-stone-950/20
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            py-24
            sm:px-6
            lg:px-8
          "
        >
          <Link
            href="/proyectos"
            className="
              text-sm
              font-semibold
              text-emerald-300
              hover:text-white
            "
          >
            ← Todos los proyectos
          </Link>

          <div className="mt-8 max-w-3xl">
            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-emerald-300
              "
            >
              {project.location}
              {" · "}
              {project.area}
            </span>

            <h1
              className="
                mt-3
                text-4xl
                font-extrabold
                tracking-tight
                sm:text-5xl
              "
            >
              {project.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    backdrop-blur
                  "
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        className="
          border-b
          border-stone-200
          bg-white
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-2
            gap-6
            px-4
            py-8
            sm:px-6
            md:grid-cols-4
            lg:px-8
          "
        >
          <div>
            <span
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-stone-400
              "
            >
              Ubicación
            </span>

            <strong className="mt-1 block text-stone-900">
              {project.location}
            </strong>
          </div>

          <div>
            <span
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-stone-400
              "
            >
              Superficie
            </span>

            <strong className="mt-1 block text-stone-900">
              {project.area}
            </strong>
          </div>

          <div>
            <span
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-stone-400
              "
            >
              Duración
            </span>

            <strong className="mt-1 block text-stone-900">
              {project.duration ?? "—"}
            </strong>
          </div>

          <div>
            <span
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-stone-400
              "
            >
              Año
            </span>

            <strong className="mt-1 block text-stone-900">
              {project.year ?? "—"}
            </strong>
          </div>
        </div>
      </div>

      {/* Caso de estudio */}
      <section className="bg-white py-20">
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              mb-16
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-2
            "
          >
            <article
              className="
                rounded-2xl
                bg-stone-50
                p-8
              "
            >
              <span className="text-3xl">
                🎯
              </span>

              <h2 className="mt-4 text-xl font-bold text-stone-900">
                Necesidad del cliente
              </h2>

              <p className="mt-4 leading-7 text-stone-600">
                {project.need}
              </p>
            </article>

            <article
              className="
                rounded-2xl
                bg-emerald-50
                p-8
              "
            >
              <span className="text-3xl">
                🛠️
              </span>

              <h2 className="mt-4 text-xl font-bold text-stone-900">
                Solución técnica
              </h2>

              <p className="mt-4 leading-7 text-stone-600">
                {project.solution}
              </p>
            </article>
          </div>

          <div className="mb-10">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-[#256348]
              "
            >
              Evolución del proyecto
            </span>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                text-stone-900
              "
            >
              Del estado inicial al resultado
            </h2>
          </div>

          <div className="mb-16">
            <div className="mb-8">
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-[#256348]
                "
              >
                Transformación
              </span>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-bold
                  text-stone-900
                "
              >
                Antes y después
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  leading-relaxed
                  text-stone-600
                "
              >
                Compara directamente el estado inicial del espacio con el resultado
                final del proyecto.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              alt={project.title}
            />
          </div>

          <ProjectGallery project={project} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1c4232] py-16 text-white">
        <div
          className="
            mx-auto
            max-w-3xl
            px-4
            text-center
            sm:px-6
          "
        >
          <h2 className="text-3xl font-bold">
            ¿Quieres transformar tu espacio?
          </h2>

          <p className="mt-4 text-emerald-100">
            Cuéntanos las características de tu
            parcela y estudiaremos las posibilidades
            del proyecto.
          </p>

          <Link
            href="/contacto"
            className="
              mt-8
              inline-flex
              rounded-xl
              bg-white
              px-7
              py-3.5
              font-bold
              text-[#1c4232]
              hover:bg-stone-100
            "
          >
            Solicitar presupuesto
          </Link>
        </div>
      </section>
    </>
  );
}