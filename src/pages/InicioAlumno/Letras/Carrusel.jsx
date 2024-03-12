import {useState, useEffect} from "react";
import styled from "styled-components";
import {nuevaSilaba} from "../../../utils/archivos/nueva-silaba";
import BotonSilaba from "./BotonSilaba";
import left from "../../../assets/icons/left.svg";
import right from "../../../assets/icons/right.svg";
import TextToSpeech from "../../../components/TextToSpeechComponent";

const CntCarrusel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const CntBotonesCarrusel = styled.div`
  width: 75%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 960px){
    width: 100%;  
  }
  @media screen and (max-width: 500px){
    width: 100%;
  }

  .img {
    width: 100%;
  }

  .opcion{
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const ImagenLetras = styled.img`
  width: 350px;
  margin-bottom: 15px;

  @media screen and (max-width: 960px){
    
  }
  @media screen and (max-width: 500px){
    width: 50%;
  }
`;

const Carrusel = ({datos}) => {
  const [arregloSilabas, setArregloSilabas] = useState([]);
  const [indiceImagen, setIndiceImagen] = useState(0);
  const imagenes = datos;
  const mostrarSiguienteImagen = () => {
    // Cambiar al siguiente índice de imagen
    setIndiceImagen((prevIndice) => (prevIndice + 1) % imagenes.length);
  };

  const mostrarImagenAnterior = () => {
    // Cambiar al índice de imagen anterior
    setIndiceImagen((prevIndice) =>
      prevIndice === 0 ? imagenes.length - 1 : prevIndice - 1
    );
  };
  
  useEffect(() => {
    const separarPalabra = ()=>{
      let arreglo=[];
      let auxiliar;
      const {silabas} = nuevaSilaba(imagenes[indiceImagen].palabra);
      // console.log(silabas);
      silabas.forEach((silaba)=>{
        auxiliar = Object.values(silaba);
        arreglo = [...arreglo, auxiliar[1] ]  
      });
      // console.log(arreglo);
      setArregloSilabas(arreglo);
    } 
    separarPalabra(); 
  }, [indiceImagen,imagenes])

  return (
    <CntCarrusel>
      <ImagenLetras 
        src={imagenes[indiceImagen].enlace} 
        alt={`Imagen ${indiceImagen + 1}`}
      />
      <CntBotonesCarrusel>
        <button className="opcion" onClick={mostrarImagenAnterior}>
          <img className="img" src={left}/>
        </button>
        {arregloSilabas.map((silaba, index)=>(
          <BotonSilaba silaba={silaba} key={index}/>
        ))}
        <button className="opcion" onClick={mostrarSiguienteImagen}>
          <img className="img" src={right}/>
        </button>
        
      </CntBotonesCarrusel>
      <TextToSpeech texto={arregloSilabas.join("")}/>
    </CntCarrusel>
  )
};

export default Carrusel
