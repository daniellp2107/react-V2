import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import oculto from "../../../assets/icons/oculto.svg";
import imgSiguiente from "../../../assets/icons/right.svg";
import { random } from '../../../utils/functions/NumeroAleatorio';
import { palabras } from '../../../images/diccionario';
import { CntSiguiente, ImgSiguiente, TextoMediano } from '../../../components/Styled.global';
import ImagenRes from '../../../components/ImagenRes';
import { useMutation } from "@apollo/client";
import { AGREGAR_ACTIVIDAD_AVANCE } from "../../../utils/graphql/mutation";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .card-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
  }

  .card{
    width: 200px;
    height: 200px;
    perspective: 1000px;
    margin: 5px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
      width: 150px;
      height: 150px;
    }

    @media screen and (max-width: 500px) {
      width: 25%;
      height: 25%;
    }
  }

  .card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .card.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .card-front, .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 5px;
  }

  .card-front {
    border-radius: 5px;
    height: fit-content;
    
  }

  .card-back {
    width: 100%;
    height: 100%;
    display: flex;
    /* font-size: 24px;
    color: white; */
    border: 2px solid white;
    border-radius: 5px;
    }

  .img{
    width: 100%;
    border-radius: 20px;
  }
 
`;

const MostrarEjercicio = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [actualizar, setActualizar ] = useState(false);
  const images = [palabras[random(0,palabras.length - 1)],palabras[random(0,palabras.length - 1)],palabras[random(0,palabras.length - 1)],palabras[random(0,palabras.length - 1)]];

  const [agregarActividadAvance] = useMutation(AGREGAR_ACTIVIDAD_AVANCE);

  const agregarDatos = async()=>{
    try {
      const {data} = await agregarActividadAvance({
        variables:{
          input:{
            avance:"1",
            nomActividad:"Memorama",
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
    initializeCards();
    setActualizar(false);
  }, [actualizar]);

  useEffect(() => {
    if (flipped.length === 2) {
      checkForMatch();
    }
  }, [flipped]);

  const initializeCards = () => {
    let initialCards = [];
    for (let image of images) {
      initialCards.push({ nombre:image.alias, img:image.enlace, isFlipped: false });
      initialCards.push({ nombre:image.alias, img:image.enlace, isFlipped: false });
    }
    initialCards = shuffleCards(initialCards);
    setCards(initialCards);
  };

  const shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const flipCard = (index) => {
    if (flipped.length < 2) {
      let newCards = [...cards];
      newCards[index].isFlipped = true;
      setCards(newCards);
      setFlipped([...flipped, { index, nombre: newCards[index].nombre }]);
    }
  };

  const checkForMatch = () => {
    const [firstIndex, secondIndex] = [flipped[0].index, flipped[1].index];
    if (cards[firstIndex].nombre === cards[secondIndex].nombre) {
      setSolved([...solved, flipped[0].nombre]);
      setFlipped([]);
    } else {
      setTimeout(() => {
        let newCards = [...cards];
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
        setFlipped([]);
      }, 1000);
    }
  };

  const isCardFlipped = (index) => {
    return cards[index].isFlipped || solved.includes(cards[index].color);
  };
  return (
    <Contenedor>
        <div className='card-container'>
          {cards.map((card, index)=>(
            <div key={index}
              className={`card ${isCardFlipped(index) ? 'flipped' : ''} `}
              onClick={() => !isCardFlipped(index) && flipCard(index)}
            >
              <div className="card-inner">
                <img className='card-front img' src={oculto} />
                <img className=' img' src={card.img} />
                
              </div>
            </div>
          ))}
        </div>
        <CntSiguiente onClick={()=>{
          agregarDatos();
          setSolved([]);
          setActualizar(true);
        }}>
          <ImagenRes resultado={solved.length >=4 ? true : false}/>
          <ImgSiguiente src={imgSiguiente}/>
          <TextoMediano >
            Siguiente
          </TextoMediano>
        </CntSiguiente>
        
        
    </Contenedor>
  )
}

export default MostrarEjercicio;