import styled from 'styled-components';
import {FaAngleDown} from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import Logo_Colibri from '../../assets/icons/Logo_Colibri.svg';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { OBTENER_ALUMNO_ID } from '../../utils/graphql/query.js';


const Contenedor = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  background-color: #212638;
  
`;
const Wrapper = styled.div`
 width: 90%;
  /* max-width: 1300px; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  /* background-color: antiquewhite; */
`;

const LogoContenedor =  styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  /* font-size: 1.2rem; */
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 80px;
    left: ${props => (props.open ? "0" : "-100%")};
    width: 100%;
    height: 50vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;

    background-color: #212638;
  }
`;

const MenuItem = styled.div`
  height: 75%;
  margin: 0 10px;


  @media screen and (max-width: 960px){
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

const MenuItemLink = styled(Link)`
   display: flex;
   text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* padding: 0 2.5rem; */
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
  }

  

  @media screen and (max-width: 960px){
    width: 75%;
  }
`;

const Logo = styled.img`
  width: 200px;

`;

const OpcionModal = styled.div`
  width: 150px;
  height: auto;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: 1px white solid;
  border-radius: 5px;

  @media screen and (max-width: 960px){
    /* display: none; */
  }
`;

const OpcTexto = styled.p`
  padding: 5px;
  /* border: 1px white solid; */
`;

const Opciones = styled.div`
  
  position: absolute;
  width: 150px;
  top: 80px;
  display: ${props => props.$active ? "flex" : "none"};
  justify-content: center;
  
  align-items: center;
  border-radius: 5px;
  transition: 0.5s all ease;
  border: 1px solid #fff;
  background-color: #212638;
`;

const OpcLink = styled.div`
  text-align: center;
  text-decoration: none;
  color: white;
  width: 90%;
  padding: 5px 0;
  margin: 5px;
  cursor: pointer;
  font-size: smaller;

  /* background-color: blueviolet; */
`;

const Navbar = () => {
  // const act = useActualizarAsesor();

  const [active, setActive ]= useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();
  const {data, loading} = useQuery(OBTENER_ALUMNO_ID);

  if(loading) return 'Cargando...';
  const {obtenerAlumnoID} = data;

  const cerrarSesion =()=>{
    localStorage.removeItem('token');
    navigate('/sesion-alumno');
  }
  return (
    <Contenedor>
      <Wrapper>
        <LogoContenedor >
          <Logo  src={Logo_Colibri} />
        </LogoContenedor>
          
        <OpcionModal onClick={()=>setActive(!active)} >
          <OpcTexto >
            { obtenerAlumnoID ? obtenerAlumnoID.nombre.toUpperCase() : "Alumno"}
          </OpcTexto>
          <FaAngleDown />
          <Opciones $active={active}>
            <TbLogout />
            <OpcLink onClick={()=>cerrarSesion()} >Cerrar Sesión</OpcLink>
          </Opciones>
        </OpcionModal>
      </Wrapper>
    </Contenedor>
  )
}

export default Navbar;