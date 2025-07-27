import { Tarifa } from "@/app/lib/definition";

export default async function DatoTarifa() {
    const response = await fetch("http://localhost:3001/tarifas");
    const tarifas = await response.json();
  
    return (
      <div className="flex flex-col items-center justify-center p-8">
        {/* Cuadrado morado con el primer h1 */}
        <h1 className="text-lg font-bold mb-4">TARIFAS DE LA EMPRESA</h1>
  
        {/* Contenedor de las tarifas */}
        <div className="w-full p-4 shadow-md bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tarifas.map((tarifa: Tarifa) => (
              <div
                key={tarifa.id}
                className="p-4 rounded shadow-lg bg-gray-100 transition-transform hover:scale-105"
              >
                <h2 className="font-bold text-black">{tarifa.descripcion}</h2>
                <p>
                  <strong>Precio Mensual:</strong> {tarifa.precioMensual}€
                </p>
                <p>
                  <strong>Minutos Incluidos:</strong> {tarifa.minutosIncluidos}
                </p>
                <p>
                  <strong>Datos Incluidos:</strong> {tarifa.datosIncluidos}
                </p>
                <p>
                  <strong>Mensajes Incluidos:</strong> {tarifa.mensajesIncluidos}
                </p>
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