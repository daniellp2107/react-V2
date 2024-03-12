// Importa las bibliotecas necesarias
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import bocina from "../assets/icons/bocina.svg";

const BotonVoz = styled.div`
    width: 50px;
    height: 50px;
    padding: 5px;
    margin: 10px;
    cursor: pointer;
    background-image: url(${bocina});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width:900px) {
    /* width: 100%; */
    gap: 20px;
    padding: 5px;
    /* background-color: blue; */
    }
    @media screen and (max-width:350px) {
    /* width: 100%; */
    gap: 20px;
    padding: 5px;
    /* background-color: blue; */
    }
`;
// Componente principal
const TextToSpeech = ({texto, mostrar}) => {
  // Estado para almacenar el texto a convertir y la respuesta del servicio
  const [textToConvert, setTextToConvert] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  // Función para llamar a la API de Text-to-Speech y obtener el audio
  const convertTextToSpeech = async () => {
    try {
      // Llama a la API de Text-to-Speech con el texto a convertir
      const response = await axios.post(
        'https://texttospeech.googleapis.com/v1/text:synthesize',
        {
          input: { text: texto },
          voice: { languageCode: 'es-Us', name: 'es-US-Neural2-A', ssmlGender: 'FEMALE' },
          audioConfig: { audioEncoding: 'OGG_OPUS' },
        },
        {
          params: { key: 'AIzaSyDJr2bkduFzaD6ovQx1CwSUyOLzHnez-TI' }, // Reemplaza con tu clave de API
        }
      );

      // Almacena la URL del audio en el estado
      // setAudioUrl(`data:audio/wav;base64,${response.data.audioContent.toString('base64')}`);
      // const audio = new Audio(`data:audio/wav;base64,${response.data.audioContent.toString('base64')}`);
      // audio.play();
      playAudio(`data:audio/wav;base64,${response.data.audioContent.toString('base64')}`);
    } catch (error) {
      console.error('Error al convertir texto a audio:', error);
    }
  };

  const playAudio = (data) => {
    const audio = new Audio(data);
    audio.play();
  };

  return (
    <div>
      
      <BotonVoz 
        onClick={convertTextToSpeech} 
      />
      {/* {audioUrl && (
        <audio autoPlay controls>
          <source src={audioUrl} type="audio/wav" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      )} */}
    </div>
  );
};

export default TextToSpeech;

