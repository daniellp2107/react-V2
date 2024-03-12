import styled from 'styled-components';
import { TextoGrande } from '../../../components/Styled.global';
import { CSS,  } from '@dnd-kit/utilities';
import {useDraggable} from '@dnd-kit/core';

const StyledBotonVocal = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    cursor: pointer;

    background-color: pink;
`;

const BotonVocal = ({vocal}) => {
  const {setNodeRef,attributes, listeners, transform, transition, isDragging} = useDraggable({
    id:vocal,
    data:{
      type:"Vocal",
      vocal:vocal
    }
  });

  const style ={
    transition,
    transform:CSS.Transform.toString(transform),
  }
  return (
      <StyledBotonVocal ref={setNodeRef} style={style} {...attributes}>   
        <TextoGrande {...listeners} >
          {vocal}  
        </TextoGrande>
      </StyledBotonVocal>
  )
}

export default BotonVocal;