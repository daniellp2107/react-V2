import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {useQuery} from "@apollo/client";
import { CiEdit } from "react-icons/ci";
import { OBTENER_ALUMNOS_ASESOR, OBTENER_ASESOR } from "../../utils/graphql/query";
import AsesorLayout from "../../components/PlantillaAsesor/AsesorLayout";
import Alumno from "./Alumno";
import fondo from "./fondo.png";

const StyledContenedor = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  .text-asesor{
    width: 80%;
    display: flex;
    justify-content: flex-start;
  }

  .texto {
    margin: 0 10px;
    font-size: 32px;
    font-weight: 400;
  }
`;

const StyledTitulo = styled.div`
  width: 80%;
  /* background-color: aliceblue; */

  p{
    color: #00c49d;
    font-size: 28px;
    font-weight: 600;
  }
`;

const StyledCntAsesor = styled.div`
  width: 80%;
  height: fit-content;
  border: 3px solid #00c49d;
  border-radius: 5px;

  @media screen and (max-width: 960px){
    
  }

  @media screen and (max-width: 960px){
    
  }

  .datos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 960px){
      flex-direction: column;
    }

    @media screen and (max-width: 960px){
      flex-direction: column;
    }
  }

  .dato{
    width: 40%;
    display: flex;
    margin: 10px;
  }

  .edit{
    position: absolute;
    right: 10%;
  }

  .texto {
    font-size: 16px;
    font-weight: 400;
    margin: 0 10px;
    font-style: italic;
  }

  .texto.negrita {
    font-size: 16px;
    font-weight: 600;
    margin: 0 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #00c49d;

  p{
    font-size: 18px;
    font-weight: 700;
  }
`;

const StyledButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 960px){
    justify-content: center;
    
  }

  @media screen and (max-width: 500px){
    
  }
`;

const StyledCntAlumnos = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .num-alumnos{
    margin: 0 10px;
    font-size: 32px;
    font-weight: 400;   
  }

  .cnt-alumnos{
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledImg = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${fondo});
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: center;
  p{
    font-size: 16px;
    font-weight: 500;
    color: #212638;
  }
`;

const InicioAsesor = () => {
  const navigate = useNavigate();

  //datos del asesor
  const datosAsesor = useQuery(OBTENER_ASESOR);
  //todos los alumnos del asesor
  const datosAlumnos = useQuery(OBTENER_ALUMNOS_ASESOR);

  if (datosAlumnos.loading) return "Cargando... ";
  if (datosAsesor.loading) return "Cargando... ";

  const {obtenerAlumnosAsesor}=datosAlumnos.data;
  const {obtenerAsesor}=datosAsesor.data;

  return (
    <AsesorLayout>
      <StyledContenedor>
        <StyledTitulo>
          <p>Espacio de trabajo</p>
        </StyledTitulo>
        <div className="text-asesor">
          <p className="texto">Asesor</p>
        </div>
        
        <StyledCntAsesor>
          <div className="datos">
            <div className="dato">
              <p className="texto negrita">Nombre</p>
              <p className="texto">{obtenerAsesor.nombre.toUpperCase()}</p>
              <p className="texto">{obtenerAsesor.apellidoP.toUpperCase()}</p>
            </div>
            <div className="dato">
              <p className="texto negrita">Ciudad</p>
              <p className="texto ">{obtenerAsesor.ciudad ? obtenerAsesor.ciudad : "ciudad" }</p>
            </div>
            <div className="dato">
              <p className="texto negrita">Correo</p>
              <p className="texto ">{obtenerAsesor.email}</p>
            </div>
            <div className="edit">
              <CiEdit size={"35px"}/>
            </div>
          </div>
        </StyledCntAsesor>
        <StyledButton >
            <StyledLink to="/inicio-asesor/nuevoAlumno">
              <p>Nuevo Alumno</p>
            </StyledLink>
        </StyledButton>
        <StyledCntAlumnos >
          <div className="cnt-alumnos">
            <p className="num-alumnos">Alumnos [{obtenerAlumnosAsesor.length}]</p>
          </div>
          { obtenerAlumnosAsesor.length == [] ? <StyledImg ><p>Aun no tienes alumnos registrados</p></StyledImg> : 
            obtenerAlumnosAsesor.map(alumno=>(
              <Alumno key={alumno.id} alumno={alumno}/>
            ))  
          }
          
        </StyledCntAlumnos>
        

      </StyledContenedor>
    </AsesorLayout>
  )
}

export default InicioAsesor;
