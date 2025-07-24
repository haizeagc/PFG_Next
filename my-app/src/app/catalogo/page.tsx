import DatoMovil from "../ui/catalogo/datoMovil";
import Filtro from "../ui/catalogo/filtro";
import Paginacion from "../ui/catalogo/paginacion";

export default async function Catalogo() {
  const totalPaginas = 10; // Número total de páginas (puedes ajustarlo según tus datos)

  const handlePageChange = (pagina: number) => {
    console.log(`Página seleccionada: ${pagina}`);
    // Aquí puedes manejar el cambio de página, como cargar nuevos datos
  };

  return (
    <div className="flex items-start">
      {/* Filtro a la izquierda */}
      <div className="w-2/8 ml-12 mt-8">
        <Filtro />
      </div>

      {/* DatosMovil a la derecha */}
      <div className="w-7/8 mr-12">
        <DatoMovil />
        {/* Paginación al final de los datos móviles */}
        <Paginacion totalPaginas={totalPaginas} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}