"use client";

import { useEffect, useState } from "react";
import { Movil } from "@/app/lib/definition"; 
import Image from "next/image";

export default function DatoMovil({ filtros }: { filtros: { almacenamiento: string; marca: string } }) {
  const [telefonos, setTelefonos] = useState<Movil[]>([]); // Estado con tipado estricto
  const [paginaActual, setPaginaActual] = useState(1); // Estado para la página actual
  const [totalPaginas, setTotalPaginas] = useState(0); // Estado para el total de páginas
  const LIMITE_POR_PAGINA = 8; // Límite de elementos por página

  useEffect(() => {
    const fetchTelefonos = async () => {
      let url = `http://localhost:3001/telefonos?_page=${paginaActual}&_limit=${LIMITE_POR_PAGINA}`;

      // Lógica para manejar los diferentes filtros
      if (filtros.marca && !filtros.almacenamiento) {
        url += `&marca=${filtros.marca}`; // Filtra solo por marca
      } else if (filtros.almacenamiento && !filtros.marca) {
        url += `&almacenamiento=${filtros.almacenamiento}`; // Filtra solo por memoria
      } else if (filtros.marca && filtros.almacenamiento) {
        url += `&marca=${filtros.marca}&almacenamiento=${filtros.almacenamiento}`; // Filtra por ambos
      }

      try {
        const response = await fetch(url);
        const data: Movil[] = await response.json(); // Tipado explícito para los datos obtenidos
        const totalRegistros = response.headers.get("X-Total-Count"); // Obtiene el total de registros
        setTelefonos(data); // Actualiza los teléfonos obtenidos
        setTotalPaginas(Math.ceil(Number(totalRegistros) / LIMITE_POR_PAGINA)); // Calcula el total de páginas
      } catch {
        console.log("Error fetching data"); // Depuración: Muestra el error en la consola
      }
    };

    fetchTelefonos();
  }, [paginaActual, filtros]); // Ejecuta la solicitud cada vez que la página o los filtros cambian

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual((prev) => prev - 1); // Cambia a la página anterior
    }
  };

  const handlePaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual((prev) => prev + 1); // Cambia a la página siguiente
    }
  };

  const handlePaginaClick = (pagina: number) => {
    setPaginaActual(pagina); // Cambia a la página seleccionada
  };

  return (
    <div className="mt-8 mb-8">
      {/* Lista de teléfonos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {telefonos.length > 0 ? (
          telefonos.map((telefono) => (
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
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No hay datos disponibles.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center mt-4 gap-2">
        {/* Botón de página anterior */}
        <button
          onClick={handlePaginaAnterior}
          disabled={paginaActual === 1}
          className="px-4 py-2 bg-[#5b60ff] text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>

        {/* Botones de páginas */}
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePaginaClick(index + 1)}
            className={`px-4 py-2 rounded ${
              paginaActual === index + 1 ? "bg-[#5b60ff]  text-white" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Botón de página siguiente */}
        <button
          onClick={handlePaginaSiguiente}
          disabled={paginaActual === totalPaginas}
          className="px-4 py-2 bg-[#5b60ff] text-white rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}