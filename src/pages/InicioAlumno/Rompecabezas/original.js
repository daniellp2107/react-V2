// Puzzle.js
import { useState } from 'react';
import styled from 'styled-components';
import { puzzlePrueba } from '../../../ImgPuzzles/recortes';

const ImagenPuzzle = styled.img`
  width: 100%;
  height: 100%;
`;

const Puzzle = () => {
  const orden = [[0,3, 6, 1, 4, 7, 2,5,8]];
  // const [pieces, setPieces] = useState([1, 2, 3, 4, 5, 6]);
  const [pieces, setPieces] = useState([
    puzzlePrueba[0], 
    puzzlePrueba[3],
    puzzlePrueba[6],
    puzzlePrueba[1],
    puzzlePrueba[4],
    puzzlePrueba[7],
    puzzlePrueba[2],
    puzzlePrueba[5],
    puzzlePrueba[8]
  ]);

  const movePiece = (dragIndex, hoverIndex) => {
    console.log(dragIndex, hoverIndex);
    const newPieces = [...pieces];
    console.log(newPieces);
    const draggedPiece = newPieces[dragIndex];

    newPieces[dragIndex] = pieces[hoverIndex];
    newPieces[hoverIndex] = pieces[dragIndex];
    // newPieces.splice(dragIndex, 1);
    // newPieces.splice(hoverIndex, 0, draggedPiece);

    console.log(newPieces);
    setPieces(newPieces);
  };

  const shufflePieces = () => {
    const shuffledPieces = [...pieces].sort(() => Math.random() - 0.5);
    console.log(shuffledPieces);
    setPieces(shuffledPieces);
  };
  console.log(pieces)
  return (
    <div>
      <h1>Rompecabezas de 6 piezas</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '320px' }}>
        {pieces.map((piece, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', index);
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDrop={(e) => {
              const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
              movePiece(dragIndex, index);
            }}
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid black',
              margin: '2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '20px',
              backgroundColor: '#cccccc',
              cursor: 'pointer',
            }}
          >
            <ImagenPuzzle src={piece.img}/>
            
          </div>
        ))}
      </div>
      <button onClick={shufflePieces}>Mezclar rompecabezas</button>
    </div>
  );
};

export default Puzzle;