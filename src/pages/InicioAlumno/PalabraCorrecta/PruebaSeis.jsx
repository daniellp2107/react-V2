import React, { useEffect, useState } from 'react';

const PruebaSeis = () => {
  const [word, setWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const wellWrittenWords = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
  const poorlyWrittenWords = ['apel', 'banan', 'orng', 'grapee', 'strawbery'];

  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
    const words = randomIndex === 0 ? wellWrittenWords : poorlyWrittenWords;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setIsCorrect(null);
  };

  const checkAnswer = (isWellWritten) => {
    const isCorrect = (isWellWritten && wellWrittenWords.includes(word)) ||
                      (!isWellWritten && poorlyWrittenWords.includes(word));
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    selectRandomWord();
  };

  useEffect(() => {
    selectRandomWord();
  }, [])
  

  return (
    <div>
      <h1>Juego de Palabras</h1>
      <div>
        <p>Palabra: {word}</p>
        <button onClick={() => checkAnswer(true)}>Bien Escrita</button>
        <button onClick={() => checkAnswer(false)}>Mal Escrita</button>
        {isCorrect === true && <p>¡Correcto!</p>}
        {isCorrect === false && <p>Incorrecto. La palabra es: {word}</p>}
        <p>Puntuación: {score}</p>
      </div>
    </div>
  );
};

export default PruebaSeis;