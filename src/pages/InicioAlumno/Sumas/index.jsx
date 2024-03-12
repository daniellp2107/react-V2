import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import {LetrasVoz} from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";
const Sumas = () => {
  return (
    <AlumnoLayout>
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Ejercicios con sumas"}
            tip={"Suma los numeros y escribe tu respuesta"}
            pagAnterior={"/alumno/opcion-numeros"}
            vozTitulo={LetrasVoz}
          />

          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default Sumas
