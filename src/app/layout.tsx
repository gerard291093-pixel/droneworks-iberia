import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/blocks/cookie-banner";

export const metadata: Metadata = {
  title: "DroneWorks Iberia — Limpieza de Fachadas con Dron",
  description: "Especialistas en limpieza de fachadas con drones en España. Edificios urbanos, plantas industriales, cruceros y yates. Tecnología DJI M400. Contacto: info@droneworksiberia.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
