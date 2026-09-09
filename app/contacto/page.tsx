import type { Metadata } from "next";

import ContactChannels from "@/components/contact/ContactChannels";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita información o presupuesto para proyectos de jardinería, paisajismo, riego, piscinas e ingeniería agronómica.",
};

export default function ContactPage() {
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
              Hablemos de tu proyecto
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
                Contacto y solicitud de presupuesto
              </span>
            </h1>

            <div className="mx-auto mt-5 flex max-w-2xl items-center justify-center gap-4 text-stone-500">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#256348]" />
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
            </div>

            <p
              className="
                mt-6
                text-base
                leading-relaxed
                text-stone-600
                sm:text-lg
              "
            >
              Cuéntanos qué necesitas y podremos conocer mejor las
              características iniciales de tu proyecto para proponerte la mejor
              solución.
            </p>
          </div>
        </header>

        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-3
          "
        >
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <ContactChannels />
        </div>
      </div>
    </section>
  );
}