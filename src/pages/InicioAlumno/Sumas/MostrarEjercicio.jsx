import styled from "styled-components";
import {random} from "../../../utils/functions/NumeroAleatorio";
import { useState } from "react";
import Numero from "./Numero";
import { useEffect } from "react";
import {useMutation} from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import { TextoMediano } from "../../../components/Styled.global";
import imgSiguiente from "../../../assets/icons/right.svg";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
  /* background-color: aquamarine; */
`;

const StyledImgSiguiente = styled.img`
    width: 50px;

`;

const generarNumRandom =(min, max)=>{
  return random (min, max);
}

const MostrarEjercicio = () => {
  const [datosArreglo, setDatosArreglo] = useState(()=>[]);
  const [actualizar, setActualizar] = useState(false);
  const [contador, setContador] = useState(0);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Ejercicios con sumas",
            palabraGen:"Sin Palabra Generadora"
          }
        }
      });
      // console.log("Guardado");
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  }
  
  useEffect(() => {
    const datos = [
      {numeroUno:generarNumRandom (1, 10),numeroDos:generarNumRandom (1, 10)},
      {numeroUno:generarNumRandom (1, 25),numeroDos:generarNumRandom (1, 25)},
      {numeroUno:generarNumRandom (1, 50),numeroDos:generarNumRandom (1, 50)},
    ];

    setDatosArreglo(datos);
    setActualizar(false);
  }, [actualizar]);

  return (
    <Contenedor >
      {datosArreglo.map((dato,index)=>(
        <Numero datos={dato} key={index} setContador={setContador}/>
      ))}

      <StyledCntSiguiente
        onClick={()=>{
          if (contador > 0) {
            agregarDatos();
          }
          setActualizar(true);
          setContador(0);
      }}> 
      <StyledImgSiguiente src={imgSiguiente}/>
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </StyledCntSiguiente>
      
    </Contenedor>
  )
}

export default MostrarEjercicio