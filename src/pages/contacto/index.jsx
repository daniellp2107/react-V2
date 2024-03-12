import { useState } from "react";
import styled from "styled-components";
import {useFormik} from "formik";
import * as Yup from "yup";
import contacto from "./contact-us.png";
import tel from "./phone.png";
import email from "./email.png"

import MainLayout from "../../components/PantillaPrincipal/MainLayout";

const Contenedor = styled.div`
  width: 100%;
  min-height: calc(100vh - 270px);
  display: flex;
  justify-content: center;
  margin: 10px 0;

  .cnt-contenido{
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }

  .cnt-contenido .titulo {
    font-size: 40px;
    font-weight: 600;
    color: #00c49d;
    margin: 10px 0;
  }

  .cnt-contenido .texto{
    font-size: 18px;
    font-weight: 500;
    margin: 10px 0;
  }

  .cnt-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Centro = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;  
  align-items: center;
`;

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 960px){
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 500px){

    }
`;

const ImagenTexto = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-contacto{
    min-width: 50%;

    @media screen and (max-width: 960px){
      display: none;
    }

    @media screen and (max-width: 500px){

    }
  }
  .contacto-info{
    
  }

  .contacto{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .info{
    width: fit-content;
    display: flex;
    align-items: center;
    margin: 5px;
  }
`;

const StyledFormulario = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px){
    width: 100%;
    }

    @media screen and (max-width: 500px){

    }

  .formulario {
    width: 75%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    @media screen and (max-width: 960px){
      max-width: 80%;
    }

    @media screen and (max-width: 500px){
      max-width: 80%;
    }
  }

  .label {
    display: inline-flex;
    font-size: 1rem;
    margin-bottom: 5px;
  }

  .input {
    width: 350px;
    border: solid 1px black;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    font-size: 1rem;
  }

  .boton-sesion{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0; 
  }

  .sesion {
    width: 100%;
    background-color: #00c49d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-variant: small-caps;
    font-weight: 500;
    font-size: 16px;
  }

  .text-area{
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: solid 1px black;
    border-radius: 5px;
    background-color: #f8f8f8;
    font-size: 1rem;
    resize: none;
  }

  
`;
const Contacto = () => {
  const [mensaje,guardarMensaje] = useState(null);

  const formik = useFormik ({
    initialValues:{
      nombreCompleto:" ",
      email:" ",
      mensaje:" ",
    },
    validationSchema:Yup.object({
      nombreCompleto:Yup.string()
        .required("Este campo es necesario"),
      email:Yup.string()
        .required("Este campo es necesario")
        .email("Correo invalido"),
      mensaje:Yup.string()
        .required("Este campo es necesario")
    }),

    onSubmit:async valores => {
      console.log(valores);
      

    },
  });

  const mostrarMensaje =()=>{
    return(
      <div className=''>
        <p>{mensaje}</p>
      </div>
    );
  };

  return (
    <MainLayout >
      <Contenedor >
        <Centro>
          <div className="cnt-contenido">
            <p className="titulo">Contacto</p>
            <p className="texto"> ¿Tienes alguna duda, comentario o sugerencia? Escribenos y te respondreremos lo antes posible</p>
          </div>
          <div>
            <StyledInfo >
              <ImagenTexto >
                <img src={contacto} className="img-contacto"/>
                <div className="contacto-info">
                  <div className="contacto">
                    <div className="info">
                      <img src={tel}/>
                      <p>55 0123456789</p>
                    </div>
                    <div className="info">
                      <img src={email}/>
                      <p>unapalabradigital.com</p>
                    </div>
                  </div>
                </div>
              </ImagenTexto>
              <StyledFormulario>
                {mensaje && mostrarMensaje()}
                <form className="formulario" onSubmit={formik.handleSubmit}>
                  <div className='datos'>
                    <label className='label' htmlFor='nombreCompleto'>Nombre y Apellido</label>
                    <input className='input'
                      id='nombreCompleto'
                      type='text' 
                      placeholder='Nombre y apellido'
                      value={formik.values.nombreCompleto}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                  </div>

                  {formik.touched.nombreCompleto && formik.errors.nombreCompleto ? (
                    <div className=''>
                        <p className=''> Error</p>
                        <p> {formik.errors.nombreCompleto}</p>
                    </div>
                    ) : null}

                  <div className='datos'>
                    <label className='label' htmlFor='email'>Correo</label>
                    <input className='input'
                      id='email'
                      type='emal' 
                      placeholder='nombre@correo.com'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                  </div>

                  {formik.touched.email && formik.errors.email ? (
                    <div className=''>
                        <p> {formik.errors.email}</p>
                    </div>
                    ) : null}

                  <div className='datos'>
                    <label className='label' htmlFor='mensaje'>Mensaje</label>
                    <textarea className='text-area'
                      id='mensaje'
                      type='text' 
                      placeholder='Escribe tu mensaje'
                      value={formik.values.mensaje}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                  </div>
                  {formik.touched.mensaje && formik.errors.mensaje ? (
                    <div className=''>
                        <p> {formik.errors.mensaje}</p>
                    </div>
                    ) : null}

                  <div className='boton-sesion'>
                    <input className="sesion" type='submit' value='Enviar' />
                  </div>
                </form>
              </StyledFormulario>
              
            </StyledInfo>
          </div>
        </Centro> 
      </Contenedor>
    </MainLayout>
  )
}

export default Contacto