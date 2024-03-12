import { useState, createContext, useContext } from "react";
import { OBTENER_ALUMNO, OBTENER_ASESOR } from "../utils/graphql/query";
import { useQuery } from "@apollo/client";
const userAsesor = createContext();  
const actualizarAsesor = createContext();

export function useUserAsesor (){
  return useContext(userAsesor);
}

export function useActualizarAsesor() {
  return useContext(actualizarAsesor);
}

const Context = ({children}) => {
  const [user, setUser] = useState({});

  const actualizarUsuario = ()=>{
    const {loading, data} = useQuery(OBTENER_ASESOR);
    setUser(data.obtenerAsesor);
  }

  return (
    <userAsesor.Provider value={user}>
      <actualizarAsesor.Provider value={actualizarUsuario}>
        {children}
      </actualizarAsesor.Provider>
      
    </userAsesor.Provider>
  )
}

export default Context