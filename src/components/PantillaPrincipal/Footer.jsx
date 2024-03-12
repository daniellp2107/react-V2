import styled from "styled-components";
import line from '../../assets/icons/line.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import { Link } from "react-router-dom";

const Contenedor = styled.div`
  width: 100%;
  height: 170px;
  color: white;

  background-color: #212638;
`;

const CntLine = styled.div`
  width: 90%;
  margin: auto;

`;

const LineImg = styled.img`
  width: 100%;
  margin-bottom: 5px;
`;

const CntInfo = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

const Redes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RedesMensaje = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px){
    display: none;
  }
`;

const RedesIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconsLink = styled(Link)`
  margin: 0 10px;

`;
const Icons = styled.img`
  width: 50px;
  /* background-color: aquamarine; */
`;

const CntAviso = styled.div`
  @media screen and (max-width: 960px){
    margin: 10px;
  }
`;

const AvisoLink = styled(Link)`
  color: white;

`;

const CntDir = styled.div`
  @media screen and (max-width: 960px){
    margin: 10px;
  }
`;

const Footer = () => {
  return (
    <Contenedor>
      <CntLine >
        <LineImg src={line}/>
      </CntLine>
      <CntInfo>
        <Info>
          <Redes >
            <RedesMensaje>
              Encuéntranos en nuestras redes sociales
            </RedesMensaje>
            <RedesIcons >
              <IconsLink >
                <Icons src={facebook} />
              </IconsLink>
              <IconsLink>
                <Icons src={instagram} />
              </IconsLink>
              <IconsLink>
                <Icons src={twitter} />
              </IconsLink>
              <IconsLink>
                <Icons src={linkedin} />
              </IconsLink>
              
            </RedesIcons>
          </Redes>
          <CntAviso >
            <AvisoLink to={"/aviso-privacidad"}>
              Aviso de privacidad
            </AvisoLink>
          </CntAviso>
          <CntDir>
            Direccion calle no. 123 Col. Alguna
          </CntDir>
        </Info>
        
      </CntInfo>
      
    </Contenedor>
  )
}

export default Footer;