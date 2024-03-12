import styled from "styled-components";
import { TextoGrande, TextoMediano } from "../../../components/Styled.global";
import writtenNumber from 'written-number';
import TextToSpeech from "../../../components/TextToSpeechComponent";
import ImagenRes from "../../../components/ImagenRes";
import igual from "../../../assets/icons/igual.png";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import { useMutation } from "@apollo/client";

const Contenedor = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 10px;

  @media screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .cantidad{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    @media screen and (max-width: 960px){
      min-width: fit-content;
    }

    @media screen and (max-width: 500px){
      width: 100%;
    }

  }

  .imgDinero{
    width: auto;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 10px;

    @media screen and (max-width: 960px){
      width: auto;
    }

    @media screen and (max-width: 500px){
      width: 100%;
    }
  }

  .sumaTotal{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    @media screen and (max-width: 960px){
      width: fit-content;
    }
    @media screen and (max-width: 500px){
      width: fit-content;
      gap: 25px;
      
    }
    .igual{
      width: 50px;
    }
  }
`;

const CntMonedas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

const MonedasBilletes = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (max-width: 500px){
    
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

const Datos = ({aleatorio, cantidad, suma}) => {
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
      console.log(data);
    } catch (error) {
      console.log("Hubo un error: ", error);
    };
  };

  return (
    <Contenedor >
      <div className="cantidad">
        <TextoGrande>
          $ {aleatorio}
        </TextoGrande>
        <TextoMediano>
          {writtenNumber(aleatorio)}
        </TextoMediano >
        <TextToSpeech texto={writtenNumber(aleatorio)}/>
      </div>
      <div className="imgDinero">
      {cantidad.map((valor,index)=>(
          <CntMonedas key={index} >
            <MonedasBilletes src={valor.imagen}/>
            <CntTexto>
              <Texto>
                {valor.cantidad}
              </Texto>
            </CntTexto> 
          </CntMonedas>
          
        ))}
      </div>
      <div className="sumaTotal">
        <img className="igual" src={igual}/>
        <TextoGrande>
          {suma }
        </TextoGrande>        
        <ImagenRes resultado={suma == aleatorio ? true : false}/>
      </div>
      
    </Contenedor>
  )
}

export default Datos
