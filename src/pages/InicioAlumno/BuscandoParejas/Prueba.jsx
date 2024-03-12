import { useState, useEffect } from 'react';
import './App.css';
import { puzzleImagenesDos, puzzlePrueba } from '../../../ImgPuzzles/recortes';

const images = [
  puzzlePrueba[0],
  puzzlePrueba[1],
  puzzlePrueba[2],
  puzzlePrueba[3],
  puzzlePrueba[4],
  puzzlePrueba[5],
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Prueba = () => {
  const [cards, setCards] = useState(shuffleArray([...images, ...images]));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [isMatched, setIsMatched] = useState(Array(cards.length).fill(false));

  useEffect(() => {
    
    const checkMatch = () => {
      if (flippedIndices.length === 2) {
        const [firstIndex, secondIndex] = flippedIndices;

        if (cards[firstIndex] === cards[secondIndex]) {
          setIsMatched((prev) => {
            const updatedMatches = [...prev];
            updatedMatches[firstIndex] = true;
            updatedMatches[secondIndex] = true;
            return updatedMatches;
          });
        }

        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000);
      }
    };

    checkMatch();
  }, [flippedIndices, cards]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
    }
  };

  const resetGame = () => {
    setCards(shuffleArray([...images, ...images]));
    setFlippedIndices([]);
    setIsMatched(Array(cards.length).fill(false));
  };

  return (
    <div className="App">
      <h1>Juego de Memoria</h1>
      <div className="card-container">
        {cards.map((image, index) => (
          <div
            key={index}
            className={`card ${flippedIndices.includes(index) || isMatched[index] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={image} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Reiniciar Juego</button>
    </div>
  );
};

export default Prueba;
