import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VERDIA | Paisajismo e Ingeniería Agronómica",
    template: "%s | VERDIA",
  },
  description:
    "Diseño de jardines, sistemas de riego, piscinas y proyectos de ingeniería agronómica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}