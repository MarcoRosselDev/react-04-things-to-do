import React from "react";
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png'

const Logofreecodecamp = () => {
  return(
    <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
  )
};

export default Logofreecodecamp;