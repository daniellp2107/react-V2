import React from 'react';
import styled from 'styled-components';
import {TextoAVoz} from "../../../utils/functions/TextoAVoz";

const StyledContenedor = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;

  @media screen and (max-width: 750px){
    width: 100%;
  }
`;

const StyledCaja = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: xx-large;

  background-color: azure;
`;

const Palabras = ({arreglo, silaba, setRespuesta}) => {

  return (
    <StyledContenedor>
        {arreglo? arreglo.map((elemento, index)=>(
          <StyledCaja key={index} onClick={()=>{
            TextoAVoz(elemento.palabra);
            if (elemento.alias.includes(silaba)) {
              setRespuesta(true);
            }else{
              setRespuesta(false);
            }
          }}>{elemento ? <img width={100} src={elemento.enlace}/> 
            : " "}
          </StyledCaja>
        ))
        : null
      }
      </StyledContenedor>
  )
}

export default Palabras;