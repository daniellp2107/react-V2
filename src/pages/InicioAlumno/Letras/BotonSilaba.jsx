import styled from "styled-components";
import { TextoMediano } from "../../../components/Styled.global";
import { TextoAVoz } from "../../../utils/functions/TextoAVoz";

const BtnSilabaCarrusel = styled.div`
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  background-color: violet;

  &:hover{
    background-color: salmon;
  }

  

  @media screen and (max-width: 960px){
    
  }
  @media screen and (max-width: 500px){
    
  }
`;

const BotonSilaba = ({silaba}) => {
  const speakText = (text) => {
    responsiveVoice.speak(text);
  };
  
  

  return (
    <BtnSilabaCarrusel onClick={()=>TextoAVoz(silaba)}>
      <TextoMediano >{silaba}</TextoMediano>
    </BtnSilabaCarrusel>

  )
}

export default BotonSilaba