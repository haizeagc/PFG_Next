"use client";

import { useState } from "react";
import FiltroSidebar from "./filtro";
import DatoMovil from "./datoMovil";

export default function Telefonos() {
  const [filtros, setFiltros] = useState({ almacenamiento: "", marca: "" }); // Estado para los filtros seleccionados

  const handleFilterChange = (nuevoFiltro: Partial<{ almacenamiento: string; marca: string }>) => {
    setFiltros((prevFiltros) => ({ ...prevFiltros, ...nuevoFiltro })); // Actualiza los filtros seleccionados
  };

  return (
    <div className="flex">
      {/* Sidebar de filtros */}
      <FiltroSidebar onFilterChange={handleFilterChange} />

      {/* Datos de teléfonos */}
      <div className="flex-grow p-8">
        <DatoMovil filtros={filtros} />
      </div>
    </div>
  );
}