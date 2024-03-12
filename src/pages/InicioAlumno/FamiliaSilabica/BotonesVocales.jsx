import styled from 'styled-components';
import BotonVocal from './BotonVocal';

const StyledCntVocales = styled.div`
  width: 75%;    
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const BotonesVocales = ({vocales, onDragEnd}) => {   

  return (
    <StyledCntVocales>
      {vocales.map((vocal,index) =>(
        <BotonVocal vocal={vocal} key={index}/>
      ))}
    </StyledCntVocales>
  )
}

export default BotonesVocales;