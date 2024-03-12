import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  /* background-color: chartreuse; */
  @media (max-width: 500px) {
    width: fit-content;
    height: fit-content;

  }
`;

const Pieza = styled.div`
  width: 150px;
  height: 150px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 960px) {
    width: 125px;
    height: 125px;
  }
`;

const ImagenPuzzle = styled.img`
  width: 100%;
  height: 100%;
`;
const Piezas = ({piezas, num}) => {
  return (
    <Contenedor>
      {piezas.map((piece, index) => (
        <Pieza key={index}>
          {index == num ? null : <ImagenPuzzle src={piece.img} />}
          
        </Pieza>
      ))}
    </Contenedor>
  )
}

export default Piezas;