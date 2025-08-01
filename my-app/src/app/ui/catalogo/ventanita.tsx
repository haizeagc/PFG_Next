"use client";

import React from "react";
import { Movil } from "@/app/lib/definition"; // Asegúrate de que este tipo esté definido correctamente
import Image from "next/image";

interface VentanitaProps {
  telefono: Movil | null; // Datos del teléfono seleccionado
  visible: boolean; // Controla si la ventana está visible
  onClose: () => void; // Función para cerrar la ventana
}

export default function Ventanita({ telefono, visible, onClose }: VentanitaProps) {
    if (!telefono) return null; // Si no hay datos del teléfono, no renderiza nada
  
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white w-[32rem] p-6 rounded-lg shadow-lg relative transform transition-transform duration-1000 ${
            visible ? "scale-100" : "scale-75"
          }`}
        >
          {/* Botón para cerrar */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
  
          {/* Contenido del teléfono */}
          <h2 className="text-xl font-bold mb-4 text-[#5b60ff] text-center">
            {telefono.marca} {telefono.modelo}
          </h2>
          <div className="mb-4">
            <p className="text-sm text-gray-700">
              <strong>Precio:</strong> {telefono.precio === 0 ? "GRATIS" : `${telefono.precio}€`}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Almacenamiento:</strong> {telefono.almacenamiento}GB
            </p>
            <p className="text-sm text-gray-700">
              <strong>RAM:</strong> {telefono.ram}GB
            </p>
          </div>
  
          {/* Imagen del teléfono */}
          <div className="flex justify-center">
            <Image
              src={`/imagenes/${telefono.id}.jpg`} // Ruta dinámica basada en el id del teléfono
              alt={`${telefono.marca} ${telefono.modelo}`}
              width={300} // Ancho de la imagen
              height={240} // Altura de la imagen
              className="w-full h-auto object-cover mb-4 rounded"
            />
          </div>
        </div>
      </div>
    );
  }