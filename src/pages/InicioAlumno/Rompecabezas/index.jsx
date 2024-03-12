import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import {MemoramaVoz} from "../../../Voz/indice";
import Instrucciones from "../../../components/Instrucciones";
import MostrarEjercicio from "./MostrarEjercicio";

const Rompecabezas = () => {
  return (
    <AlumnoLayout>
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Rompecabezas"}
            tip={"Pon mucha atención y reacomoda las piezas"}
            pagAnterior={"/alumno/opcion-juegos"}
            vozTitulo={MemoramaVoz}
          />
          <MostrarEjercicio />
        </Centro>
      </Contenedor>
      
    </AlumnoLayout>
  )
}

export default Rompecabezas;
