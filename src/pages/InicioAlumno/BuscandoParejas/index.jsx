import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import {BuscarSilabaVoz} from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";
import Prueba from "./Prueba";

const BuscandoParejas = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Buscando Parejas**"}
            tip={"Observa bien las imagenes y elige las que sean iguales"}
            vozTitulo={BuscarSilabaVoz}
            pagAnterior={"/alumno/opcion-juegos"}
          />

          <MostrarEjercicio />
          
        </Centro>
      </Contenedor>
      
    </AlumnoLayout>
  )
}

export default BuscandoParejas;