import { useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import {useMutation} from "@apollo/client";
import { AUTENTICAR_ASESOR_MUTATION } from "../../utils/graphql/mutation";
import MainLayout from "../../components/PantillaPrincipal/MainLayout";

const StyledContenedor = styled.div`
  min-height: calc(100vh - 270px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  .cnt-contenido{
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
  }

  .titulo {
    font-size: 32px;
    font-style: bold;
    font-weight: 600;
  }
`;

const StyledMensaje = styled.div`
  width: 60%;
  p{
    font-size: 20px;
    font-style: medium;
  }
`;

const StyledFormulario = styled.div`
  min-width: 40%;

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }

  .cnt-input{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  
  .contenedor{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
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
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sesion {
    width: 100%;
    background-color: #00c49d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-style: italic;
    font-variant: small-caps;
    font-weight: 600;

  }
`;

const StyledLink = styled(Link)`
  text-align: center;
`;

const SesionAsesor = () => {
 //estado para mensaje
 const [mensaje, guardarMensaje] = useState(null);

 //mutation para el nuevo assesor
 const [autenticarAsesor] = useMutation(AUTENTICAR_ASESOR_MUTATION);
 
 //navegación
 const navigate = useNavigate();

 const formik = useFormik({
   initialValues:{
     email:'daniel@correo.com',
     password:'contraseña',
   },
   validationSchema:Yup.object({
     email:Yup.string()
     .email('El correo no es valido')
     .required('El correo es obligatorio'),
     password:Yup.string()
       .required('La contraseña no puede estar vacio')
       .min(6,'La contraseña debe tener almenos 6 caracteres'),
   }),
   onSubmit: async valores =>{
    //limpiar el lacol storage
    localStorage.removeItem('token');

     const {email, password} = valores;
     try {
       const {data} = await autenticarAsesor({
         variables:{
           input:{
             email,
             password
           }
         }
       });
       guardarMensaje('Autenticando...');

       //guardar el token en el localstorage
       const {token} = data.autenticarAsesor;
       localStorage.setItem('token', token);
       //redireccionar hacia pagina del asesor
       
       setTimeout(()=>{
        guardarMensaje(null);
        navigate('/inicio-asesor'); 
       },3000);
     } catch (error) {
       guardarMensaje(error.message.replace('GraphQL error', ''));
       console.log(error.message);
       setTimeout(() => {
         guardarMensaje(null);
       }, 3000);
     }
   }
 });
 const mostrarMensaje =()=>{
   return(
     <div>
       <p>{mensaje}</p>
     </div>
   );
 };
  return (
    <MainLayout>
      <StyledContenedor >
        <div className="cnt-contenido">
          <p className="titulo">Inicia Sesión</p>
        </div>

        <StyledMensaje>
          <p>Para poder disfrutar de todas la herramientas crea una cuenta con tu correo y una contraseña. Si ya tienes una cuenta, inicia sesión con tus datos</p>
        </StyledMensaje>

        <StyledFormulario>
          <form className='form' onSubmit={formik.handleSubmit}>
            {mensaje && mostrarMensaje()}
            <div className="cnt-input">
              <div className='contenedor'>
                <label className='label' htmlFor='email'>Correo</label>
                <input className='input' id='email' type='email' placeholder='Ingresa tu correo' name='email' 
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />
              </div>
            </div>
            
            {formik.touched.email && formik.errors.email ? (
              <div className=''>
                <p className=''> Error</p>
                <p> {formik.errors.email}</p>
              </div>
            ) : null}
            <div className='cnt-input'>
              <div className="contenedor">
                <label className='label' htmlFor='password'>Contraseña</label>
                <input className='input' placeholder='Ingresa tu contraseña' name='password'
                  id='password'
                  type='password' 
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              
            </div>
            {formik.touched.password && formik.errors.password ? (
                <div className=''>
                  <p className=''> Error</p>
                  <p> {formik.errors.email}</p>
                </div>
              ) : null}

            <div className='boton-sesion'>
              <input className="sesion" type='submit' value='Iniciar sesión' />
            </div>
            <p className='mensaje-contraseña'>Si olvidaste tu contraseña, <Link to="/"> da clic aquí.</Link> </p> 

            <p>¿Aún no tines cuenta?</p>

            <div className='boton-sesion'>
              <StyledLink to="/inicio-asesor/nueva-cuenta" className='sesion' >Crear nueva cuenta</StyledLink>
            </div>
          </form>
        </StyledFormulario>

        
      </StyledContenedor>
    </MainLayout>
  )
}

export default SesionAsesor;