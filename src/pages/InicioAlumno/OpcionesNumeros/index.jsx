import styled from "styled-components";
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import { Contenedor, Centro } from "../../../components/Styled.global";
import Instrucciones from "../../../components/Instrucciones";
import Botones from "../../../components/Botones";
import { OpcionInicioNumeroVoz, OpcionLosNumerosVoz, OpcionContarVoz,OpcionSumarVoz,OpcionContandoDineroVoz, } from "../../../Voz/indice";

const CntBotones = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const OpcionesNumeros = () => {

  const datosBotones = [
    {
      icon: "",
      nombre:"Los Numeros",
      enlace:"/alumno/opcion-numeros/numeros",
      audioList:OpcionLosNumerosVoz
    },
    {
      icon: "",
      nombre:"Empecemos a Contar",
      enlace:"/alumno/opcion-numeros/contar",
      audioList: OpcionContarVoz
    },
    {
      icon: "",
      nombre:"Empecemos a Sumar",
      enlace:"/alumno/opcion-numeros/sumar",
      audioList: OpcionSumarVoz
    },
    {
      icon: "",
      nombre:"Contando Dinero**",
      enlace:"/alumno/opcion-numeros/contando-dinero",
      audioList: OpcionContandoDineroVoz
    },
    {
      icon: "",
      nombre:"Sumas**",
      enlace:"/alumno/opcion-numeros/sumas",
      audioList: OpcionContandoDineroVoz
    },
    {
      icon: "",
      nombre:"Restas**",
      enlace:"/alumno/opcion-numeros/restas",
      audioList: OpcionContandoDineroVoz
    },
    {
      icon: "",
      nombre:"Operaciones**",
      enlace:"/alumno/opcion-numeros/operaciones",
      audioList: OpcionContandoDineroVoz
    },
    {
      icon: "",
      nombre:"Contando Dinero 2**",
      enlace:"/alumno/opcion-numeros/contando-dinero-2",
      audioList: OpcionContandoDineroVoz
    },
    {
      icon: "",
      nombre:"Contando Dinero 3**",
      enlace:"/alumno/opcion-numeros/contando-dinero-3",
      audioList: OpcionContandoDineroVoz
    }
  ];

  return (
    <AlumnoLayout >
      <Contenedor>
        <Centro >
          <Instrucciones 
            titulo={"Ejercicios de numeros"}
            pagAnterior={"/inicio-alumno"}
            tip={"Selecciona cualquiera de las tarjetas para comenzar a practicar"}
            vozTitulo={OpcionInicioNumeroVoz}
          />
          <CntBotones>
            {
              datosBotones.map((datos)=>(
                <Botones datos={datos} key={datos.nombre}/>
              ))
            }
          </CntBotones>
          
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default OpcionesNumeros;
