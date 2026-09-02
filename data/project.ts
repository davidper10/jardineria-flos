import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "p1",
    slug: "transformacion-integral-vivienda-las-rozas",

    category: "jardin",

    title: "Transformación Integral en Vivienda Unifamiliar",
    location: "Las Rozas de Madrid",
    area: "650 m²",

    services: [
      "Diseño",
      "Riego",
      "Jardinería",
      "Iluminación",
    ],

    need:
      "Transformar un terreno degradado con desnivel en un jardín familiar de bajo mantenimiento y alta eficiencia hídrica.",

    solution:
      "Redistribución en 2 terrazas horizontales mediante muros de mampostería. Instalación de riego por goteo subterráneo, pradera mixta de baja demanda y zonas de arbustivas mediterráneas.",

    coverImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",

    beforeImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",

    planImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

    executionImage:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",

    afterImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",

    featured: true,
    result:
      "El espacio quedó organizado en zonas de uso claramente diferenciadas, con una reducción de las necesidades de mantenimiento y una red de riego sectorizada adaptada a cada tipo de plantación.",

    duration: "8 semanas",

    year: 2026,
  },

  {
    id: "p2",
    slug: "piscina-infinity-pozuelo",

    category: "piscina",

    title: "Piscina Infinity con Integración Vegetal",
    location: "Pozuelo de Alarcón",
    area: "420 m²",

    services: [
      "Piscina",
      "Paisajismo",
      "Pavimentos",
    ],

    need:
      "Integrar una piscina de lámina de agua de 9x4m en un jardín ya consolidado respetando el arbolado existente.",

    solution:
      "Diseño en vaso gunitado con revestimiento cerámico de tono piedra natural, coronación en gres porcelánico antideslizante y plantación perimetral de gramíneas y lavandas.",

    coverImage:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",

    beforeImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",

    planImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

    executionImage:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",

    afterImage:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",

    featured: true,
  },

  {
    id: "p3",
    slug: "renovacion-riego-torrelodones",

    category: "riego",

    title: "Renovación Hidráulica Automatizada",
    location: "Torrelodones",
    area: "1.200 m²",

    services: [
      "Riego Inteligente",
      "Ingeniería",
    ],

    need:
      "Corregir un sistema de riego obsoleto que provocaba un consumo excesivo de agua y zonas secas constantes.",

    solution:
      "Rediseño completo de la red hidráulica con 8 sectores automatizados, electroválvulas programables por app móvil con previsión meteorológica en tiempo real.",

    coverImage:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",

    beforeImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",

    planImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",

    executionImage:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",

    afterImage:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",

    featured: true,
  },

  {
    id: "p4",
    slug: "estudio-agronomico-boadilla",

    category: "agronomia",

    title: "Estudio Agronómico y Corrección de Suelo",
    location: "Boadilla del Monte",
    area: "850 m²",

    services: [
      "Proyecto Técnico",
      "Dirección de Obra",
    ],

    need:
      "Problemas severos de encharcamiento y asfixia radicular del arbolado debido a suelos arcillosos altamente compactados.",

    solution:
      "Red de drenaje profundo mediante tubos ranurados geotextiles, enmienda orgánica del terreno y replantación dirigida con especies resistentes.",

    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",

    beforeImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",

    planImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",

    executionImage:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",

    afterImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}

export function getFeaturedProjects() {
  return projects.filter(
    (project) => project.featured
  );
}