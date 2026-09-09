import Link from "next/link";

import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        flex flex-col
        justify-between
        rounded-2xl
        border border-stone-200
        bg-white
        p-8
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div>
        <div className="mb-4 flex items-center gap-4">
          <div
            className="
              flex h-14 w-14 shrink-0
              items-center justify-center
              rounded-2xl
              bg-emerald-50
              text-2xl
            "
          >
            {service.icon}
          </div>

          <h2 className="text-xl font-bold text-stone-900">
            {service.shortTitle}
          </h2>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-stone-600">
          {service.shortDescription}
        </p>
      </div>

      <Link
        href={`/servicios/${service.slug}`}
        className="
          inline-flex
          items-center
          font-semibold
          text-[#256348]
          transition-colors
          hover:text-[#1c4232]
        "
      >
        Saber más
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}