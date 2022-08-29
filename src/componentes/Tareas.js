import React from "react";
import '../hojas-de-estilos/Tareas.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ texto }) {
  return(
    <div className='tarea-contenedor'>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-icono'>
        <AiFillCloseCircle />
      </div>
    </div>
  );
};

export default Tarea;

// React icons | proporciona un monton de iconos
// npm install react-icons --save