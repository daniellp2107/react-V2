import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import {MemoramaVoz} from "../../../Voz/indice";
import Instrucciones from "../../../components/Instrucciones";
import MostrarEjercicio from "./MostrtarEjercicio";


const BienEscrito = () => {
  return (
    <AlumnoLayout>
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Bien Escrito"}
            tip={"Elige la palabra que está bien escrita"}
            pagAnterior={"/alumno/opcion-juegos"}
            vozTitulo={MemoramaVoz}
          />
          <MostrarEjercicio />
        </Centro>
      </Contenedor>
      
    </AlumnoLayout>
  )
}

export default BienEscrito;
