export default function ContactChannels() {
  return (
    <aside className="space-y-6">
      <div
        className="
          rounded-3xl
          border border-stone-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <h2 className="text-xl font-bold text-stone-900">
          Contacto directo
        </h2>

        <div className="mt-6 space-y-4">
          <a
            href="https://wa.me/34629013200"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-emerald-50
              p-4
              transition
              hover:bg-emerald-100
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-emerald-500
                text-xl
                text-white
              "
            >
              💬
            </div>

            <div>
              <strong
                className="
                  block
                  text-sm
                  text-stone-900
                "
              >
                WhatsApp
              </strong>

              <span className="text-xs text-stone-500">
                +34 629013200
              </span>
            </div>
          </a>

          <a
            href="tel:+34629013200"
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-stone-100
              p-4
              transition
              hover:bg-stone-200
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-stone-800
                text-xl
                text-white
              "
            >
              ☎
            </div>

            <div>
              <strong
                className="
                  block
                  text-sm
                  text-stone-900
                "
              >
                Teléfono
              </strong>

              <span className="text-xs text-stone-500">
                L-V de 8:00 a 19:00
              </span>
            </div>
          </a>

          <a
            href="mailto:jardineriaflos@hotmail.com"
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-stone-100
              p-4
              transition
              hover:bg-stone-200
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#256348]
                text-xl
                text-white
              "
            >
              ✉
            </div>

            <div>
              <strong
                className="
                  block
                  text-sm
                  text-stone-900
                "
              >
                Email
              </strong>

              <span className="text-xs text-stone-500">
                jardineriaflos@hotmail.com
              </span>
            </div>
          </a>
        </div>
      </div>

      <div
        className="
          rounded-3xl
          bg-[#1c4232]
          p-8
          text-white
        "
      >
        <h2 className="font-bold">
          📍 Área de actuación
        </h2>

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-emerald-100
          "
        >
          Proyectos presenciales en La Rioja y zonas próximas. Consultoría y
          determinados proyectos técnicos pueden
          estudiarse también a distancia.
        </p>
      </div>
    </aside>
  );
}