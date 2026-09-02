export type ContactService =
  | "Jardín"
  | "Riego"
  | "Piscina"
  | "Proyecto técnico"
  | "Paisajismo integral";

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  location: string;
  services: ContactService[];
  surface: number;
  message: string;
};