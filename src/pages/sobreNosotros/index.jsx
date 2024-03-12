import styled from "styled-components";
import imagenUno from "./imagenUno.png";
import imagenDos from "./imagenDos.png";
import MainLayout from "../../components/PantillaPrincipal/MainLayout";

const Contenedor = styled.div`
  width: 100%;
  min-height: calc(100vh - 270px);

  display: flex;
  justify-content: center;

  .titulo{
    font-size: 28px;
    font-weight: 600;

    @media screen and (max-width: 960px){
      text-align: center;
    }

    @media screen and (max-width: 500px){

    }
  }

  .texto{
    font-size: 20px;
    font-weight: 400;

    @media screen and (max-width: 960px){
      
    }

    @media screen and (max-width: 500px){

    }
  }
`;

const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  .nosotros{

    @media screen and (max-width: 960px){
      
      align-items: center;
    }

    @media screen and (max-width: 500px){

    }
  }

  .mision{
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 960px){
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 500px){

    }
  }

  .info-mision{
    width: 45%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    @media screen and (max-width: 960px){
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    @media screen and (max-width: 500px){

    }
  }

  .vision{
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 960px){
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 500px){

    }
  }

  .info-vision{
    width: 45%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    @media screen and (max-width: 960px){
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    @media screen and (max-width: 500px){

    }
  }

  img{
    width: 45%;
    padding: 10px 0;

    @media screen and (max-width: 960px){
      
    }

    @media screen and (max-width: 500px){
      width: 90%;
    }
  }
`;

const SobreNosotros = () => {
  return (
    <MainLayout>
      <Contenedor >
        <Info>
          <div className="nosotros">
            <p className="titulo">Sobre Nosotros</p>
            <p className="texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur totam obcaecati porro maiores commodi voluptatem repudiandae? Eveniet ullam quae, praesentium nisi a commodi nostrum quibusdam facere! Voluptates, laudantium dignissimos.
            Quas mollitia consequuntur fugiat, quia nobis, repellat hic rem eos incidunt tenetur dolores. Laudantium ad ipsum laborum, officiis quas nesciunt inventore sit quia fugit iure ea? Sed iste rem quisquam.</p>
          </div>

          <div className="mision">
            <img src={imagenUno} />
            <div className="info-mision">
              <p className="titulo">Misión</p>
              <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, explicabo libero pariatur quo, delectus sapiente laborum maiores facilis corrupti tempora quos vero quia beatae dicta inventore, odit commodi ab sint?</p>
            </div>
            
          </div>

          <div className="vision">
            <div className="info-vision">
              <p className="titulo">Visión</p>
              <p className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima placeat nostrum sequi, debitis vitae similique, libero eligendi incidunt eius ab esse soluta. Facere numquam, hic itaque debitis est quis!</p>
            </div>
            <img src={imagenDos} />
          </div>
        </Info>
        
      </Contenedor>
      
    </MainLayout>
  )
}

export default SobreNosotros
