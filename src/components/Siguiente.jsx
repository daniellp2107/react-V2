import styled from "styled-components";
import imgSiguiente from "../assets/icons/right.svg";
import { TextoMediano } from "./Styled.global";

const CntSiguiente = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
`;

const ImgSiguiente = styled.img`
  width: 50px;
`;

const Siguiente = (props) => {
  console.log(props);
  return (
    <CntSiguiente>
      <ImgSiguiente src={imgSiguiente} alt='siguiente' />
      <TextoMediano>
        Siguiente
      </TextoMediano>
    </CntSiguiente>

  );
}
 
export default Siguiente;