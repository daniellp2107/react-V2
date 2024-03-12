import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import correcto from "../../../assets/icons/correcto.png";
import incorrecto from "../../../assets/icons/incorrecto.png";
import imgSiguiente from "../../../assets/icons/right.svg";
import { useMutation} from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import { TextoMediano } from "../../../components/Styled.global";
import {random} from "../../../utils/functions/NumeroAleatorio";
import ArregloLetras from "./ArregloLetras";

const StyledContenedor = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  margin: 10px 0;
`;

const StyledLetraMostrar = styled.div `
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 48px;
  font-weight: 600;
`;

const StyledCntLetras = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledImgRes = styled.img`
  width: 50px;
  padding: 5px;
  margin: 5px;
`;

const StyledCntSiguiente = styled.div`
  display: flex;
  
  align-items: center;
  cursor: pointer;
  margin: 15px 0;

`;

const StyledImgSiguiente = styled.img`
  width: 75px;
`;

function ordenAleatorio(arreglo) {
  let array=[];
  if (arreglo) {
    array = arreglo;
  }else{
    array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
  }
  
  function shuffleArray(array) {
    // Función de comparación aleatoria
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Intercambiamos los elementos
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(array);
  return array;
}

const MostrarEjercicio = () => { 
  const vocales = ["a", "e","o","u","i"];
  const numeros = ["1","2","3","4","5","6","7","8","9","0"];
  const abecedarioLetras = ['b', 'c','d', 'f', 'g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z'];
  const caracteres = ordenAleatorio(vocales.concat(numeros).concat(abecedarioLetras));
  const [contador, setContador ] = useState(0);
  const [aleatorio, setAleatorio] = useState(()=>random(0, 36));
  const [caracterABuscar, setCaracterABuscar] = useState(()=>caracteres[aleatorio]);
  const [arregloCompleto, setArregloCompleto] = useState([]);
  
  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Letra o Numero",
            palabraGen:"Sin palabra generadora"
          }
        }
      });  
      // console.log(data);
      console.log("Nueva actividad agregada");
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  
  }
  
  //crear orden aleatorio para el arreglo final
  const arregloInicial = ordenAleatorio([0,1,2,3,4,5,6,7,8,9]);

  //tomar indices aletarios para el arreglo de caracteres
  let arregloLetras = ordenAleatorio();

  //tomar 8 indices aleatorios de caracteres para el arreglo nuevo
  arregloLetras = arregloLetras.slice(0,8);

  //llenar arreglo con los caracteres nuevos
  let auxiliar= [];
  arregloLetras.forEach((numero)=>auxiliar = [...auxiliar, caracteres[numero]]);
  let arreglo = [caracterABuscar, caracterABuscar].concat(auxiliar);
  // console.log(arreglo);

  //reacomodar los elementos del array y agregar el valor de color para cada caja
  let arregloFinal = arregloInicial.map((numero, index)=>{
    return {
      elem:arreglo[numero],
      in:index,
      color:"#fff"
    }
  } );
  // console.log(arregloFinal)

  const nuevoAleatorio = ()=>{
    let al =random(0, 36)
    setAleatorio(()=>random(0, 36));
    setCaracterABuscar(()=>caracteres[aleatorio]);
  }

  useEffect(() => {
    setArregloCompleto(arregloFinal);
  }, [aleatorio])
  
  return (
    <StyledContenedor>
      <StyledLetraMostrar>
        <div> {caracterABuscar} </div>
        
      </StyledLetraMostrar>
      <StyledCntLetras>
        {arregloCompleto != [] ? 
          <ArregloLetras arreglo ={arregloCompleto} 
            letra = {caracterABuscar}
            setContador={setContador}
          />
        : null
        }
      </StyledCntLetras>
      {contador > 1 ? <StyledImgRes src={correcto} /> :<StyledImgRes src={incorrecto} />}
      <StyledCntSiguiente onClick={()=>{
        if (contador > 1) {
          agregarDatos()
        }
        nuevoAleatorio();
        setContador(0);
      }}>
        
        <StyledImgSiguiente src={imgSiguiente}/>
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </StyledCntSiguiente>
    </StyledContenedor>
  )
}

export default MostrarEjercicio
