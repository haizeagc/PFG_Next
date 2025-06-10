export type Movil = {
  id: number; // Identificador único del móvil
  marca: string; // Marca del móvil (ej. "Samsung", "Apple")
  modelo: string; // Modelo del móvil (ej. "Galaxy S21", "iPhone 14")
  almacenamiento: string; // Capacidad de almacenamiento (ej. "128GB", "256GB")
  ram: string; // Memoria RAM (ej. "4GB", "8GB")
  camara: string; // Resolución de la cámara (ej. "48MP", "108MP")
  bateria: string; // Capacidad de la batería (ej. "4000mAh", "5000mAh")
  precio: number;
  imagen: string; // Precio del móvil
};

export default async function Catalogo() {

  const response = await fetch('http://localhost:3001/telefonos')
  const telefonos = await response.json();

    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center p-4 border rounded shadow-md bg-white">
          <h1 className="text-black font-bold">Nuestra Empresa</h1>
          <p className="text-sm text-gray-600">
            CATALOGO DE LA EMPRESA
          </p>
          <ul className="space-y-4 p-4">
            {telefonos.map((telefono: Movil) => (
              <li key={telefono.id} className="border p-2 rounded shadow-sm">
                <h2 className="font-semibold">{telefono.marca} {telefono.modelo}</h2>
                <img src={telefono.imagen} alt={`${telefono.marca} ${telefono.modelo}`} className="w-32 h-32 object-cover mb-2" />
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