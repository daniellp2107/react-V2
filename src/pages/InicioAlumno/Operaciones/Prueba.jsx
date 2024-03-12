import { useState, useEffect,  Suspense, lazy, useMemo, memo  } from "react";
import styled from "styled-components";
import resta from "../../../assets/icons/menos.png";
import igual from "../../../assets/icons/igual.png";
import suma from "../../../assets/icons/suma.png"
import ImagenRes from "../../../components/ImagenRes";
import { TextoGrande } from "../../../components/Styled.global";
import {useDroppable} from '@dnd-kit/core';
import { random } from "../../../utils/functions/NumeroAleatorio";


const Contenedor = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 500px){
    gap: 0;
  }
`;

const Imagen = styled.img`
  width: 50px;
  padding: 5px;
`;

const Respuesta = styled.div`
  width: 50px;
  height: 50px;
  background-color: brown;
`;

const NumeroTam = styled(TextoGrande)`
  font-size: 50px;
`;

const InputRes = styled.div`
  width: 100px;
  height: 75px;
  margin: 5px;
  text-align: center;
  font-size:50px;
  /* font-size:2rem; */
  font-weight:700;
  font-style: normal;
`;

const generarNumRandom =(min, max)=>{
  return random (min, max);
}

const Prueba = memo(({datos}) => {
  const {numeroUno, numeroDos,operacion}  = datos;
  const [numOrdenados, setNumOrdenados] = useState([]);
  const [opFinal, setOpFinal] = useState(()=>{
    const operacionFinal = (numUno, numDos) =>{
      const operador = ["+","-"]
      // Generar un número aleatorio entre 0 y 1
      const numeroAleatorio = Math.random();
    
      // Redondear el número aleatorio a 0 o 1
      const resultado = Math.round(numeroAleatorio);
    
      if (resultado == 1) {
        return  numOrdenados[0] + numOrdenados[1];
      }else{
        return numOrdenados[0] - numOrdenados[1];
      }
    }
  });
  const {isOver,setNodeRef, over} = useDroppable({
    id:datos.id,
    data:{
      op:datos.id,
      title:datos.title
    }
  });

  const style = {
    border: isOver ? '2px dashed #333' : '1px solid #000',
    height: '50px',
    width:'50px',
  };

  useEffect(() => {
    const ordenarNumeros = () => {
      let numeros = [];
      if (numeroUno == numeroDos) {
        numeros = [numeroUno + 1, numeroDos]; 
      }else{
        numeros = [numeroUno, numeroDos]; 
      }
      return numeros.sort(function(a, b){return b - a});  
    }

    setNumOrdenados(()=>ordenarNumeros());

  }, [datos]);

  useEffect(() => {
    
  }, [])
  
  const ordenarNumeros = (numUno, numDos) => {
    let numeros = [];
    if (numeroUno == numeroDos) {
      numeros = [numeroUno + 1, numeroDos]; 
    }else{
      numeros = [numeroUno, numeroDos]; 
    }
    return numeros.sort(function(a, b){return b - a});  
  }

  // const operacionFinal = ()=>{
  //   const operador = ["+","-"]
  //   // Generar un número aleatorio entre 0 y 1
  //   const numeroAleatorio = Math.random();
  
  //   // Redondear el número aleatorio a 0 o 1
  //   const resultado = Math.round(numeroAleatorio);
  
  //   if (resultado == 1) {
  //     return numOrdenados[0] + numOrdenados[1];
  //   }else{
  //     return numOrdenados[0] - numOrdenados[1];
  //   }
  // }

  function compararResultado(operador) {
    let res = 0;
    if (operador == "+") {
      res = numOrdenados[0] + numOrdenados[1];
    };

    if (operador == "-") {
      res = numOrdenados[0] - numOrdenados[1];
    };
  }

  console.log(opFinal);
  console.log(numOrdenados);
  return (
    <Contenedor >
      <NumeroTam >
        {numOrdenados[0]}
      </NumeroTam>

      <Respuesta ref={setNodeRef}>
        {operacion == "-" && <Imagen src={resta}/>}
        {operacion == "+" && <Imagen src={suma}/>}
        {/* <Imagen src={operacion}/> */}
        <p>La operacion es: {operacion}</p>
      </Respuesta>

      <NumeroTam >
        {numOrdenados[1]}
      </NumeroTam>  
      <Imagen src={igual}/>
      <InputRes >
        {opFinal ? opFinal : null}
      </InputRes>
      <ImagenRes resultado={compararResultado(operacion) ? true : false}/>
    </Contenedor>
  )
})

export default Prueba