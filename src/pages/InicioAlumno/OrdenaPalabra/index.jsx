import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones"; 
import SeleccionNivel from "./SeleccionNivel";
import { OrdenaPalabrasVoz } from "../../../Voz/indice";


const OrdenaPalabras = () => {
  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro>
          <Instrucciones 
            titulo={"Ordena Palabras"}
            tip={"Ordena las palabras para formar la oracion correcta"}
            pagAnterior={"/alumno/opcion-juegos"}
            vozTitulo={OrdenaPalabrasVoz}
          />

          <SeleccionNivel />          
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default OrdenaPalabras
