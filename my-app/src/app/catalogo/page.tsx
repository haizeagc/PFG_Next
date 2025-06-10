import { Movil } from "@/app/definition"; // Importa el tipo Mobil desde definition.tsx

export default async function Catalogo() {
  const response = await fetch("http://localhost:3001/telefonos");
  const telefonos = await response.json();

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center p-4 border rounded shadow-md bg-white">
        <h1 className="text-black font-bold">Nuestra Empresa</h1>
        <p className="text-sm text-gray-600">CATALOGO DE LA EMPRESA</p>
        <ul className="space-y-4 p-4">
          {telefonos.map((telefono: Movil) => (
            <li key={telefono.id} className="border p-2 rounded shadow-sm">
              <h2 className="font-semibold">
                {telefono.marca} {telefono.modelo}
              </h2>
              <img
                src={telefono.imagen}
                alt={`${telefono.marca} ${telefono.modelo}`}
                className="w-32 h-32 object-cover mb-2"
              />
              <p>Almacenamiento: {telefono.almacenamiento}</p>
              <p>RAM: {telefono.ram}</p>
              <p>Cámara: {telefono.camara}</p>
              <p>Batería: {telefono.bateria}</p>
              <p>Precio: ${telefono.precio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}