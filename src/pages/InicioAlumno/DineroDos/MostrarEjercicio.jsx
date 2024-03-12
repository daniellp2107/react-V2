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
import {TextoAVoz} from "../../../utils/functions/TextoAVoz";
import {ordenAleatorio} from "../../../utils/functions/OrdenAleatorio";
import { CntSiguiente, TextoGrande, TextoMediano, ImgSiguiente } from "../../../components/Styled.global";
import { useMutation } from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";

const Contenedor = styled.div`
  width:60%;
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

const CntImagenes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
  
`;

const Imagen = styled.img`
  width: 150px;
  height: 100px;
`;

const CntOpciones = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
  gap: 10px;
  
`;

const Opciones = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px 0;
  padding: 05px;
  background-color: ${props=> props.res || "cornflowerblue"};
`;
const MostrarEjercicio = () => {
  // const [aleatorio, setAleatorio] = useState();
  writtenNumber.defaults.lang = 'es';
  const [res, setRes] = useState();
  const [actualizar,setActualizar] = useState(false);
  const [dinero, setDinero] = useState([]);
  const [opciones, setOpciones ]= useState([]);
  const [color, setColor] = useState("");

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Contando Dinero 2",
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
    setDinero(()=>convertirNumero(aleatorio));
    setOpciones(()=>ordenAleatorio( [random(1,150), random(1,150),random(1,150),aleatorio]));
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
  }

  return (
    <Contenedor>
      <CntImagenes>
        {dinero.map((din,index)=>(
          <Imagen src={din.imagen} key={index}/>
          // <div key={index}>{din.valor}</div>
        ))}
      </CntImagenes>

      <CntOpciones>
        {opciones.map((opc, index)=>(
          <Opciones key={index} res={opc == res ? color : null} onClick={()=>{
            TextoAVoz(writtenNumber(opc))
            if (opc == res) {
              setColor("#6c6d46");
              agregarDatos();
            }
          }}>
            <TextoGrande >
              $ {opc}
            </TextoGrande>
            <TextoMediano>
              {writtenNumber(opc)}
            </TextoMediano>
          </Opciones>
        ))}
      </CntOpciones>

      <CntSiguiente onClick={()=>{
        setActualizar(true);
        setColor("");
      }}>
        <ImgSiguiente src={imgSiguiente} />
        <TextoMediano>
          Siguiente
        </TextoMediano>
      </CntSiguiente>
    </Contenedor>
    
  )
}

export default MostrarEjercicio