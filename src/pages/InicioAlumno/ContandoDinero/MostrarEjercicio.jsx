import {useState } from "react";
import styled from "styled-components";
import writtenNumber from 'written-number';
import {random} from "../../../utils/functions/NumeroAleatorio";
import moneda from "../../../assets/icons/moneda.png";
import billete from "../../../assets/icons/billete.png";
import imgSiguiente from "../../../assets/icons/right.svg";
import borrar from "../../../assets/icons/borrar.png";
import {TextoMediano, TextoGrande, CntSiguiente, ImgSiguiente, ImgBorrar} from "../../../components/Styled.global";
import Datos from "./Datos";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import { useMutation } from "@apollo/client";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dinero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;  
  border-radius: 10px;
`;

const CntMonedas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  .texto{

  }
`;

const MonedasBilletes = styled.img`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 500px){
    /* display: none; */
  }
`;

const CntTexto = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Texto = styled(TextoGrande)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MostrarEjercicio = () => {
  writtenNumber.defaults.lang = 'es';
  const [aleatorio, setAleatorio] = useState(()=>random(1, 150));
  const [cantidad, setCantidad] = useState([]);
  const [sumaTotal, setSumaTotal ] = useState(0);
  const dinero = [{cantidad:1, imagen:moneda},
  {cantidad:5, imagen:moneda},
  {cantidad:10, imagen:moneda},
  {cantidad:20, imagen:billete},
  {cantidad:50, imagen:billete}];

  const suma = cantidad.reduce((anterior, actual) => anterior + actual.cantidad, 0);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Contando Dinero",
            palabraGen:"Sin Palabra Generadora"
          }
        }
      });
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  };

  return (
    <Contenedor >
      <Dinero>
        {dinero.map((valor)=>(
          <CntMonedas key={valor.cantidad} onClick={()=>{
            setCantidad((arr)=>arr = [...arr, valor]);     
          }}>
            <MonedasBilletes src={valor.imagen}/>
            <CntTexto>
              <Texto>
                {valor.cantidad}
              </Texto>
            </CntTexto>
          </CntMonedas>
        ))}        
      </Dinero>
      <Datos aleatorio={aleatorio} 
        cantidad={cantidad}
        suma={suma}
      />
      <ImgBorrar src={borrar} onClick={()=>setCantidad([])}/>
      <CntSiguiente onClick={()=>{
        if (suma == aleatorio) {
          agregarDatos();
        }
        setAleatorio(()=>random(1, 150));
        setCantidad([])

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