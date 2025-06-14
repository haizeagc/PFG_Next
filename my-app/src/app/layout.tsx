import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Menu from "./menu";

// Configuración de la fuente Open Sans con estilo bold.
const openSans = Open_Sans({
  weight: "700", // Define el peso de la fuente como bold (700).
  subsets: ["latin"], // Especifica el subconjunto de caracteres que se utilizarán.
});

// Define los metadatos de la aplicación, como el título y la descripción.
export const metadata: Metadata = {
  title: "Web Next.js", // Título de la aplicación.
  description: "App creada para probar el framework de next.js", // Descripción de la aplicación.
};

export default function RootLayout({
  children, // Recibe los elementos hijos que se renderizarán dentro del layout.
}: Readonly<{
  children: React.ReactNode; // Define el tipo de los elementos hijos como React.ReactNode.
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.className} antialiased`}>
        {/* Franja de información de contacto */}
        <div className="bg-[#b6b8ff] text-black p-2 flex justify-end fixed top-0 left-0 w-full z-50">
          <p className="text-xs sm:text-sm text-right">
            Contacto: +34 234 567 890 | Email: haizea@ejemplo.com
          </p>
        </div>
        <Menu />
        {/* Renderiza el menú de navegación */}
        {/* Renderiza los elementos hijos dentro del cuerpo del documento */}
        <div className="pt-[80px]">{children}</div>
      </body>
    </html>
  );
}