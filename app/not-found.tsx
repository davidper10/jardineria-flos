import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="
        flex
        min-h-[60vh]
        items-center
        justify-center
        bg-stone-50
        px-4
      "
    >
      <div className="text-center">
        <p className="text-sm font-bold text-[#256348]">
          Error 404
        </p>

        <h1 className="mt-3 text-4xl font-extrabold text-stone-900">
          Página no encontrada
        </h1>

        <p className="mt-4 text-stone-600">
          La página que buscas no existe o ha cambiado de ubicación.
        </p>

        <Link
          href="/"
          className="
            mt-8
            inline-flex
            rounded-xl
            bg-[#256348]
            px-6 py-3
            font-bold
            text-white
            hover:bg-[#204f3b]
          "
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}