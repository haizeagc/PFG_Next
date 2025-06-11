import { Movil } from "@/app/definition"; // Importa el tipo Movil desde definition.tsx

export default async function Catalogo() {
  const response = await fetch("http://localhost:3001/telefonos");
  const telefonos = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8 mx-auto max-w-screen-xl">
      {telefonos.map((telefono: Movil) => (
        <div
          key={telefono.id}
          className="border-4 border-purple-500 p-4 rounded shadow-md bg-gray-100 w-64 h-auto transition-transform hover:scale-105"
        >
          <img
            src={'imagenes/${telefono.id}.webp'} // Asegúrate de que la ruta sea correcta
            alt={`${telefono.marca} ${telefono.modelo}`} className="w-full h-40 object-cover mb-4 rounded"></img>

          <h2 className="font-bold text-black">{telefono.marca} {telefono.modelo}</h2>
          <p className="text-sm text-gray-600">Almacenamiento: {telefono.almacenamiento}</p>
          <p className="text-sm text-gray-600">RAM: {telefono.ram}</p>
          <p className="text-sm text-gray-600 font-bold">Precio: {telefono.precio}€</p>
        </div>
      ))}
    </div>
  );
}