import DatoMovil from "../ui/datoMovil";
import Paginacion from "../ui/paginacion";

export default async function Catalogo() {

  return (
    <div>
      <DatoMovil />
    </div>
    <div>
      <Paginacion />
    </div>
  );
}