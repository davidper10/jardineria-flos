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
        <header
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[#256348]
            "
          >
            Hablemos de tu proyecto
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
            Contacto y solicitud de presupuesto
          </h1>

          <p
            className="
              mt-5
              text-lg
              leading-relaxed
              text-stone-600
            "
          >
            Cuéntanos qué necesitas y podremos
            conocer mejor las características
            iniciales de tu proyecto.
          </p>
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