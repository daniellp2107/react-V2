import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import {VisualVBoz} from "../../../Voz/indice";
import Instrucciones from "../../../components/Instrucciones";
import MostrarEjercicio from "./MostrarEjercicio";

const Visual = () => {
  return (
    <AlumnoLayout>
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Busqueda Visual"}
            tip={"Pon mucha atención y encuetra la pieza faltante"}
            pagAnterior={"/alumno/opcion-juegos"}
            vozTitulo={VisualVBoz}
          />
          <MostrarEjercicio />
        </Centro>
      </Contenedor>
      
    </AlumnoLayout>
  )
}

export default Visual;