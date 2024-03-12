import { useMemo, useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { TextoGrande} from "../../../components/Styled.global";
import correcto from "../../../assets/icons/correcto.png";
import incorrecto from "../../../assets/icons/incorrecto.png";
import siguiente from "../../../assets/icons/right.svg";
import { ordenAleatorio } from "../../../utils/functions/OrdenAleatorio";
import { random } from "../../../utils/functions/NumeroAleatorio";
import TextToSpeech from "../../../components/TextToSpeechComponent";
import {AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import { useMutation } from "@apollo/client";

const Contenedor = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CntBotones = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px) {
      
    }
    @media screen and (max-width: 500px) {
      flex-direction: column;
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
    
    @media screen and (max-width: 960px) {
      
    }
    @media screen and (max-width: 960px) {
      width: 50%;
    }
`;
const InputSilaba = styled.input `
    width: 75px;
    height: 50px;
    text-align: center;
    font-size: xx-large;
    font-weight: 600;
    
    @media screen and (max-width: 960px) {
      
    }
    @media screen and (max-width: 500px) {
      width: 50%;
    }
`;

const CntRes = styled.div`
    width: 100px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImagenResultado = styled.img`
    width: 50px;
`;

const CntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
`;

const ImgSiguiente = styled.img`
    width: 100px;
`;

const MostrarEjercicio = ({silabas, palabraGen, nivel}) => {
  const [aleatorio, setAleatorio] = useState(0);
  const [silabaRes, setSilabaRes] = useState("");
  const [resultado, setResultado] = useState(false);
  const [actualizar, setActualizar] = useState(false);
  let silabasCompleto = [];
  
  if (palabraGen =="PALA") {
    silabasCompleto = ( silabas.split(",").concat(["io","ae","ao","au","eo","ea","eu","eo","ei","ie","ia","iu","oa","oe","oi","ou","ua","ue","ui","uo"]));  
  }else {
    silabasCompleto = ( silabas.split(","));
  }
  
  const arrRandom = useMemo(()=> ordenAleatorio(silabasCompleto),[]);
  // console.log(arrRandom);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Ejercicio con Silabas",
            palabraGen:palabraGen
          }
        }
      });  
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  
  }


  const nuevoNumAlet = ()=> {
    setAleatorio (()=> random(0, arrRandom.length));
    setResultado(false);
  };

  const compararSilabas = (entrada, silaba )=>{
    if (silaba == entrada) {
      setResultado(true);
      agregarDatos();
    }else{
      setResultado(false);
    }
}

  return (
    <Contenedor>
      <CntBotones >
        <TextToSpeech texto={arrRandom[aleatorio]}/>
        <BtnSilaba >
          <TextoGrande >
            {arrRandom[aleatorio]} 
          </TextoGrande>
        </BtnSilaba>
        <InputSilaba maxLength={4} onChange={(e)=>{
          compararSilabas(e.target.value, arrRandom[aleatorio]);
          setSilabaRes(e.target.value);
          }}
          value={silabaRes}
          />
        <CntRes>
        {resultado?<ImagenResultado src={correcto} alt='correcto' $res="rgba(235, 188, 58, 1)"/> :<ImagenResultado src={incorrecto} alt='incorrecto' $res="rgba(242, 48, 72, 1)"/> }
        </CntRes>
      </CntBotones>
      
      <CntSiguiente onClick={(e)=>{
        e.preventDefault();
        nuevoNumAlet();
        setSilabaRes("");
        
      }}>
        <ImgSiguiente src={siguiente} alt='siguiente' />
      </CntSiguiente>
    </Contenedor>
  )
}

export default MostrarEjercicio;
