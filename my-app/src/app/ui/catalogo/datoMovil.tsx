import { Movil } from "@/app/lib/definition"; // Importa el tipo Movil desde definition.tsx
import Image from "next/image"; // Importa el componente Image de Next.js

export default async function DatoMovil() {
  const response = await fetch("http://localhost:3001/telefonos");
  const telefonos = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-8 mx-auto max-w-screen-xl">
      {telefonos.map((telefono: Movil) => (
        <div
          key={telefono.id}
          className="p-4 rounded shadow-lg w-64 h-auto transition-transform hover:scale-105"
        >
          <Image
            src={`/imagenes/${telefono.id}.jpg`} // Ruta dinámica basada en el id del teléfono
            alt={`${telefono.marca} ${telefono.modelo}`}
            width={256} // Ancho de la imagen
            height={160} // Altura de la imagen
            className="w-full h-50 object-cover mb-4 rounded"
          />
          <h2 className="font-bold text-black">{telefono.marca} {telefono.modelo}</h2>
          <p className="text-sm text-gray-600">Almacenamiento: {telefono.almacenamiento}GB</p>
          <p className="text-sm text-gray-600">RAM: {telefono.ram}</p>
          {/* Renderizado condicional para el precio */}
          {telefono.precio === 0 ? (
            <p className="text-sm text-gray-600 font-bold">GRATIS</p>
          ) : (
            <p className="text-sm text-gray-600 font-bold">Precio: {telefono.precio}€</p>
          )}
        </div>
      ))}
    </div>
  );
}