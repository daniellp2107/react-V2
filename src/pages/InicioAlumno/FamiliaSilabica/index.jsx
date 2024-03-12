import styled from "styled-components";
import { Contenedor, Centro } from "../../../components/Styled.global";
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import Instrucciones from "../../../components/Instrucciones";
import { FamSilabicaVoz } from "../../../Voz/indice";
import MostrarEjercicio from "./MostrarEjercicio";


const FamiliaSilabica = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro >
          <Instrucciones 
            titulo={"Familia Silabica"}
            tip={"Escribe una letra en el recuadro para formar las distintas familias silabicas"}
            vozTitulo={FamSilabicaVoz}
            pagAnterior={"/alumno/opcion-letras"}
          />

          <MostrarEjercicio />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default FamiliaSilabica
