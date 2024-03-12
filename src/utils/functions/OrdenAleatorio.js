export function ordenAleatorio(arreglo) {
  let array=arreglo;
  function shuffleArray(array) {
    // Función de comparación aleatoria
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Intercambiamos los elementos
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  //uso
  shuffleArray(array); // El orden de los elementos será aleatorio
  // console.log(array); 
  return array;
}