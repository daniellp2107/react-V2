import Navbar from "./Navbar";

const AsesorLayout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
    
  )
}

export default AsesorLayout