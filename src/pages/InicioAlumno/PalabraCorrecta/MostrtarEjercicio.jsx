import React, { useEffect, useMemo, useState } from 'react';
import styled from "styled-components"
import { arregloCorrectoIncorrecto } from '../../../utils/archivos/parejasPalabras';
import Palabras from './Palabras';
import { CntSiguiente, ImgSiguiente, TextoMediano } from '../../../components/Styled.global';
import imgSiguiente from "../../../assets/icons/right.svg";
import {useMutation} from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledPalabras = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

function seleccionarNumerosAlAzar(minimo, maximo, cantidad) {
  const numerosSeleccionados = [];
  // Asegurarse de que el rango es válido
  if (maximo - minimo + 1 < cantidad) {
      console.error("El rango no es suficientemente grande para seleccionar la cantidad especificada de números.");
      return null;
  }

  while (numerosSeleccionados.length < cantidad) {
      const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      // Asegurarse de que el número no esté duplicado
      if (!numerosSeleccionados.includes(numeroAleatorio)) {
          numerosSeleccionados.push(numeroAleatorio);
      }
  }

  return numerosSeleccionados;
}

const MostrarEjercicio = () => {
  const [word, setWord] = useState([]);
  const palabras = useMemo(()=>arregloCorrectoIncorrecto);

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

  const selectRandomWord = () => {
    const numerosAleatorios = seleccionarNumerosAlAzar(0, (palabras.length - 1), 3);
    const words = numerosAleatorios.map((num)=>palabras[num]);
    setWord(words);
  };

  useEffect(() => {
    selectRandomWord();
  }, []);

  function act (){
    selectRandomWord();
  }

  return (
    <Contenedor>
      <StyledPalabras>
        {word.map((datos, index)=>(
          <Palabras key={index} datos={datos}/>
        ))}
      </StyledPalabras>
      <CntSiguiente onClick={()=>{
        act();
        agregarDatos();
        }}>
        <ImgSiguiente src={imgSiguiente}/>
        <TextoMediano >
          Siguiente
        </TextoMediano>
      </CntSiguiente>
    </Contenedor>
  );
};

export default MostrarEjercicio;