//Todos los comentarios de este archivo estan generados por la IA Copilot

import Link from 'next/link'
// Importa los tipos de metadatos de Next.js para definir información como el título y la descripción de la página.
import type { Metadata } from "next";

// Importa la fuente Open_Sans desde Google Fonts utilizando el paquete de Next.js.
import { Open_Sans } from "next/font/google";

// Importa los estilos globales definidos en el archivo globals.css.
import "./globals.css";

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
    <html lang="es"><body className={`${openSans.className} antialiased`}>
        {/* Franja de información de contacto */}
        <div className="bg-[#b6b8ff] text-black p-2 flex justify-end fixed top-0 left-0 w-full z-50">
          <p className="text-xs sm:text-sm text-right">
            Contacto: +34 234 567 890 | Email: haizea@ejemplo.com
          </p>
        </div>

        {/* Menú horizontal con 3 apartados */}
        <nav className="bg-[#5b60ff] p-4 shadow-md fixed top-[32px] left-0 w-full z-40">
          <ul className="flex justify-center gap-8">
            <li> <Link href= "/" className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">INICIO </Link></li>
            <li> <Link href= "/tarifas" className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">TARIFAS</Link> </li>
            <li> <Link href= "/catalogo" className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">CATÁLOGO</Link> </li>
          </ul>
        </nav>

        {/* Renderiza los elementos hijos dentro del cuerpo del documento. */}
        <div className="pt-[80px]">{children}</div>

        {/* Footer */}
        <footer className="bg-[#5b60ff] text-white p-4 mt-8">
          <div className="flex flex-col items-center gap-4">
            {/* Información de copyright */}
            <p className="text-xs sm:text-sm text-center">
              © 2025 Haizea. Todos los derechos reservados.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                Facebook </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                X </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500"
              >
                Instagram </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
