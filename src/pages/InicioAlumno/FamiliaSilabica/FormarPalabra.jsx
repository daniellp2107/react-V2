import {useDroppable} from '@dnd-kit/core';
import styled from 'styled-components';
import {TextoAVoz} from "../../../utils/functions/TextoAVoz";
import limpiar from "../../../assets/icons/broom.png";
import voz from "../../../assets/icons/bocina.png";

const StyledContenedor = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  padding: 10px 0 ;

  .silabas {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledCntPalabra = styled.div`
  width: fit-content;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledCntSilabas = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
`;

const StyledButton = styled.div`
  width: 210px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  button {
    width: 50px;
    border: none;
    background-color: aliceblue;
    cursor: pointer;
  }

  img{
    width: 100%;
  }
`;

const FormarPalabra = ({palabra, setPalabra}) => {
  const {isOver,setNodeRef, over} = useDroppable({
    id:"droppable",
    data:{
      type:"Palabra"
    }
  });

  const style = {
    border: isOver ? '2px dashed #333' : '1px solid #000',
    height: '50px',
    width:'50px',
  };

  return (
    <StyledContenedor>
      <StyledCntPalabra ref={setNodeRef} style={style} />
      <div className='silabas'>
        {palabra.map((silaba, index)=>(
            <StyledCntSilabas key={index} >
              {silaba}
            </StyledCntSilabas>
          ))}      
      </div>
      
      <StyledButton >
        <button  onClick={()=>setPalabra([])} > 
          <img src={limpiar}/>
        </button>
        
        <button onClick={()=>TextoAVoz(palabra.join(""))}>
          <img src={voz}/>
        </button>
      </StyledButton>
      
    </StyledContenedor>

  )
}

export default FormarPalabra;