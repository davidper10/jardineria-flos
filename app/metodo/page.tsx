import type { Metadata } from "next";
import Link from "next/link";

import MethodTimeline from "@/components/method/MethodTimeLine";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description:
    "Conoce nuestro proceso de trabajo para proyectos de paisajismo, jardines, riego y espacios exteriores.",
};

export default function MethodPage() {
  return (
    <>
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-20 max-w-3xl text-center">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-[#256348]
              "
            >
              Método de trabajo
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
              Cómo trabajamos
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Un proceso estructurado para convertir las necesidades
              iniciales en un proyecto exterior funcional, coherente y
              técnicamente bien resuelto.
            </p>
          </header>

          <MethodTimeline />

          <div className="mt-20 text-center">
            <Link
              href="/contacto"
              className="
                inline-flex
                rounded-xl
                bg-[#256348]
                px-8
                py-4
                font-bold
                text-white
                shadow-md
                transition-all
                hover:bg-[#204f3b]
                hover:shadow-lg
              "
            >
              Iniciar un proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}