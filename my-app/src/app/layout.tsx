//Todos los comentarios de este archivo estan generados por la IA Copilot

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

// Componente RootLayout que envuelve toda la aplicación.
export default function RootLayout({
  children, // Recibe los elementos hijos que se renderizarán dentro del layout.
}: Readonly<{
  children: React.ReactNode; // Define el tipo de los elementos hijos como React.ReactNode.
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        {/* Franja de información de contacto */}
        <div className="bg-[#b6b8ff] text-black p-2 flex justify-end fixed top-0 left-0 w-full z-50">
          <p className="text-xs sm:text-sm text-right">
            Contacto: +34 234 567 890 | Email: haizea@ejemplo.com
          </p>
        </div>

        {/* Menú horizontal con 5 apartados */}
        <nav className="bg-[#5b60ff] p-4 shadow-md fixed top-[32px] left-0 w-full z-40">
          <ul className="flex justify-center gap-8">
            <li className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">Inicio</li>
            <li className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">Servicios</li>
            <li className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">Acerca de</li>
            <li className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">Contacto</li>
            <li className="text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer">Blog</li>
          </ul>
        </nav>

        {/* Renderiza los elementos hijos dentro del cuerpo del documento. */}
        <div className="pt-[80px]">{children}</div>
      </body>
    </html>
  );
}
