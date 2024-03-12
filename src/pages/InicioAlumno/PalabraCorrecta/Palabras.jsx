import React, { useState } from 'react'
import styled from 'styled-components';
import {TextoMediano} from "../../../components/Styled.global"
import ImagenRes from "../../../components/ImagenRes";
import { useEffect } from 'react';

const Contenedor =styled.div`
  width: 100%;
  border: 1px solid #C2C2C2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media (max-width: 500px) {
    width: 30%;
    gap: 20px;
  }
`;

const CajaPalabra = styled.div`
  width: calc(100% - 10%);
  height: calc(100% - 10%);
  border: 1px;
  border-radius: 10px;
  margin: 10px 0 ;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: ${props=> props.res};
`;


const Palabras = ({datos}) => {
  const [correcto, setCorrecto] = useState(false);
  const [palabras, setPalabras] = useState({});
  const [palUno, setPalUno] = useState(false);
  const [palDos, setPalDos] = useState(false);

   useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
    const words = randomIndex === 0 ? [datos.correcto, datos.incorrecto] : [datos.incorrecto,datos.correcto];
    setPalabras(words);
    setCorrecto(false);
    setPalUno(false);
    setPalDos(false);
  }, [datos]);

  useEffect(() => {

  }, [datos]);  
  
  const checkAnswerUno = (palabra) => {
   if (palabra == datos.correcto) {
    setCorrecto(true);
    setPalUno(true);
   }
  };
  const checkAnswerDos = (palabra) => {
    if (palabra == datos.correcto) {
     setCorrecto(true);
     setPalDos(true);
    };
   };
  return (
    <Contenedor>
      <CajaPalabra res={palUno ? "#00AD7420" : "#6000A120"} onClick={()=>checkAnswerUno(palabras[0])}>
        <TextoMediano >{palabras[0]}</TextoMediano>
      </CajaPalabra>
      <CajaPalabra res={palDos ? "#00AD7420" : "#6000A120"} onClick={()=>checkAnswerDos(palabras[1])}>
        <TextoMediano >{palabras[1]}</TextoMediano>
      </CajaPalabra>
      <ImagenRes resultado={correcto}/>
    </Contenedor>
  )
}

export default Palabras
