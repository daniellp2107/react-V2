import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { LetrasVoz } from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";

const EjerciciosCSZ = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Ejercicios con C-S-Z"}
            tip={"Haz clic en la opción correcta"}
            pagAnterior={"/alumno/opcion-letras"}
            vozTitulo={LetrasVoz}
          />

          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default EjerciciosCSZ
