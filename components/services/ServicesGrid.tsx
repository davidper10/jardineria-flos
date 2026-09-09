import ServiceCard from "./ServiceCard";

import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {services.map((service) => (
        <div
          key={service.slug}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}