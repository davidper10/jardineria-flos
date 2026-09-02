export type ProjectCategory =
  | "jardin"
  | "riego"
  | "piscina"
  | "agronomia";

export type Project = {
  id: string;
  slug: string;

  category: ProjectCategory;

  title: string;
  location: string;
  area: string;

  services: string[];

  need: string;
  solution: string;

  coverImage: string;
  beforeImage: string;
  planImage: string;
  executionImage: string;
  afterImage: string;

  featured?: boolean;

  result?: string;
  duration?: string;
  year?: number;
};