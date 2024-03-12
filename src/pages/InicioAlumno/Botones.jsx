import styled from "styled-components";
import { Link } from "react-router-dom";
import AudioPlayer from "../../components/AudioPlayer";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 50px;
    height: 50px;
    margin: 5px;
  }
`;

const StyledButtonEnlace = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 5px;
  border-radius: 10px;

  background-color: #00C49D;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 28px;
  font-weight: 600;
  border-radius: 10px;

  @media screen and (max-width: 960px){
    font-size: 20px;
  }
  @media screen and (max-width: 500px){
    text-align: center;
  }
  
`;

const Botones = ({dato}) => {
  const {icon, nombre, enlace, audioList} = dato;
  return (
    <Contenedor >
      <img src={icon}/> 
      <StyledButtonEnlace>
        <StyledLink to={enlace}>{nombre}</StyledLink>    
      </StyledButtonEnlace>
      <AudioPlayer audioList={audioList}/>
    </Contenedor>
  )
}

export default Botones;