"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Servicios",
    href: "/servicios",
  },
  {
    name: "Proyectos",
    href: "/proyectos",
  },
  {
    name: "Cómo trabajo",
    href: "/metodo",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-panel sticky top-0 z-50 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border-2 border-white
                shadow-[0_0_10px_2px_rgba(255,255,255,0.85)]
              "
            >
              <Image
                src="/logo_ja.png"
                alt="Jardinería Flos"
                width={44}
                height={44}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div>
              <span
                className="
                  block
                  text-xl font-bold
                  tracking-tight
                  text-stone-900
                  transition-colors
                  group-hover:text-[#256348]
                "
              >
                JOSE ÁNGEL
              </span>

              <span
                className="
                  block
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-stone-500
                "
              >
                Paisajismo & Agronomía
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  py-1
                  text-sm
                  font-medium
                  text-stone-600
                  transition-colors
                  hover:text-[#256348]
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                px-3 py-2
                text-sm
                font-semibold
                text-[#256348]
                transition-colors
                hover:bg-[#f2f9f5]
              "
            >
              WhatsApp
            </a>

            <Link
              href="/contacto"
              className="
                rounded-xl
                bg-[#256348]
                px-5 py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                hover:bg-[#204f3b]
                hover:shadow
              "
            >
              Solicitar presupuesto
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="
              rounded-lg
              p-2
              text-2xl
              text-stone-700
              hover:bg-stone-100
              md:hidden
            "
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-b border-stone-200 bg-white px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  rounded-lg
                  px-3 py-3
                  font-medium
                  text-stone-700
                  hover:bg-stone-50
                  hover:text-[#256348]
                "
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="
                mt-3
                rounded-xl
                bg-[#256348]
                px-4 py-3
                text-center
                font-semibold
                text-white
              "
            >
              Solicitar presupuesto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}