import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";;
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { LetraNumeroVoz } from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjericicio";


const LetraNumero = () => {
  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro >
          <Instrucciones 
            titulo={"Letra o Número"}
            tip={"Busca la letra o numero que se muestra"}
            vozTitulo={LetraNumeroVoz}
            pagAnterior={"/alumno/opcion-juegos"}
          />
          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default LetraNumero;