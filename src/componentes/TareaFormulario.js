import React from 'react';
import '../hojas-de-estilos/TareaFormulario.css'

function TareaFormulario(props) {
  return (
    <form className='tarea-formulario'>
      <input
        className="tarea-input"
        type='texto'
        placeholder='Escribe una Tarea'
        name='texto' 
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;