export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-center text-2xl mb-4">PAGINA PRINCIPAL</h1>
      <p className="text-center mb-3">
        Bienvenido a nuestra tienda de telefonía móvil. Aquí encontrarás los mejores teléfonos y tarifas del mercado.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">Teléfonos Destacados</h2>
          <p>Descubre los últimos modelos de teléfonos móviles con las mejores características.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">Tarifas Especiales</h2>
          <p>Consulta nuestras tarifas competitivas y elige la que mejor se adapte a tus necesidades.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">Ofertas Exclusivas</h2>
          <p>No te pierdas nuestras ofertas especiales por tiempo limitado. ¡Aprovecha ahora!</p>
        </div>
      </div>
    </div>
  );
}
