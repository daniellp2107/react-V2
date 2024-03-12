import {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup"
import {useMutation} from "@apollo/client"
import {AUTENTICAR_ALUMNO} from "../../utils/graphql/mutation";
import MainLauyout from "../../components/PantillaPrincipal/MainLayout";
import Instrucciones from "../../components/Instrucciones";
import { InicioSesionAlumno } from "../../Voz/indice.js";
import imagen from "./imagen.png";


const Contenedor = styled.div`
  width: 100%;
  min-height: calc(100vh - 270px);

  display: flex;
  justify-content: center;
  
`;

const Imagen = styled.div`
  width: 50%;
  min-width: 50%;
  max-width: 75%;
  display: flex;
  padding: 10px;

  .img{
    min-width: 50%;
  }

  @media screen and (max-width: 960px){
    display: none;
  }
  @media screen and (max-width: 500px){
    
  }
`;

const Formulario = styled.div`
  min-width: 30%;
  padding: 10px;

.formulario {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
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


const Centro = styled.div`
  width: 80%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;  
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const SesionAlumno = () => {
  const navigate = useNavigate();
  const [mensaje, guardarMensaje] = useState(null);
  const [autenticarAlumno] = useMutation(AUTENTICAR_ALUMNO);

  const formik = useFormik({
    initialValues:{
      nombre:'Almejandra',
      apellidoP:'Coral',
      apellidoM:'Almeja',
    },
    validationSchema:Yup.object({
      nombre:Yup.string()
        .required('El nombre es necesario'),
      apellidoP:Yup.string()
        .required('El primer apellido es necesario'),
      apellidoM:Yup.string()
        .required('El segundo apellido es necesario')
    }),
    onSubmit: async valores =>{
      //limpiar el local storage
      localStorage.removeItem('token');

      const {nombre, apellidoP} = valores;

      try {
        const {data} = await autenticarAlumno({
          variables:{
            input:{
              nombre,
              apellidoP
            }
          }
        });

        // console.log(data);
        guardarMensaje('Autenticando...')

        //guardar el token en el localstoragea
        const {token} = data.autenticarAlumno;
        localStorage.setItem('token', token);

        //redireccionar hacia pagina de alumno
        setTimeout(() => {
          guardarMensaje(null);
          navigate('/inicio-alumno');
        }, 3000);
      } catch (error) {
        guardarMensaje(error.message.replace('GraphQL error', ''));
        console.log(error.message);
        setTimeout(() => {
          guardarMensaje(null);
        }, 3000);
      }

    }
  });

  const mostrarMensaje = ()=>{
    return(
      <div className=''>
        <p className=''>{mensaje}</p>
      </div>
    )
  }

  return (
    <MainLauyout >
      <Contenedor >
        <Centro >
          <Instrucciones titulo={"Para el alumno"} tip={""} vozTitulo={InicioSesionAlumno} pagAnterior={"/"}/>
          <Info>
            <Imagen>
              <img src={imagen} className="img"/>
            </Imagen>
            <Formulario >
              <form className='formulario' onSubmit={formik.handleSubmit}>
                {mensaje && mostrarMensaje()}
                <div className='datos'>
                    <label className='label' htmlFor='nombre'>Nombre</label>
                  <input 
                    className='input'
                    id='nombre'
                    type='text'
                    placeholder='Ayuda a escribir el(los) nombre(s) del adulto'
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className='datos'>
                    <label className='label' htmlFor='apellidoP'>Apellido Paterno</label>
                  <input 
                    className='input'
                    id='apellidoP'
                    type='text'
                    placeholder='Ayuda a escribir el primer apellido del adulto'
                    value={formik.values.apellidoP}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className='datos'>
                    <label className='label' htmlFor='apellidoM'>Apellido Materno</label>
                  <input 
                    className='input'
                    id='apellidoM'
                    type='text'
                    placeholder='Ayuda a escribir el segundo apellido del adulto'
                    value={formik.values.apellidoM}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className='boton-sesion'>
                  <input className="sesion" type='submit' value='Enviar' />
                </div>
              </form>
                
              </Formulario>
            </Info>
        </Centro>
      </Contenedor>
    </MainLauyout>
  )
}

export default SesionAlumno
