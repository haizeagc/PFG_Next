"use client";

import { useState } from "react";
import FiltroSidebar from "../ui/catalogo/filtro";
import DatoMovil from "../ui/catalogo/datoMovil";

export default function Catalogo() {
  const [filtros, setFiltros] = useState({ almacenamiento: "", marca: "" }); // Estado inicial vacío para mostrar todos los móviles

  const handleFilterChange = (nuevoFiltro: Partial<{ almacenamiento: string; marca: string }>) => {
    setFiltros((prevFiltros) => ({ ...prevFiltros, ...nuevoFiltro })); // Actualiza los filtros seleccionados
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