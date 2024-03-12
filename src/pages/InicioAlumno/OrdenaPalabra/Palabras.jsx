import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import { TextoGrande, TextoMediano } from '../../../components/Styled.global';
import { TextoAVoz } from '../../../utils/functions/TextoAVoz';

const StyledTexto = styled(TextoGrande)`
  width: fit-content;
  margin: 5px;
  display: flex;
  flex-direction: row;
  background-color: cornflowerblue;
  border-radius:  5px;
  padding: 5px;
`;

const Palabras = ({palabra}) => {
  const {setNodeRef, attributes, listeners, transform, transition, isDragging} = useDraggable({
    id:palabra,
    data:{
      type:"palabra",
      palabra:palabra
    }
  })

  const style ={
    transition,
    transform:CSS.Transform.toString(transform),
    cursor:"pointer",
  }

  return (
    <>
      <StyledTexto 
        ref={setNodeRef} 
        style={style} 
        {...attributes} 
        {...listeners}
      >
        {palabra}
      </StyledTexto>  
      
    </>
  )
}

export default Palabras;