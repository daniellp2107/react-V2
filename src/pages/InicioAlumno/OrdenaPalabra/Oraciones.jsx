import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Palabras from './Palabras';
import { ordenAleatorio } from '../../../utils/functions/OrdenAleatorio';
import TextToSpeech from "../../../components/TextToSpeechComponent";
import {TextoAVoz} from "../../../utils/functions/TextoAVoz";

const StyledOraciones = styled.div`
  width: 90%;
  height: fit-content;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

`;

const Oraciones = ({arregloPalabras, oracionCorrecta}) => {
  const [arregloAleatorio, setArregloAleatorio] = useState([]);

  useEffect(() => {
    setArregloAleatorio(ordenAleatorio(arregloPalabras));
  }, [arregloPalabras]);
  
  // console.log('oraciones: ',arregloAleatorio);
  return (
    <StyledOraciones onClick={()=>TextoAVoz()}>
      {arregloAleatorio.map((palabra, index)=>(
        <Palabras palabra={palabra} key={index}/>
      ))}
      <TextToSpeech texto={oracionCorrecta}/>
    </StyledOraciones>
  )
}

export default Oraciones;