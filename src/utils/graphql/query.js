import { gql } from "@apollo/client";

export const OBTENER_ALUMNOS_ASESOR = gql`
  query obtenerAlumnosAsesor {
    obtenerAlumnosAsesor {
      nombre
      apellidoP
      asesor
      id

    }
  }
`;

export const OBTENER_ALUMNO = gql`
  query obtenerAlumno($id: ID) {
    obtenerAlumno(id: $id) {
      id
      nombre
      apellidoM
      apellidoP
      edad
      telefono
    }
  }
`;

export const ACTIVIDADES_AVANCES_ALUMNO= gql`
  query actividadAvance($alumno: ID) {
    actividadAvance(alumno: $alumno) {
      id
      idAlumno
      nombreAlumno
      nomActividad
      avance
      palabraGen
    }
  }
`;

export const OBTENER_ASESOR = gql`
  query obtenerAsesor($id: ID) {
    obtenerAsesor(id: $id) {
      nombre
      email
      apellidoP
      ciudad
  }
}`;

export const OBTENER_ALUMNO_ID = gql`
  query obtenerAlumnoID {
    obtenerAlumnoID {
      id
      nombre
      apellidoP
      apellidoM
  }
}`;

export const OBTENER_NIVEL = gql`
  query obtenerNivel($nivel: String) {
    obtenerNivel(nivel: $nivel) {
      letra
      nivel
      nombresClave
      palabraGen
      palabrasClave
      silabas
    }
  }
`;

export const OBTENER_ACTIVIDAD_AVANCE_ALUMNOID=gql`
  query obtenerActividadAvanceID($nomActividad: String,$palabraGen:String) {
    obtenerActividadAvanceID(nomActividad: $nomActividad,palabraGen: $palabraGen ) {
      nombreAlumno
      palabraGen
      nomActividad
      avance
    }
  }
`;