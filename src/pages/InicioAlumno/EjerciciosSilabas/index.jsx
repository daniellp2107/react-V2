import styled from "styled-components";
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { EjerSilabasVoz } from "../../../Voz/indice";
import SeleccionNivel from "./SeleccionNivel";

const EjerciciosSilabas = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones titulo={"Escribe la silaba"}
            pagAnterior={"/alumno/opcion-letras"}
            tip={"Escribe la silaba que se muestra"}
            vozTitulo={EjerSilabasVoz}
          />
          <SeleccionNivel />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default EjerciciosSilabas