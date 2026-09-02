import ServiceCard from "./ServiceCard";

import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.slug}
          service={service}
        />
      ))}
    </div>
  );
}