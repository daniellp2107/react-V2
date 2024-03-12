import { useEffect, useState } from "react";
import styled from "styled-components";
import { nuevaSilaba } from "../../../utils/archivos/nueva-silaba";
import { TextoGrande, TextoMediano } from "../../../components/Styled.global";
import TextToSpeech from "../../../components/TextToSpeechComponent";
import correcto from "../../../assets/icons/correcto.png";
import incorrecto from "../../../assets/icons/incorrecto.png";
import {useMutation, useLazyQuery } from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE} from '../../../utils/graphql/mutation';

const Contenedor = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .textToSpeech{

  }
  .inputSilaba{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  @media screen and (max-width: 960px){
    width: 100%;
    flex-wrap: wrap;
  }

  @media screen and (max-width :500px){
    flex-direction: column;
  }
`;

const InputSilaba = styled.input `
    width: 75px;
    height: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin: 10px;

    @media screen and (max-width: 960px){
        width:75px ;
    }

    @media screen and (max-width: 500px){
      margin: 5px;
    }
`;
const BtnSilaba = styled.div`
  width: 100px;
  height: 50px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px){

  }

  @media screen and (max-width: 500px){
    width: fit-content;
    margin: 0 5px;
    padding: 0 5px;
    
  }
`;
const CntRes = styled.div`
  width: 100px;
  height: 50px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

const ImagenResultado = styled.img`
  width: 50px;
  @media screen and (max-width: 960px){
      
  }

  @media screen and (max-width: 500px){ 

  }
`;
const Carrusel = ({items, setActualizar, actualizar, nivel,palabraGen}) => {  
  const [resultado, setResultado] = useState(false);
  const [resInput, setResInput] = useState("");

  let aleatorio = null;
  let palabraMostrar = null

  useEffect(() => {
    setResInput("");
    setActualizar(false);
    setResultado(false);
  }, [actualizar]);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Letra o Numero",
            palabraGen:palabraGen
          }
        }
      });
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  
  }
    
  const contruirArregloSilabas = (palabra) =>{
    const nuevaPalabra = nuevaSilaba(palabra);
    let auxiliar;
    let nuevoArreglo = [];
    nuevaPalabra.silabas.forEach((silaba)=>{
        auxiliar = Object.values(silaba);
        nuevoArreglo = [...nuevoArreglo, auxiliar[1].toLowerCase() ];
    });
    palabraMostrar=nuevoArreglo;
    return nuevoArreglo
  };  
  const elegirSilaba = (arreglo)=>{
    arreglo.forEach((silaba,index)=>{
      if(silaba.includes(items.letra.toLowerCase()||items.letra)){
        aleatorio = index;
      };
    });
  };

  elegirSilaba(contruirArregloSilabas(items.palabra));

  const compararResultado =(entrada, silaba)=>{
    if (entrada == silaba) {
        setResultado(true);
        agregarDatos();
    }else{
        setResultado(false);
    };
  };
  return (
    <Contenedor>
      <div className="textToSpeech">
        <TextToSpeech texto={items.palabra}/>
      </div>
      <div className="inputSilaba">
        {palabraMostrar.map((sil,index)=>(
          aleatorio == index ? 
          <InputSilaba 
            key={index}
            value={resInput}
            onChange={(e)=>{
              e.preventDefault();
              setResInput(e.target.value);
              compararResultado(e.target.value, sil);
            }}
            /> : 
            <BtnSilaba key={index}>
              <TextoGrande >
                {sil}   
              </TextoGrande>
            </BtnSilaba>
        ))}
      </div>
      <CntRes >
        {resultado?<ImagenResultado src={correcto} alt='correcto' $res="rgba(235, 188, 58, 1)"/> :<ImagenResultado src={incorrecto} alt='incorrecto' $res="rgba(242, 48, 72, 1)"/> }
      </CntRes>
    </Contenedor>
  );
};

export default Carrusel;
