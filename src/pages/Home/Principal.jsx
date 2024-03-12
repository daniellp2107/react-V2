import styled from "styled-components";
import portada from "./portada.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import imagen from "./portada.png"

const Contenedor = styled.div`
  width: 100%;
  /* min-height: fit-content; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px) {
    
  }

  @media screen and (max-width: 500px) {

  }  
`;

const TextoTitulo = styled.h1`
  width: 100%;
  font-size: 100px;
  font-weight: 600;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  
  @media screen and (max-width: 960px) {
    font-size: 43px;
  }

  @media screen and (max-width: 500px) {
    font-size: 43px;
  }

  .tituloColor{
    color: #00CAC6;
    margin: auto;
    padding: 5px;

    @media (max-width: 500px) {
      margin: auto;
    }
  }

  .tituloNegro{
    color: #232833;
    margin: auto;

    @media (max-width: 500px) {
      margin: auto;
    }
  }
`;

const TextoContenido = styled.p`
  width: 50%;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  /* background-color: blueviolet; */

  @media screen and (max-width: 960px) {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 20px;
  }
`;

const Button = styled(Link)`
  border-radius: 10px;
  text-decoration: none;
  background-color: #00CAC6;
  width: 300px;
  height: 60px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin-bottom: 20px;

`;

const Imagen = styled.img`
  width: 50%;
  min-width: 400px;
  border-radius: 20px;

  @media (max-width: 960px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Principal = () => {
  return (
    <Contenedor >
      <TextoTitulo >
        <p className="tituloColor">Digitaliza</p> 
        <p className="tituloNegro">el aprendizaje</p>
      </TextoTitulo>
      <TextoContenido>
        Con contenidos clave para estudiantes en alfabetización, llevamos la educación al siguiente nivel.
      </TextoContenido>
      <Button to={"/sesion-asesor"}>
        Crear cuenta
        <FaArrowRight color="white" />
      </Button>
      <Imagen src={imagen}/>

    </Contenedor>
  )
}

export default Principal
