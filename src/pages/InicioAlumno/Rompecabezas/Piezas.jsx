import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1px;

  background-color: chartreuse;
  @media (max-width: 500px) {
    width: fit-content;
    height: fit-content;

  }
`;

const Pieza = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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
const Piezas = ({piezas, movePiece}) => {
  return (
    <Contenedor>
      {piezas.map((piece, index) => (
        <Pieza key={index} draggable onDragStart={(e) => {
            e.dataTransfer.setData('text/plain', index);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
            movePiece(dragIndex, index);
          }}
        >
          <ImagenPuzzle src={piece.img} />
        </Pieza>
      ))}
    </Contenedor>
  )
}

export default Piezas