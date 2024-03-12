import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import imgsiguiente from '../../../assets/icons/right.svg';
import {nuevaSilaba} from '../../../utils/archivos/nueva-silaba';
import { ordenAleatorio } from '../../../utils/functions/OrdenAleatorio';
import Carrusel from './Carrusel';
import { random } from '../../../utils/functions/NumeroAleatorio';
import { TextoMediano } from '../../../components/Styled.global';

const Contenedor = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CntSiguiente = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 15px 0;
    /* background-color: aquamarine; */
`;

const ImgSiguiente = styled.img`
    width: 50px;
`;

const Prueba = ({nombres, palabras, letra, nivel, palabraGen}) => {

  const [aleatorio, setAleatorio] = useState(0);
  const [actualizar, setActualizar ] = useState(false);

  let arregloNombres= nombres.split(',');
  let arregloPalabras = palabras.split(',');
  const arrCom = arregloNombres.concat(arregloPalabras);

  function allRandom(letra,arreglo) {
    let letras = letra.split(",")
    let auxiliar = [];
    letras.forEach((letra)=>{
      arreglo.forEach((palabra)=>{
        if (nuevaSilaba(palabra).numeroSilaba > 1) {
          if (palabra.toLowerCase().includes(letra.toLowerCase())) {
            auxiliar = [...auxiliar,{letra, palabra}];  
          }  
        }
      });
    });
    return ordenAleatorio(auxiliar)
  }
  const arrRandom = useMemo( ()=> allRandom(letra,arrCom),[]);
  const nuevoNumAlet = ()=> {
    setAleatorio (()=> random(0, arrCom.length));
    setActualizar(true);
  };
  return (
    <Contenedor>
      <Carrusel items={arrRandom[aleatorio]} 
        setActualizar={setActualizar}
        actualizar={actualizar}
        nivel={nivel}
        palabraGen={palabraGen}
      />
      <CntSiguiente onClick={(e)=>{
          e.preventDefault();
          nuevoNumAlet();
      }}>
        <ImgSiguiente src={imgsiguiente} alt='siguiente' />
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </CntSiguiente>
      
    </Contenedor>
  )
}

export default Prueba