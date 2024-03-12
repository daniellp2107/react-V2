import styled from "styled-components";
import ejemUno from "./ejemploUno.png";
import ejemDos from "./ejemploDos.png";
import ejemTres from "./ejemploTres.png";
import ejemCuatro from "./ejemploCuatro.png";

const Secundario = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  
  background: linear-gradient(to right, #fff, #00CAC6 80%);
`;

const Centrar = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .texto{
    width: 450px;
    font-size: 24px;
    font-weight: 400;
    text-align: justify;
  }
  .texto-subtitulo{
    font-size: 29px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 960px) {
      width: 100%;
      font-size: 29px;
      font-weight: 400;
    }

    @media (max-width: 500px) {
      width: 100%;
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

const TextoTitulo = styled.p`
  width: 750px;
  font-size: 100px;
  font-weight: 500;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 50px;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    width: 100%;
    font-size: 34px;
  }
`;

const CntTarjetas = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 5px 0;  
`;

const Tarjetas = styled.div`
  width: 550px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .imagen{
    width: 100%;
    border-radius: 20px 20px 0 0; 
  }

  .texto-tarjeta{
    width: 100%;
    border-radius: 0 0 20px 20px;
    background-color: #212638;
    text-align: center;
    
  }
  .tarjeta{

  }
  .nombre{
    width: 100%;
    font-size: 29px;
    font-weight: 500;
  }

  .resumen{

    font-size: 20px;
    font-weight: 400;
  }
`;

const InfoUno = () => {
  return (
    <Secundario >
      <TextoTitulo>
        Ejercicios y juegos adaptados
      </TextoTitulo>
      <Centrar >
        <p className="texto-subtitulo">
          Instrucciones simples y apoyo auditivo para permitir la exploración autónoma de los estudiantes.
        </p>
        <CntTarjetas >
          <Tarjetas >
            <img className="imagen" src={ejemUno}/>
            <div className="texto-tarjeta">
              <p className="nombre">
                Ejercicios de Letras
              </p>
              <p className="resumen">
                Empleamos el método de la palabra generadora para contextualizar el aprendizaje de los estudiantes.
              </p>
            </div>
          </Tarjetas>  
          <Tarjetas >
            <img className="imagen" src={ejemDos}/>
            <div className="texto-tarjeta">
              <p className="nombre">
                Ejercicios de sumas
              </p>
              <p className="resumen">
                Cantidades, series, operaciones básicas y valor de monedas y billetes.
              </p>
            </div>
          </Tarjetas>
          <Tarjetas >
            <img className="imagen" src={ejemTres}/>
            <div className="texto-tarjeta">
              <p className="nombre">
                Juegos
              </p>
              <p className="resumen">
                Rompecabezas, memoramas y otras actividades.
              </p>
            </div>
          </Tarjetas>
          <Tarjetas >
            <img className="imagen" src={ejemCuatro}/>
            <div className="texto-tarjeta">
              <p className="nombre">
                Chatbot
              </p>
              <p className="resumen">
                Empleamos el método de la palabra generadora para contextualizar el aprendizaje de los estudiantes.
              </p>
            </div>
          </Tarjetas>
        </CntTarjetas>
      </Centrar>
    </Secundario>
  )
}

export default InfoUno