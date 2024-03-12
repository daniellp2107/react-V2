import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { SumarVoz } from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";

const Sumar = () => {
  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro >
          <Instrucciones 
            titulo={"Empecemos a sumar"}
            tip={"Cuenta los objetos y ¡súmalos!"}
            pagAnterior={"/alumno/opcion-numeros"}
            vozTitulo={SumarVoz}
          />
          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default Sumar