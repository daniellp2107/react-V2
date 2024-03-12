import React from 'react'
import Navbar from './Navbar'

const AlumnoLayout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
    
  )
}

export default AlumnoLayout