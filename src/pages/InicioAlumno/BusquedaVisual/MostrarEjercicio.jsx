import { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { puzzleImagenesDos } from '../../../ImgPuzzles/recortes';
import {random} from "../../../utils/functions/NumeroAleatorio";
import {CntSiguiente, ImgSiguiente, TextoMediano, } from "../../../components/Styled.global";
import imgSiguiente from "../../../assets/icons/right.svg";
import ImagenRes from "../../../components/ImagenRes";
import {useMutation} from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import Piezas from './Piezas';
import Opciones from './Opciones';

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  @media (max-width: 960px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  
  .imagenes{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    @media (max-width: 960px) {
      width: 100%;
      margin: 10px 0;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    } 

    @media (max-width: 500px) {
      width: 100%;
      margin: 10px 0;
      flex-direction: column;
    } 
  }
`;

const ImagenPuzzle = styled.img`
  width: 100%;
  height: 100%;
`;

const ImagenCompleta = styled.div`
  width: 450px;
  height: 450px;

  @media (max-width: 960px) {
    
  }
`;

const Siguiente = styled(CntSiguiente)`

`;

const MostrarEjercicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRandom = useMemo(()=> puzzleImagenesDos,[]);
  const [imgCom, setImgCom]  = useState();
  const [numAleatorio, setNumAleatorio] = useState(()=>random(0, 8));
  const [piezaCorrecta, setPiezaCorrecta] = useState();
  const [pieces, setPieces] = useState([]);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

    const agregarDatos = async()=>{
      try {
        const {data} = await agregarActividadAvance({
          variables:{
            input:{
              avance:"1",
              nomActividad:"Búsqueda Visual",
              palabraGen:"Sin Palabra Generadora"
            }
          }
        });
        // console.log("Guardado");
      } catch (error) {
        console.log("Hubo un error: ", error);
      };
    }

  useEffect(() => {
    const numR = random(0, 8)
    setNumAleatorio(numR);

    setPieces(()=>{
      const puzzle = imgRandom[currentIndex];
  
      const datos = [
        { num: 0, img: puzzle[0] },
        { num: 3, img: puzzle[3] },
        { num: 6, img: puzzle[6] },
        { num: 1, img: puzzle[1] },
        { num: 4, img: puzzle[4] },
        { num: 7, img: puzzle[7] },
        { num: 2, img: puzzle[2] },
        { num: 5, img: puzzle[5] },
        { num: 8, img: puzzle[8] },
        { num: 9, img: puzzle[9] },
      ];

      const imaCompleta = datos.pop();
      setImgCom (imaCompleta);
      return (datos);
    })
   }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % puzzleImagenesDos.length);
  };

  return (
    <Contenedor>
      <div className='imagenes' >
        {piezaCorrecta == pieces[numAleatorio] ? 
          <ImagenCompleta >
            { imgCom ? <ImagenPuzzle src={ imgCom.img } /> : null}
          </ImagenCompleta> 
          : <Piezas piezas={pieces} num={numAleatorio}/>}

          <Opciones piezas={pieces} num={numAleatorio} setPiezaCorrecta={setPiezaCorrecta}/>
      </div>
      <div>
        <Siguiente onClick={()=>{
          handleNext();
          agregarDatos();
          setRes(false);
        }}>
          {piezaCorrecta == pieces[numAleatorio] ? <ImagenRes resultado={true}/> : <ImagenRes resultado={false}/>}
          
          <ImgSiguiente src={imgSiguiente}/>
          <TextoMediano >
            Siguiente
          </TextoMediano>

        </Siguiente>
      </div>
      
    </Contenedor>
  );
};

export default MostrarEjercicio;