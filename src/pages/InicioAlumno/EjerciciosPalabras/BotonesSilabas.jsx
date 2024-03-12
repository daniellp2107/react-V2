import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextoGrande } from '../../../components/Styled.global';
import correcto from '../../../assets/icons/correcto.png';
import incorrecto from '../../../assets/icons/incorrecto.png';
import imgsiguiente from '../../../assets/icons/right.svg';
import {nuevaSilaba} from '../../../utils/archivos/nueva-silaba';
import TextToSpeech from '../../../components/TextToSpeechComponent';
import { useLazyQuery, useMutation} from '@apollo/client';
import { ACTUALIZAR_ACTIVIDAD_AVANCE_ALUMNO} from '../../../utils/graphql/mutation';
import { OBTENER_ACTIVIDAD_AVANCE_ALUMNOID } from '../../../utils/graphql/query';

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CntBotones = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: cornflowerblue; */

  @media screen and (max-width: 960px){
    width: 100%;
    /* height: 250px; */
    flex-wrap: wrap;
    /* background-color: aqua; */
  }

  @media screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
  }
`;

const BtnSilaba = styled.div`
    width: 100px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* background-color: rgba(236, 236, 237, 1); */

    @media screen and (max-width: 960px){
        min-width: 60px;
    }

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;

const InputSilaba = styled.input `
    width: 100px;
    height: 50px;
    text-align: center;
    font-size: xx-large;
    font-weight: 600;

    @media screen and (max-width: 960px){
        width:75px ;
    }

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;

const CntRes = styled.div`
    width: 100px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    
    /* background-color: coral; */
`;

const ImagenResultado = styled.img`
    width: 50px;
    background-color: ${props => props.res || "#fff"};

    @media screen and (max-width: 960px){
        
    }

    @media screen and (max-width: 500px){
        display: block;
    }
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
    width: 100px;
`;

const BtnVoz = styled.img`
    width: 50px;

    @media screen and (max-width: 960px){
        display: block;
        margin: 10px ;
    }

    @media screen and (max-width :500px){
        width: 100px;
    }
`;

const BotonesSilabas = ({nombres, palabras, letra, nivel}) => {
  
  const [actualizar, setActualizar] = useState(false);
  const [silaba, setSilaba] = useState("");
  const [aleatorio, setAleatorio] = useState(Number);
  const [resultado, setResultado] = useState(Boolean);
  const [palabraArray, setPalabraArray] = useState([]);
  const [contador, setContador] = useState(1);
  let arregloNombres= nombres.split(',');
  let arregloPalabras = palabras.split(',');
  let arregloCompleto = arregloNombres.concat(arregloPalabras);

  const [act,{data,loading,error}] = useLazyQuery(OBTENER_ACTIVIDAD_AVANCE_ALUMNOID);
  // console.log("Datos de LazyQuery: ",data)

  const [actualizarAvance] = useMutation(ACTUALIZAR_ACTIVIDAD_AVANCE_ALUMNO);

  useEffect(() => {
    separarPalabra(arregloCompleto)
  }, [aleatorio,nombres,palabras]);

  useEffect(() => {
    const actAvan = async ()=>{
      try {
        const {data} = await actualizarAvance({
          variables:{
            input:{
              avance:contador.toString(),
              numActividad:nivel
            }
          }
        });
        // console.log("Actualizado el avance")
      } catch (error) {
        console.log("Hubo un error: ", error);
      }
    }
    actAvan();
    setActualizar(false);
  }, [actualizar]);

  const random = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numAleatorio = Math.floor(Math.random() * (max - min ) + min);
    return numAleatorio;
  }  

  const elegirPalabra =(aleatorio, arreglo)=>{

    return arreglo[aleatorio];        
  }

  const contruirArregloSilabas = (arreglo) =>{
    let auxiliar;
    let nuevoArreglo = [];
    arreglo.forEach((silaba)=>{
        auxiliar = Object.values(silaba);
        nuevoArreglo = [...nuevoArreglo, auxiliar[1] ];
    });
    return nuevoArreglo;
  }

  const separarPalabra =(arreglo)=>{
    //se coloca el tamaño del arreglo completo para trabajar
    let numRan = random(0, arreglo.length);

    //----------------------------
    //se busca y se asigna una palabra para su separación en silabas
    let nuevosDatos = nuevaSilaba(elegirPalabra(numRan, arreglo));
    // console.log(nuevosDatos);

    if (nuevosDatos.numeroSilaba > 1) {
        // nuevosDatos = nuevaSilaba(elegirPalabra(numRan, arreglo));
        const {silabas, numeroSilaba} = nuevosDatos;   
        const silabario = contruirArregloSilabas(silabas);
        console.log(silabario);
        setAleatorio(random(0, numeroSilaba));
        setPalabraArray(silabario);
    }
  };
  const compararResultado =(entrada)=>{
    if (palabraArray[aleatorio] === entrada) {
      setResultado(true);
    }else{
      setResultado(false);
    }
  }

  return (
    <Contenedor>
      <CntBotones>
        <TextToSpeech texto={palabraArray.join("")}/>
          {palabraArray.map((silabaArray, index)=>(
            aleatorio === index ? 
              <InputSilaba key={index} maxLength={4} onChange={(e)=>{
                e.preventDefault();
                setSilaba(e.target.value);
                console.log(e.target.value);
                compararResultado(e.target.value);
              }}
                value={silaba}
              />
            :
              <BtnSilaba key={index}>
                <TextoGrande >
                    {silabaArray}
                </TextoGrande>
              </BtnSilaba>
          ))}
          <CntRes>
            {resultado?<ImagenResultado src={correcto} alt='correcto' $res="rgba(235, 188, 58, 1)"/> :<ImagenResultado src={incorrecto} alt='incorrecto' $res="rgba(242, 48, 72, 1)"/> }
          </CntRes>    
        </CntBotones>
        <CntSiguiente onClick={()=>{
          act({variables:{numAct:nivel}})
          if(resultado){
            setActualizar(true);
          }         
          separarPalabra(arregloCompleto);
          
          setSilaba("");
          
          setResultado(false);
        }}>
        <ImgSiguiente src={imgsiguiente} alt='siguiente' />
        <TextoGrande >Siguiente</TextoGrande>
      </CntSiguiente>
    </Contenedor>
  )
}

export default BotonesSilabas;