import { Movil } from "@/app/lib/definition"; // Importa el tipo Movil desde definition.tsx

export default function Filtro() {
  return (
    <div className="w-64 h-auto p-4 border rounded shadow-md bg-gray-100">
      <h2 className="text-lg font-bold">Filtros</h2>
      <label htmlFor="transport">Marca:</label>
      <select name="Marca" id="marca" className="mt-2 p-2 border rounded w-full">
        <option value="">Marca...</option>
        <option value="SAMSUNG">Samsung</option>
        <option value="APPLE">Apple</option>
        <option value="XIAOMI">Xiaomi</option>
        <option value="HONOR">Honor</option>
        <option value="GOOGLE">Google</option>
        <option value="MOTOROLA">Motorola</option>
        <option value="ZTE">ZTE</option>
        <option value="TCL">TCL</option>
        <option value="OPPO">OPPO</option>
        <option value="HONOR">Honor</option>
        <option value="VIVO">Vivo</option>
      </select>
      <p>Precio:</p>

      <p>Memoria:</p>
    </div>
  );
}