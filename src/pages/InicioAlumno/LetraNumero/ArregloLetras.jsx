import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledBotonLetra = styled.div`
  width: 75px;
  height: 75px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 42px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 5px;
  
  background-color: ${props =>  props.color || 'none'};
`;

const ArregloLetras = ({arreglo, letra, setContador }) => {
  const [actualizar, setActualizar] = useState(false);
  const [arr, setArr] = useState();
  useEffect(() => {
    setArr(()=>arreglo);
    setActualizar(false);
  }, [actualizar, arreglo]);
  

  function comparar(dato,index) {
    let aux = arr;
    if ( dato.elem === letra) {
      aux[index].color = "#456"
      setArr(()=> aux);
      setContador((num)=>num + 1)
      setActualizar(true);
    }
  }

  return (
    <>
      {arr ? arr.map((dato,index)=>(
      <StyledBotonLetra key={index} color={dato.color} onClick={()=>{
        comparar(dato,index);
      }}>{dato.elem}</StyledBotonLetra>
    ))
      : null
  }
    </>
  )
}

export default ArregloLetras