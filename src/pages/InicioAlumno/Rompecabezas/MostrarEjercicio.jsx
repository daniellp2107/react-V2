import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { puzzleImagenesDos } from '../../../ImgPuzzles/recortes';
import { useEffect } from 'react';
import {CntSiguiente, ImgSiguiente, TextoMediano, } from "../../../components/Styled.global";
import imgSiguiente from "../../../assets/icons/right.svg";
import ImagenRes from "../../../components/ImagenRes";
import {useMutation} from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";
import Piezas from './Piezas';

const Contenedor = styled.div`
  width: 75%;
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
      flex-direction: column;
      align-items: center;
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
    display: none;
  }
`;

const Siguiente = styled(CntSiguiente)`

`;

const MostrarEjercicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [res, setRes] = useState(false);
  const imgRandom = useMemo(()=> puzzleImagenesDos,[]);
  const [imgCom, setImgCom]  = useState();

  const [pieces, setPieces] = useState([]);

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

    const agregarDatos = async()=>{
      try {
        const {data} = await agregarActividadAvance({
          variables:{
            input:{
              avance:"1",
              nomActividad:"Rompecabezas",
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
      ]
  
      const imaCompleta = datos.pop();
      setImgCom (imaCompleta);
      return shufflePieces(datos);
    })
   }, [currentIndex]);

  const movePiece = (dragIndex, hoverIndex) => {
    const newPieces = [...pieces];
    newPieces[dragIndex] = pieces[hoverIndex];
    newPieces[hoverIndex] = pieces[dragIndex];
    setPieces(newPieces);

    arrResuelto(newPieces);
  };

  const arrResuelto = (pieces) => {
    console.log(pieces);
    const arregloCorrecto = [0, 3, 6, 1, 4, 7, 2, 5, 8];
    if (arregloCorrecto.every((value, index) => value === pieces[index].num)) {
      console.log("Coinciden");
      setRes(true);
    } else {
      console.log("No Coinciden");
      setRes(false);
    }
  }

  const shufflePieces = (arr) => {
    const shuffledPieces = [...arr].sort(() => Math.random() - 0.5);
    return (shuffledPieces);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % puzzleImagenesDos.length);
  };

  return (
    <Contenedor>
      <div className='imagenes' >
        <Piezas piezas={pieces} movePiece={movePiece}/>
        <ImagenCompleta >
          {imgCom ? <ImagenPuzzle src={ imgCom.img } /> : null}
        </ImagenCompleta>
      </div>
      <div>
        <Siguiente onClick={()=>{
          handleNext();
          agregarDatos();
          setRes(false);
        }}>
          <ImagenRes resultado={res}/>
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