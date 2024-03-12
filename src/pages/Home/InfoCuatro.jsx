import styled from "styled-components";
import portada_tres from "../Home/portada-3.png";

const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .contenido {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    
  }

  .cnt-imagen {
    width: 50%;
  }

  img{
    width: 90%;
  }

  .cnt-datos{
    width: 50%;
    height: 400px;
  }

  .datos{
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .titulo{
    width: 80%;
    font-size: 32px;
    font-weight: 600;
    color: #00c49d;
    margin: 10px;
    text-align: justify;
  }

  .mensaje{
    width: 80%;
    height: fit-content;
    font-size: 28px;
    font-weight: 500;
    text-align: justify;
  }

`;

const InfoCuatro = () => {
  return (
    <Contenedor>
      <div className="contenido">
        <div className="cnt-imagen">
          <img src={portada_tres}/>
        </div>
        <div className="cnt-datos">
          <div className="datos">
            <div className="titulo">
              Deja que tus estudiantes pongan en práctica sus conocimientos
            </div>
            <div className="mensaje">
              Podrás encontrar más de 50 actividades, ejercicios y juegos especialmente diseñados para alumnos en proceso de alfabetización
            </div>  
          </div>
          
        </div>
      </div>
    </Contenedor>
  )
}

export default InfoCuatro
