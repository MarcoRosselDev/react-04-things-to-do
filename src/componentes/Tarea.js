import React from "react";
import '../hojas-de-estilos/Tareas.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada }) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <AiFillCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
};

export default Tarea;

// React icons | proporciona un monton de iconos
// npm install react-icons --save