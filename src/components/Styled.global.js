import styled from "styled-components";

export const Contenedor = styled.div`
  width: 100%;
  min-height: 100vh;
  display:flex;
  justify-content: center;
`;

export const Centro = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

//Para instrucciones Principales de las actividades
export const TextoGrande = styled.p`
  width: 100%;
  font-size:34px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size:2rem; */
  font-weight:700;
  font-style: normal;
  text-align: center;
  /* background-color: blue; */

  @media screen and (max-width:960px) {
    width: 100%;
    height: fit-content;
    /* text-align: center; */
    font-size: 2rem;  
    /* background-color: blue; */
  }

  @media screen and (max-width:500px) {
    width: 100%;
    height: fit-content;
    /* text-align: center; */
    font-size: 1.5rem;
    /* background-color: blue; */
    
  }
`;
//Para instruccion secundaria o mensajes
export const TextoMediano = styled.p`
  width: 100%;
  font-size:20px;
  font-style: normal;
  font-weight:600;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media screen and (max-width:960px) {
    gap: 20px;    
  }

  @media screen and (max-width:500px) {
    width: 80%;
    gap: 20px;
    
  }
`;

export const TextoNormal = styled.p`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  text-align: center;

  @media screen and (max-width:960px) {
    height: auto;
    gap: 20px;
    font-size: 1rem;
  }

  @media screen and (max-width:500px) {
    width: 80%;
    gap: 20px;
    font-size: 1rem;
  }
`;

export const CntSiguiente = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
`;

export const ImgSiguiente = styled.img`
  width: 50px;
`;

export const ImgBorrar = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;