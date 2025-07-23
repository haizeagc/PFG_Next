"use client";

import { useState, useEffect } from "react";

const imagenes = [
  "/carrusel/01.jpg",
  "/carrusel/02.jpg",
  "/carrusel/03.jpg",
  "/carrusel/04.jpg",
]; // Lista de rutas de las imágenes

export default function ImagenesCarrusel() {
  const [indiceActual, setIndiceActual] = useState(0); // Estado para la imagen actual

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length); // Cambia a la siguiente imagen automáticamente
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  }, []);

  const handleAnterior = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? imagenes.length - 1 : prevIndice - 1
    ); // Cambia a la imagen anterior
  };

  const handleSiguiente = () => {
    setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length); // Cambia a la siguiente imagen
  };

  return (
    <div className="relative w-full h-80 overflow-hidden">
      {/* Contenedor de las imágenes */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${indiceActual * 100}%)` }}
      >
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={handleAnterior}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#5b60ff] text-white p-2 rounded-full hover:bg-[#2d33fa]"
      >
        {"<"}
      </button>

      {/* Flecha derecha */}
      <button
        onClick={handleSiguiente}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#5b60ff] text-white p-2 rounded-full hover:bg-[#2d33fa]"
      >
        {">"}
      </button>
    </div>
  );
}