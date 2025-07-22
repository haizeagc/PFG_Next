import DatoMovil from "../ui/catalogo/datoMovil";
import Filtro from "../ui/catalogo/filtro"; // Importa el componente Filtro

export default async function Catalogo() {
  return (
    <div className="flex p-8 gap-4 items-start">
      {/* Filtro a la izquierda */}
      <div className="w-1/4">
        <Filtro />
      </div>

      {/* DatosMovil a la derecha */}
      <div className="w-3/4">
        <DatoMovil />
      </div>
    </div>
  );
}