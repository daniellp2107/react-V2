import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { LetrasVoz } from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";

const DineroDos = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Contando Dinero 2"}
            tip={"Cuenta el dinero y da clic en la opcion correcta"}
            pagAnterior={"/alumno/opcion-numeros"}
            vozTitulo={LetrasVoz}
          />

          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default DineroDos;