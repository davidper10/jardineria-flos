import Link from "next/link";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/project";

export default function HomePage() {
  
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-stone-900 text-white">
        
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=80"
            alt="Jardín paisajístico residencial"
            className="
              h-full w-full
              object-cover
              object-center
              brightness-[0.65]
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-stone-950/90
              via-stone-950/60
              to-transparent
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            relative z-10
            mx-auto
            w-full
            max-w-7xl
            px-4
            py-20
            sm:px-6
            lg:px-8
            lg:py-32
          "
        >
          <div className="max-w-2xl space-y-6">
            
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-emerald-400/30
                bg-emerald-950/70
                px-3.5 py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-emerald-200
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              Ingeniería Agronóma & Paisajismo Integral
            </div>

            <h1
              className="
                text-4xl
                font-extrabold
                leading-[1.15]
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Diseño y ejecución de{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-emerald-300
                  to-emerald-400
                  bg-clip-text
                  text-transparent
                "
              >
                espacios exteriores
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-stone-300 sm:text-xl">
              Proyectos de jardinería, sistemas de riego automatizado, piscinas 
              integradas y soluciones técnicas de ingeniería agronóma.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/contacto"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#2d7c58]
                  px-8 py-4
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#3e9a71]
                "
              >
                Solicitar presupuesto
                <span className="ml-3">→</span>
              </Link>

              <Link
                href="/proyectos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border border-white/20
                  bg-white/10
                  px-8 py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:bg-white/20
                "
              >
                Ver proyectos
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-stone-800/80 pt-8">
              <div>
                <strong className="block text-2xl text-white">+12</strong>
                <span className="text-xs text-stone-400">
                  Años de experiencia
                </span>
              </div>

              <div>
                <strong className="block text-2xl text-white">100%</strong>
                <span className="text-xs text-stone-400">
                  Proyectos a medida
                </span>
              </div>

              <div>
                <strong className="block text-2xl text-white">+50
                </strong>
                <span className="text-xs text-stone-400">
                  Proyectos satisfactorios
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-[#256348]
              "
            >
              Especialidades técnicas
            </span>

            <h2
              className="
                mt-2
                text-3xl
                font-extrabold
                tracking-tight
                text-stone-900
                sm:text-4xl
              "
            >
              Servicios principales
            </h2>

            <p className="mt-4 text-lg text-stone-600">
              Soluciones integrales diseñadas con rigor técnico,
              estética vegetal y eficiencia hídrica.
            </p>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="bg-stone-100 py-20">
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
              mb-12
              flex
              flex-col
              justify-between
              gap-5
              md:flex-row
              md:items-end
            "
          >
            <div>
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-[#256348]
                "
              >
                Trabajos recientes
              </span>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-extrabold
                  text-stone-900
                "
              >
                Proyectos destacados
              </h2>
            </div>

            <Link
              href="/proyectos"
              className="
                font-bold
                text-[#256348]
                hover:underline
              "
            >
              Ver todos los proyectos →
            </Link>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}