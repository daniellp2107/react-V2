// Puzzle.js
import React, { useState } from 'react';

const Puzzle = () => {
  const orden = [[1, 2, 3, 4, 5, 6]]
  const [pieces, setPieces] = useState([1, 2, 3, 4, 5, 6]);

  const movePiece = (dragIndex, hoverIndex) => {
    const newPieces = [...pieces];
    const draggedPiece = newPieces[dragIndex];

    newPieces.splice(dragIndex, 1);
    newPieces.splice(hoverIndex, 0, draggedPiece);

    setPieces(newPieces);
  };

  const shufflePieces = () => {
    const shuffledPieces = [...pieces].sort(() => Math.random() - 0.5);
    setPieces(shuffledPieces);
  };

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
            {piece}
          </div>
        ))}
      </div>
      <button onClick={shufflePieces}>Mezclar rompecabezas</button>
    </div>
  );
};

export default Puzzle;