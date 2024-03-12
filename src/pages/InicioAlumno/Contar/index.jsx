import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import {ContarVoz} from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";

const Contar = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Empecemos a contar"}
            tip={"¿Cuántos objetos puedes contar?"}
            pagAnterior={"/alumno/opcion-numeros"}
            vozTitulo={ContarVoz}
          />
          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default Contar;
