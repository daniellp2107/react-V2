import AlumnoLaout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import {LetrasVoz} from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";

const EjerciciosLLY = () => {
  return (
    <AlumnoLaout>
      <Contenedor >
        <Centro >
          <Instrucciones 
            titulo={"Ejericios con LL-Y"}
            tip={"Haz clic en la opción correcta"}
            pagAnterior={"/alumno/opcion-letras"}
            vozTitulo={LetrasVoz}
          />

          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLaout>

  )
}

export default EjerciciosLLY;
