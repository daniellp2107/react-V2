import React from 'react';
import Swal from 'sweetalert2';
import { useMutation} from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import {ELIMINAR_ALUMNO} from "../../utils/graphql/mutation";
import styled from 'styled-components';

const Contenedor = styled.div`
  width: 90%;
  background-color: #ECECED;

  @media screen and (max-width: 960px){
    
  }

  @media screen and (max-width: 500px){
    width: fit-content;
  }

  .contenido {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;

    @media screen and (max-width: 960px){
      margin: 5px;
      flex-direction: column;
    }

    @media screen and (max-width: 500px){
      margin: 5px;
    }
  }
  
  .botones {

    @media screen and (max-width: 960px){
      display: flex;

    }

    @media screen and (max-width: 500px){
    
    }
  }
  .boton-opcion{
    background-color: #00c49d;
    color: white;
    padding: 10px;
    margin: 15px;
    font-size: 15px;
    border: 1px solid;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 960px){
      margin: 5px;
    }

    @media screen and (max-width: 500px){
    
    }
  }

  .boton-eliminar{
    border-color: rgba(242, 48, 72, 1);
    padding: 10px;
    margin: 15px;
    font-size: 15px;
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;

    @media screen and (max-width: 960px){
      margin: 5px ;
    }

    @media screen and (max-width: 500px){
    
    }
  }

  @media screen and (max-width: 960px){
    
  }

  @media screen and (max-width: 500px){
  
  }
`;

const Alumno = ({alumno}) => {
  const navigate = useNavigate();

  //mutation para eliminar el alumno
  const [eliminarAlumno] = useMutation(ELIMINAR_ALUMNO,
    {
      refetchQueries:['obtenerAlumnosAsesor']
    }
    );

  const {id, nombre, apellidoP} = alumno;

  //eliminar un cliente
  const confirmarEliminarAlumno =(id)=>{
    

  Swal.fire({
      title: 'Desea eliminar este alumno?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡Eliminar',
      cancelButtonText:'No, Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
          try {
              //Eliminar por id
              const {data} = await eliminarAlumno({
                  variables:{
                      id:id
                  }
              });
              // console.log(data);
              console.log('Eliminando ', id);
              Swal.fire(
                  '¡Eliminado!',
                  data.eliminarAlumno,
                  'success'
                )
          } catch (error) {
              console.log(error);
          };
      };
    });
  };

  const editarCliente =(id)=>{
      navigate(`/inicio-asesor/editar/${id}`);
  }

  const informacionAvances =(id, nombre)=>{
    // navigate(`/inicio-asesor/avances/${id}`);
    navigate("/inicio-asesor/avances",{state:{id:id, nombre:nombre, }} );

  }



  return (
    <Contenedor >
      <div className='contenido'>
        <div className='nombre'>
          <p>{nombre} {apellidoP}</p>
        </div>

        <div className='botones'>
          <button className='boton-opcion' onClick={()=>informacionAvances(id, nombre)}>Avances</button>
          {/* <Link to="/inicio-asesor/avances" state={{nombre:nombre, id:id, }}>Avances</Link> */}
          <button className='boton-opcion' onClick={()=>editarCliente(id)}>Editar</button>
          <button className='boton-eliminar' onClick={()=>confirmarEliminarAlumno(id)}>Eliminar</button>
        </div>
      </div>
    </Contenedor>
  )
}

export default Alumno;
