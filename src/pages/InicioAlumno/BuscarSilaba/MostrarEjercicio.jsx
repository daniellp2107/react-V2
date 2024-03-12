import { useEffect, useMemo, useState } from 'react';
import {palabras} from "../../../images/diccionario";
import styled from 'styled-components';
import correcto from '../../../assets/icons/correcto.png';
import incorrecto from '../../../assets/icons/incorrecto.png';
import imgsiguiente from '../../../assets/icons/right.svg';
import { TextoMediano, TextoGrande } from '../../../components/Styled.global';
import {random} from "../../../utils/functions/NumeroAleatorio";
import {ordenAleatorio} from "../../../utils/functions/OrdenAleatorio";
import Palabras from './Palabras';
import {ACTUALIZAR_ACTIVIDAD_AVANCE_ALUMNO } from '../../../utils/graphql/mutation';
import { useMutation } from '@apollo/client';

const StyledContenedor = styled.div`
  width: 100%;
  min-height: 100px;
  /* background-color: aquamarine; */
`;

const StyledCntSilaba = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSilaba = styled.div`
  width: 100px;
  height: 50px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
`;
const StyledCntRes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const StyledImgRes = styled.img`
  width: 75px;
  padding: 5px;
  margin: 5px;
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
    width: 100px;

    @media screen and (max-width: 350px){
      width: 75px;
    }

`;

const MostrarEjercicio = ({datos, palabraGen}) => {
  console.log(palabraGen);
  console.log(`\"${palabraGen}\"`);
  const pal = palabraGen;
  const [palabra, setPalabra] = useState("");
  const arregloSilabas = useMemo(()=>datos.split(","),)
  const [arregloFinal, setArregloFinal] = useState([]);
  const [respuesta, setRespuesta] = useState(false);
  const [siguiente, setSiguiente] = useState(false);
  const [actualizar, setActualizar] = useState(false);
  const [numeroAleatorio, setNumeroAleatorio] = useState(()=>random(0, arregloSilabas.length));
  const [silaba, setSilaba ]= useState(()=>arregloSilabas[numeroAleatorio]);
  
  // const arregloSilabas = datos.split(",");
  
  useEffect(() => {
    // const numAleatorio = random(0, arregloSilabas.length);
    // const silRandom = arregloSilabas[numAleatorio];
    setSilaba (arregloSilabas[numeroAleatorio]);
    crearArreglo(palabras ,arregloSilabas[numeroAleatorio]);
    console.log("useState");
  }, [palabraGen]);
    
  const [actualizarActividadAvance] = useMutation(ACTUALIZAR_ACTIVIDAD_AVANCE_ALUMNO);

  function crearArreglo(palabras, silaba) {
    //encontrar palabras que se escriben con la silaba seleccionada
    const arregloPalabras = encontrarPalabras(palabras, silaba);

    //reacomodar la posición de las palabras en el arreglo, así se elige una palabra distinta cada vez que se inicia con el ejercicio
    const ordenPalabras = reOrdenarPalabras(arregloPalabras, silaba);

    //seleccionar la palabra correcta del ejercicio
    const numAleatorio = random(0, ordenPalabras.length)
    const selPalabra = ordenPalabras[random(0, numAleatorio)];
    setPalabra(selPalabra);
    
    const llenarArreglo = [selPalabra, palabras[random(0, palabras.length)],palabras[random(0, palabras.length)]];
    setArregloFinal(()=>reOrdenarPalabras(llenarArreglo));
    
  }
  
  function encontrarPalabras(palabras, silaba) {
    //buscar una palabra deacuerdo a la silaba seleccionada
    let arregloPalabras = [];
    palabras.forEach(element => {
      if (element.alias.includes(silaba) && !element.alias.includes("ll" || "rr")) {
        arregloPalabras = [...arregloPalabras, element];  
      }
    });
    return arregloPalabras;
  }

  function reOrdenarPalabras(arrPals, silaba) {
    //reacomodar las palabras para elegir la que será la opción correcta del ejercicio
    const nuevoOrden = ordenAleatorio(arrPals, silaba);
    return nuevoOrden;
  }

  const nuevaPalabra =()=>{
    const numAleatorio = random(0, arregloSilabas.length);
    const silRandom = arregloSilabas[numAleatorio];
    setSilaba (silRandom);
    crearArreglo(palabras ,silRandom);
  }

  return (
    <StyledContenedor >
      <StyledCntSilaba>
        <StyledSilaba>
          <TextoGrande>
            {silaba}
          </TextoGrande>
        </StyledSilaba>
      </StyledCntSilaba>
      <Palabras arreglo={arregloFinal} silaba={silaba} setRespuesta={setRespuesta}/>
      <StyledCntRes>
        {(respuesta) ? <StyledImgRes src={correcto} /> :<StyledImgRes src={incorrecto} />}
      </StyledCntRes>
      
      <StyledCntSiguiente onClick={()=>{
        setRespuesta(false);
        nuevaPalabra();
      }}>
        <StyledImgSiguiente src={imgsiguiente}/>
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </StyledCntSiguiente>
    </StyledContenedor>
  )
}

export default MostrarEjercicio