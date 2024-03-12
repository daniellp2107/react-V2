import styled from "styled-components";
import { useState } from "react";
import suma from "../../../assets/icons/suma.png";
import correcto from "../../../assets/icons/correcto.png";
import incorrecto from "../../../assets/icons/incorrecto.png";
import imgSiguiente from "../../../assets/icons/right.svg";
import igual from "../../../assets/icons/igual.png";
import { TextoMediano } from "../../../components/Styled.global";
import { useMutation } from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import Cantidades from "./Cantidades";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCntImgSuma = styled.div`
  /* background-color: antiquewhite; */
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const StyledImgSuma = styled.img`
  width: 75px;

  @media screen and (max-width: 960px){
    width: 50px;
  }
`;

const StyledCntEjercicios = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }

  @media screen and (max-width: 500px){
    flex-direction: column;
  }
`;

const InputRes = styled.input`
  width: 100px;
  height: 60px;
  margin: 5px;
  text-align: center;
  font-size: xx-large;
`;

const StyledCntRes = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  
  
`;

const StyledCntImgRes = styled.div`
  background-color: ${props => props.res || 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`

const StyledImgRes = styled.img`
  width: 50px;
  padding: 5px;
  margin: 5px;

  @media screen and (max-width: 960px){
    width: 50px;
  }
`;

const StyledCntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
  /* background-color: aquamarine; */
`;

const StyledImgSiguiente = styled.img`
    width: 50px;

`;

const MostrarEjercicio = () => {
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [input, setInput] = useState('');
  const [siguiente, setSiguiente] = useState(false);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Empecemos a Sumar",
            palabraGen:"Sin Palabra Generadora"
          }
        }
      });
      console.log("Guardado");
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  
  }

  const sumarNumeros = (numeroUno, numeroDos)=>{
    let suma = numeroDos + numeroUno;
    setResultado(suma);
    return suma;
  }

  const compararResultado =(suma, input)=>{
    if (suma === parseInt(input)) {
      setResultado(true);
      agregarDatos();
    }else{
      setResultado(false);
    }
  }
  return (
    <Contenedor>
      <StyledCntEjercicios >
        <Cantidades numero={setNumeroUno} siguiente={siguiente} setSiguiente={setSiguiente}/>
        <StyledCntImgSuma >
          <StyledImgSuma src={suma}/>
        </StyledCntImgSuma>
        <Cantidades numero={setNumeroDos} siguiente={siguiente} setSiguiente={setSiguiente}/>
      </StyledCntEjercicios>
      <StyledCntRes >
        <StyledImgRes src={igual}/>
        <InputRes maxLength={2} type='text' value={input} pattern='[0-9]+' onChange={(e)=>{
          if (parseInt(e.target.value)) {
            setInput(parseInt(e.target.value));
            let suma = sumarNumeros(numeroUno, numeroDos);
            compararResultado(suma, e.target.value);  
          }else{
            setInput('');
          }
        }}/>
      </StyledCntRes>
      <StyledCntImgRes $res={resultado ? "rgba(235, 188, 58, 1)" : "rgba(242, 48, 72, 1)"}>
        {resultado?<StyledImgRes src={correcto} /> :<StyledImgRes src={incorrecto} />}
      </StyledCntImgRes>
      <StyledCntSiguiente onClick={()=>{
        setSiguiente(true);
        setInput('');
        setResultado(false);
      }}>
        <StyledImgSiguiente src={imgSiguiente}/>
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </StyledCntSiguiente>
    </Contenedor>
  )
}

export default MostrarEjercicio
