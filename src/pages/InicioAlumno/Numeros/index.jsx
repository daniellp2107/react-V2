import styled from "styled-components"
import { Contenedor, Centro } from "../../../components/Styled.global"
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout"
import Instrucciones from "../../../components/Instrucciones";
import {NumerosVoz} from "../../../Voz/indice";
import MostrarNumeros from "./MostrarNumeros";

const Numeros = () => {
  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro>
          <Instrucciones 
            vozTitulo={NumerosVoz}
            titulo={"Los numeros"}
            tip={"Escribe un numero del 0 al 999 y usa los botones de abajo"} 
            pagAnterior={"/alumno/opcion-numeros"}
          />

          <MostrarNumeros />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default Numeros