import React, { useState, useEffect } from 'react';
// Array de imÃ¡genes
const images = [
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
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
    <div className="app">
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
    </div>
  );
};

export default MostrarEjercicio;