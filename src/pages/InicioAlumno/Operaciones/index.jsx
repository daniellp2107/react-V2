import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import {VisualVBoz} from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";

const Operaciones = () => {
  return (
    <AlumnoLayout>
      <Contenedor >
        <Centro >
          <Instrucciones titulo={"Operaciones**"}
            tip={"Averigua si es una suma o una resta"}
            pagAnterior={"/alumno/opcion-numeros"}
            vozTitulo={VisualVBoz}
          />

          <MostrarEjercicio />
        </Centro>  
      </Contenedor> 
    </AlumnoLayout>
  )
}

export default Operaciones;