import styled from "styled-components";
import {palabrasG_Y} from "../../../utils/archivos/palabrasGJ";
import { useEffect, useMemo, useState } from "react";
import { random } from "../../../utils/functions/NumeroAleatorio";
import {nuevaSilaba} from "../../../utils/archivos/nueva-silaba";
import { TextoGrande, TextoMediano } from "../../../components/Styled.global";
import TextToSpeech from "../../../components/TextToSpeechComponent";
import ImagenRes from "../../../components/ImagenRes";
import { CntSiguiente,ImgSiguiente } from "../../../components/Styled.global";
import imgSiguiente from "../../../assets/icons/right.svg"
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import { useMutation } from "@apollo/client";

const Contenedor = styled.div`
  width: 100%;
  min-height: 50vh ;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CntBotones = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  

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
  min-width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  margin: 5px; 
  border-radius: 5px;
  border: 1px solid black;
  background-color: salmon;
  &:hover{
    background-color: cadetblue;
  }

  @media screen and (max-width:900px) {
    
  }
  @media screen and (max-width:500px) {
    width: 50%;
  }
`;

const CntSilabas = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  

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
const BtnSilabas = styled.div`
  width: 50px;
  min-width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  margin: 5px; 
  border-radius: 5px;
  @media screen and (max-width:900px) {
    
  }
  @media screen and (max-width:500px) {
    
  }
`;

const SilabaMostrar = styled(TextoGrande)`
  display: ${props=>props.mostrar};
`;

const MostrarEjercicio = () => {
  const consonates = ["ge","gi","j"];
  const arregloCompleto = useMemo(()=>crearArreglo(),[])
  const [silabas, setSilabas] = useState([]);
  const [silCorrecta, setSilCorrecta] = useState("");
  const [resultado, setResultado] = useState(false);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Ejercicios con G-J",
            palabraGen:"Sin Palabra Generadora"
          }
        }
      });
      // console.log(data);
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  };

  useEffect(() => {
    let al = random(0, arregloCompleto.length);
    let arr = arregloCompleto[al];

    setSilabas(()=>separarPalabra(arr.palabra,arr.con) );
    setSilCorrecta(()=>arr.con);
    
  }, []);

  function crearArreglo() {
    let aux = [];
    consonates.forEach((con)=>{
      palabrasG_Y.forEach((palabra)=>{
        if (palabra.includes(con )) {
          aux = [...aux, {palabra, con}];  
        }
      });
    });
    return aux;
  };

  function separarPalabra(palabra="silabas") {
    const separar = nuevaSilaba(palabra);
    let arregloSilabas = [];
    separar.silabas.forEach(({silaba}) => {
      arregloSilabas = [...arregloSilabas, silaba];        
    });
    return arregloSilabas;
  };

  function nuevaPalabra() {
    let al = random(0, arregloCompleto.length);
    let arr = arregloCompleto[al];

    setSilabas(()=>separarPalabra(arr.palabra,arr.con) );
    setSilCorrecta(()=>arr.con);
  };

  function comparar(con) {
    if (silCorrecta == con) {
      setResultado(true);
      agregarDatos();
    }else{
      setResultado(false);
    };
  };
  return (
    <Contenedor >
      <CntBotones >
        {consonates.map((con)=>(
          <Botones key={con} onClick={()=>{
            comparar(con);
            
          }}>
            <TextoGrande >
              {con}
            </TextoGrande>
          </Botones>
        ))}
      </CntBotones>
      <CntSilabas>
        {silabas.map((silaba,index)=>(
          <BtnSilabas key={index} >
            {silaba.includes(silCorrecta) ? 
              <SilabaMostrar mostrar={resultado ? "flex" : "none"}>
                {silaba}
              </SilabaMostrar>
              :<TextoGrande>
                {silaba}
              </TextoGrande>  
            }
          </BtnSilabas>
        ))}
        <TextToSpeech texto={silabas.join("")}/>
        <ImagenRes resultado={resultado}/>
      </CntSilabas>
      <CntSiguiente onClick={()=>{
        nuevaPalabra();
        setResultado(false);
      }}>
        <ImgSiguiente src={imgSiguiente}/>
        <TextoMediano >
          Siguiente
        </TextoMediano>
      </CntSiguiente>
    </Contenedor>
  )
}

export default MostrarEjercicio