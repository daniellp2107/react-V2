import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import {Contenedor, Centro} from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import { EjerPalabrasVoz } from "../../../Voz/indice";
import styled from "styled-components";
import BotonesSilabas from "./BotonesSilabas";
import SeleccionNivel from "./SeleccionNivel";

const CntSilabas = styled.div`
    width: 80%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    /* background-color: cadetblue; */
`;

const EjerciciosPalabras = () => {  
  return (    
    <AlumnoLayout>
      <Contenedor >
        <Centro>
          <Instrucciones  
            titulo={"Ejercicios con palabras"}
            tip={"Elige la palabra generadora que desees practicar"}
            pagAnterior={"/alumno/opcion-letras"}
            vozTitulo={EjerPalabrasVoz}
          />
          <SeleccionNivel />
        </Centro>
      </Contenedor>
    </AlumnoLayout>
    )
}

export default EjerciciosPalabras
