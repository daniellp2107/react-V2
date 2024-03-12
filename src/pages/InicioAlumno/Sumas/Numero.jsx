import { useState, useEffect } from "react";
import styled from "styled-components";
import suma from "../../../assets/icons/suma.png";
import igual from "../../../assets/icons/igual.png";
import ImagenRes from "../../../components/ImagenRes";
import { TextoGrande } from "../../../components/Styled.global";

const Contenedor = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 500px){
    gap: 0;
  }
`;

const Imagen = styled.img`
  width: 50px;
  padding: 5px;
`;

const NumeroTam = styled(TextoGrande)`
  font-size: 50px;
`;

const InputRes = styled.input`
  appearance: none;
  width: 100px;
  height: 75px;
  margin: 5px;
  text-align: center;
  font-size:50px;
  /* font-size:2rem; */
  font-weight:700;
  font-style: normal;
`;

const Numero = ({datos, setContador}) => {
  const {numeroUno, numeroDos}  = datos;
  const [resInput, setResInput] = useState("");

  useEffect(() => {
    setResInput("");
  }, [datos]);

  const sumaTotal = (numUno, numDos)=>{
    return numUno + numDos;
  };
  return (
    <Contenedor>
      <NumeroTam >
        {numeroUno}
      </NumeroTam>
      
      <Imagen src={suma}/>

      <NumeroTam >
        {numeroDos}
      </NumeroTam>  
      <Imagen src={igual}/>
      <InputRes value={resInput} 
        maxLength={3}
        type="text"
        pattern="[0-9]+"
        onChange={(e)=>{
          if (parseInt(e.target.value)) {
            setResInput(parseInt(e.target.value));
            sumaTotal(numeroUno, numeroDos) === parseInt(e.target.value) ? setContador((con)=>con + 1) : null;
          }else{
            setResInput("");
          }
      }}/>
      <ImagenRes resultado={sumaTotal(numeroUno, numeroDos) === resInput ? true : false}/>
    </Contenedor>
    
  )
}

export default Numero;