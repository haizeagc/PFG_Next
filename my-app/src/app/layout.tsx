import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Menu from "./menu";

// Configuración de la fuente Open Sans con estilo normal.
const openSans = Open_Sans({
  weight: "400", // Define el peso de la fuente como normal (400).
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
        <div className="flex flex-col min-h-screen">
          {/* Franja de información de contacto */}
          <div className="bg-[#b6b8ff] text-black p-2 flex justify-end fixed top-0 left-0 w-full z-50">
            <p className="text-xs sm:text-sm text-right">
              Contacto: +34 234 567 890 | Email: haizea@ejemplo.com
            </p>
          </div>

          {/* Menú importado */}
          <Menu />

          {/* Renderiza los elementos hijos dentro del cuerpo del documento */}
          <div className="pt-[80px] flex-grow">{children}</div>

          {/* Footer añadido */}
          <footer className="bg-[#5b60ff] text-white p-4">
            <div className="flex flex-col items-center gap-4">
              {/* Información de copyright */}
              <p className="text-xs sm:text-sm text-center">
                © 2025 Haizea. Todos los derechos reservados.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}