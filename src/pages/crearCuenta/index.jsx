import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { FaAngleLeft } from "react-icons/fa6";
import MainLayout from '../../components/PantillaPrincipal/MainLayout';
import { AGREGAR_ASESOR } from '../../utils/graphql/mutation';

const Contenedor = styled.div`
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
    align-items: center;
  }

  .titulo {
    font-size: 32px;
    font-style: bold;
    font-weight: 600;
  }
`;

const StyledLinkBack = styled(Link)`
  text-decoration: none;
  color: black;
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

  .terminos {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLinkCancel = styled(Link)`
  width: 100%;
  height: 50px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 5px;
  font-variant: small-caps;
  font-weight: 600;
  font-size: 16px;
  margin: 10px 0;
  
  color: white;
  background-color: #F23048;

`;

const CrearCuenta = () => {
    const navigate = useNavigate();
    const [mensaje,guardarMensaje] = useState(null);
    const [agregarAlumno] = useMutation(AGREGAR_ASESOR, 
      {
        refetchQueries:['obtenerAlumnosAsesor']
      }
    );

    const formik = useFormik({
    initialValues:{
      nombre:'',
      apellidoP:'',
      apellidoM:'',
      email:'',
      ciudad:"",
      password:"",
    },
    validationSchema:Yup.object({
      nombre:Yup.string()
        .required('El nombre es necesario'),
      apellidoP:Yup.string()
        .required('El apellido es necesario'),
      apellidoM:Yup.string()
        .required('El apellido es necesario'),
      email:Yup.string()
        .required('Este campo es necesario')
        .email('Correo Invalido'),
      ciudad:Yup.string()
        .required('Es necesario este campo'),
      password:Yup.string()
        .required('Este campo es necesario')
      }),

    onSubmit: async valores =>{
      // console.log('Enviando');
      // console.log(valores);
      const {nombre, apellidoM,apellidoP, email, ciudad, password} = valores;

      try {
        // const {data} = await agregarAlumno({
        await agregarAlumno({
          variables:{
            input:{
              nombre,
              apellidoM,
              apellidoP,
              email,
              ciudad,
              password
            },
          }
        });
        // console.log(data);
        guardarMensaje('Guardando nuevo alumno...');
        //redireccionar hacia pagina de alumno
        setTimeout(()=>{
          confirmarAlumno();  
        },1000);
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
      <div className=''>
        <p>{mensaje}</p>
      </div>
    );
  };

  //eliminar un cliente
  const confirmarAlumno =()=>{
    Swal.fire({
      title: "¡Listo!",
      text: "Cuenta creada",
      icon: "success",
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          // console.log(data);
          setTimeout(()=>{
            guardarMensaje(null);
            navigate('/sesion-asesor');
          },1000);
        } 
          catch (error) {
            console.log(error);
          };
        };
      });
    };

  return (
    <MainLayout >
      <Contenedor >
        
        <div className='cnt-contenido'>
          <StyledLinkBack to="/sesion-asesor" >
            <FaAngleLeft size={50}/>
          </StyledLinkBack>
          <p className='titulo'>Agrega a tu alumno</p>
        </div>
          
        {mensaje && mostrarMensaje()}

        <StyledFormulario>
          <form className='formulario-nuevoAlumno' onSubmit={formik.handleSubmit}>
            <div className='datos'>
              <label className='label' htmlFor='nombre'>Nombre</label>
              <input className='input'
                id='nombre'
                type='text' 
                placeholder='Nombre alumno'
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div className=''>
                  <p className=''> Error</p>
                  <p> {formik.errors.nombre}</p>
              </div>
              ) : null}
            <div className='datos'>
              <label className='label' htmlFor='apellidoP'>Apellido Paterno</label>
              <input className='input'
                id='apellidoP'
                type='text' 
                placeholder='Apellido Paterno'
                value={formik.values.apellidoP}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.apellidoP && formik.errors.apellidoP ? (
              <div className=''>
                <p className=''> Error</p>
                <p> {formik.errors.apellidoP}</p>
              </div>
              ) : null}

            <div className='datos'>
              <label className='label' htmlFor='apellidoM'>Apellido Materno</label>
              <input className='input'
                id='apellidoM'
                type='text' 
                placeholder='Apellido Materno'
                value={formik.values.apellidoM}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
              {formik.touched.apellidoM && formik.errors.apellidoM ? (
              <div className=''>
                <p className=''> Error</p>
                <p> {formik.errors.apellidoP}</p>
              </div>
              ) : null}

            <div className='datos'>
              <label className='label' htmlFor='email'>Email</label>
              <input className='input'
                id='email'
                type='email' 
                placeholder='cuenta@dominio.com'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className=''>
                  <p className=''> Error</p>
                  <p> {formik.errors.email}</p>
              </div>
              ) : null}
            <div className='datos'>
              <label className='label' htmlFor='ciudad'>Ciudad</label>
              <input className='input'
                id='ciudad'
                type='text' 
                placeholder='Ecatepec de Morelos, México'
                value={formik.values.ciudad}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.ciudad && formik.errors.ciudad ? (
              <div className=''>
                <p className=''> Error</p>
                <p> {formik.errors.ciudad}</p>
              </div>
              ) : null}
            <div className='datos'>
              <label className='label' htmlFor='password'>Contraseña</label>
              <input className='input'
                id='password'
                type='password' 
                placeholder='Contraseña'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className=''>
                <p className=''> Error</p>
                <p> {formik.errors.password}</p>
              </div>
              ) : null}
            <div className='terminos'>
              <input type='checkbox' value=""/>
              <p>Confirmo que he leido y acepto los terminos de privacidad</p>
            </div>
            <div className='boton-sesion'>
              <input className="sesion" type='submit' value='Agregar' />
            </div>
            <StyledLinkCancel to="/sesion-asesor" >
              Cancelar
            </StyledLinkCancel>
            
          </form>
        </StyledFormulario>
      </Contenedor>
    </MainLayout>
  )
}

export default CrearCuenta;