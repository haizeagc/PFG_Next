import { Tarifa } from "@/app/lib/definition";

export default async function DatoTarifa() {
    const response = await fetch("http://localhost:3001/tarifas");
    const tarifas = await response.json();
  
    return (
      <div className="flex flex-col items-center justify-center p-8">
        {/* Cuadrado morado con el primer h1 */}
        <h1 className="text-3xl font-bold mb-4">TARIFAS DE LA EMPRESA</h1>
  
        {/* Contenedor de las tarifas */}
        <div className="w-full p-4 shadow-md bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tarifas.map((tarifa: Tarifa) => (
              <div
                key={tarifa.id}
                className="p-4 rounded shadow-lg bg-gray-100 transition-transform hover:scale-105"
              >
                <div className="flex items-baseline justify-center gap-1">
                <p className="text-6xl font-bold text-center">{tarifa.precioMensual}</p>  
                <p className="text-2xl text-center">,00€/mes</p>
                </div>
                <button className=" font-bold mt-2 mb-2 bg-[#5b60ff] text-white px-4 py-2 rounded hover:bg-[#4a52d4] w-full">
                  VER TARIFA
                </button>
                <h2 className=" text-xl font-bold text-black text-center">{tarifa.nombre}</h2>
                <p className="text-center">{tarifa.minutosIncluidos} minutos</p>
                <p className="text-center">{tarifa.datosIncluidos}GB</p>
                <p className="text-center">{tarifa.mensajesIncluidos} mensajes</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }