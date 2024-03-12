import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import oculto from "../../../assets/icons/oculto.svg";
import correcto from "../../../assets/icons/correcto.png";
import incorrecto from "../../../assets/icons/incorrecto.png";
import {ordenAleatorio } from "../../../utils/functions/OrdenAleatorio";
import { palabras } from '../../../images/diccionario';
import {random} from "../../../utils/functions/NumeroAleatorio";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: cadetblue;
`;

const Tablero = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3 columnas con ancho igualmente distribuido */
  grid-template-rows: repeat(2, 100px); /* 2 filas con altura de 100px cada una */
  gap: 20px; /* Espacio entre las celdas */
  padding: 20px;

  background-color: burlywood;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr); /* 3 columnas con ancho igualmente distribuido */
    grid-template-rows: repeat(4, 100px); /* 2 filas con altura de 100px cada una */
    gap: 10px; /* Espacio entre las celdas */
    padding: 20px;
  }
`;

const Tarjeta = styled.div`
  width: fit-content;
`;

const Imagen = styled.img`
  width: 100px;
  height: 100px;
`;

const Memorama = () => {
   
  const [cards, setCards] = useState([
    { id: 1, value: 'A', flipped: false },
    { id: 2, value: 'B', flipped: false },
    { id: 3, value: 'C', flipped: false },
    { id: 4, value: 'A', flipped: false },
    { id: 5, value: 'B', flipped: false },
    { id: 6, value: 'C', flipped: false },
  ]);
  const [flippedCards, setFlippedCards] = useState([]);
  
  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }, [flippedCards]);

  const flipCard = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );

    setFlippedCards((prevFlipped) => [...prevFlipped, id]);
  };

  const checkMatch = () => {
    const [firstCard, secondCard] = flippedCards;
    const matched = cards[firstCard - 1].value === cards[secondCard - 1].value;

    if (matched) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === firstCard || card.id === secondCard
            ? { ...card, flipped: true }
            : card
        )
      );
    } else {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === firstCard || card.id === secondCard
            ? { ...card, flipped: false }
            : card
        )
      );
    }

    setFlippedCards([]);
  };

  return (
    <Contenedor>
      <Tablero >
        {cards.map((card,index) => (
          <Tarjeta
            key={index }
            className={`memorama-card ${card.flipped ? 'flipped' : ''}`}
            onClick={() => {
              console.log("id tarjeta: ", card.id);
              flipCard(card.id);
            }}>            
            {card.flipped ? <Imagen src={correcto}/> : <Imagen src={oculto}/>}
          </Tarjeta>
        ))}
      </Tablero>
    </Contenedor>
  );
};

export default Memorama;
