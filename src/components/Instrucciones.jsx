import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';
import TextToSpeech from './TextToSpeechComponent';
import regreso from "../assets/icons/regreso.png";


const Contenedor = styled.div`
  width: 100%;
  display: flex;
  
  @media screen and (max-width: 960px){
      
    }

    @media screen and (max-width: 500px){
      justify-content: space-between;
    }

  .instrucciones{
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 960px){
      
      
    }

    @media screen and (max-width: 500px){

    }
  }

  .noMostrar {

    @media screen and (max-width: 960px){
    display: none;
  }
  @media screen and (max-width: 500px){
    
  }
  }

  .titulo{
    margin: 5px;
    padding: 0;
    font-size: 32px;
    font-weight: 600;
  }

  .tip{
    margin: 5px;
    font-size: 22px;
  }
  
`;

const StyledLink = styled(Link)`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 80px;
    
  }
`;

const Instrucciones = ({titulo, tip, vozTitulo, pagAnterior}) => {
  const loc = useLocation();
  return (
    <Contenedor >
      {loc.pathname == '/inicio-alumno' ? null : (
        <StyledLink to={pagAnterior}  >
          <img src={regreso}/>  
        </StyledLink>
      )}
      
      <div className=''>
        <div className='instrucciones'>
          <p className='titulo'>{titulo}</p>
          <AudioPlayer audioList={vozTitulo}/>
        </div>
        {tip ? (
          <div className='instrucciones noMostrar'>
            <p className='tip'>{tip}</p>
            <TextToSpeech texto={tip}/>
          </div>
        ) : null}
      </div>
      
    </Contenedor>
    
  )
}

export default Instrucciones
