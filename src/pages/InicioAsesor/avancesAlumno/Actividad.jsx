import styled from "styled-components";
import { actividades } from "../../../utils/archivos/actividades";

const Contenedor = styled.div`
  width: 80%;

  .frame {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(180deg, rgb(0, 202, 198) 0%, rgb(0, 95, 130) 100%);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 16px 16px 0px 0px;
    margin: 10px 0;
  }

  .frame .wrapper {
  font-size: 20px;
  font-weight: 500;
  width: fit-content;
  color: white;
}

.cnt-datos{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.cnt-datos .datos{
  width: 80%;
  display: flex;
  justify-content: flex-start;
  padding: 0 5px;
  font-size: 20px;
}

`;

const Actividad = ({avance}) => {
  const {numActividad} = avance;
  const {nombre} = actividades[numActividad]
  console.log(avance);

  return (
    <Contenedor >
      <div className='contenido'>
        <div className='frame'>
          <div className='wrapper'>{nombre}</div>
        </div>
        <div className="cnt-datos">
          <div className='datos'>
            <p>Ejercicios hechos: {avance.avance} </p>  
          </div>
        </div>
      </div>  
    </Contenedor>
  )
}

export default Actividad