import {useState} from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { OBTENER_NIVEL } from '../../../utils/graphql/query';
import MostrarEjercicio from './MostrarEjercicio';

const CntEjerSilabas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: cadetblue; */
`;

const CntSilabas = styled.div`
    width: 80%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    /* background-color: cadetblue; */
`;

const CntOpciones = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center ;
  margin-bottom: 10px;
`;

const Select = styled.select`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  
  @media screen and (max-width: 960px){
      font-size: 26px;
      font-weight: 500;
  }

  @media screen and (max-width: 500px){

  }

  option{
    font-size: 20px;
    scroll-behavior:auto;
  }
`;

const SeleccionNivel = () => {
  const [opcion, setOpcion] = useState("1");
  const {data,loading,refetch} = useQuery(OBTENER_NIVEL,{
    variables:{
      nivel:opcion
    }
  });

  if (loading) return <p>Loading ...</p>;
  if (data && data.obtenerNivel) {
      // console.log(data.obtenerNivel);
  }

  const handleSeleccion = (event) => {
      event.preventDefault();
      setOpcion(event.target.value);
      refetch();
  };
  return (
    <CntEjerSilabas>
    <CntOpciones>
      <Select value={opcion} onChange={(e)=>handleSeleccion(e)}>
        <option value="1">PALA</option>
        <option value="2">PIÑATA</option>
        <option value="3">FAMILIA</option>
        <option value="4">BASURA</option>
        <option value="5">MEDICINA</option>
        <option value="6">CASA</option>
        <option value="7">VACUNA</option>
        <option value="8">CANTINA</option>
        <option value="9">MERCADO</option>
        <option value="10">TRABAJO</option>
        <option value="11">TORTILLA</option>
        <option value="12">LECHE</option>
        <option value="13">GUITARRA</option>
        <option value="14">MEXICO</option>
      </Select>
    </CntOpciones>
    <CntSilabas>
      {data && data.obtenerNivel ? 
        <MostrarEjercicio palabraGen={data.obtenerNivel.palabraGen}
          />
          : null 
      }
    </CntSilabas >
  </CntEjerSilabas>
  )
}

export default SeleccionNivel
