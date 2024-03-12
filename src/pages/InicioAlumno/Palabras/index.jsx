import { useState } from "react";
import styled from "styled-components";
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import Instrucciones from "../../../components/Instrucciones";
import { Contenedor, Centro, TextoGrande } from "../../../components/Styled.global";
import { PalabrasVoz } from "../../../Voz/indice";
import {nuevaSilaba} from "../../../utils/archivos/nueva-silaba";
import borrar from "../../../assets/icons/borrar.png"
import {TextoAVoz} from "../../../utils/functions/TextoAVoz";
import TextToSpeech from "../../../components/TextToSpeechComponent";

const CntInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
  text-align: center;
`;

const CntBotones = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media screen and (max-width:960px) {
    width: 90%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media screen and (max-width:500px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0;
  }
`;

const Botones = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  margin: 5px; 
  border-radius: 5px;
  border: 1px solid black;
  background-color: cyan;

  &:hover{
    background-color: salmon;
  }

  @media screen and (max-width:900px) {
    
  }
  @media screen and (max-width:350px) {
    width: 50%;
  }
`;

const ImgBorrar = styled.img`
  width: 50px;
  cursor: pointer;
`;


const Palabras = () => {

  const [silabas, setSilabas] = useState([]);
  const [oracion, setOracion] = useState("")

  let auxiliar;
  let arreglo = [];
  
  const CrearSilabas =(palabra)=>{
    let datosPalabra = nuevaSilaba(palabra);
    const {silabas} = datosPalabra;
    if (!palabra && palabra === '') {
      return;
    }else{
      silabas.forEach((silaba)=>{
        auxiliar = Object.values(silaba);
        arreglo = [...arreglo, auxiliar[1] ];
    });
    }
    setSilabas(arreglo);
  }

  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro>
          <Instrucciones 
            titulo={"Escribe una palabra"}
            tip={"Escribe una palabra en el espacio de abajo"}
            vozTitulo={PalabrasVoz}
            pagAnterior={"/alumno/opcion-letras"}
          />
          <CntInput >
            <Input value={oracion} maxLength={20} placeholder='palabra' onChange={(e)=>{
              CrearSilabas(e.target.value);
              setOracion(e.target.value);
            }}/>
          </CntInput>
          <CntBotones>
          {
            !silabas? null :
            silabas.map((silaba, index)=>(
              <Botones key={index} onClick={()=>{
                TextoAVoz(silaba)
              }}>
                <TextoGrande>
                  {silaba}
                </TextoGrande>
              </Botones>
            ))
          }
          </CntBotones>
          <TextToSpeech texto={silabas.join("")}/>
          <ImgBorrar src={borrar} onClick={()=>{
            setSilabas([]);
            setOracion("");
          }}/>
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default Palabras