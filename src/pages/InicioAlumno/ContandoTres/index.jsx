import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { LetrasVoz } from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";

const DineroTres = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones 
            titulo={"Contando Dinero 3"}
            tip={"Observa bien el numero y suma el dinero para pagar"}
            pagAnterior={"/alumno/opcion-numeros"}
            vozTitulo={LetrasVoz}
          />

          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default DineroTres;