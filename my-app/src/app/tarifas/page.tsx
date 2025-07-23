import DatoTarifa from "../ui/tarifas/datoTarifa";
import Elecciones from "../ui/tarifas/elecciones";

//EL BOTON NO FUNCIONA NO SE PUEDEN USAR MODAL PORQUE EL COMPONENTE DATOTARIFA ES ASINCRONO
export default function Tarifas() {

  return (
    <div>
      <DatoTarifa/>
      <div className="w-full h-1 bg-gray-300 mt-4"></div>
      <Elecciones/>
    </div>
  );
}