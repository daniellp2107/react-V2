import styled from "styled-components";
import MainLayout from "../../components/PantillaPrincipal/MainLayout";
import { Link } from "react-router-dom";

const Contenedor = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-height: calc(100vh - 270px);
`;

const Privacidad = () => {
  return (
    <MainLayout>
      <Contenedor >
        <h1 >Aviso de privacidad</h1>

        <p>Fecha de última actualización: [Fecha]</p>

        <p>[Nombre de la Empresa/Educational Platform] ("nosotros", "nuestro" o "la Empresa") se compromete a proteger la privacidad de los usuarios de nuestra plataforma educativa en línea para adultos. Este Aviso de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted proporciona en nuestro sitio web.</p>

        <dl>
          <dt>1. Información Recopilada: </dt>  
            <dd>Recopilamos información personal de los usuarios con el fin de proporcionar servicios educativos personalizados. La información que recopilamos puede incluir, entre otros:
              <ul>
                <li>Información de registro, como nombre, dirección de correo electrónico y contraseña.</li>
                <li>Datos de perfil, como información educativa y profesional.</li>
                <li>Información de pago para transacciones relacionadas con servicios premium.</li>
              </ul>
            </dd>
          
          <dt>2. Uso de la Información:</dt>
          <dd>
            Utilizamos la información recopilada para los siguientes propósitos:
            <ul>
                <li>Personalizar la experiencia de aprendizaje.</li>
                <li>Procesar transacciones y pagos.</li>
                <li>Enviar actualizaciones y comunicaciones relacionadas con la plataforma.</li>
                <li>Mejorar y optimizar nuestros servicios.</li>
              </ul>
          </dd>
          <dt>3. Compartir Información:</dt>
          <dd>
            No compartimos su información personal con terceros sin su consentimiento, excepto cuando sea necesario para proporcionar servicios solicitados por usted o cumplir con requisitos legales.
          </dd>

          <dt>4. Cookies y Tecnologías Similares:</dt>
          <dd>
            Utilizamos cookies y tecnologías similares para mejorar la funcionalidad del sitio web y recopilar información sobre el uso del mismo.
          </dd>

          <dt>5. Seguridad de la Información:</dt>
          <dd>
            Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados o divulgación.
          </dd>

          <dt>6. Sus Derechos:</dt>
          <dd>
            Usted tiene el derecho de acceder, corregir, actualizar o eliminar su información personal. Puede ejercer estos derechos contactándonos a través de [correo electrónico de contacto].
          </dd>

          <dt>7. Cambios en el Aviso de Privacidad:</dt>
          <dd>
            Nos reservamos el derecho de actualizar este Aviso de Privacidad en cualquier momento. La fecha de la última actualización se indicará al principio del aviso.
          </dd>

          <p>
            Al utilizar nuestra plataforma educativa para adultos, usted acepta los términos de este Aviso de Privacidad. Si tiene preguntas o inquietudes, no dude en ponerse en contacto con nosotros a través de [correo electrónico de contacto].
          </p>

          <ul>
            <li>Una plabara digital - [App-rende]</li>
            <li>[Dirección]</li>
            <li>[Correo electrónico de contacto]</li>
            <li>
              <Link to={"/terminos"}>Terminos y condiciones</Link>
            </li>
          </ul>

          <p>Fecha de última actualización: [Fecha]</p>
        </dl>
      </Contenedor>
    </MainLayout>
  )
}

export default Privacidad;

