import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import AsesorLayout from '../../../components/PlantillaAsesor/AsesorLayout';
import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ACTIVIDADES_AVANCES_ALUMNO } from '../../../utils/graphql/query';
import Actividad from './Actividad';

const Contenedor = styled.div`
  width: 100%;
  min-height: calc(100vh - 270px);

  .cnt-contenido{
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .titulo {
    font-size: 32px;
    font-style: bold;
    font-weight: 600;
  }

  .cnt-avances{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLinkBack = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 20px;
`;

const Avance = () => {
  const {state} = useLocation();
  //conseguir los datos del alumno actual
  const {data, loading,error} = useQuery(ACTIVIDADES_AVANCES_ALUMNO, {
    variables:{
      alumno:state.id
    }
  });

  if(loading) return 'Cargando... ';
  const {actividadAvance} = data;
  console.log(actividadAvance);

  return (
    <AsesorLayout>
      <Contenedor >
        <div className='cnt-contenido'>
          <StyledLinkBack to="/inicio-asesor" >
            <FaAngleLeft size={50}/>
          </StyledLinkBack>
          <p className='titulo'>{ state.nombre }</p>
        </div >
        <div className='cnt-avances'>
          {
            actividadAvance.length != [] ? (
              actividadAvance.map((avance,index)=>(
                <Actividad key={avance.nomActividad} avance={avance}/>
              ))
            ):
            <p>Sin actividades</p>
          }
        </div>
      </Contenedor>
    </AsesorLayout>
  )
}

export default Avance;