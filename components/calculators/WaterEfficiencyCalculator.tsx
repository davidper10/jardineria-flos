"use client";

import Link from "next/link";
import { useState } from "react";

export default function WaterEfficiencyCalculator() {
  const [area, setArea] = useState(300);

  const litersSaved = Math.round(area * 20);

  const minEuro = Math.round(
    litersSaved * 0.75
  );

  const maxEuro = Math.round(
    litersSaved * 1.5
  );

  return (
    <section
      className="
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-stone-900
        to-[#0e241c]
        p-8
        text-white
        shadow-xl
        lg:p-12
      "
    >
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-2
        "
      >
        <div>
          <span
            className="
              inline-flex
              rounded-full
              bg-emerald-500/20
              px-3
              py-1
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-emerald-300
            "
          >
            Herramienta interactiva
          </span>

          <h2
            className="
              mt-4
              text-2xl
              font-extrabold
              sm:text-3xl
            "
          >
            Presupuesto orientativo
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-stone-300
            "
          >
            Utiliza la superficie aproximada de tu jardín para obtener una estimación
            orientativa del presupuesto medio. Luego hay muchos factores que pueden influir 
            en el coste final. Para obtener un presupuesto preciso que se adapte a tus necesidades, 
            te recomendamos solicitar una consulta personalizada.
          </p>

          <div className="mt-8">
            <div
              className="
                mb-3
                flex
                items-center
                justify-between
                text-sm
              "
            >
              <label
                htmlFor="garden-area"
                className="font-medium"
              >
                Superficie del jardín
              </label>

              <strong className="text-emerald-300">
                {area.toLocaleString("es-ES")} m²
              </strong>
            </div>

            <input
              id="garden-area"
              type="range"
              min="50"
              max="2000"
              step="25"
              value={area}
              onChange={(event) =>
                setArea(Number(event.target.value))
              }
              className="
                h-2
                w-full
                cursor-pointer
                accent-emerald-500
              "
            />

            <div
              className="
                mt-2
                flex
                justify-between
                text-xs
                text-stone-500
              "
            >
              <span>50 m²</span>
              <span>2.000 m²</span>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/10
            p-8
            text-center
            backdrop-blur-md
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-stone-400
            "
          >
            Precio estimado
          </p>

          <p
            className="
              my-4
              text-4xl
              font-black
              text-emerald-400
              sm:text-5xl
            "
          >
            {litersSaved.toLocaleString("es-ES")} €
          </p>


          <p className="mt-5 text-sm text-stone-300">
            Estimación económica aproximada:
          </p>

          <p className="mt-1 text-xl font-bold">
            {minEuro.toLocaleString("es-ES")} € –{" "}
            {maxEuro.toLocaleString("es-ES")} €
          </p>

          <div
            className="
              mt-8
              border-t
              border-white/10
              pt-6
            "
          >
            <Link
              href="/contacto?servicio=sistemas-riego"
              className="
                inline-flex
                rounded-xl
                bg-emerald-600
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition-colors
                hover:bg-emerald-500
              "
            >
              Consultar presupuesto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}