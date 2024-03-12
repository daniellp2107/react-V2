import styled from "styled-components";
import writtenNumber from 'written-number';
import monedaUno from "../../../assets/icons/moneda1.png";
import monedaCinco from "../../../assets/icons/moneda5.png";
import monedaDiez from "../../../assets/icons/moneda10.png";
import veinte from "../../../assets/icons/billete20.png";
import cincuenta from "../../../assets/icons/billete50.png";
import imgSiguiente from "../../../assets/icons/right.svg";
import { useEffect, useState } from "react";
import { random } from "../../../utils/functions/NumeroAleatorio";
import {ordenAleatorio} from "../../../utils/functions/OrdenAleatorio";
import { CntSiguiente, TextoGrande, TextoMediano, ImgSiguiente, } from "../../../components/Styled.global";
import ImagenRes from "../../../components/ImagenRes";
import { useMutation } from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import TextToSpeech from "../../../components/TextToSpeechComponent";

const Contenedor = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 960px){
    width: 80%;
  }

  @media screen and (max-width: 500px){
    width: 100%;
  }
`;

const CntTextoVoz = styled.div`
  width: auto;
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: bisque;

  .texto-voz{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
  }
`;

const Imagen = styled.img`
  width: 125px;
  height: 75px;
`;

const CntOpciones = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

const Opciones = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px 0;
  padding: 10px;
  gap: 10px;
  
  background-color: ${props=> props.res || "none"};

`;

const CntRes = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MostrarEjercicio = () => {
  writtenNumber.defaults.lang = 'es';
  const [res, setRes] = useState();
  const [actualizar,setActualizar] = useState(false);
  const [opciones, setOpciones ]= useState([]);
  const [color, setColor] = useState("");

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Contando Dinero 3",
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
    let aleatorio = random(1, 150);
    setRes(aleatorio);
    setOpciones(()=>ordenAleatorio( [convertirNumero(random(1,150)), convertirNumero(random(1,150)),convertirNumero(random(1,150)),convertirNumero(aleatorio)]));
    setActualizar(false);
  }, [actualizar]);

  function convertirNumero(number) {
    const denominacionMoneda = [
    {valor:50, imagen:cincuenta},
    {valor:20, imagen:veinte},
    {valor:10, imagen:monedaDiez},
    {valor:5, imagen:monedaCinco},
    {valor:1, imagen:monedaUno},
  ];

    let resultado = [];
    let sobrante = number;

    for (const { valor,imagen } of denominacionMoneda) {
      while (sobrante >= valor) {
        resultado = [...resultado, {valor, imagen}];
        sobrante -= valor;
      }
    }
    return resultado;
  };
  const suma = (datos)=>{
    let d = datos.reduce((anterior, actual) => anterior + actual.valor, 0);
    return d;
  };
  return (
    <Contenedor>
      <CntRes>
        <CntTextoVoz>
          <TextoGrande >
            $ {res}
          </TextoGrande>
          <div className="texto-voz">
            <TextoMediano>
              {writtenNumber(res)}
            </TextoMediano>
            <TextToSpeech texto={writtenNumber(res)}/>
          </div>
          
        </CntTextoVoz>
        <ImagenRes resultado={color ? true : null}/>
      </CntRes>
      
      <CntOpciones>
        {opciones.map((opc, index)=>(
          <Opciones key={index}
            res={ suma(opc) == res ? color : null}
            onClick={()=>{
              if (suma(opc) == res) {
                setColor("red");
                agregarDatos();
              }
          }}>
          {opc.map((datos, index)=>{
            
            return <Imagen src={datos.imagen} key={index}/>
          })}
          </Opciones>
        ))}
      </CntOpciones>
      <CntSiguiente onClick={()=>{
        setActualizar(true);
        setColor("");
      }} >
        <ImgSiguiente src={imgSiguiente}/>
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </CntSiguiente>
    </Contenedor>
  )
}

export default MostrarEjercicio