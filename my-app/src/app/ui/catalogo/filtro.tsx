export default function FiltroSidebar() {
  return (
    <div className="w-64 h-screen p-4 border-r-2 border-[#5b60ff] bg-[#ebebff] fixed left-0 top-20 shadow-md">
      <h2 className="text-lg font-bold mb-4">Filtros</h2>

      {/* Filtro por marca */}
      <div className="mb-4">
        <label htmlFor="marca" className="block text-sm font-bold text-gray-700">
          Marca:
        </label>
        <select
          name="marca"
          id="marca"
          className="mt-2 p-2 border rounded w-full"
        >
          <option value="">Todas las marcas</option>
          <option value="SAMSUNG">Samsung</option>
          <option value="APPLE">Apple</option>
          <option value="XIAOMI">Xiaomi</option>
          <option value="HONOR">Honor</option>
          <option value="GOOGLE">Google</option>
          <option value="MOTOROLA">Motorola</option>
          <option value="ZTE">ZTE</option>
          <option value="TCL">TCL</option>
          <option value="OPPO">OPPO</option>
          <option value="VIVO">Vivo</option>
        </select>
      </div>

      {/* Filtro por precio */}
      <div className="mb-4">
        <label htmlFor="precio" className="block text-sm font-bold text-gray-700">
          Precio máximo:
        </label>
        <input
          type="range"
          id="precio"
          name="precio"
          min="0"
          max="2000"
          step="100"
          className="w-full mt-2 accent-[#5b60ff]"
        />
      </div>

      {/* Filtro por memoria */}
      <div className="mb-4">
        <label htmlFor="memoria" className="block text-sm font-bold text-gray-700">
          Memoria:
        </label>
        <select
          name="memoria"
          id="memoria"
          className="mt-2 p-2 border rounded w-full"
        >
          <option value="">Todas las capacidades</option>
          <option value="32GB">32 GB</option>
          <option value="64GB">64 GB</option>
          <option value="128GB">128 GB</option>
          <option value="256GB">256 GB</option>
          <option value="512GB">512 GB</option>
        </select>
      </div>

      {/* Botón para aplicar filtros */}
      <button
        type="button"
        className="w-full bg-[#5b60ff] text-white px-4 py-2 rounded hover:bg-[#2f36fa]"
      >
        Aplicar Filtros
      </button>
    </div>
  );
}