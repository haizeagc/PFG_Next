"use client";

export interface Filtros {
  marca: string[];
  almacenamiento: string[];
}

export default function FiltroSidebar({
  onFilterChange,
}: {
  onFilterChange: (updater: (prevFiltros: Filtros) => Filtros) => void;
}) {
  const handleMarcaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    onFilterChange((prevFiltros) => {
      const marcasSeleccionadas = prevFiltros.marca || [];
      return {
        ...prevFiltros,
        marca: checked
          ? [...marcasSeleccionadas, value]
          : marcasSeleccionadas.filter((marca) => marca !== value),
      };
    });
  };

  const handleMemoriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    onFilterChange((prevFiltros) => {
      const memoriasSeleccionadas = prevFiltros.almacenamiento || [];
      return {
        ...prevFiltros,
        almacenamiento: checked
          ? [...memoriasSeleccionadas, value]
          : memoriasSeleccionadas.filter((memoria) => memoria !== value),
      };
    });
  };

  return (
    <div className="w-64 h-screen p-4 border-r-2 border-[#5b60ff] bg-[#ebebff] fixed left-0 top-20 shadow-md">
      <h2 className="text-lg font-bold mb-4">Filtros</h2>

      {/* Filtro por marca */}
      <div className="mb-4">
        <h3 className="block text-sm font-bold text-gray-700 mb-2">Marca:</h3>
        {["SAMSUNG", "APPLE", "XIAOMI", "HONOR", "GOOGLE", "MOTOROLA", "ZTE", "TCL", "OPPO", "VIVO"].map((marca) => (
          <div key={marca} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`marca-${marca}`}
              value={marca}
              onChange={handleMarcaChange}
              className="mr-2"
            />
            <label htmlFor={`marca-${marca}`} className="text-sm text-gray-700">
              {marca}
            </label>
          </div>
        ))}
      </div>

      {/* Filtro por memoria */}
      <div className="mb-4">
        <h3 className="block text-sm font-bold text-gray-700 mb-2">Memoria:</h3>
        {["64", "128", "256", "512"].map((memoria) => (
          <div key={memoria} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`memoria-${memoria}`}
              value={memoria}
              onChange={handleMemoriaChange}
              className="mr-2"
            />
            <label htmlFor={`memoria-${memoria}`} className="text-sm text-gray-700">
              {memoria}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}