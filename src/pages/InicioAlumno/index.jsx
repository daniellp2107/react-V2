import styled from 'styled-components';
import Instrucciones from "../../components/Instrucciones";
import { AlumnoOpciones, InicioLetras, InicioNumeros, InicioJuegos} from './../../Voz/indice';
import AlumnoLayout from '../../components/PlantillaAlumno/AlumnoLayout';
import Botones from './Botones';
import letras from "../../assets/icons/letras.svg";
import numeros from "../../assets/icons/numeros.svg";
import juegos from "../../assets/icons/juegos.svg";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Centro = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px){
    
  }

    @media screen and (max-width: 500px){

    }

`;

const InicioAlumno = () => {

  const datosBotones = [
    {
      icon: letras,
      nombre:"Lectura y Escritura",
      enlace:"/alumno/opcion-letras",
      audioList:InicioLetras
    },
    {
      icon: numeros,
      nombre:"Numeros",
      enlace:"/alumno/opcion-numeros",
      audioList: InicioNumeros
    },
    {
      icon: juegos,
      nombre:"Juegos",
      enlace:"/alumno/opcion-juegos",
      audioList: InicioJuegos
    },

  ];
  return (
    <AlumnoLayout >
      <Contenedor >
        <Centro>
        <Instrucciones 
          titulo={"Aula Virtual"} 
          tip={"¡Hola! selecciona el tipo de ejercicio que quieras practicar"}
          vozTitulo={AlumnoOpciones}/>  
          {datosBotones.map((dato, index)=>(
            <Botones key={index} dato={dato}/>
          ))}
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default InicioAlumno;