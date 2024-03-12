import { useState } from "react";
import styled from "styled-components";
import {DndContext, DragOverlay} from "@dnd-kit/core";
import BotonesSilabas from "./BotonesSilabas";
import BotonesVocales from "./BotonesVocales";
import FormarPalabra from "./FormarPalabra";

const StyledContenedor = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: orange; */
`;

const StyledCntInput = styled.div`
  width: 4  0%;
  height: fit-content;
  display: flex;
  flex-wrap: row wrap;
  justify-content: center;
  padding: 5px;
/* background-color: blue; */
  /* border: 1px solid black; */
`;

const StyledInput = styled.input`
  width: 25%;
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
  text-align: center;
`;

const MostrarEjercicio = () => {
  const [letra, setLetra] = useState('');
  const [palabra, setPalabra ] = useState([]);
  const [activeVocal, setActiveVocal] = useState(null);
  const [activeSilaba, setActiveSilaba] = useState(null);
  const [arregloFamSilabica, setArregloFamSilabica] = useState([]);

  const vocales = ['a', 'e', 'i', 'o', 'u'];
  const abecedarioLetras = ['b', 'c','d', 'f', 'g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z'];

  //formar silabas
  const formarSilaba = (letra)=>{
    let arreglo = [];
    vocales.map((vocal)=>{
      // console.log(vocal);
      arreglo = [... arreglo, `${letra}${vocal}`];
    });
    setArregloFamSilabica(arreglo);
    // console.log(arreglo);
  }

  const actualizarLetra =(e)=>{
    // console.log(e);
    let nuevaLetra = e.key;
    if (abecedarioLetras.includes(nuevaLetra)) {
      setLetra (nuevaLetra);
      formarSilaba(nuevaLetra);
    }
  }

  //acciones de arrastrar y soltar
  function onDragStart(event) {
    console.log("Start")
    const {active, over } = event;
    if (active.data.current?.type === "Vocal") {
      setActiveVocal(active.data.current.vocal)
    }

    if (active.data.current?.type === "Silaba") {
      setActiveSilaba(active.data.current.silaba)
    }
  }

  function onDragOver(event) {
    
  }

  function onDragEnd(event) {
    setActiveVocal(null);
    setActiveSilaba(null);
    const {active, over } = event;
    let vocal,silaba = '';
    if (!over) return;
    if (!active) return;

    if (active.data.current?.type === "Vocal") {
      vocal = active.data.current.vocal;
    }

    if (active.data.current?.type === "Silaba") {
      silaba = active.data.current.silaba;
    }

    if (vocal && (over.id === "droppable")) {
      setPalabra(()=> [...palabra, vocal]);
    }

    if (silaba && (over.id === "droppable")) {
      setPalabra(()=> [...palabra, silaba]);
    }

    if (palabra.length >=5) {
      setPalabra([]);
    }
  }

  return (
    <>
      <StyledContenedor >
      <DndContext onDragEnd={onDragEnd} 
        onDragStart={onDragStart} 
        onDragOver={onDragOver} 
      >
        <StyledCntInput >            
        <>
          <label htmlFor='letra' ></label>
          <StyledInput id='letra' 
            type='text' 
            placeholder='letra' 
            maxLength='1' 
            readOnly
            onKeyDown={actualizarLetra}
            defaultValue={letra}
          />
        </>
        </StyledCntInput>

        <BotonesSilabas activeSilaba={activeSilaba} arreglo={arregloFamSilabica} />
        <BotonesVocales activeVocal={activeVocal} vocales={vocales} />
        <FormarPalabra  palabra={palabra} setPalabra={setPalabra}/>
        </DndContext>
      </StyledContenedor>
    </>
  )
}

export default MostrarEjercicio
