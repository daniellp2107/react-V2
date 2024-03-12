import React, { useState, useRef } from 'react';
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
    /* background-color: #6000A1; */

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

const AudioPlayer = ({ audioList }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const playPauseToggle = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioList.length);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? audioList.length - 1 : prevIndex - 1
    );
  };

  const handleEnded = () => {
    // Auto-play next track when the current track ends
    playNextTrack();
  };

  return (
    <>
      
      <audio ref={audioRef} src={audioList[currentTrackIndex]} onEnded={handleEnded} />
        {/* <button onClick={playPreviousTrack}>Anterior</button> */}
        <BotonVoz onClick={playPauseToggle} />
        {/* <button onClick={playNextTrack}>Siguiente</button> */}
    </>
  );
};

export default AudioPlayer;