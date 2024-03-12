import styled from "styled-components";
import { articulos } from "../../../utils/archivos/articulos";
import borrar from "../../../assets/icons/borrar.png";
import {ordenAleatorio} from "../../../utils/functions/OrdenAleatorio";
import {random} from "../../../utils/functions/NumeroAleatorio";
import { useMemo, useState } from "react";
import { TextoGrande, TextoMediano } from "../../../components/Styled.global";
import TextToSpeech from "../../../components/TextToSpeechComponent";
import imgSiguiente from "../../../assets/icons/right.svg";
import ImagenRes from "../../../components/ImagenRes";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";

const Contenedor = styled.div`
  width: 100%;
  min-height: 50vh ;
  display: flex;
  flex-direction: column;
  align-items: center;

  .botones{
    display: flex;
    align-items: center;
    
  }
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  margin: 5px; 
  border-radius: 5px;
  border: 1px solid black;

  &:hover{
    background-color: salmon;
  }

  @media screen and (max-width:900px) {
    
  }
  @media screen and (max-width:500px) {
    width: 50%;
  }
`;

const CntOracion = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Palabra = styled.div`
  width: fit-content;

`;

const Respuesta = styled.div`
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: aquamarine;

`;

const ImgBorrar = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const CntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
`;

const ImgSiguiente = styled.img`
  width: 50px;
`;

const MostrarEjercicio = () => {
  const botonesArticulos = ["La","El"];
  const arregloOpciones = useMemo(()=>{
    return ordenAleatorio( crearOpciones());
  } ,[]);
  const [oraciones,setOraciones] = useState([]);
  const [respuesta, setRespuesta] = useState(false);
  const [art, setArt] = useState("");

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Ejercicios con la-el",
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
    let al = random(0, arregloOpciones.length);
    
    setOraciones(()=>{
      let arr = arregloOpciones[al];
      
      return arr[0].split(" ");
    });
  }, []);
  
  function crearOpciones() {
    let arr = [];
    articulos.map((arreglo)=>{
      botonesArticulos.forEach((articulo)=>{
        if (arreglo.includes(articulo)) {
          arr = [...arr, [arreglo, articulo]];
        }
      })
    });
    return arr;
  };

  function nuevoAleatorio(params) {
    let al = random(0, arregloOpciones.length);
    
    setOraciones(()=>{
      let arr = arregloOpciones[al];
      return arr[0].split(" ");
    });
  };

  function comparar(boton) {
    if (oraciones[0] == boton) {
      setRespuesta(true);
      agregarDatos();
    }else{
      setRespuesta(false);
    }
  }
  return (
    <Contenedor>
      <CntBotones >
        {botonesArticulos.map((boton,index)=>(
          <Botones key={index} 
          onClick={()=>{
            setArt(boton)
            comparar(boton);
            
          }}  
          >
            <TextoGrande >
              {boton}
            </TextoGrande>
          </Botones>
        ))}
      </CntBotones>
      <CntOracion >
        <Respuesta>
          <TextoGrande>
            {art}
          </TextoGrande>
        </Respuesta >
        <Palabra >
          <TextoGrande>
            {oraciones[1]}
          </TextoGrande>
        </Palabra>
      </CntOracion>
      <ImagenRes resultado={respuesta}/>
      <div className="botones">
        <TextToSpeech texto={oraciones.join("")}/>
        <ImgBorrar src={borrar} onClick={()=>{
          setArt("");
        }}/>
        
      </div>
      <CntSiguiente onClick={(e)=>{
        nuevoAleatorio();
        setArt("");
        setRespuesta(false);
      }}>
        <ImgSiguiente src={imgSiguiente} alt='siguiente' />
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </CntSiguiente>
      
    </Contenedor>
  )
}

export default MostrarEjercicio;