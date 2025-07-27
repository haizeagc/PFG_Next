import DatoTarifa from "../ui/tarifas/datoTarifa";
import Elecciones from "../ui/tarifas/elecciones";

//EL BOTON NO FUNCIONA NO SE PUEDEN USAR MODAL PORQUE EL COMPONENTE DATOTARIFA ES ASINCRONO
export default function Tarifas() {

  return (
    <div>
      <DatoTarifa/>
      <div className="w-full h-8 bg-[#5b60ff]  mt-2"></div>
      <Elecciones/>
    </div>
  );
}