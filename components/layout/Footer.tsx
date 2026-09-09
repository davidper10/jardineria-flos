import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios técnicos", href: "/servicios" },
  { name: "Casos de estudio", href: "/proyectos" },
  { name: "Método de trabajo", href: "/metodo" },
  { name: "Contacto", href: "/contacto" },
];

const services = [
  {
    name: "Diseño de jardines",
    href: "/servicios/diseno-jardines",
  },
  {
    name: "Riego automatizado",
    href: "/servicios/sistemas-riego",
  },
  {
    name: "Diseño de piscinas",
    href: "/servicios/piscinas",
  },
  {
    name: "Ingeniería agronómica",
    href: "/servicios/ingenieria-agronomica",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-12 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border-2 border-white
                  shadow-[0_0_10px_2px_rgba(255,255,255,0.85)]
                "
              >
                <Image
                  src="/logo_ja.png"
                  alt="Jardinería Flos"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                Jose Ángel Pérez-Sevilla
              </span>
            </div>

            <p className="mb-4 max-w-sm text-xs leading-relaxed">
              Estudio profesional especializado en proyectos integrales de
              paisajismo, gestión hídrica eficiente, piscinas y consultoría
              agronómica.
            </p>

            <p className="text-xs text-stone-500">
              Ingeniería Agronómica & Paisajismo
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>

            <ul className="space-y-2 text-xs">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>

            <ul className="space-y-2 text-xs">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="
            flex flex-col
            items-center
            justify-between
            gap-4
            border-t border-stone-900
            pt-8
            text-xs
            sm:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} JOSE ÁNGEL Paisajismo & Agronomía.
            Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-stone-500">
            <Link href="/aviso-legal" className="hover:text-stone-300">
              Aviso Legal
            </Link>

            <Link href="/privacidad" className="hover:text-stone-300">
              Privacidad
            </Link>

            <Link href="/cookies" className="hover:text-stone-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}