import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { random } from '../../../utils/functions/NumeroAleatorio';
import {puzzlePrueba} from "../../../ImgPuzzles/recortes";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .images-container{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    background-color: blueviolet;
  }

  .matched.selected{

  }

  .image{
    width: 300px;
  }
`;
// Array de imÃ¡genes
const images = [
  puzzlePrueba[0],
  puzzlePrueba[1],
  puzzlePrueba[2],
  puzzlePrueba[3],
  puzzlePrueba[4],
  puzzlePrueba[0],
  puzzlePrueba[1],
  puzzlePrueba[2],
  puzzlePrueba[3],
  puzzlePrueba[4],
];

const MostrarEjercicio = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [matchedImages, setMatchedImages] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  useEffect(() => {
    if (selectedImages.length === 2) {
      const [firstImage, secondImage] = selectedImages;
      if (images[firstImage] === images[secondImage]) {
        setMatchedImages((prevMatched) => [...prevMatched, images[firstImage]]);
        setCorrectAnswers((prevCorrect) => prevCorrect + 1);
      }
      setTimeout(() => {
        setSelectedImages([]);
      }, 1000);
    }
  }, [selectedImages]);

  const handleImageClick = (index) => {
    if (selectedImages.length === 2 || matchedImages.includes(images[index])) {
      return;
    }
    setSelectedImages((prevSelected) => [...prevSelected, index]);
  };

  const resetGame = () => {
    setSelectedImages([]);
    setMatchedImages([]);
    setCorrectAnswers(0);
  };

  return (
    <Contenedor className="app">
      <h1>Encuentra las parejas</h1>
      <div className="images-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${selectedImages.includes(index) ? 'selected' : ''} ${
              matchedImages.includes(image) ? 'matched' : ''
            }`}
            onClick={() => handleImageClick(index)}
          >
            {matchedImages.includes(image) || selectedImages.includes(index) ? (
              <img src={image} alt={`Imagen ${index}`} />
            ) : (
              <div className="cover"></div>
            )}
          </div>
        ))}
      </div>
      {correctAnswers === images.length / 2 && (
        <button onClick={resetGame}>Jugar de nuevo</button>
      )}
      
    </Contenedor>
  );
};

export default MostrarEjercicio;