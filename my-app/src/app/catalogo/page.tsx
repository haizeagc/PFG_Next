import DatoMovil from "../ui/catalogo/datoMovil";
import FiltroSidebar from "../ui/catalogo/filtro";

export default async function Catalogo() {
  return (
    <div className="flex items-start">
      {/* Filtro a la izquierda */}
      <div className="w-2/8 ml-12 mt-8">
      <FiltroSidebar />
      </div>

      {/* DatosMovil a la derecha */}
      <div className="w-7/8 mr-12">
        <DatoMovil />
      </div>
    </div>
  );
}