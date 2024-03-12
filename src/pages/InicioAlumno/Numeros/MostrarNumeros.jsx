import { useState } from "react";
import styled from "styled-components";
import writtenNumber from 'written-number';
import {TextoMediano } from "../../../components/Styled.global";
import { TextoAVoz } from "../../../utils/functions/TextoAVoz";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CntInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 150px;
  font-size: 52px;
  text-align: center;
`;

const CntNumeros = styled.div`
  width: 80%;
  margin: 15px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Numero = styled.div`
  width: 100%;
  height: 50px;
  font-size: x-large;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nombre = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumerosNombre = styled.div`
  width: 100px;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 5px;
  cursor: pointer;
  border: 1px solid ${props => props.borde || "none"};
  background-color: #ECECED;

  @media screen and (max-width: 960px){
    
  }
  @media screen and (max-width: 500px){
    
  }
`;


const MostrarNumeros = () => {
  const [numeroInput, setNumeroInput] = useState("");
  const [arrNumNom, setArrNumNom] = useState([]);
  writtenNumber.defaults.lang = 'es';
  let nuevoArreglo =[];
  let auxiliarUno =[];
  let auxiliarDos = []; 

  const arregloNumeros =(numero)=>{
    if (numero.length == 1) {
      for (let index = 0; index <= 9; index++) {
        nuevoArreglo = [...nuevoArreglo, index];
      }
      setArrNumNom(nuevoArreglo);
    }else{
      auxiliarUno = numero.split('');
      auxiliarUno.pop();
      auxiliarDos = auxiliarUno.join('');
      for (let index = 0; index <= 9; index++) {
        nuevoArreglo = [...nuevoArreglo, auxiliarDos + index];
      }
      setArrNumNom(nuevoArreglo);
    }
  }
  
  return (
    <Contenedor>
      <CntInput >
        <Input maxLength={3} value={numeroInput} type='text' pattern='[0-9]+' onChange={(e)=>{
            if (parseInt(e.target.value) != "") {
              setNumeroInput(e.target.value);
              arregloNumeros(e.target.value);  
            }else{
              setNumeroInput('');
              setArrNumNom('');
            }
            
          }}/>
      </CntInput>
      <CntNumeros>
        {
          arrNumNom ? arrNumNom.map((numero)=>(
            <NumerosNombre key={numero} borde={numero == numeroInput ? 'black' : ''}
            onClick={()=>{TextoAVoz(writtenNumber(numero))}} >
              <Numero >
                <TextoMediano >
                  {numero}
                </TextoMediano>
              </Numero>
              <Nombre >
                <TextoMediano >
                  {writtenNumber(numero)}
                </TextoMediano>
              </Nombre>
            </NumerosNombre>
          ))
          :
          null
        }
          
      </CntNumeros>
    </Contenedor>
  )
}

export default MostrarNumeros;