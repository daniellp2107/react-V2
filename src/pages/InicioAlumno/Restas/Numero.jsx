import { useState, useEffect } from "react";
import styled from "styled-components";
import menos from "../../../assets/icons/menos.png";
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
  const [numOrdenados, setNumOrdenados] = useState([]);

  useEffect(() => {
    setResInput("");
    setNumOrdenados(()=>{
      
      let numeros = [];
      if (numeroUno == numeroDos) {
        numeros = [numeroUno + 1, numeroDos]; 
      }else{
        numeros = [numeroUno, numeroDos]; 
      }
      return numeros.sort(function(a, b){return b - a});  
    })
  }, [datos])
  
  const restaTotal =()=>{
    return numOrdenados[0] - numOrdenados[1];
  }

  return (
    <Contenedor>
      <NumeroTam >
        {numOrdenados[0]}
      </NumeroTam>
      
      <Imagen src={menos}/>

      <NumeroTam >
        {numOrdenados[1]}
      </NumeroTam>  
      <Imagen src={igual}/>
      <InputRes value={resInput} 
        maxLength={3}
        type="text"
        inputMode="numeric"
        pattern="[0-9]+"
        onChange={(e)=>{
          if (parseInt(e.target.value)) {
            setResInput(parseInt(e.target.value));
            restaTotal() === parseInt(e.target.value) ? setContador((con)=>con + 1) : null;
          }else{
            setResInput("");
          }
      }}/>
      <ImagenRes resultado={restaTotal() === resInput ? true : false}/>
    </Contenedor>
    
  )
}

export default Numero;