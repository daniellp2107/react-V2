import { useState,useEffect } from "react";
import styled from "styled-components";
import moneda from "../../../images/archivos/Moneda.png";
import correcto from "../../../assets/icons/correcto.png";
import incorrecto from "../../../assets/icons/incorrecto.png";
import imgSiguiente from "../../../assets/icons/right.svg";
import { TextoMediano } from "../../../components/Styled.global";
import { useMutation } from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";

const CntContar = styled.div`
  /* background-color: aqua; */
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CntEjercicio = styled.div`
  /* background-color: aquamarine; */
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const CntImagenes = styled.div`
  /* background-color: blueviolet; */
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 750px){
    width: 100%;
  }
`;

const Imagenes = styled.div`
  /* background-color: azure; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const Imagen = styled.img`
  width: 100px;
  padding: 5px;

  @media screen and (max-width: 960px){
    width: 50px;
  }

  @media screen and (max-width: 500px){
    width: 50px;
  }
`;

const InputRes = styled.input`
  width: 100px;
  height: 60px;
  text-align: center;
  margin: 5px;
  font-size: x-large;
`;

const StyledCntImgRes = styled.div`
  background-color: ${props => props.res || 'none'};
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`

const StyledImgRes = styled.img`
  width: 50px;
  padding: 5px;
`;

const StyledCntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
  /* background-color: aquamarine; */
`;

const StyledImgSiguiente = styled.img`
    width: 50px;

`;

const MostrarEjercicio = () => {
  const [resInput, setResInput] = useState('');
  const [mostrarArreglo, setMostrarArreglo] = useState([]);
  const [resultado, setResultado] = useState(false);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Empecemos a Contar",
            palabraGen:"Sin Palabra Generadora"
          }
        }
      });
      console.log("Guardado");
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  
  }
  
  const random = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numAleatorio = Math.floor(Math.random() * (max - min ) + min);
    return numAleatorio;
  }  

  const crearArreglo = ()=>{
    const numAleatorio = random(1, 15);
    const nuevoArreglo = Array.from({length:numAleatorio});
    return nuevoArreglo;
  }

  useEffect(() => {
    const crearArreglo = ()=>{
      const numAleatorio = random(1, 30);
      const nuevoArreglo = Array.from({length:numAleatorio});
      return nuevoArreglo;
    }
    const arreglo = crearArreglo();
    setMostrarArreglo(arreglo);
  }, [])

  const compararSilabas = (entrada)=>{
    if (mostrarArreglo.length === entrada) {
        setResultado(true);
        agregarDatos();
    }else{
        setResultado(false);
    }
}
  
  return (
    <CntContar>
      <CntEjercicio>
        <CntImagenes>
          <Imagenes >
          {
            mostrarArreglo.map((_,index)=>(
              <Imagen src={moneda} key={index}/>
            ))
          } 
          </Imagenes>

          <InputRes maxLength={2} value={resInput} type='text' pattern='[0-9]+' onChange={(e)=>{
            const input = e.target.value;            
            if (parseInt(input)) {
              setResInput(input);
              compararSilabas(parseInt(input));  
            }else{
              setResInput('');
            }
          }}/>
          <StyledCntImgRes $res={resultado ? "rgba(235, 188, 58, 1)" : "rgba(242, 48, 72, 1)"}>
            {resultado?<StyledImgRes src={correcto} /> :<StyledImgRes src={incorrecto} />}
          </StyledCntImgRes>
          <StyledCntSiguiente onClick={()=>{
            const arreglo = crearArreglo();
            setMostrarArreglo(arreglo);
            setResInput('')
            setResultado(false);

          }}>
            <StyledImgSiguiente src={imgSiguiente}/>
            <TextoMediano>
              Siguiente
            </TextoMediano>
          </StyledCntSiguiente>
        </CntImagenes>
      </CntEjercicio>
    </CntContar>
  )
}

export default MostrarEjercicio
