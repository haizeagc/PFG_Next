"use client";

import { useEffect, useState } from "react";
import { Movil } from "@/app/lib/definition"; 
import Image from "next/image";

export default function DatoMovil({ filtros }: { filtros: { almacenamiento: string; marca: string } }) {
  const [telefonos, setTelefonos] = useState<Movil[]>([]); // Estado con tipado estricto

  useEffect(() => {
    const fetchTelefonos = async () => {
      let url = "http://localhost:3001/telefonos";

      // Lógica para manejar los diferentes filtros
      if (filtros.marca && !filtros.almacenamiento) {
        url = `http://localhost:3001/telefonos?marca=${filtros.marca}`; // Filtra solo por marca
      } else if (filtros.marca && filtros.almacenamiento) {
        url = `http://localhost:3001/telefonos?marca=${filtros.marca}&almacenamiento=${filtros.almacenamiento}`; // Filtra por ambos
      } else if (filtros.almacenamiento && !filtros.marca) {
        url = `http://localhost:3001/telefonos?almacenamiento=${filtros.almacenamiento}`; // Filtra solo por memoria
      }

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
        </div>
      ))}
    </div>
  );
}