import styled from "styled-components";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import rectangulo from "../assets/icons/rect.png";

const Contenedor = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
  background-color: blueviolet;

  .portada {
    height: 100%;

    @media screen and (max-width: 500px){
      display: none;
    }
  }

  @media screen and (max-width: 500px){
    height: fit-content;
  }

`;

const StyledButtonEnlace = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  border-radius: 0 0 10px 10px;
  background-color: #00C49D;

  @media screen and (max-width: 500px){
    border-radius: 10px;
  }

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 500;
  
`;

const Botones = ({datos}) => {
  const {icon, nombre, enlace, audioList} = datos;
  
  return (
    <Contenedor >
      <img className="portada" src={rectangulo}/>
      <StyledButtonEnlace>
        <StyledLink to={enlace}>{nombre}</StyledLink>  
        <AudioPlayer audioList={audioList}/>  
      </StyledButtonEnlace>
      
    </Contenedor>
  )
}

export default Botones;