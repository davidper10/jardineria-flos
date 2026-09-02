import type { Metadata } from "next";

import ServicesGrid from "@/components/services/ServicesGrid";
import WaterEfficiencyCalculator from "@/components/calculators/WaterEfficiencyCalculator";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de diseño de jardines, sistemas de riego, piscinas, paisajismo e ingeniería agronómica.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-16 max-w-3xl text-center">
            <span
              className="
                mb-2
                block
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-[#256348]
              "
            >
              Especialidades técnicas
            </span>

            <h1
              className="
                text-3xl
                font-extrabold
                tracking-tight
                text-stone-900
                sm:text-4xl
              "
            >
              Servicios especializados
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Soluciones integrales de paisajismo e ingeniería diseñadas
              con rigor técnico, funcionalidad y eficiencia hídrica.
            </p>
          </header>

          <ServicesGrid />

          <div className="mt-20">
            <WaterEfficiencyCalculator />
          </div>

        </div>
      </section>
    </>
  );
}