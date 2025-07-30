"use client";

import { useState } from "react";
import FiltroSidebar from "../ui/catalogo/filtro";
import DatoMovil from "../ui/catalogo/datoMovil";
import Ventanita from "../ui/catalogo/ventanita";
import { Movil } from "@/app/lib/definition"; // Asegúrate de que este tipo esté definido correctamente

export interface Filtros {
  marca: string[]; // Permite múltiples marcas seleccionadas
  almacenamiento: string[]; // Permite múltiples capacidades seleccionadas
  orden: "asc" | "desc" | ""; // Nuevo campo para el orden
}

export default function Catalogo() {
  const [filtros, setFiltros] = useState<Filtros>({ marca: [], almacenamiento: [], orden: "" }); // Estado inicial con arrays vacíos y orden vacío
  const [telefonoSeleccionado, setTelefonoSeleccionado] = useState<Movil | null>(null); // Estado para el móvil seleccionado
  const [ventanaVisible, setVentanaVisible] = useState(false); // Estado para controlar la visibilidad de la ventana

  const handleFilterChange = (updater: (prevFiltros: Filtros) => Filtros) => {
    setFiltros((prevFiltros) => updater(prevFiltros)); // Actualiza los filtros seleccionados
  };

  const handleTelefonoClick = (telefono: Movil) => {
    setTelefonoSeleccionado(telefono); // Establece el móvil seleccionado
    setVentanaVisible(true); // Muestra la ventana
  };

  const handleCloseVentana = () => {
    setTelefonoSeleccionado(null); // Limpia el móvil seleccionado
    setVentanaVisible(false); // Oculta la ventana
  };

  return (
    <div className="flex items-start">
      {/* Filtro a la izquierda */}
      <div className="w-2/8 ml-12 mt-8">
        <FiltroSidebar onFilterChange={handleFilterChange} />
      </div>

      {/* DatosMovil a la derecha */}
      <div className="w-7/8 mr-12">
        <DatoMovil filtros={filtros} onTelefonoClick={handleTelefonoClick} />
      </div>

      {/* Ventana emergente */}
      <Ventanita
        telefono={telefonoSeleccionado}
        visible={ventanaVisible}
        onClose={handleCloseVentana}
      />
    </div>
  );
}