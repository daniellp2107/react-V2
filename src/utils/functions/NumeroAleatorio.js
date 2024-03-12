export const random = (min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  let numAleatorio = Math.floor(Math.random() * (max - min ) + min);
  return numAleatorio;
};