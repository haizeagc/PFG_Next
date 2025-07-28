"use client";

import { useEffect, useState } from "react";
import { Movil } from "@/app/lib/definition"; 
import Image from "next/image";

export default function DatoMovil({ filtros }: { filtros: { memoria: string; marca: string } }) {
  const [telefonos, setTelefonos] = useState<Movil[]>([]); // Estado con tipado estricto

  useEffect(() => {
    const fetchTelefonos = async () => {
      const queryParams = new URLSearchParams(filtros).toString(); // Convierte los filtros en parámetros de consulta
      const url = filtros.marca === "" ? `http://localhost:3001/telefonos` : `http://localhost:3001/telefonos?${queryParams}`; // Si no hay marca, usa la URL sin filtros
      const response = await fetch(url);
      const data: Movil[] = await response.json(); // Tipado explícito para los datos obtenidos
      setTelefonos(data); // Actualiza los teléfonos obtenidos
    };

    fetchTelefonos();
  }, [filtros]); // Ejecuta la solicitud cada vez que los filtros cambian

  return (
    <div className="mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {telefonos.map((telefono) => (
        <div key={telefono.id} className="p-4 rounded shadow-lg">
          <Image
            src={`/imagenes/${telefono.id}.jpg`} // Ruta dinámica basada en el id del teléfono
            alt={`${telefono.marca} ${telefono.modelo}`}
            width={256} // Ancho de la imagen
            height={160} // Altura de la imagen
            className="w-full h-50 object-cover mb-4 rounded"
          />
          <h2 className="font-bold text-black text-center">
            {telefono.marca} {telefono.modelo}
          </h2>
          <p className="text-sm text-gray-600">Almacenamiento: {telefono.almacenamiento}GB</p>
          <p className="text-sm text-gray-600">RAM: {telefono.ram}</p>
          {/* Renderizado condicional para el precio */}
          {telefono.precio === 0 ? (
            <p className="text-sm text-gray-600 font-bold">GRATIS</p>
          ) : (
            <p className="text-sm text-gray-600 font-bold">Precio: {telefono.precio}€</p>
          )}
        </div>
      ))}
    </div>
  );
}