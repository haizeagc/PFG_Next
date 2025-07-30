"use client";

export interface Filtros {
  marca: string[];
  almacenamiento: string[];
  orden: "asc" | "desc" | ""; // Nuevo campo para el orden
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

  const handleOrdenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    onFilterChange((prevFiltros) => ({
      ...prevFiltros,
      orden: checked ? (value as "asc" | "desc") : "", // Actualiza el orden o lo limpia si se desmarca
    }));
  };

  return (
    <div className="w-64 h-screen p-4 border-r-4 border-[#5b60ff] bg-[#696dff] fixed left-0 top-20 shadow-md">
      <h2 className="text-lg font-bold mb-4 text-white">Filtros</h2>

      {/* Filtro por marca */}
      <div className="mb-4">
        <h3 className="block text-sm font-bold text-white mb-2">Marca:</h3>
        {["SAMSUNG", "APPLE", "XIAOMI", "HONOR", "GOOGLE", "MOTOROLA", "ZTE", "TCL", "OPPO", "VIVO"].map((marca) => (
          <div key={marca} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`marca-${marca}`}
              value={marca}
              onChange={handleMarcaChange}
              className="mr-2 accent-[#5b60ff]"
            />
            <label htmlFor={`marca-${marca}`} className="text-sm text-white">
              {marca}
            </label>
          </div>
        ))}
      </div>

      {/* Filtro por memoria */}
      <div className="mb-4">
        <h3 className="block text-sm font-bold text-white mb-2">Memoria(GB):</h3>
        {["64", "128", "256", "512"].map((memoria) => (
          <div key={memoria} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`memoria-${memoria}`}
              value={memoria}
              onChange={handleMemoriaChange}
              className="mr-2 accent-[#5b60ff]"
            />
            <label htmlFor={`memoria-${memoria}`} className="text-sm text-white">
              {memoria}
            </label>
          </div>
        ))}
      </div>

      {/* Ordenar por precio */}
      <div className="mb-4">
        <h3 className="block text-sm font-bold text-white mb-2">Ordenar por precio:</h3>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="orden-asc"
            value="asc"
            onChange={handleOrdenChange}
            className="mr-2 accent-[#5b60ff]"
          />
          <label htmlFor="orden-asc" className="text-sm text-white">
            Menor a mayor
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="orden-desc"
            value="desc"
            onChange={handleOrdenChange}
            className="mr-2 accent-[#5b60ff]"
          />
          <label htmlFor="orden-desc" className="text-sm text-white">
            Mayor a menor
          </label>
        </div>
      </div>
    </div>
  );
}