import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import SesionAlumno from "./pages/SesionAlumno";
import SesionAsesor from "./pages/SesionAsesor";
import InicioAsesor from "./pages/InicioAsesor";
import NuevoAlumno from "./pages/InicioAsesor/nuevoAlumno/NuevoAlumno";
import EditarAlumno from "./pages/InicioAsesor/editarAlumno/EditarAlumno";
import CrearCuenta from "./pages/crearCuenta";
import Avance from "./pages/InicioAsesor/avance";
import SobreNosotros from "./pages/sobreNosotros";
import Contacto from "./pages/contacto";
import InicioAlumno from "./pages/InicioAlumno";
import OpcionesLetras from "./pages/InicioAlumno/OpcionesLetras";
import Letras from "./pages/InicioAlumno/Letras";
import FamiliaSilabica from "./pages/InicioAlumno/FamiliaSilabica";
import Palabras from "./pages/InicioAlumno/Palabras";
import EjerciciosPalabras from "./pages/InicioAlumno/EjerciciosPalabras";
import EjerciciosSilabas from "./pages/InicioAlumno/EjerciciosSilabas";
import OpcionesNumeros from "./pages/InicioAlumno/OpcionesNumeros";
import Numeros from "./pages/InicioAlumno/Numeros";
import Contar from "./pages/InicioAlumno/Contar";
import Sumar from "./pages/InicioAlumno/Sumar";
import OpcionesJuegos from "./pages/InicioAlumno/OpcionesJuegos";
import OrdenaPalabras from "./pages/InicioAlumno/OrdenaPalabra";
import BuscarSilaba from "./pages/InicioAlumno/BuscarSilaba";
import LetraNumero from "./pages/InicioAlumno/LetraNumero";
import EjerciciosLaAl from "./pages/InicioAlumno/EjerciciosLaAl";
import EjerciciosCSZ from "./pages/InicioAlumno/EjerciciosCSZ";
import EjerciciosLLY from "./pages/InicioAlumno/PalabrasLLY";
import EjerciciosGJ from "./pages/InicioAlumno/EjerciciosGJ";
import ContandoDinero from "./pages/InicioAlumno/ContandoDinero";
import Sumas from "./pages/InicioAlumno/Sumas";
import Restas from "./pages/InicioAlumno/Restas";
import DineroDos from "./pages/InicioAlumno/DineroDos";
import DineroTres from "./pages/InicioAlumno/ContandoTres";
import Memorama from "./pages/InicioAlumno/Memorama";
import Rompecabezas from "./pages/InicioAlumno/Rompecabezas";
import BienEscrito from "./pages/InicioAlumno/PalabraCorrecta";
import BuscandoParejas from "./pages/InicioAlumno/BuscandoParejas";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/TermYCond";
import Visual from "./pages/InicioAlumno/BusquedaVisual";
import Operaciones from "./pages/InicioAlumno/Operaciones";
import NotFoundPage from "./pages/NoFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/sesion-alumno" element={<SesionAlumno />} />
        <Route path="/sesion-asesor" element={<SesionAsesor />} />
        <Route path="/inicio-asesor" element={<InicioAsesor />} />
        <Route path="/inicio-asesor/nuevoAlumno" element={<NuevoAlumno />} />
        <Route path="/inicio-asesor/editar/:id" element={<EditarAlumno />} />
        <Route path="/inicio-asesor/nueva-cuenta" element={<CrearCuenta />} />
        <Route path="/inicio-asesor/avances" element={< Avance />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio-alumno" element={<InicioAlumno />} />
        <Route path="/alumno/opcion-letras" element={<OpcionesLetras />} />
        <Route path="/alumno/opcion-letras/letras" element={<Letras />} />
        <Route path="/alumno/opcion-letras/silabas" element={<FamiliaSilabica />} />
        <Route path="/alumno/opcion-letras/palabras" element={<Palabras />} />
        <Route path="/alumno/opcion-letras/ejercicio-palabras" element={<EjerciciosPalabras />} />
        <Route path="/alumno/opcion-letras/ejercicio-silabas" element={<EjerciciosSilabas />} />
        <Route path="/alumno/opcion-numeros" element={<OpcionesNumeros />} />
        <Route path="/alumno/opcion-numeros/numeros" element={<Numeros />} />
        <Route path="/alumno/opcion-numeros/contar" element={<Contar />} />
        <Route path="/alumno/opcion-numeros/sumar" element={<Sumar />} />
        <Route path="/alumno/opcion-numeros/contando-dinero" element={<ContandoDinero />} />
        <Route path="/alumno/opcion-numeros/sumas" element={<Sumas />} />
        <Route path="/alumno/opcion-numeros/restas" element={<Restas />} />
        <Route path="/alumno/opcion-numeros/contando-dinero-2" element={<DineroDos />} />
        <Route path="/alumno/opcion-numeros/contando-dinero-3" element={<DineroTres />} /> 
        {/* <Route path="/alumno/opcion-numeros/operaciones" element={<Operaciones />} />  */}
        <Route path="/alumno/opcion-juegos" element={<OpcionesJuegos />} />
        <Route path="/alumno/opcion-juegos/ordena-palabras" element={<OrdenaPalabras />} />
        <Route path="/alumno/opcion-juegos/buscar-silaba" element={<BuscarSilaba />} />
        <Route path="/alumno/opcion-juegos/letra-numero" element={<LetraNumero />} />
        <Route path="/alumno/opcion-juegos/memorama" element={<Memorama />} />
        <Route path="/alumno/opcion-juegos/rompecabezas" element={<Rompecabezas />} />
        <Route path="/alumno/opcion-juegos/bien-escrito" element={<BienEscrito />} />
        {/* <Route path="/alumno/opcion-juegos/parejas" element={<BuscandoParejas />} /> */}
        <Route path="/alumno/opcion-juegos/busqueda-visual" element={<Visual />} />
        <Route path="/alumno/opcion-letras/al-la" element={<EjerciciosLaAl />} />
        <Route path="/alumno/opcion-letras/c-s-z" element={<EjerciciosCSZ />} />
        <Route path="/alumno/opcion-letras/ll-y" element={<EjerciciosLLY />} />
        <Route path="/alumno/opcion-letras/g-j" element={<EjerciciosGJ />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
