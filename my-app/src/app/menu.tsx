"use client"; // Indica que este archivo se ejecutará en el cliente

import Link from "next/link";
import { usePathname } from "next/navigation"; // Importa usePathname para obtener la ruta actual

export default function Menu() {
  const pathname = usePathname(); // Obtén la ruta actual

  return (
    <nav className="bg-[#5b60ff] p-4 shadow-md fixed top-[32px] left-0 w-full z-40">
      <ul className="flex justify-center gap-8">
        <li>
          <Link
            href="/"
            className={`text-sm hover:text-black active:text-violet-300 cursor-pointer transition-transform ${
              pathname === "/" ? "text-black font-bold" : "text-white font-normal"
            }`}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            href="/tarifas"
            className={`text-sm hover:text-black active:text-violet-300 cursor-pointer transition-transform ${
              pathname === "/tarifas" ? "text-black font-bold" : "text-white font-normal"
            }`}
          >
            TARIFAS
          </Link>
        </li>
        <li>
          <Link
            href="/catalogo"
            className={`text-sm hover:text-black active:text-violet-300 cursor-pointer transition-transform ${
              pathname === "/catalogo" ? "text-black font-bold" : "text-white font-normal"
            }`}
          >
            CATÁLOGO
          </Link>
        </li>
      </ul>
    </nav>
  );
}