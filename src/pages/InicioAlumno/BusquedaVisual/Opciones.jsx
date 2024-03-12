import { useEffect, useState } from "react";
import styled from "styled-components";

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
  width: 80%;
  height: 80%;
`;

const shufflePieces = (arr) => {
  const shuffledPieces = [...arr].sort(() => Math.random() - 0.5);
  return (shuffledPieces);
};

const Opciones = ({piezas, setPiezaCorrecta}) => {  
  const [mostrarPiezas, setMostrarPiezas] = useState([]);
  
  useEffect(() => {
    setMostrarPiezas(()=>shufflePieces(piezas));
  }, [piezas]);

  return (
    <Contenedor >
      {mostrarPiezas ? mostrarPiezas.map((piece, index) => (
        <Pieza key={index} onClick={()=>setPiezaCorrecta(piece)}>
          <ImagenPuzzle src={piece.img} />
        </Pieza>
      )): null}
    </Contenedor>
  )
}

export default Opciones