import { useDroppable } from '@dnd-kit/core';
import styled from 'styled-components';
import { TextoGrande } from '../../../components/Styled.global';
import TextToSpeech from '../../../components/TextToSpeechComponent';

const StyledContenedor = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px){
    font-size: large;
    flex-direction: column;
  }
`;

const StyledCntOracion = styled.div`
  width: 50px;
  margin: 5px;
  border: 1px solid black;
`;

const StyledOracion = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledTexto = styled(TextoGrande)`
  width: fit-content;
  margin: 5px;
`;
const FormarOracion = ({oracion, correcto}) => {

  const {isOver,setNodeRef} = useDroppable({
    id:"droppable",
    data:{
      type:"Oracion"
    }
  });

  const style = {
    border: isOver ? '2px dashed #333' : '1px solid #000',
    padding: '10px',
    minHeight: '40px',
    width:'50px'
  };
  return (
    <>
    <StyledContenedor>
      <StyledCntOracion ref={setNodeRef} style={style} />    

      <StyledOracion>
        {oracion.map((pal, index)=>(
          <StyledTexto key={index}>
            {pal}
          </StyledTexto>
        ))}
        <div>
          <TextToSpeech texto={oracion.join(" ")}/>
        </div>
        
      </StyledOracion>
    </StyledContenedor> 
      
    </>
  )
}

export default FormarOracion
