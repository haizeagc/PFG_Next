"use client";

import { useState } from "react";

export default function Paginacion({ totalPaginas, onPageChange }: { totalPaginas: number; onPageChange: (pagina: number) => void }) {
  const [paginaActual, setPaginaActual] = useState(1); // Estado para la página actual

  const handleAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual((prev) => prev - 1);
      onPageChange(paginaActual - 1); // Notifica el cambio de página
    }
  };

  const handleSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual((prev) => prev + 1);
      onPageChange(paginaActual + 1); // Notifica el cambio de página
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      {/* Botón Anterior */}
      <button
        onClick={handleAnterior}
        disabled={paginaActual === 1}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
      >
        Anterior
      </button>

      {/* Indicador de página */}
      <span className="text-sm font-medium">
        Página {paginaActual} de {totalPaginas}
      </span>

      {/* Botón Siguiente */}
      <button
        onClick={handleSiguiente}
        disabled={paginaActual === totalPaginas}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
}