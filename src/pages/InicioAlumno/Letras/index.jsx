import {useState, useEffect} from "react";
import styled from "styled-components";
import AlumnoLayout from "../../../components/PlantillaAlumno/AlumnoLayout";
import Instrucciones from "../../../components/Instrucciones";
import { LetrasVoz } from "../../../Voz/indice.js";
import { Contenedor, Centro } from "../../../components/Styled.global";
import {palabras}  from "../../../images/diccionario.js";
import Carrusel from "./Carrusel.jsx";

const CntInput = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  padding: 5px;
/* 
  background-color: blue; */
  /* border: 1px solid black; */
`;

const Input = styled.input`
  
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
  text-align: center;

  @media screen and (max-width: 960px){
    
  }
  @media screen and (max-width: 500px){
    width: 100%;
  }
`;

const Letras = () => {

  const [letra, setLetra] = useState('');
  const abecedarioLetras = ['a', 'b', 'c','d', 'e', 'f', 'g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  const [imagenes, setImagenes] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Verificar si hay imágenes
    if (imagenes.length === 0) {
      setMensaje('No hay imágenes disponibles.');
    } else {
      setMensaje('');
    }
  }, [imagenes]);

  function arregloImagenes (letra){
    //para cualquiera posición de la letra en la palabra
    const pattern = new RegExp(`[${letra}]+`);

    //para que exclusivamente se encuentre al inicio de la palabra
    // const pattern = new RegExp(`^${letraEspecifica}`);

    const filtro = palabras.filter( dato => pattern.test(dato.alias));
    // console.log(filtro);

    setImagenes(filtro);
  }

  const actualizarLetra =(e)=>{
    //Buscar y crear el arreglo con las imagenes que coincidan con la letra solicitada
    // console.log(e);
    let nuevaLetra = e.key;
    if (abecedarioLetras.includes(nuevaLetra)) {
      setLetra (nuevaLetra);
      arregloImagenes(nuevaLetra);
    }
  }

  return (
    <AlumnoLayout>
      <Contenedor >
        <Centro >
          <Instrucciones 
            titulo={"Letras"} 
            tip={"Con ayuda del teclado anota una letra en el recuadro de abajo"} 
            vozTitulo={LetrasVoz}
            pagAnterior={"/alumno/opcion-letras"}
            />

          <CntInput >
            <label htmlFor='letra' ></label>
            <Input id='letra' 
              type='text' 
              placeholder='letra' 
              maxLength='1' 
              readOnly
              onKeyDown={actualizarLetra}
              defaultValue={letra}
            />
          </CntInput>
          {mensaje && <p>{mensaje}</p>}
          {imagenes.length > 0 && (<Carrusel datos={imagenes}/>)}   
        </Centro>
      </Contenedor>
    </AlumnoLayout>
  )
}

export default Letras;
