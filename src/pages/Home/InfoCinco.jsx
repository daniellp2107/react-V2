import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to right bottom, #00CAC6, #00CAC6 );
  
  .cnt-texto{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .texto{
    width: 80%;
    font-size: 28px;
    font-weight: 500;
    text-align: justify;
    font-style: italic;
  }

  .cnt-nombre{
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nombre{
    font-size: 28px;
    font-weight: 700;
    text-align: justify;
    font-style: normal;
  }
  `;

const InfoCinco = () => {
  return (
    <Contenedor>
      <div className="cnt-texto">
        <p className="texto">"Y ciertamente la persona analfabeta es una experta lectora y escritora en códigos
          como el gesto, el vestido, la naturaleza, la ubicación de las personas, el color..., etc.
          Lee lenguajes mudos que no están referidos a la lengua y lee con el oído, el tacto y el
          olfato; no lo hace sólo con el ojo".</p>
      </div>
      
      <div className="cnt-nombre">
        <p className="nombre">Germán Marino</p>
      </div>
  
    </Contenedor>
  )
}

export default InfoCinco