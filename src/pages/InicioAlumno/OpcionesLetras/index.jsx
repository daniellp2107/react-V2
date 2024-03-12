import styled from "styled-components";
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import Instrucciones from "../../../components/Instrucciones";
import { AlumnoLetras, OpcionLetras, OpcionSilabas, OpcionEjerPal, OpcionEjerSil, OpcionPalabras, OpcionConversacion } from "../../../Voz/indice";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Botones from "../../../components/Botones";

const CntBotones = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const OpcionesLetras = () => {

  const datosBotones = [
    {
      icon: "",
      nombre:"Lectura y Escritura",
      enlace:"/alumno/opcion-letras/letras",
      audioList:OpcionLetras
    },
    {
      icon: "",
      nombre:"Silabas",
      enlace:"/alumno/opcion-letras/silabas",
      audioList: OpcionSilabas
    },
    {
      icon: "",
      nombre:"Ejercicios Palabras",
      enlace:"/alumno/opcion-letras/ejercicio-palabras",
      audioList: OpcionEjerPal
    },
    {
      icon: "",
      nombre:"Ejercicios Silabas",
      enlace:"/alumno/opcion-letras/ejercicio-silabas",
      audioList: OpcionEjerSil
    },
    {
      icon: "",
      nombre:"Palabras",
      enlace:"/alumno/opcion-letras/palabras",
      audioList: OpcionPalabras
    },
    {
      icon: "",
      nombre:"Conversación",
      enlace:"/alumno/opcion-letras/conversacion",
      audioList: OpcionConversacion
    },
    {
      icon: "",
      nombre:"la-al le-el** ",
      enlace:"/alumno/opcion-letras/al-la",
      audioList: OpcionConversacion
    },
    {
      icon: "",
      nombre:"c-s-z**",
      enlace:"/alumno/opcion-letras/c-s-z",
      audioList: OpcionConversacion
    },
    {
      icon: "",
      nombre:"ll-y**",
      enlace:"/alumno/opcion-letras/ll-y",
      audioList: OpcionConversacion
    },
    {
      icon: "",
      nombre:"g-j**",
      enlace:"/alumno/opcion-letras/g-j",
      audioList: OpcionConversacion
    },
  ];

  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro >          
          <Instrucciones 
            titulo={"Ejercicios de Lectura y escritura"}
            tip={"Selecciona cualquiera de las tarjetas para comenzar a practicar"}
            vozTitulo={AlumnoLetras}
            pagAnterior={"/inicio-alumno"}
          />
          
          <CntBotones >
            {datosBotones.map((datos,index)=>(
              <Botones key={index} datos={datos} />
            ))}
          </CntBotones>
          
        </Centro>
        

      </Contenedor>
    </AlumnoLayout>
  )
}

export default OpcionesLetras;