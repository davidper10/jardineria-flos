import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WaterEfficiencyCalculator from "@/components/calculators/WaterEfficiencyCalculator";

import {
  getServiceBySlug,
  services,
} from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover opacity-40"
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-stone-950
              via-stone-950/90
              to-stone-950/30
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
            lg:py-32
          "
        >
          <div className="max-w-3xl">
            <Link
              href="/servicios"
              className="mb-6 inline-block text-sm text-emerald-300 hover:text-white"
            >
              ← Todos los servicios
            </Link>

            <div className="mb-5 text-4xl">
              {service.icon}
            </div>

            <h1
              className="
                text-4xl
                font-extrabold
                tracking-tight
                sm:text-5xl
              "
            >
              {service.title}
            </h1>

            <p className="mt-5 text-xl text-stone-300">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="bg-white py-20">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-14
            px-4
            sm:px-6
            lg:grid-cols-2
            lg:px-8
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
              El servicio
            </span>

            <h2 className="mt-2 text-3xl font-bold text-stone-900">
              Una solución adaptada a cada proyecto
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              {service.description}
            </p>

            <ul className="mt-8 space-y-4">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-stone-700"
                >
                  <span
                    className="
                      mt-1
                      flex h-5 w-5
                      shrink-0
                      items-center justify-center
                      rounded-full
                      bg-emerald-100
                      text-xs
                      font-bold
                      text-[#256348]
                    "
                  >
                    ✓
                  </span>

                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={service.image}
              alt={service.title}
              className="
                h-[500px]
                w-full
                rounded-3xl
                object-cover
                shadow-xl
              "
            />
          </div>
        </div>
      </section>

      {service.slug === "sistemas-riego" && (
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
            <WaterEfficiencyCalculator />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#1c4232] py-16 text-white">
        <div
          className="
            mx-auto
            max-w-4xl
            px-4
            text-center
            sm:px-6
          "
        >
          <h2 className="text-3xl font-bold">
            ¿Necesitas este servicio?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
            Cuéntanos las características de tu proyecto y estudiaremos
            contigo la solución más adecuada.
          </p>

          <Link
            href={`/contacto?servicio=${service.slug}`}
            className="
              mt-8
              inline-flex
              rounded-xl
              bg-white
              px-7 py-3.5
              font-bold
              text-[#1c4232]
              transition-colors
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