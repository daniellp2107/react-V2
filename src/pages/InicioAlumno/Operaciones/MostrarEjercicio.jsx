import React,{Suspense, lazy, useMemo, useCallback } from 'react'
import styled from "styled-components";
import {random} from "../../../utils/functions/NumeroAleatorio";
import { useState } from "react";
import Numero from "./Numero";
import { useEffect } from "react";
import {useMutation} from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import { TextoMediano } from "../../../components/Styled.global";
import imgSiguiente from "../../../assets/icons/right.svg";
import suma from "../../../assets/icons/suma.png";
import resta from "../../../assets/icons/menos.png";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import Operadores from "./Operadores";
import Prueba from "./Prueba";

// const Prueba = lazy(() => import('./Prueba'));

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const StyledCntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
  /* background-color: aquamarine; */
`;

const StyledImgSiguiente = styled.img`
    width: 50px;

`;

const generarNumRandom =(min, max)=>{
  return random (min, max);
}
const initialData = [
  {
    id: "operacion1",
    title: "op1",
    operacion:" ",
    numeroUno:generarNumRandom (1, 10),
    numeroDos:generarNumRandom (1, 10)
  },
  {
    id: "operacion2",
    title: "op2",
    operacion:" ",
    numeroUno:generarNumRandom (1, 25),
    numeroDos:generarNumRandom (1, 25)
  },
  {
    id: "operacion3",
    title: "op3",
    operacion:" ",
    numeroUno:generarNumRandom (1, 50),
    numeroDos:generarNumRandom (1, 50)
  }
];
const MostrarEjercicio = () => {

  const [state, setState] = useState(initialData);
  const arrMemo = useMemo(()=>initialData, []);
  const [arrOperadores, setArrOperadores] = useState([{op:"suma", imag:suma, simbolo:"+"}, {op:"resta", imag:resta, simbolo:"-"} ]);
  const [opActual, setOpActual] = useState();

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Operaciones",
            palabraGen:"Sin Palabra Generadora"
          }
        }
      });
      // console.log("Guardado");
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  }

  //acciones de arrastrar y soltar
  // function onDragStart(event) {
  //   console.log("Start: ", event);
  //   const {active} = event;
  //   setOpActual(active.data.current.operador);
  // }

  const onDragStart = useCallback((event) => {
    console.log("Start: ", event);
    const {active} = event;
  },[])
  
  function onDragOver(event) {
    console.log("drag-over")
  }

  function onDragEnd(event) {
    console.log("drag-end");
    setOpActual(null);
    const {active, over} = event;
    console.log("active onDragEnd: ",active);
    console.log("over onDragEnd: ",over);
    if (!over || !active ) return;

    if (active && over.id === ("operador1"||"operador2"||"operador3")) {
      setState((actual)=>{
        actual.find((op)=>op.id === over.id ? op.operacion = active.data.current.simbolo : null);

        return actual;
      })
    }
  }
  console.log(arrMemo);;
  return (
    <Contenedor >
      <DndContext onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
      >
        {arrMemo.map((datos)=>
          <Prueba key={datos.id} datos={datos}/> 
          
        )}

        {arrOperadores.map((dato)=>(
          <Operadores key={dato.op} datos={dato}/>    
        ))}


        
      </DndContext>
      
    </Contenedor>
  )
}

export default MostrarEjercicio