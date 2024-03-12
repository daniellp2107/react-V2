import styled from "styled-components";
import MainLayout from "../../components/PantillaPrincipal/MainLayout";
import Principal from "./Principal";
import InfoUno from "./InfoUno";
import InfoDos from "./InfoDos";
import InfoTres from "./InfoTres";

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <MainLayout>
      <Contenedor>
        <Principal />
        <InfoUno />
        <InfoDos />
        <InfoTres />
      </Contenedor>
    </MainLayout>
  )
}

export default Home;