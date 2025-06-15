import { Tarifa } from "@/app/ui/definition";

export default async function DatoTarifa() {
    const response = await fetch("http://localhost:3001/tarifas");
    const tarifas = await response.json();
  
    return (
      <div className="flex flex-col items-center justify-center p-8">
        {/* Cuadrado morado con el primer h1 */}
        <h1 className="text-lg font-bold">TARIFAS DE LA EMPRESA</h1>
  
        {/* Contenedor de las tarifas */}
        <div className="text-center p-4 shadow-md bg-white">
          <div className="flex space-x-4 p-4">
            {tarifas.map((tarifa: Tarifa) => (
              <div
                key={tarifa.id}
                className="p-4 rounded shadow-lg bg-gray-100 transition-transform hover:scale-105 w-64 h-60"
              >
                <h2 className="font-semibold text-black">{tarifa.nombre}</h2>
                <p className="text-black">{tarifa.descripcion}</p>
                <p className="text-black">Precio Mensual: {tarifa.precioMensual}€</p>
                <p className="text-black">Minutos Incluidos: {tarifa.minutosIncluidos}</p>
                <p className="text-black">Datos Incluidos: {tarifa.datosIncluidos}</p>
                <p className="text-black">Mensajes Incluidos: {tarifa.mensajesIncluidos}</p>
                <button className="mt-2 mb-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Más información
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }