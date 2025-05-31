//Todos los comentarios de este archivo estan generados por la IA Copilot

import Image from "next/image"; // Importa el componente Image de Next.js para manejar imágenes optimizadas.

export default function Home() {  
  return (
    // Contenedor principal que define un diseño de cuadrícula.
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Contenido principal ubicado en la segunda fila de la cuadrícula */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {/* Imagen del logo de Next.js */}
        <Image
          className="dark:invert" // Invierte los colores en modo oscuro.
          src="/next.svg" // Ruta de la imagen.
          alt="Next.js logo" // Texto alternativo para accesibilidad.
          width={180} // Ancho de la imagen en píxeles.
          height={38} // Altura de la imagen en píxeles.
          priority // Indica que esta imagen debe cargarse con prioridad.
        />
        
        {/* Lista de pasos para comenzar a trabajar en el proyecto */}
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            {/* Indica dónde editar el archivo principal */}
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            {/* Mensaje sobre guardar y ver cambios */}
            Save and see your changes instantly.
          </li>
        </ol>

        {/* Contenedor de enlaces con diseño flexible */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          >
            {/* Texto del enlace */}
            Deploy to Vercel
          </a>
        </div>
      </main>
    </div>
  );
}
