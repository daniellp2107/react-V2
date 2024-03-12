import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { LetrasVoz } from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";


const EjerciciosLaAl = () => {
  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro >
          <Instrucciones 
            titulo={"Ejercicios con la le"}
            tip={"Haz clic en la opción correcta"}
            vozTitulo={LetrasVoz}
            pagAnterior={"/alumno/opcion-letras"}
          />

          <MostrarEjercicio />
        </Centro>
      </Contenedor>
      
    </AlumnoLayout>
    
  )
}

export default EjerciciosLaAl;