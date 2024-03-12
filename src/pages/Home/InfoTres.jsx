import styled from "styled-components";
import disp from "./dispositivos.png";
import {Link} from "react-router-dom";

const Contenedor = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1px;
  background-color: #212638;

  .texto-imagen{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr ));
    justify-content: center;
    align-items: center;
    grid-gap: 20px 10px;
    margin-bottom: 10px;
  }

  .texto{
    color: white;
    font-size: 48px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 960px) {
      font-size: 24px;
      font-weight: 500;
    }

    @media (max-width: 500px) {
      font-size: 20px;
      font-weight: 400;
    }
  }

  .imagen{
    width: 80%;
  }
`;

const BtnLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const InfoTres = () => {
  return (
    <Contenedor >
      <div className="texto-imagen">
        <p className="texto">Puedes acceder desde cualquier dispositivo pero se recomienda su uso en PC</p>
        <img className="imagen" src={disp}/>
      </div>
      
    </Contenedor>
  )
}

export default InfoTres