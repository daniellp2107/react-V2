import { gql } from "@apollo/client";

export const AUTENTICAR_ASESOR_MUTATION = gql`
  mutation autenticarAsesor($input: AuthAsesorInput) {
    autenticarAsesor(input: $input) {
      token
    }
  }
`;

export const ELIMINAR_ALUMNO = gql`
  mutation eliminarAlumno($id: ID) {
    eliminarAlumno(id: $id)
  }
`;

export const NUEVO_ALUMNO = gql`
  mutation agregarAlumno($input: AlumnoInput) {
    agregarAlumno(input: $input) {
      nombre
      edad
      asesor
      id
    }
  }
`;

export const ACTUALIZAR_ALUMNO = gql`
  mutation actualizarAlumno($id: ID!, $input: AlumnoInput) {
    actualizarAlumno(id: $id, input: $input) {
      nombre
    }
  }
`;

export const AUTENTICAR_ALUMNO = gql`
  mutation autenticarAlumno($input: AuthAlumnoInput) {
    autenticarAlumno(input: $input) {
      token
  }
}
`;

export const AGREGAR_ASESOR = gql`
  mutation agregarAsesor($input: AsesorInput) {
    agregarAsesor(input: $input) {
      id
      nombre
      apellidoP
      apellidoM
      email
      ciudad
      password
  }
}`;

export const AGREGAR_ACTIVIDAD_AVANCE = gql`
  mutation agregarActividadAvance($input: ActividadAvanceInput) {
    agregarActividadAvance(input: $input) {
      nombreAlumno
      nomActividad
      avance
      palabraGen
    }
  }`;

export const ACTUALIZAR_ACTIVIDAD_AVANCE_ALUMNO=gql`
  mutation actualizarActividadAvance($input: actualizarActividadAvanceInput) {
    actualizarActividadAvance(input: $input) {
      nomActividad
      nombreAlumno
      palabraGen
      avance
    }
  }
`;