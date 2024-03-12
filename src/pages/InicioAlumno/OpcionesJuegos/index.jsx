import styled from "styled-components";
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import Instrucciones from "../../../components/Instrucciones";
import {InicioJuegos ,OpcionRompecabezasVoz, OpcionMemoramaVoz, OpcionRecFigurasVoz, OpcionBusVisualVoz, OpcionBusSilabaVoz, OpcionBusNumLetrasVoz, OpcionOrdenaPalabrasVoz, OpcionLecturaVoz } from "../../../Voz/indice";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Botones from "../../../components/Botones";

const CntBotones = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


const OpcionesJuegos = () => {

  const datosBotones = [
    {
      icon: "",
      nombre:"Rompecabezas",
      enlace:"/alumno/opcion-juegos/rompecabezas",
      audioList:OpcionRompecabezasVoz
    },
    {
      icon: "",
      nombre:"Memorama",
      enlace:"/alumno/opcion-juegos/memorama",
      audioList: OpcionMemoramaVoz
    },
    {
      icon: "",
      nombre:"Reconocer Figuras",
      enlace:"/alumno/opcion-juegos/rec-figuras",
      audioList: OpcionRecFigurasVoz
    },
    {
      icon: "",
      nombre:"Búsqueda visual",
      enlace:"/alumno/opcion-juegos/busqueda-visual",
      audioList: OpcionBusVisualVoz
    },
    {
      icon: "",
      nombre:"Letra o numero",
      enlace:"/alumno/opcion-juegos/letra-numero",
      audioList: OpcionBusNumLetrasVoz
    },
    {
      icon: "",
      nombre:"Búscando parejas**",
      enlace:"/alumno/opcion-juegos/parejas",
      audioList: OpcionRompecabezasVoz
    },
    {
      icon: "",
      nombre:"Ordena palabras",
      enlace:"/alumno/opcion-juegos/ordena-palabras",
      audioList: OpcionOrdenaPalabrasVoz
    },
    {
      icon: "",
      nombre:"Silabas",
      enlace:"/alumno/opcion-juegos/buscar-silaba",
      audioList: OpcionBusSilabaVoz
    },
    {
      icon: "",
      nombre:"Lectura**",
      enlace:"/alumno/opcion-juegos/lectura",
      audioList: OpcionLecturaVoz
    },
    {
      icon: "",
      nombre:"Completa la palabra**",
      enlace:"/alumno/opcion-juegos/completa-palabra",
      audioList: OpcionRompecabezasVoz
    },
    {
      icon: "",
      nombre:"Bien escrito**",
      enlace:"/alumno/opcion-juegos/bien-escrito",
      audioList: OpcionRompecabezasVoz
    },
    {
      icon: "",
      nombre:"Memorama 2**",
      enlace:"/alumno/opcion-juegos/memorama-2",
      audioList: OpcionRompecabezasVoz
    },
  ];

  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro >          
          <Instrucciones 
            titulo={"Ejercicios para que te diviertas aprendiendo"}
            tip={"Selecciona cualquiera de las tarjetas para comenzar a practicar"}
            //cambiar por el actualizado, no tenemos archivo-diálagos para este botón
            vozTitulo={InicioJuegos}
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

export default OpcionesJuegos;
