import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "diseno-jardines",
    title: "Diseño y Creación de Jardines",
    shortTitle: "Diseño de Jardines",
    icon: "🌿",
    subtitle: "Transformamos parcelas en refugios naturales sostenibles",
    shortDescription:
      "Planificación integral del terreno, selección vegetal, zonificación e integración de elementos exteriores.",
    description:
      "El diseño de un jardín trasciende la mera disposición estética. Realizamos un estudio edafoclimático para seleccionar especies con alto valor ornamental y perfecta adaptación al microclima de cada parcela.",
    bullets: [
      "Zonificación funcional del espacio: sombra, pradera y zonas de descanso.",
      "Selección botánica mediterránea, autóctona o de bajo requerimiento hídrico.",
      "Iluminación escénica LED de bajo voltaje.",
      "Diseño de senderos, rocallas, traviesas y grava decorativa.",
    ],
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "sistemas-riego",
    title: "Sistemas de Riego Automatizado",
    shortTitle: "Sistemas de Riego",
    icon: "💧",
    subtitle: "Ingeniería hidráulica para un consumo de agua óptimo",
    shortDescription:
      "Diseño hidráulico, sectorización y automatización para conseguir sistemas eficientes y fiables.",
    description:
      "Diseñamos e instalamos redes de riego sectorizadas que entregan la dosis adecuada de agua a cada tipología vegetal, reduciendo pérdidas y mejorando la eficiencia del sistema.",
    bullets: [
      "Cálculo de caudal y pérdida de carga por sector.",
      "Goteo autocompensante subterráneo y en superficie.",
      "Difusores y sistemas de alta uniformidad.",
      "Programadores Wi-Fi y sensores de lluvia y humedad.",
    ],
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "piscinas",
    title: "Diseño e Integración de Piscinas",
    shortTitle: "Piscinas Integradas",
    icon: "🏊",
    subtitle: "Láminas de agua integradas con el paisaje",
    shortDescription:
      "Diseño de piscinas concebidas como una parte más del jardín y del conjunto arquitectónico.",
    description:
      "No concebimos la piscina como un elemento aislado. Integramos la lámina de agua dentro del conjunto del paisaje, coordinando zonas de coronación, vegetación, pavimentos e instalaciones.",
    bullets: [
      "Diseño de piscinas de obra.",
      "Sistemas de cloración salina.",
      "Playas y zonas de solárium.",
      "Integración de cascadas, rebosaderos y spas exteriores.",
    ],
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "ingenieria-agronomica",
    title: "Proyectos de Ingeniería Agronómica",
    shortTitle: "Ingeniería Agronómica",
    icon: "📐",
    subtitle: "Respaldo técnico, licencias y dirección facultativa",
    shortDescription:
      "Proyectos técnicos, estudios agronómicos, informes y dirección profesional.",
    description:
      "Desarrollamos documentación técnica, análisis agronómicos, informes especializados y direcciones de obra para proyectos públicos y privados.",
    bullets: [
      "Informes de evaluación fitosanitaria.",
      "Estudios sobre arbolado y vegetación.",
      "Proyectos de nivelación y movimiento de tierras.",
      "Tramitación técnica y documentación municipal.",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "paisajismo",
    title: "Paisajismo y Espacios Exteriores",
    shortTitle: "Paisajismo Integral",
    icon: "🌳",
    subtitle: "Transformación integral de espacios exteriores",
    shortDescription:
      "Proyectos globales que coordinan vegetación, construcción, instalaciones y zonas exteriores.",
    description:
      "Coordinamos las diferentes disciplinas necesarias para crear un espacio exterior coherente, funcional y adaptado a las necesidades de cada vivienda.",
    bullets: [
      "Pérgolas, porches y zonas de sombra.",
      "Cocinas exteriores y zonas de barbacoa.",
      "Nivelaciones y muros de contención.",
      "Paisajismo integral para viviendas y complejos residenciales.",
    ],
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}