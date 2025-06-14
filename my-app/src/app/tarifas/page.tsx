import { Tarifa } from "@/app/definition";

export default async function Tarifas() {
  const response = await fetch("http://localhost:3001/tarifas");
  const tarifas = await response.json();

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Cuadrado morado con el primer h1 */}
        <h1 className="text-lg font-bold">TARIFAS DE LA EMPRESA</h1>

      {/* Contenedor de las tarifas */}
      <div className="text-center p-4 border rounded shadow-md bg-white">
        <div className="flex space-x-4 p-4">
          {tarifas.map((tarifa: Tarifa) => (
            <div
              key={tarifa.id}
              className="border p-4 rounded shadow-sm bg-gray-100 transition-transform hover:scale-105 w-64 h-60"
            >
              <h2 className="font-semibold text-black">{tarifa.nombre}</h2>
              <p className="text-black">{tarifa.descripcion}</p>
              <p className="text-black">Precio Mensual: {tarifa.precioMensual} €</p>
              <p className="text-black">Minutos Incluidos: {tarifa.minutosIncluidos}</p>
              <p className="text-black">Datos Incluidos: {tarifa.datosIncluidos}</p>
              <p className="text-black">Mensajes Incluidos: {tarifa.mensajesIncluidos}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}