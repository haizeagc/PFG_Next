export default function Filtro() {
  return (
    <div className="w-64 h-auto p-4 border rounded shadow-md bg-gray-100">
      <h2 className="text-lg font-bold">Filtrooooo</h2>
      <label htmlFor="transport">¿Cómo va a llegar hasta aquí?:</label>
      <select name="transport" id="transport" className="mt-2 p-2 border rounded w-full">
        <option value="">--Por favor, elija una opción--</option>
        <option value="plane">Avión</option>
        <option value="bike">Bicicleta</option>
        <option value="walk">Caminar</option>
        <option value="bus">Autobús</option>
        <option value="train">Tren</option>
        <option value="jetPack">Jet pack</option>
      </select>
    </div>
  );
}