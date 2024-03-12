import { useState, useEffect } from "react";
import styled from "styled-components";
import moneda from "../../../images/archivos/Moneda.png";

const CntContar = styled.div`
  /* background-color: aqua; */
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CntEjercicio = styled.div`
  /* background-color: aquamarine; */
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const CntImagenes = styled.div`
  /* background-color: blueviolet; */
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 750px){
    width: 100%;
  }
`;

const Imagenes = styled.div`
  /* background-color: azure; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const Imagen = styled.img`
  width: 100px;
  padding: 5px;

  @media screen and (max-width: 960px){
    width: 50px;
  }

  @media screen and (max-width: 500px){
    width: 50px;
  }
`;

const Cantidades = ({numero, siguiente, setSiguiente}) => {

  const [mostrarArreglo, setMostrarArreglo] = useState([]);
  
  const random = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numAleatorio = Math.floor(Math.random() * (max - min ) + min);
    return numAleatorio;
  }

  useEffect(() => {
    const crearArreglo = ()=>{
      const numAleatorio = random(1, 15);
      const nuevoArreglo = Array.from({length:numAleatorio});
      numero(numAleatorio);
      return nuevoArreglo;
    }
    const arreglo = crearArreglo();
    setMostrarArreglo(arreglo);
    setSiguiente(false);
  }, [siguiente, numero]);

  return (
    <CntContar>
      <CntEjercicio>
        <CntImagenes>
          <Imagenes >
          {
            mostrarArreglo.map((_,index)=>(
              <Imagen src={moneda} key={index}/>
            ))
          } 
          </Imagenes>
        </CntImagenes>
      </CntEjercicio>
    </CntContar>
  )
}

export default Cantidades