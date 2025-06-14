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
            className={`text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer transition-transform ${
              pathname === "/" ? "underline font-bold" : ""
            }`}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            href="/tarifas"
            className={`text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer transition-transform ${
              pathname === "/tarifas" ? "underline font-bold" : ""
            }`}
          >
            TARIFAS
          </Link>
        </li>
        <li>
          <Link
            href="/catalogo"
            className={`text-sm font-normal text-white hover:font-bold hover:text-black active:text-violet-300 cursor-pointer transition-transform ${
              pathname === "/catalogo" ? "underline font-bold" : ""
            }`}
          >
            CATÁLOGO
          </Link>
        </li>
      </ul>
    </nav>
  );
}