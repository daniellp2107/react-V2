import { useState } from 'react';
import {useDraggable} from '@dnd-kit/core';
import styled from 'styled-components';
import suma from "../../../assets/icons/suma.png";
import resta from "../../../assets/icons/menos.png";

const Contenedor = styled.div`
  width: fit-content;
`;

const Imagen = styled.img`
  width: 100px;
  margin: 10px;
  cursor: pointer;
`;

function Operadores({datos}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: datos.op,
    data:{ 
      operador:datos.imag,
      simbolo:datos.simbolo
    }
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <Contenedor ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <Imagen src={datos.imag} />
    </Contenedor>
  );
}

export default Operadores;