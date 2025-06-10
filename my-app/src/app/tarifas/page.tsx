export type Tarifa = {
  id: number; // Identificador único de la tarifa
  nombre: string; // Nombre de la tarifa (ej. "Plan Básico")
  descripcion: string; // Descripción de la tarifa
  precioMensual: number; // Precio mensual de la tarifa
  minutosIncluidos: number; // Minutos incluidos en la tarifa
  datosIncluidos: string; // Datos incluidos (ej. "5GB", "Ilimitados")
  mensajesIncluidos: number; // Mensajes SMS incluidos
};

export default async function Tarifas() {
  const response = await fetch('http://localhost:3001/tarifas')
  const tarifas = await response.json();
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center p-4 border rounded shadow-md bg-white">
          <h1 className="text-black font-bold">Nuestra Empresa</h1>
          <p className="text-sm text-gray-600">
            TARIFAS DE LA EMPRESA
            <ul className="space-y-4 p-4">
            {tarifas.map((tarifa: Tarifa) => (
              <li key={tarifa.id} className="border p-2 rounded shadow-sm">
                <h2 className="font-semibold">{tarifa.nombre}</h2>
                <p>{tarifa.descripcion}</p>
                <p>Precio Mensual: ${tarifa.precioMensual}</p>
                <p>Minutos Incluidos: {tarifa.minutosIncluidos}</p>
                <p>Datos Incluidos: {tarifa.datosIncluidos}</p>
                <p>Mensajes Incluidos: {tarifa.mensajesIncluidos}</p>
              </li>
            ))}
            </ul>
          </p>
        </div>
      </div>
    );
  }