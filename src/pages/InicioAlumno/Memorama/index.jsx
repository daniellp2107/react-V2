import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import {MemoramaVoz} from "../../../Voz/indice";
import Instrucciones from "../../../components/Instrucciones";
import MostrarEjercicio from "./MostrarEjercicio";

const Memorama = () => {
  return (
    <AlumnoLayout>
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Memorama"}
            tip={"Da clic en las los cuadros para revelar las imagenes"}
            pagAnterior={"/alumno/opcion-juegos"}
            vozTitulo={MemoramaVoz}
          />
          <MostrarEjercicio  />

        </Centro>
      </Contenedor>
      
    </AlumnoLayout>
  )
}

export default Memorama;