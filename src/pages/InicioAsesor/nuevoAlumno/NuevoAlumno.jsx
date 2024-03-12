import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { FaAngleLeft } from "react-icons/fa6";
import AsesorLayout from '../../../components/PlantillaAsesor/AsesorLayout';
import {NUEVO_ALUMNO} from "../../../utils/graphql/mutation"


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

    @media screen and (max-width: 960px){
      
    }

    @media screen and (max-width: 500px){
      
    }
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
  
  max-width: 75%;

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;    
    margin-top: 15px;

    @media screen and (max-width: 960px){
      width: 100%;
    }

    @media screen and (max-width: 500px){
      width: 100% ;
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

const NuevoAlumno = () => {
    const navigate = useNavigate();
    const [mensaje,guardarMensaje] = useState(null);
    const [agregarAlumno] = useMutation(NUEVO_ALUMNO);

    const formik = useFormik({
    initialValues:{
      nombre:'',
      apellidoP:'',
      apellidoM:'',
      telefono:'',
      edad:"",
    },
    validationSchema:Yup.object({
      nombre:Yup.string()
        .required('El nombre es necesario'),
      apellidoP:Yup.string()
        .required('El apellido es necesario'),
      apellidoM:Yup.string()
        .required('El apellido es necesario'),
      edad:Yup.number()
        .required('Es necesario este campo')
        .positive('La edad minima es de 15')
        .integer('Indique su edad')
        .max(100, 'La edad maxima es de 100')
        .min(15, 'La edad minima es de 15'),
      telefono:Yup.string()
        .required('Este campo es necesario')
        .max(10,'Se necesitan 10 numeros')
        .min(10,'Se necesitan 10 numeros'),      
      }),
    onSubmit: async valores =>{
      // console.log('Enviando');
      // console.log(valores);
      const {nombre, apellidoM,apellidoP, edad, telefono} = valores;

      try {
        // const {data} = await agregarAlumno({
        await agregarAlumno({
          variables:{
            input:{
              nombre,
              apellidoM,
              apellidoP,
              edad:edad.toString(),
              telefono,
            },
            refetchQueries:['obtenerAlumnosAsesor']
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

  const mostrarMensaje =(mensaje)=>{
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
      text: "Alumno agregado con éxito",
      icon: "success",
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          // console.log(data);
          setTimeout(()=>{
            guardarMensaje(null);
            navigate('/inicio-asesor');
          },1000);
        } 
          catch (error) {
            console.log(error);
          };
        };
      });
    };

  return (
    <AsesorLayout >
      <Contenedor >
        
        <div className='cnt-contenido'>
          <StyledLinkBack to="/inicio-asesor" >
            <FaAngleLeft size={50}/>
          </StyledLinkBack>
          <p className='titulo'>Agrega a tu alumno</p>
        </div>
          
        {mensaje && mostrarMensaje()}

        <StyledFormulario>
          <form className='form' onSubmit={formik.handleSubmit}>
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
              <label className='label' htmlFor='edad'>Edad</label>
              <input className='input'
                id='edad'
                type='number' 
                placeholder='Edad'
                value={formik.values.edad}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.edad && formik.errors.edad ? (
              <div className=''>
                  <p className=''> Error</p>
                  <p> {formik.errors.edad}</p>
              </div>
              ) : null}
            <div className='datos'>
              <label className='label' htmlFor='telefono'>Telefono</label>
              <input className='input'
                id='telefono'
                type='text' 
                placeholder='Telefono'
                value={formik.values.telefono}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className=''>
                <p className=''> Error</p>
                <p> {formik.errors.telefono}</p>
              </div>
              ) : null}
            <div className='boton-sesion'>
              <input className="sesion" type='submit' value='Agregar' />
            </div>
            <StyledLinkCancel to="/inicio-asesor" >
              Cancelar
            </StyledLinkCancel>
          </form>
        </StyledFormulario>
      </Contenedor>
    </AsesorLayout>
  )
}

export default NuevoAlumno