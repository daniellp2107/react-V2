import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import {BuscarSilabaVoz} from "../../../Voz/indice";
import SeleccionNivel from "./SeleccionNivel";

const BuscarSilaba = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Busca la silaba"}
            tip={"Elige la figura que se escribe con las siguientes letras"}
            vozTitulo={BuscarSilabaVoz}
            pagAnterior={"/alumno/opcion-juegos"}
          />

          <SeleccionNivel />
        </Centro>
      </Contenedor>
      
    </AlumnoLayout>
  )
}

export default BuscarSilaba
