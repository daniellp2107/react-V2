import React from 'react';
import styled from 'styled-components';
import BotonSilaba from './BotonSilaba';

const StyledCntSilabas = styled.div`
  width: 75%;    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;

  @media screen and (max-width: 960px){
    
  }

  @media screen and (max-width: 500px){
    flex-direction: unset;
    flex-wrap: wrap;
  }

  /* background-color: aquamarine; */
`;
const BotonesSilabas = ({arreglo}) => {
  return (
    <StyledCntSilabas>
      {arreglo.map((silaba)=>(<BotonSilaba key={silaba} silaba={silaba} />))}
    </StyledCntSilabas>
  )
}

export default BotonesSilabas