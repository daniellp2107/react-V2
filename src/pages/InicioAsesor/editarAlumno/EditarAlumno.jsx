import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMutation, useQuery } from '@apollo/client';
import Swal from 'sweetalert2';
import { FaAngleLeft } from "react-icons/fa6";
import AsesorLayout from '../../../components/PlantillaAsesor/AsesorLayout';
import { ACTUALIZAR_ALUMNO } from '../../../utils/graphql/mutation';
import { OBTENER_ALUMNO } from '../../../utils/graphql/query';

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
  max-width: 50%;

  .form {
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
const EditarAlumno = () => {
  const navigate = useNavigate();

  //Obtener el id del alumno actual
  const params = useParams();
  // console.log(params);

  //Para conseguir los datos del alumno
  const {data, loading} = useQuery(OBTENER_ALUMNO,{
    variables:{
      id:params.id
    }
  });

  //Para actualizar el alumno
  const [actualizarAlumno] = useMutation(ACTUALIZAR_ALUMNO,{
    refetchQueries:{
      
    }
  });

  //Schema de validación
  const schemaValidacion = Yup.object({
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
  });

  //Datos del alumno
  if (loading) return 'Cargando...';
  const {obtenerAlumno} = data;
  // console.log(obtenerAlumno);

  //Modificar el alumno en la base de datos
  const actualizarInfoAlumno = async (valores)=>{
    console.log(valores);
    try {
      const {nombre, apellidoM, apellidoP, edad, telefono} = valores;
      // const {data} = await actualizarAlumno({
      await actualizarAlumno({
        variables:{
          id:params.id,
          input:{
            nombre,
            apellidoP,
            apellidoM,
            edad: edad.toString(),
            telefono
          }
        }
      });
      //Alerta
      Swal.fire(
        '¡Actualizado.!',
        'La información se actualizó correctamente',
        'success'
      )
    //Cambiar ruta
    navigate('/inicio-asesor');

    } catch (error) { 
      console.log(error);
    }
  }

  return (
    <AsesorLayout >

      <Formik 
        enableReinitialize
        validationSchema={schemaValidacion}
        initialValues={obtenerAlumno}
        onSubmit={(valores)=>{
            console.log('Enviando...');
            actualizarInfoAlumno(valores);
        }}
      >
        {props =>{
          // console.log(props);

          return (
            <Contenedor>
              <div className='cnt-contenido'>
                <StyledLinkBack to="/inicio-asesor" >
                  <FaAngleLeft size={50}/>
                </StyledLinkBack>
                <p className='titulo'>Actualizar</p>
              </div>
              <StyledFormulario>
                <form className='form' onSubmit={props.handleSubmit} >
                  <div className='datos'>
                    <label className='label' htmlFor='nombre'>Nombre</label>
                    <input className='input'
                      id='nombre'
                      type='text' 
                      placeholder='Nombre alumno'
                      value={props.values.nombre}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      />
                  </div>
                  {props.touched.nombre && props.errors.nombre ? (
                  <div className=''>
                      <p className=''> Error</p>
                      <p> {props.errors.nombre}</p>
                  </div>
                  ) : null}

                  <div className='datos'>
                    <label className='label' htmlFor='apellidoP'>Apellido Paterno</label>
                    <input className='input'
                        id='apellidoP'
                        type='text' 
                        placeholder='Apellido Paterno'
                        value={props.values.apellidoP}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                  </div>
                  {props.touched.apellidoP && props.errors.apellidoP ? (
                  <div className=''>
                      <p className=''> Error</p>
                      <p> {props.errors.apellidoP}</p>
                  </div>
                  ) : null}
                  
                  <div className='datos'>
                    <label className='label' htmlFor='apellidoM'>Apellido Materno</label>
                    <input className='input'
                        id='apellidoM'
                        type='text' 
                        placeholder='Apellido Materno'
                        value={props.values.apellidoM}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                  </div>
                  {props.touched.apellidoM && props.errors.apellidoM ? (
                  <div className=''>
                      <p className=''> Error</p>
                      <p> {props.errors.apellidoP}</p>
                  </div>
                  ) : null}

                  <div className='datos'>
                    <label className='label' htmlFor='edad'>Edad</label>
                    <input className='input'
                      id='edad'
                      type='number' 
                      placeholder='Edad'
                      value={props.values.edad}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      />
                  </div>
                  {props.touched.edad && props.errors.edad ? (
                  <div className=''>
                      <p className=''> Error</p>
                      <p> {props.errors.edad}</p>
                  </div>
                  ) : null}

                  <div className='datos'>
                    <label className='label' htmlFor='telefono'>Telefono</label>
                    <input className='input'
                      id='telefono'
                      type='text' 
                      placeholder='Telefono'
                      value={props.values.telefono}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      />
                  </div>
                  {props.touched.telefono && props.errors.telefono ? (
                  <div className=''>
                      <p className=''> Error</p>
                      <p> {props.errors.telefono}</p>
                  </div>
                  ) : null}
                  <div className='boton-sesion'>
                    <input className="sesion" type='submit' value='Actualizar' />
                  </div>
                  <StyledLinkCancel to="/inicio-asesor"  >
                    Cancelar
                  </StyledLinkCancel>
                </form>
              </StyledFormulario>
            </Contenedor>
          );
        }}

      </Formik>

    </AsesorLayout>
  )
}

export default EditarAlumno