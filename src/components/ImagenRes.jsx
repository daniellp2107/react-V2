import styled from "styled-components";
import correcto from "../assets/icons/correcto.png";
import incorrecto from "../assets/icons/incorrecto.png";

const ImagenResultado = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 960px){
      
  }

  @media screen and (max-width: 500px){ 

  }
`;

const ImagenRes = ({resultado}) => {

  return (
    <>
      {resultado ? 
        <ImagenResultado src={correcto} alt='correcto' $res="rgba(235, 188, 58, 1)"/> 
      :
        <ImagenResultado src={incorrecto} alt='incorrecto' $res="rgba(242, 48, 72, 1)"/> }  
    </>
    
  )
}

export default ImagenRes