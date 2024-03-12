import {useState, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import { EjerOraciones } from '../../../utils/archivos/oraciones';
import {random} from "../../../utils/functions/NumeroAleatorio";
import {DndContext, DragOverlay} from "@dnd-kit/core";
import { ACTUALIZAR_ACTIVIDAD_AVANCE_ALUMNO } from "../../../utils/graphql/mutation";
import { useMutation } from '@apollo/client';
import {TextoMediano} from "../../../components/Styled.global";
import correcto from "../../../assets/icons/correcto.png";
import incorrecto from "../../../assets/icons/incorrecto.png";
import imgSiguiente from "../../../assets/icons/right.svg";
import borrar from "../../../assets/icons/borrar.png";
import Oraciones from './Oraciones';
import FormarOracion from './FormarOracion';

const StyledContenedor = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImgRes = styled.img`
  width: 50px;
  margin: 5px;
`;

const StyledCntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
`;

const StyledImgSiguiente = styled.img`
  width: 50px;
`;

const StyledBotones = styled.div`
  margin-top: 10px;
  display: flex;
`;

const MostrarEjercicio = ({palabraGen}) => {
  // console.log(palabraGen);
  const arregloPalabras = useMemo( ()=>EjerOraciones[palabraGen],);
  const [oracion,setOracion] = useState([]);
  const [oracionCorrecta, setOracionCorrecta] = useState("");
  const [ejericio, setEjercicio ] = useState([]);
  const [activePalabra,setActivePalabra] = useState(null);

  useEffect(() => {
    const numAleatorio = random(0, arregloPalabras.length);
    // console.log(numAleatorio);

    const pal = arregloPalabras[numAleatorio];
    setOracionCorrecta(pal);
    setEjercicio(pal.split(" "));
  }, [arregloPalabras]);

  function onDragStart(event) {
    // console.log('DragStart: ',event);
    
    const {active} = event;
    if (active.data.current?.type ==="palabra") {
      setActivePalabra(active.data.current.palabra);
    }
  }

  function onDragEnd(event) {
    // console.log('DragEnd: ',event);
    const {active, over } = event;
    setActivePalabra(null);
    if (!over) return;
    if (!active) return;

    if (active.data.current?.type === "palabra") {
      
    }
    if (active && (over.id === "droppable")) {
      setOracion(()=>[...oracion,active.data.current.palabra])
    }
  }

  function comparar(respuesta, oracion) {
    // console.log(respuesta, oracion);
    const texto = respuesta.join(" ");
    if (texto === oracion) {
      return true;
    }else{
      return false;
    }
    
  }
  const nuevaPalabra = ()=>{
    const numAleatorio = random(0, arregloPalabras.length);
    const pal = arregloPalabras[numAleatorio];
    setOracionCorrecta(pal);
    setEjercicio(pal.split(" "));
    setOracion([]);
  }

  return (
    <StyledContenedor >
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Oraciones arregloPalabras={ejericio} 
        oracionCorrecta={oracionCorrecta} />

        <FormarOracion oracion={oracion} correcto={oracionCorrecta}/>
      </DndContext>
      <StyledBotones >
        {<StyledImgRes src={comparar(oracion, oracionCorrecta) ? correcto : incorrecto} /> }
        <StyledImgRes src={borrar} onClick={()=>setOracion([])} style={{cursor:"pointer"}}/> 
      </StyledBotones>
      {/* {<StyledImgRes src={comparar(oracion, oracionCorrecta) ? correcto : incorrecto} /> }
      <StyledImgRes src={borrar} onClick={()=>setOracion([])}/>  */}
      <StyledCntSiguiente onClick={()=>{
        nuevaPalabra();
      }}>        
        <StyledImgSiguiente src={imgSiguiente}/>
        <TextoMediano>
          Siguiente
        </TextoMediano>
        
      </StyledCntSiguiente>
      
    </StyledContenedor>
  )
}

export default MostrarEjercicio
