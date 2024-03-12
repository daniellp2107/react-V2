import React, { useState, useEffect } from 'react';
import './styles.css';

function PruebaDos() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const colors = ['#ff9800', '#e91e63', '#9c27b0', '#ff5722', '#795548', '#607d8b', '#3f51b5', '#00bcd4'];

  useEffect(() => {
    initializeCards();
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      checkForMatch();
    }
  }, [flipped]);

  const initializeCards = () => {
    let initialCards = [];
    for (let color of colors) {
      initialCards.push({ color, isFlipped: false });
      initialCards.push({ color, isFlipped: false });
    }
    initialCards = shuffleCards(initialCards);
    setCards(initialCards);
  };

  const shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const flipCard = (index) => {
    if (flipped.length < 2) {
      let newCards = [...cards];
      newCards[index].isFlipped = true;
      setCards(newCards);
      setFlipped([...flipped, { index, color: newCards[index].color }]);
    }
  };

  const checkForMatch = () => {
    const [firstIndex, secondIndex] = [flipped[0].index, flipped[1].index];
    if (cards[firstIndex].color === cards[secondIndex].color) {
      setSolved([...solved, flipped[0].color]);
      setFlipped([]);
    } else {
      setTimeout(() => {
        let newCards = [...cards];
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
        setFlipped([]);
      }, 1000);
    }
  };

  const isCardFlipped = (index) => {
    return cards[index].isFlipped || solved.includes(cards[index].color);
  };
  return (
    <div className="App">
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index}
            className={`card ${isCardFlipped(index) ? 'flipped' : ''}`}
            onClick={() => !isCardFlipped(index) && flipCard(index)}
          >
            <div className="card-inner">
              <div className="card-front"> {card.color}</div>
              <div className="card-back" style={{color:"black" ,backgroundColor: card.color }}>{card.color}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PruebaDos;