import { TextoGrande } from '../../../components/Styled.global';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import { useDraggable } from '@dnd-kit/core';


const StyledContenedor = styled.div`
  width: 75px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  cursor: pointer;

  background-color: #ececed  ;
`;

function BotonSilaba({silaba}) {

  const {setNodeRef, attributes, listeners, transform, transition, isDragging} = useDraggable({
    id:silaba,
    data:{
      type:"Silaba",
      silaba:silaba,
    }
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }
  return (
    <StyledContenedor ref={setNodeRef} style={style} {...attributes}>
      <TextoGrande {...listeners} >
      {silaba} 
      </TextoGrande>
    </StyledContenedor>
  )
}

export default BotonSilaba