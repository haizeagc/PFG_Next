"use client";

import { useState } from "react";

export default function Elecciones() {
  const [datos, setDatos] = useState(5); // Estado para los datos seleccionados
  const [minutosSeleccionados, setMinutosSeleccionados] = useState<string>("100"); // Estado para los minutos seleccionados

  const handleDatosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos(Number(e.target.value)); // Actualiza el estado con el valor del slider
  };

  const handleMinutosChange = (minutos: string) => {
    setMinutosSeleccionados(minutos); // Actualiza el estado con el minuto seleccionado
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-auto h-auto p-4 rounded shadow-md bg-[#bdbfff] text-center">
        <h2 className="text-lg font-bold mb-4">CREA TU PROPIA TARIFA</h2>
        <form className="flex flex-row gap-8 items-center">
          {/* Selección de minutos con botones */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minutos:
            </label>
            <div className="flex gap-2">
              {["100", "200", "300", "Ilimitados"].map((minutos) => (
                <button
                  key={minutos}
                  type="button"
                  onClick={() => handleMinutosChange(minutos)}
                  className={`px-4 py-2 border rounded ${
                    minutosSeleccionados === minutos
                      ? "bg-[#5b60ff] text-white"
                      : "bg-gray-200 text-black"
                  } hover:bg-[#343afa]`}
                >
                  {minutos}
                </button>
              ))}
            </div>
          </div>

          {/* Selección de datos con slider */}
          <div>
            <label htmlFor="datos" className="block text-sm font-medium text-gray-700">
              Datos: {datos} GB
            </label>
            <input
              id="datos"
              name="datos"
              type="range"
              min="1"
              max="50"
              step="1"
              value={datos}
              onChange={handleDatosChange}
              className="w-full mt-2 appearance-none bg-[#5b60ff] h-2 rounded-full accent-[#5b60ff]"
            />
          </div>

          {/* Botón para contratar */}
          <button
            type="submit"
            className="mt-4 bg-[#5b60ff] text-white px-4 py-2 rounded hover:bg-[#343afa]"
          >
            Contratar
          </button>
        </form>
      </div>
    </div>
  );
}