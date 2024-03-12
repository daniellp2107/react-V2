import styled from "styled-components";
import ejemCinco from "./ejemploCinco.png";
import miniUno from "./miniUno.png";
import miniDos from "./miniDos.png";
import miniTres from "./miniTres.png";
import { Link } from "react-router-dom";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;

const TextoImagen = styled.div`
  width: 100%;
  display: flex;
  /* grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); */
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  /* background-color: brown; */

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
  
  .caja-texto{
    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: blanchedalmond;     */

    @media (max-width: 960px) {
      
    }

    @media (max-width: 500px) {
      text-align: center;
    }

    .caja{
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    
  }
  .titulo{
    font-size: 100px;
    font-weight: 500;

    @media (max-width: 960px) {
      width: 100%;
      font-size: 50px;
      text-align: center;
    }

    @media (max-width: 500px) {
      font-size: 32px;
      font-weight: 500;
    }
  }
  .texto{
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 500px) {
      font-size: 20px;
      font-weight: 400;
    }
  }
  .caja-imagen{
    width: 90%;
    margin: 0 15px;
    display: flex;
    justify-content: flex-end;
    border-radius: 20px 0 0 20px;
    background-color: #6EAAA9;

    @media (max-width: 960px) {
      display: none;
    }
  }
  .imagen{
    min-width:450px;
    width: 80%;
    margin: 20px 0;

    
  }

`;

const CntTarjetas = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* display: grid; */
  /* grid-template-columns: 300px 300px 300px; */
  /* grid-template-columns: repeat(auto-fit, minmax(300px,300px ) ); */
  justify-content: space-around;
  grid-gap: 20px;

  @media (max-width: 960px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 400px;
  }
`;

const Tarjeta = styled.div`
  width: 450px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  box-shadow: 5px 5px 10px #C2C2C2;

  background-color: #00AD7420;

  .tarjeta-numero{
    margin: 10px;
    font-size: 110px;
    font-weight: 600;
  }

  .tarjeta-texto-uno{
    margin: 10px;
    font-size: 30px;
    font-weight: 500;
  }

  .tarjeta-texto-dos{
    margin: 10px;
    font-size: 16px;
    font-weight: 400;
  }

  .tarjeta-imagen{
    margin: 10px;
    width: 100%;
  }
`;

const InfoDos = () => {
  return (
    <Contenedor>
      <TextoImagen>
        <div className="caja-texto">
          <div className="caja">
            <p className="titulo">¿Cómo funciona?</p>
            <p className="texto">Gestiona y observa el avance de cada uno de tus estudiantesen tiempo real desde un solo lugar</p>
          </div>
        </div>
        <div className="caja-imagen">
          <img className="imagen" src={ejemCinco}/>
        </div>
        
      </TextoImagen>
      <CntTarjetas >
        <Tarjeta >
          <p className="tarjeta-numero">01</p>
          <p className="tarjeta-texto-uno">Crea una cuenta</p>
          <p className="tarjeta-texto-dos">Desde tu espacio de trabajo podrás observar el avance de tus estudiantes.</p>
          <img className="tarjeta-imagen" src={miniUno}/>
        </Tarjeta>
        <Tarjeta >
          <p className="tarjeta-numero">02</p>
          <p className="tarjeta-texto-uno">Registra a tus alumnos</p>
          <p className="tarjeta-texto-dos">Solo necesitas su nombre y un apellido</p>
          <img className="tarjeta-imagen" src={miniDos}/>
        </Tarjeta>
        <Tarjeta >
          <p className="tarjeta-numero">03</p>
          <p className="tarjeta-texto-uno">Ingresa a la aula virtual</p>
          <p className="tarjeta-texto-dos">Explora nuestros contenidos y deja que tus estudiantes pongan en práctica sus aprendizajes</p>
          <img className="tarjeta-imagen" src={miniTres}/>
        </Tarjeta>
      </CntTarjetas>
    </Contenedor>
  )
}

export default InfoDos
