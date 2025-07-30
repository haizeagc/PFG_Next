"use client";

import { useState } from "react";
import FiltroSidebar from "../ui/catalogo/filtro";
import DatoMovil from "../ui/catalogo/datoMovil";

export interface Filtros {
  marca: string[]; // Permite múltiples marcas seleccionadas
  almacenamiento: string[]; // Permite múltiples capacidades seleccionadas
}

export default function Catalogo() {
  const [filtros, setFiltros] = useState<Filtros>({ marca: [], almacenamiento: [] }); // Estado inicial con arrays vacíos

  const handleFilterChange = (updater: (prevFiltros: Filtros) => Filtros) => {
    setFiltros((prevFiltros) => updater(prevFiltros)); // Actualiza los filtros seleccionados
  };

  return (
    <div className="flex items-start">
      {/* Filtro a la izquierda */}
      <div className="w-2/8 ml-12 mt-8">
        <FiltroSidebar onFilterChange={handleFilterChange} />
      </div>

      {/* DatosMovil a la derecha */}
      <div className="w-7/8 mr-12">
        <DatoMovil filtros={filtros} />
      </div>
    </div>
  );
}