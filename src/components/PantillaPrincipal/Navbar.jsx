import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaAngleDown, FaAngleUp,FaRegCircleXmark } from "react-icons/fa6";
import Logo_Colibri from '../../assets/icons/Logo_Colibri.svg';
import { useState } from 'react';

const Contenedor = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  background-color: #212638;

  @media screen and (max-width: 960px ){
    
  }
  
  @media screen and (max-width: 500px ){
    
  }
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

  @media screen and (max-width: 960px ){
    
  }
  
  @media screen and (max-width: 500px ){
    
  }
`;

const LogoContenedor =  styled(Link)`
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
  
  @media screen and (max-width: 500px ){
    margin: 0;
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
    border-radius: 10px;
    padding: 5px;
  }

  @media screen and (max-width: 960px){
    width: 75%;
  }
`;

const Logo = styled.img`
  width: 200px;

`;

const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: yellow;
    font-size: 35px;
  }
`;

const OpcionModal = styled.div`
  width: 100px;
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
    display: none;
  }
`;

const OpcTexto = styled.p`
  padding: 5px;
  /* border: 1px white solid; */
`;

const Opciones = styled.div`
  
  position: absolute;
  width: 100px;
  top: 80px;
  display: ${props => props.$active ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  transition: 0.5s all ease;
  background-color: #212638;
`;

const OpcLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: white;
  width: 90%;
  padding: 5px 0;
  margin: 5px;
  cursor: pointer;

  /* background-color: blueviolet; */
`;

const Navbar = () => {
  const [active, setActive ]= useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // console.log("showMobileMenu: ",showMobileMenu);
  // console.log("active: ",active);
  return (
    <Contenedor>
      <Wrapper>
        <LogoContenedor to={"/"}>
          <Logo  src={Logo_Colibri} />
        </LogoContenedor>
          
        <MobileIcon onClick={()=>setShowMobileMenu(!showMobileMenu)} >
          {showMobileMenu ? <FaRegCircleXmark /> : <FaBars />} 
        </MobileIcon>
        <Menu open={showMobileMenu} >
          <MenuItem>
            <MenuItemLink to="/" >
              Inicio
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/sobre-nosotros">
              Sobre Nosotros
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/contacto">
              Contacto
            </MenuItemLink>
          </MenuItem> 
          
          {
            showMobileMenu ? (
              <>
                <MenuItem open={showMobileMenu}>
                  <MenuItemLink to="/sesion-alumno">
                    Alumno
                  </MenuItemLink>
                </MenuItem>
                <MenuItem open={showMobileMenu}>
                  <MenuItemLink to="/sesion-asesor">
                    Asesor
                  </MenuItemLink>
                </MenuItem>
              </>
            ) : null
          }
          
        </Menu>
        <OpcionModal onClick={()=>setActive(!active)} onAuxClick={()=>setActive(false)}>
          <OpcTexto >
            Entrar
          </OpcTexto>
          <FaAngleDown />
          <Opciones $active={active}>
            <OpcLink to="/sesion-asesor">Asesor</OpcLink>
            <OpcLink to="/sesion-alumno" >Alumno</OpcLink>
          </Opciones>
        </OpcionModal>
      </Wrapper>
    </Contenedor>
  )
}

export default Navbar;