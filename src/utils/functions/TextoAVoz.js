import axios from 'axios';

export async function TextoAVoz (texto){
  // Función para llamar a la API de Text-to-Speech y obtener el audio
    try {
      // Llama a la API de Text-to-Speech con el texto a convertir
      const response = await axios.post(
        'https://texttospeech.googleapis.com/v1/text:synthesize',
        {
          input: { text: texto },
          voice: { languageCode: 'es-Es', name: 'es-ES-Wavenet-D', ssmlGender: 'FEMALE' },
          audioConfig: { audioEncoding: 'OGG_OPUS' },
        },
        {
          params: { key: 'AIzaSyDJr2bkduFzaD6ovQx1CwSUyOLzHnez-TI' }, // Reemplaza con tu clave de API
        }
      );

      const audio = new Audio(`data:audio/wav;base64,${response.data.audioContent.toString('base64')}`);
      audio.play();

    } catch (error) {
      console.error('Error al convertir texto a audio:', error);
    }
}